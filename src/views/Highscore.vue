<template>
  <h1 class="headline">Highscores</h1>
  <button class="restart" @click="router.push({ name: 'Home' })">Meny</button>
  <div class="container">
    <ScoreBoard :scores="scores" />
  </div>
  <div v-if="error">{{ error }}</div>
</template>

<script>
import ScoreBoard from "../components/HighscoreTable.vue";
import getScores from "@/composables/getScores";
import { useRouter } from "vue-router";
export default {
  name: "Highscore",
  components: { ScoreBoard },
  setup() {
    const { error, scores, load } = getScores();
    const router = useRouter();

    load();

    return { error, scores, router };
  },
};
</script>

<style>
.restart{
  margin-bottom: 20px;
  border: 3px solid transparent;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: large;
  background: gray;
}

.restart:hover{
  border: 3px black solid;
}

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
