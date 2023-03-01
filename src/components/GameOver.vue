<template>
  <div class="gameOver">
    <h1>Game Over</h1>
    <h2>Poeng: {{ score }}</h2>
    <label>Skriv navnet ditt og trykk Enter:</label>
    <input type="text" v-model="name" autofocus @keydown.enter="submitScore" />
    <button @click="abortToHighscores">Hopp over</button>
  </div>
  <div v-if="nameError" class="nameError">{{ nameError }}</div>
</template>

<script>
import { moleApp } from "@/firebase/config";
import { async } from "@firebase/util";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  props: ["score"],
  setup(props) {
    const nameError = ref("");
    const router = useRouter();
    const name = ref("");
    const points = props.score;
    const abortToHighscores = () => {
      name.value = "";
      points.value = null;
      router.push({ name: "Highscore" });
    };

    const submitScore = () => {
      if (name.value.replace(" ", "").length > 2) {
        submitScores();
      } else {
        nameError.value = "Navn må ha minst 3 bokstaver";
      }
    };

    const submitScores = async () => {
      const post = {
        name: name.value,
        points: props.score,
      };

      const res = await moleApp.collection("highscores").add(post);

      router.push({ name: "Highscore" });
    };

    return { name, abortToHighscores, submitScore, nameError, points };
  },
};
</script>

<style>
.gameOver {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  height: 40vh;
  font-size: xx-large;
  align-self: center;
}

.gameOver input {
  height: 40px;
  font-size: x-large;
  padding: 10px;
}

.gameOver button {
  border-radius: 15px;
  font-size: large;
  font-weight: bold;
  padding: 15px;
  width: fit-content;
  border: none;
  background: gray;
  cursor: pointer;
}

.nameError {
  color: red;
  font-size: 100%;
  font-weight: bold;
  margin: 20px;
}
</style>
