<template>
    <div>
        <div class="door-percentage"
            :style="{visibility: door.chance > 0 ? 'visible' : 'hidden'}">
            {{ door.chance }}%
        </div>
        <div class="door-frame">
                <div class="reward-container">
                    <img class="reward" src="img/car.png" v-if="door.haveCar">
                    <img class="reward" src="img/goat.png" v-else>
                </div>
            <div class="door" :class="doorToggleClass" @click="$emit('door-click', door)">
                <span class="door-number">{{ door.number }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Door',

    props: {
        door: {
            type: Object,
            required: true,
        },
    },

    computed: {
        doorToggleClass: function () {
            return {
                'door-open': this.door.openned,
                'door-selected': this.door.selected,
                'door-selectable': this.door.selectable && !this.door.selected,
            }
        }
    }
}
</script>

<style scoped>
.door-percentage {
    text-align: center;
}

.door-frame {
    position: relative;
    border: 0.2em solid SaddleBrown;
    border-bottom-style: none;
    cursor: pointer;
    background-color: black;
    color: white;
    font-family: 'silkscreennormal';
    font-size: 64px;
}

.door {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    border: 2px solid black;
    transition: all 0.5s ease-in-out; /*Speed of the Door animation*/
    transform-origin: left;
    background-color: Sienna;
    width: 75px;
    height: 150px;
}

@media screen and (min-width: 600px) {
    .door {
        width: 100px;
        height: 200px;
    }
}

.door-selectable:hover {
    background-color: SaddleBrown;
}

.door-open {
    transform: perspective(1200px) translateZ(0px) translateX(0px) translateY(0px) rotateY(-120deg);
    color: transparent;
}

.door-selected {
    background-color: green;
}

.reward-container {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}

.reward {
    position: absolute;
    width: 90%;
    padding-bottom: 0.2em;
}
</style>