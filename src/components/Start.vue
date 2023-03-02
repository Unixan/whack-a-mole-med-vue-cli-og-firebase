<template>
  <div class="head">
    <img v-if="switchHole" src="../IMG/Mole.png" class="icon" />
    <img v-if="!switchHole" src="../IMG/Hole.png" class="icon" />
    <h1>Welcome!</h1>
    <img v-if="!switchHole" src="../IMG/Mole.png" class="icon" />
    <img v-if="switchHole" src="../IMG/Hole.png" class="icon" />
  </div>
  <div class="menu">
    <button class="button" @click="start">Start Game</button>
    <button class="button" @click="router.push({ name: 'Highscore' })">
      Highscores
    </button>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  emits: ["startGame"],
  setup(props, context) {
    const switchHole = ref(true);
    const router = useRouter();

    const animation = setInterval(() => {
      switchHole.value = !switchHole.value;
    }, 1000);

    const start = () => {
      context.emit("startGame");
    };

    return { switchHole, start, router };
  },
};
</script>

<style>
.head {
  display: flex;
  justify-content: center;
  gap: 30px;
  align-items: end;
  height: 40px;
  width: 100vw;
  margin-bottom: 100px;
  margin-top: 50px;
}

.icon {
  object-fit: contain;
  width: 45px;
}

.menu {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: solid black 3px;
  border-radius: 25px;
  width: 200px;
  height: 170px;
  padding: 20px 0;
}

.button {
  padding: 10px;
  margin: 15px 30px;
  border: solid transparent 3px;
  background: gray;
  font-weight: bolder;
  border-radius: 15px;
  font-variant: small-caps;
}

.button:hover {
  border: solid black 3px;
}
</style>
