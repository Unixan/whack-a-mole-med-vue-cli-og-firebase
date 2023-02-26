<template>
  <div class="container">
    <div class="scoreboard">
      <div>Time: {{ timeLeft }}</div>
      <div>Score: {{ score }}</div>
    </div>
    <div class="gameboard">
      <div v-for="mole in moles" :key="mole" @click="flip(mole)">
        <img src="../IMG/Hole.png" v-if="!mole.mole" />
        <img src="../IMG/Mole.png" v-if="mole.mole" />
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  props: ["isPlaying"],
  setup(props, context) {
    const moles = ref([
      { no: 1, mole: false },
      { no: 2, mole: false },
      { no: 3, mole: false },
      { no: 4, mole: false },
      { no: 5, mole: false },
      { no: 6, mole: false },
      { no: 7, mole: false },
      { no: 8, mole: false },
      { no: 9, mole: false },
    ]);

    const timeLeft = ref(5);

    const flip = (mole) => {
      mole.mole = !mole.mole;
    };

    const score = ref(0);

    return { timeLeft, moles, score, flip };
  },
};
</script>

<style>
.gameboard {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: end;

  padding: 20px;
  gap: 50px;
  max-width: 700px;
  height: 100vw;
  max-height: 700px;
  margin: 10px auto;
}

.gameboard img {
  max-width: 100%;
}

.scoreboard {
  display: flex;
  width: fit-content;
  justify-content: space-between;
  margin: auto;
  margin-top: 10px;
  padding: 10px;
  gap: 30px;
  border: solid black 4px;
  border-radius: 10px;
}
</style>
