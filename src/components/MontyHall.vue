<template>
	<div class="montyHall">
		<div class="game">
			<h1 class="title">Monty Hall Game</h1>
			<div class="menu">
                <MenuNewGame @new-game='newGame($event)'/>
                <PanelStatus 
                    :wins='wins'
                    :loses='loses'
                />
			</div>
            <Message class="message" :text="message"/>
			<doorGrid class="doorGrid" :doors='doors'
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
            wins: 0,
            loses: 0,
            playerChosenDoor: null,
            doorKeepedClosed: null,
            doorWithCar: null,
            state: 'notStarted',
            message: '',
        }
    },

    methods: {
        newGame(doorsQuantity){
            this.playerChosenDoor = null;
            this.doorKeepedClosed = null;
            this.doorWithCar = null;
            this.doors = [];
            for(let i = 0; i < doorsQuantity; i++) {
                this.doors.push({
                    number: i + 1,
                    haveCar: false,
                    openned: false,
                    selected: false,
                    selectable: true,
                });   
            }
            this.hideCar();
            this.message = 'Chose a door'
            this.state = 'choseDoor';
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
                this.doorKeepedClosed = this.doors[doorKeepedClosedIndex];
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
            }
            this.state = 'decideChange';
            this.message = 'Do you want to change the door?';
        },

        randomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },

        doorClick(i) {
            if (this.state === 'choseDoor') {
                if (this.playerChosenDoor !== null) {
                    this.playerChosenDoor.selected = false;
                }
                this.playerChosenDoor = this.doors[i];
                this.playerChosenDoor.selected = true;
                this.giveHint();
            }
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
    padding: 0 10px;
}

@media screen and (min-width: 600px) {
    .game {
        align-items: center;
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
}

.doorGrid {
    margin-top: 1rem; 
}
</style>
