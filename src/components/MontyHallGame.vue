<template>
	<div class="montyHall">
		<div class="game">
            <h1 class="title">{{ title }}</h1> 
			<div class="menu">
                <MenuNewGame 
                    v-show="!simulationMode"
                    :minDoors='minDoors'
                    :maxDoors='maxDoors'
                    @new-game-click='newGameClick($event)'
                />
                <MenuSimulator 
                   v-show="simulationMode"
                    :minDoors='minDoors'
                    :maxDoors='maxDoors'
                    :simulationState='simulationState'
                    @run-simulation-click='runSimulationClick($event)'
                    @pause-simulation-click='pauseSimulationClick()'
                    @continue-simulation-click='continueSimulationClick($event)'
                    @finish-simulation-click='finishSimulationClick()'
                />
                <PanelStatus 
                    :rounds='rounds'
                    :wins='wins'
                    :losses='losses'
                    :keepeds='keepeds'
                    :changeds='changeds'
                />
			</div>
            <Message class="message"
                v-if="!simulationMode"
                :text="message" 
                :blink='true'
                :inDuration='1000'
                :outDuration='250'
            />
			<DoorGrid class="doorGrid"
                v-if="!simulationMode"
                :doors='doors'
                :transitionTime='transitionTime'
                @door-click="onDoorClick($event)"
            />
		</div>
    </div>
</template>

<script>
import DoorGrid from './DoorGrid.vue'
import PanelStatus from './PanelStatus.vue'
import MenuNewGame from './MenuNewGame.vue'
import MenuSimulator from './MenuSimulator.vue'
import Message from './Message.vue'
import GameState from '../constants/GameState.js'
import MontyHallGameMixin from '../mixins/MontyHallGameMixin.js' 
import MontyHallSimulatorMixin from '../mixins/MontyHallSimulatorMixin.js'

export default {
    name: 'MontyHall',

    components: {
            DoorGrid,
            PanelStatus,
            MenuNewGame,
            MenuSimulator,
            Message,
    },

    mixins: [
        MontyHallGameMixin,
        MontyHallSimulatorMixin,
    ],

    props: {
        simulationMode: {
            type: Boolean,
            required: true,
        }
    },

    computed: {
        title: function () {
            return !this.simulationMode ? 'Monty Hall Game' : 'Monty Hall Simulator';
        }
    },

    watch: {
        simulationMode: function() {
            if (!this.simulationMode) {
                this.finishSimulation();
                this.resetGame();
                this.resetStatus();
            }
        }
    },

    methods: {
        newGameClick(doorsQuantity) {
            clearTimeout(this.timeout);
            for(let i = 0; i < this.doors.length; i++) {
                this.doors[i].openned = false;  
            }
            this.state = GameState.WAITING_TIMEOUT;
            this.timeout = setTimeout(() => {
                this.newGame(doorsQuantity);
            }, this.transitionTime);
        },

        onDoorClick(i) {
            this.doorSelect(i);
        },

        runSimulationClick(parameters) {
            this.runSimulation(parameters);
        },

        pauseSimulationClick() {
            this.pauseSimulation();
        },

        continueSimulationClick(parameters) {
            this.continueSimulation(parameters);
        },
        finishSimulationClick() {
            this.finishSimulation();
        },
    }
}
</script>

<style scoped>
* {
    user-select: none;
}

.hidden {
    display: none;
}

.title {
    margin-top: 1rem;
    margin-bottom: 0;
    font-size: 32px;
    text-align: center;
}

@media screen and (min-width: 600px) {
    .title {
        margin-top: 0;
        font-size: 50px;
    }
}

.game {
    display: flex;
    align-items: stretch;
    flex-direction: column;
    padding: 0 20px;
}

@media screen and (min-width: 600px) {
    .game {
        
    }
}

.menu {
    display: flex;
    margin-top: 1rem;
    width: 100%;
}

@media screen and (min-width: 600px) {
    .menu {
        justify-content: center;
        margin-top: 3rem;
    }
}

.menu > * {
    flex-grow: 1;
    align-items: center;
    padding: 0.5rem 1rem;
    margin: 0 2px;
    border: solid white 2px;
}

@media screen and (min-width: 600px) {
    .menu > * {
        flex-grow: 0;
        padding: 0.5rem 5rem;
        margin: 0 5px;
    }
}

.message {
    margin-top: 1rem;
    align-self: center;
}

.doorGrid {
    margin-top: 1rem;
    flex-grow: 1;
}
</style>
