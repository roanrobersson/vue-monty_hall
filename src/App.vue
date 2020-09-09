<template>
  <div id="app">
    <Button class="button-switch" 
      :label="simulationMode ? 'Switch to Game' : 'Switch to Simulator'" 
      @click.stop.native="toggleSimulation()"
    />
    <MontyHallGame :simulationMode='simulationMode'/>
  </div>
</template>

<script>
import MontyHallGame from './components/MontyHallGame.vue'
import Button from './components/Button.vue'

export default {
  name: 'App',

  components: {
    MontyHallGame,
    Button,
  },

  data: function() {
    return {
      simulationMode: false,
    }
  },

  methods: {
    toggleSimulation() {
      this.simulationMode = !this.simulationMode;
    }
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

.button-switch {
  display: block;
  margin-top: 10px;
  margin-left: 10px;
}

@media screen and (min-width: 600px) {
  .button-switch {

  }
}
</style>
