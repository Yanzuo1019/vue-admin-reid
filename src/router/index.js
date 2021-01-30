import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Login from "../views/Login";
import DeviceStatus from "../views/DeviceStatus";
import AdvancedOption from "../views/AdvancedOption";
import HomePage from "../views/HomePage";
import service from "@/utils/request";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: { requireAuth: false }
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
    meta: { requireAuth: true },
    children: [
      {
        path: "DeviceStatus",
        component: DeviceStatus,
        meta: { requireAuth: true }
      },
      {
        path: "AdvancedOption",
        component: AdvancedOption,
        meta: { requireAuth: true }
      }
      // {
      //   path: "HomePage",
      //   component: HomePage,
      //   meta: { requireAuth: true }
      // }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  service
    .get("/CheckLicense")
    .then(response => {
      localStorage.setItem("license", response.data.result);
    })
    .catch(error => {
      localStorage.setItem("license", "-1");
    });

  const token = localStorage.getItem("token");
  if (to.meta.requireAuth) {
    if (!token) {
      next("/");
    } else {
      service
        .get("/AuthCheck")
        .then(response => {
          if (response.data.data.valid) {
            next();
          } else {
            localStorage.removeItem("token");
            localStorage.removeItem("username");
            next("/");
          }
        })
        .catch(error => {
          localStorage.removeItem("token");
          localStorage.removeItem("username");
          next("/");
        });
    }
  } else {
    if (to.path === "/" && token) {
      service
        .get("/AuthCheck")
        .then(response => {
          if (response.data.data.valid) {
            next("/Home/DeviceStatus");
          } else {
            localStorage.removeItem("token");
            localStorage.removeItem("username");
            next();
          }
        })
        .catch(error => {
          localStorage.removeItem("token");
          localStorage.removeItem("username");
          next();
        });
    } else {
      next();
    }
  }
});

export default router;
