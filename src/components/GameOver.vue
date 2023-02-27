<template>
  <h1>Game Over</h1>
  <h2>Poeng: {{ score }}</h2>
  <label>Skriv navnet ditt og trykk Enter:</label>
  <input type="text" v-model="name.name" />
  <button @click="abortToHighscores">Hopp over</button>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  props: ["score"],
  setup(props) {
    const router = useRouter();
    const name = ref({
      name: "",
      points: props.score,
    });

    const abortToHighscores = () => {
      name.value.name = "";
      name.value.points = null;
      router.push({ name: "Highscore" });
    };

    return { name, abortToHighscores };
  },
};
</script>

<style></style>
