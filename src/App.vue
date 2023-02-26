<template>
  <Navbar />
  <router-view />
</template>
<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
