<template>
  <div>Table</div>
<div v-for="score in scores">
    <div>{{ score.name }}</div>
    <div>{{ score.score }}</div>
</div>
</template>
<script>
export default {
  props: ["scores"],
};
</script>

<style></style>
