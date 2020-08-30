<template>
    <div>
       <MontyHallGame/> 
    </div>
</template>

<script>
import MontyHallGame from '../components/MontyHallGame.vue'

export default {
    name: 'Game',
    
    components: {
        MontyHallGame,
    }
}
</script>

<style scoped>

</style>