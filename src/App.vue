<template>
  <div id="app">
    <Game/>
  </div>
</template>

<script>
import Game from './views/Game.vue'

export default {
  name: 'App',
  components: {
    Game,
  }
}
</script>

<style>
body {
    margin: 0;
    box-sizing: border-box;
    image-rendering: optimizeSpeed;
    font-family: 'silkscreennormal', Arial, sans-serif;
    font-size: 16px;
    background-color: lightBlue;
}
@media screen and (min-width: 600px) {
    body {
        font-size: 24px;
    }
}
</style>
