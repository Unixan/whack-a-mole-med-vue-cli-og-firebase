<template>
  <header>
    <h1>Whack-A-Mole</h1>
    <div class="links">
      <router-link :to="{name: 'Home'}">Game</router-link>
      <router-link :to="{name: 'Highscore'}">Highscores</router-link>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header a{
    display: inline-block;
    margin: 0 10px;
    padding: 0 10px;
    text-decoration: none;
    color: #bbb
}

header a.router-link-active{
    font-weight: bold;
    color: #444
}
</style>
