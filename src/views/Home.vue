<template>
  <Game v-if="isPlaying && !gameOver" @outoftime="gameIsOver" />
  <GameOver :score="score" v-if="gameOver"/>
</template>

<script>
import { ref, onUpdated } from "vue";
import Game from "../components/Game.vue";
import GameOver from "../components/GameOver.vue";
export default {
  components: { Game, GameOver },
  name: "Home",
  setup() {
    const isPlaying = ref(true);
    const gameOver = ref(false);
    const score = ref(null);

    const gameIsOver = (x) => {
      gameOver.value = true;
      score.value = x;
    };

    onUpdated(() => {
      console.log("Home updated");
      console.log(score.value);
    });

    return { isPlaying, gameOver, gameIsOver, score };
  },
};
</script>
