<template>
  <div class="homePage">欢迎，{{ username }}!</div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      username: localStorage.getItem("username")
    };
  }
};
</script>
