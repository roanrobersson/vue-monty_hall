import SimulationState from '../constants/SimulationState.js'
import SimulationComportament from '../constants/SimulationComportament.js'

export default {
    data: function () {
        return {
            doorsQuantity: 3,
            comportament: SimulationComportament.KEEP,
            simulationRunning: false,
            simulationPaused: false,
            executions: [],
            concurrentExecutions: 50,
            simulationState: SimulationState.NOT_RUNNING,
        }
    },

    methods: {
        runSimulation(parameters) {
            this.resetStatus();
            this.simulationState = SimulationState.RUNNING;
            for (let i = 0; i < this.concurrentExecutions; i++) {
                this.newExecution(parameters);
            }
        },

        pauseSimulation() {
            this.simulationState = SimulationState.PAUSED;
            for (let i = 0; i < this.executions.length; i++) {
                clearInterval(this.executions[i]);
            }
        },

        continueSimulation (parameters) {
            this.simulationState = SimulationState.RUNNING;
            for (let i = 0; i < this.concurrentExecutions; i++) {
                this.newExecution(parameters);
            }
        },

        finishSimulation () {
            this.simulationState = SimulationState.NOT_RUNNING;
            for (let i = 0; i < this.executions.length; i++) {
                clearInterval(this.executions[i]);
            }
        },

        newExecution(parameters) {
            this.executions.push(setInterval(() => {
                this.newGame(parameters.doorsQuantity);
                let doorToSelect = this.randomIntInclusive(0, this.doorsQuantity - 1);
                this.doorSelect(doorToSelect);

                switch (parameters.comportament) {
                    case SimulationComportament.KEEP:
                        this.doorSelect(doorToSelect);
                        break;
                    case SimulationComportament.CHANGE:
                        this.doorSelect(this.doors.indexOf(this.doorKeepedClosed));
                        break;
                    case SimulationComportament.RANDOM: {
                        const randomDecision = this.randomIntInclusive(0, 1);
                        if (randomDecision === 0) this.doorSelect(doorToSelect);
                        else this.doorSelect(this.doors.indexOf(this.doorKeepedClosed));
                        break;
                    }
                    default:
                        break;
                }
            }, 0));
        },
    }
}