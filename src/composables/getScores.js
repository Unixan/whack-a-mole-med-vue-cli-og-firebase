import { ref } from "vue";
import { moleApp } from "@/firebase/config";

const getScores = () => {
  const scores = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      const res = await moleApp
        .collection("highscores")
        .orderBy("points", "desc")
        .get();

      scores.value = res.docs.map((score) => {
        return { ...score.data() };
      });
    } catch (err) {
      error.value = err.message;
    }
  };

  return { scores, error, load };
};

export default getScores;
