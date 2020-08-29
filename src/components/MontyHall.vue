<template>
	<div class="montyHall">
		<div class="game">
			<h1 class="title">Monty Hall Game</h1>
			<div class="menu">
                <MenuNewGame 
                :minDoors='minDoors'
                :maxDoors='maxDoors'
                    @new-game='newGame($event)'
                />
                <PanelStatus 
                    :rounds='rounds'
                    :wins='wins'
                    :losses='losses'
                />
			</div>
            <Message class="message" :text="message"/>
			<DoorGrid class="doorGrid" 
                :doors='doors'
                :transitionTime='transitionTime'
                @door-click="doorClick($event)"
            />
		</div>
    </div>
</template>

<script>
import DoorGrid from './DoorGrid.vue'
import PanelStatus from './PanelStatus.vue'
import MenuNewGame from './MenuNewGame.vue'
import Message from './Message.vue'

export default {
    name: 'MontyHall',

    components: {
            DoorGrid,
            PanelStatus,
            MenuNewGame,
            Message,
    },

    data: function() {
        return {
            doors: [],
            doorsQuantity: 0,
            minDoors: 3,
            maxDoors: 99,
            rounds: 0,
            wins: 0,
            losses: 0,
            playerChosenDoor: null,
            doorKeepedClosed: null,
            doorWithCar: null,
            state: 'notStarted',
            message: '',
            transitionTime: 500, //milliseconds
            timeout: null, //setInterval function
        }
    },

    methods: {
        newGame(doorsQuantity) {
            clearTimeout(this.timeout);
            for(let i = 0; i < this.doors.length; i++) {
                this.doors[i].openned = false;  
            }
            this.state = 'waitingTimeout';
            this.timeout = setTimeout(() => {
                this.doors = [];
                this.doorsQuantity = doorsQuantity;
                this.playerChosenDoor = null;
                this.doorKeepedClosed = null;
                this.doorWithCar = null;
                const doorDefaultChance = this.roundToTwoDecimals(100 / doorsQuantity);
                for(let i = 0; i < doorsQuantity; i++) {
                    this.doors.push({
                        number: i + 1,
                        haveCar: false,
                        openned: false,
                        selected: false,
                        selectable: true,
                        chance: doorDefaultChance,
                    });   
                }
                this.hideCar();
                this.message = 'Chose a door'
                this.state = 'choseDoor';
            }, this.transitionTime);
        },

        hideCar() {
            const i = this.randomIntInclusive(0, this.doors.length - 1);
            this.doors[i].haveCar = true;
            this.doorWithCar = this.doors[i];
        },

        giveHint() {
            const doorsClone = this.doors.slice(0, this.doors.length);
            if(this.playerChosenDoor === this.doorWithCar) {
                doorsClone.splice(doorsClone.indexOf(this.playerChosenDoor), 1); 
                const doorKeepedClosedIndex = this.randomIntInclusive(0, doorsClone.length - 1);
                this.doorKeepedClosed = doorsClone[doorKeepedClosedIndex];
                doorsClone.splice(doorKeepedClosedIndex, 1);
            } else {
                this.doorKeepedClosed = doorsClone[doorsClone.indexOf(this.doorWithCar)];
                doorsClone.splice(doorsClone.indexOf(this.playerChosenDoor), 1); 
                doorsClone.splice(doorsClone.indexOf(this.doorWithCar), 1);
            }
            //Open all remaining doors
            for(let i=0; i < doorsClone.length; i++) {
                doorsClone[i].openned = true;
                doorsClone[i].selectable = false;
                doorsClone[i].chance = 0;
            }
            this.doorKeepedClosed.chance = this.roundToTwoDecimals(100 / this.doorsQuantity * (this.doorsQuantity - 1));
            this.state = 'decideChange';
            this.message = 'Do you want to keep or change the door?';
        },

        doorClick(i) {
            if (!this.doors[i].selectable) return;
            switch (this.state) {
                case 'choseDoor':
                    this.playerChosenDoor = this.doors[i];
                    this.playerChosenDoor.selected = true;
                    this.giveHint();
                    break;
                case 'decideChange':
                    if (this.playerChosenDoor !== this.doors[i]) {
                        this.playerChosenDoor.selected = false;
                        this.doorKeepedClosed = this.playerChosenDoor;
                        this.doorKeepedClosed.selectable = false;
                        this.playerChosenDoor = this.doors[i];
                        this.playerChosenDoor.selected = true;
                    }
                    this.state = 'waitingTimeout'
                    this.timeout = setTimeout(() => {
                        this.doorWithCar.openned = true;
                        this.playerChosenDoor.openned = true;
                        this.doorKeepedClosed.openned = true;
                        if (this.playerChosenDoor.haveCar) {
                            this.message = 'You win!';
                            this.wins++;
                        } else {
                            this.message = 'You lose!';
                            this.losses++;
                        }
                        this.state = 'gameEnd';
                        this.rounds++;
                    }, this.transitionTime * 2);
                    break;
            }
        },

        randomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },

        roundToTwoDecimals(number) {
            return Math.round(number * 100) / 100;
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
        margin-top: 3rem;
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
