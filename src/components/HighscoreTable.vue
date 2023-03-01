<template>
  <table>
    <th>Navn</th>
    <th>Poeng</th>
    <tr v-for="score in scores" :key="score">
      <td>{{ score.name }}</td>
      <td>{{ score.points }}</td>
    </tr>
  </table>
</template>
<script>
export default {
  props: ["scores"],
};
</script>

<style>
table {
  font-size: x-large;
  font-weight: bold;
  display: flexbox;
  align-items: center;
  width: 600px;

  border: 3px solid black;
  border-collapse: collapse;
}

th {
  border-right: 3px solid black;
  padding: 5px;
  background: black;
  color: white;
}

td {
  width: 100px;
  font-weight: normal;
  border: 3px solid black;
  padding: 5px;
  text-align: center;
}
</style>
