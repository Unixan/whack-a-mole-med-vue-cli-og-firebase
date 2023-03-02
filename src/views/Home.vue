<template>
  <Start v-if="!isPlaying && !gameOver" @startGame="startTheGame" />
  <Game v-if="isPlaying && !gameOver" @outoftime="gameIsOver" />
  <GameOver :score="score" v-if="gameOver" />
</template>

<script>
import { ref } from "vue";
import Game from "../components/Game.vue";
import GameOver from "../components/GameOver.vue";
import Start from "../components/Start.vue";
export default {
  components: { Game, GameOver, Start },
  name: "Home",
  setup() {
    const isPlaying = ref(false);
    const gameOver = ref(false);
    const score = ref(0);

    const gameIsOver = (x) => {
      gameOver.value = true;
      score.value = x;
    };

    const startTheGame = () => {
      isPlaying.value = true;
    };

    return { isPlaying, gameOver, gameIsOver, score, startTheGame };
  },
};
</script>
