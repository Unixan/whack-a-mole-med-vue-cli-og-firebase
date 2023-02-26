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
#app{
  font-family: Arial, Helvetica, sans-serif;
}
</style>
