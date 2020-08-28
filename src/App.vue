<template>
  <div id="app">
    <MontyHall/>
  </div>
</template>

<script>
import MontyHall from './components/MontyHall.vue'

export default {
  name: 'App',
  components: {
    MontyHall,
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
    white-space: nowrap;
}
@media screen and (min-width: 600px) {
    body {
        font-size: 24px;
    }
}
</style>
