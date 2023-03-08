<template>
  <div class="container">
    <div class="scoreboard">
      <div>Tid: {{ timeLeft }}</div>
      <div>Poeng: {{ score }}</div>
    </div>
    <div class="gameboard">
      <div v-for="mole in moles" :key="mole" @click="whack(mole)">
        <img src="../IMG/Hole.png" v-if="!mole.mole" />
        <img src="../IMG/Mole.png" v-if="mole.mole" />
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted, onUpdated } from "vue";
export default {
  emits: ["outoftime"],
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

    const timeLeft = ref(null);
    const score = ref(0);
    const moleToPop = ref(null);
    const molePoptimer = ref(null);
    const moleHideTimer = ref(null);
    const timeOuts = ref([]);

    const whack = (mole) => {
      if (mole.mole) {
        score.value++;
        mole.mole = false;
      }
    };

    const startGame = () => {
      score.value = 0;
      timeLeft.value = 15;
      popAMole();
    };

    const popAMole = () => {
      moleToPop.value = Math.floor(Math.random() * 9);
      molePoptimer.value = 500 + Math.random() * 1500;
      timeOuts.value.push(
        setTimeout(() => {
          moles.value[moleToPop.value].mole = true;
          hideMole(moleToPop.value);
          popAMole();
        }, molePoptimer.value)
      );
    };

    const hideMole = (moleNo) => {
      moleHideTimer.value = 200 + Math.random() * 1000;
      setTimeout(() => {
        moles.value[moleNo].mole = false;
      }, moleHideTimer.value);
    };

    const timer = setInterval(() => {
      timeLeft.value--;
    }, 1000);

    onMounted(() => {
      startGame();
    });

    onUpdated(() => {
      if (timeLeft.value < 0) {
        context.emit("outoftime", score.value);
      }
    });

    return { timeLeft, moles, score, whack };
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
  font-size: larger;
  font-weight: bolder;
}
</style>
