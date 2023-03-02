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
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  max-width: 100vw;
  font-family: Arial, Helvetica, sans-serif;
  font-variant: small-caps;
}
</style>
