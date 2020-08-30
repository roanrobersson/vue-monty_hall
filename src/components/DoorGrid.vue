<template>
    <transition-group class="door-grid" name="doorList" tag="div" >
        <Door v-for="(door, i) in doors"
            :key="door.number" 
            :door="door"
            :transitionTime="transitionTime"
            @door-click="$emit('door-click', i)"
        />
    </transition-group>
</template>

<script>
import Door from "./Door.vue";

export default {
    name: 'DoorGrid',
    
    components: {
        Door,
    },

    props: {
        doors: {
            type: Array,
            required: true,
        },
        transitionTime: {
            type: Number,
            required: false,
            default: 0.5,
        },
    }
}
</script>

<style scoped>
.door-grid {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: 25px;
}

.door-grid > * {
    transition: all 1s;
    margin-left: 1.5em;
    margin-right: 1.5em;
    margin-bottom: 1em;
}

.doorList-enter {
  opacity: 0;
  transform: translateY(30px);
}

.doorList-leave-to {
    transition: all 0s;
}

.doorList-leave-active {
    position: absolute;
}
</style>
