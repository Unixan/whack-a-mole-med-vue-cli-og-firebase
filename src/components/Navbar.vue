<template>
  <header>
    <h1>Whack-A-Mole</h1>
  </header>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style>

header {
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: gray;
  width: 100%;
}

header a {
  display: inline-block;
  margin: 0 10px;
  padding: 0 10px;
  text-decoration: none;
  color: #bbb;
}

header a.router-link-active {
  font-weight: bold;
  color: #444;
}
</style>
