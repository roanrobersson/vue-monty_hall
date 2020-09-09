import GameState from '../constants/GameState.js'

export default {
    data: function() {
        return {
            doors: [],
            doorsQuantity: 0,
            minDoors: 3,
            maxDoors: 99,
            rounds: 0,
            wins: 0,
            losses: 0,
            keepeds: 0,
            changeds: 0,
            playerChosenDoor: null,
            doorKeepedClosed: null,
            doorWithCar: null,
            state: GameState.NOT_STARTED,
            message: '',
            transitionTime: 500, //milliseconds
            timeout: null, //setInterval function
        }
    },

    methods: {
        newGame(doorsQuantity) {
            this.resetGame(doorsQuantity);
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
            this.state = GameState.CHOSE_DOOR;
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
            this.state = GameState.DECIDE_CHANGE;
            this.message = 'Do you want to keep or change the door?';
        },

        doorSelect(i) {
            if (!this.doors[i].selectable) return;
            switch (this.state) {
                case GameState.CHOSE_DOOR:
                    this.playerChosenDoor = this.doors[i];
                    this.playerChosenDoor.selected = true;
                    this.giveHint();
                    break;
                case GameState.DECIDE_CHANGE:
                    if (this.playerChosenDoor !== this.doors[i]) {
                        this.playerChosenDoor.selected = false;
                        this.doorKeepedClosed = this.playerChosenDoor;
                        this.doorKeepedClosed.selectable = false;
                        this.playerChosenDoor = this.doors[i];
                        this.playerChosenDoor.selected = true;
                        this.changeds++;
                    } else {
                        this.keepeds++;
                    }
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
                    this.state = GameState.ENDED;
                    this.rounds++;
                    break;
            }
        },

        resetGame(doorsQuantity) {
            this.state = GameState.NOT_STARTED;
            this.doors = [];
            this.doorsQuantity = doorsQuantity;
            this.playerChosenDoor = null;
            this.doorKeepedClosed = null;
            this.doorWithCar = null;
            this.message = '';
        },

        resetStatus() {
            this.rounds =  0;
            this.wins = 0;
            this.losses = 0;
            this.keepeds = 0;
            this.changeds = 0;
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