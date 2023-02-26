<template>
  <Game :isPlaying="isPlaying" v-if="isPlaying" />
  
</template>

<script>
import { ref } from "vue";
import Game from "../components/Game.vue";
export default {
  props: ["isPlaying"],
  components: { Game },
  name: "Home",
  setup() {
    const isPlaying = ref(true);

    return { isPlaying };
  },
};
</script>
