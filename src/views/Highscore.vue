<template>
  <h1 class="headline">Highscores</h1>
  <div class="container">
    <ScoreBoard :scores="scores" />
  </div>
  <div v-if="error">{{ error }}</div>
</template>

<script>
import ScoreBoard from "../components/HighscoreTable.vue";
import getScores from "@/composables/getScores";
export default {
  name: "Highscore",
  components: { ScoreBoard },
  setup() {
    const { error, scores, load } = getScores();

    load();

    return { error, scores };
  },
};
</script>

<style>
.headline {
  text-align: center;
  margin: 20px;
}

.container {
  max-width: 1200px;
  background: #ddd;
  padding: 10px;
  border-radius: 10px;
}
</style>
