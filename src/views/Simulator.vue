<template>
    <div>
        <MontyHallGame/> 
    </div>
</template>

<script>
import MontyHallGame from '../components/MontyHallGame.vue'
import MontyHallSimulator from '../components/MontyHallSimulator.vue'

export default {
    name: 'Simulator',

    components: {
        MontyHallGame,
        MontyHallSimulator,
    }
    
}
</script>

<style scoped>

</style>