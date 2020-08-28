<template>
    <div class="menu-newGame">
        <div>
            Doors: <span id="doorsCount">{{doorsQuantity}}</span>
        </div>
        <Slider 
            :min='3'
            :max='100'
            @slide='doorsQuantity = $event'
        />
        <Button label='New Game' 
            @click.stop.native="$emit('new-game', doorsQuantity)"
        />
    </div>
</template>

<script>
import Button from './Button.vue'
import Slider from './Slider.vue'

export default {
    name: 'MenuNewGame',

    components: {
        Button,
        Slider,
    },
    
    data: function () {
        return {
            doorsQuantity: 3,
        }
    }
}
</script>

<style scoped>
.menu-newGame {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.menu-newGame > * {
    margin-bottom: 0.5em;
}
</style>
