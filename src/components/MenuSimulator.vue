<template>
    <div class="menu-newGame">
        <div>{{this.simulationStatusLabel}}</div>
        <div>
            Doors: <span id="doorsCount">{{doorsQuantity}}</span>
        </div>
        <Slider
            v-show='simulationState === 0'
            :min='minDoors'
            :max='maxDoors'
            @slide='doorsQuantity = $event'
        />
        <div v-show='simulationState === 0'>
            <Radio label="Keep" group="comportament" :value='0' @checked="comportament=$event" :initChecked='true'/>
            <Radio label="Change" group="comportament" :value='1' @checked="comportament=$event" />
            <Radio label="Random" group="comportament" :value='2' @checked="comportament=$event"/>
        </div>
        <Button 
            v-if='simulationState === 0'
            label='Run Simulation' 
            @click.stop.native="$emit('run-simulation-click', {doorsQuantity: doorsQuantity, comportament: comportament})"
        />
        <Button
            v-if='simulationState === 1'
            label='Pause' 
            @click.stop.native="$emit('pause-simulation-click')"
        />
        <Button  
            v-if='simulationState === 2'
            label='Continue' 
            @click.stop.native="$emit('continue-simulation-click', {doorsQuantity: doorsQuantity, comportament: comportament})"
        />
        <Button  
            v-if='simulationState != 0'
            label='Finish' 
            @click.stop.native="$emit('finish-simulation-click')"
        />
    </div>
</template>

<script>
import Button from './Button.vue'
import Slider from './Slider.vue'
import Radio from './Radio.vue'
import SimulationState from '../constants/SimulationState.js'

export default {
    name: 'MenuSimulator',

    components: {
        Button,
        Slider,
        Radio,
    },
    
    props: {
        minDoors: {
            type: Number,
            required: true,
        },
        maxDoors: {
            type: Number,
            required: true,
        },
        simulationState: {
            type: Number,
            required: true,
        },
    },

    computed: {
        simulationStatusLabel: function () {
            let text = '';
            switch (this.simulationState) {
                case SimulationState.RUNNING:
                    text = 'Running';
                    break;
                case SimulationState.PAUSED:
                    text = 'Paused';
                    break;
            }
            return text;
        }
    },
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
    white-space: nowrap;
}
</style>
