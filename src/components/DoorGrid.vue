<template>
    <div class="door-grid">
        <Door v-for="(door, i) in doors"
            :key="door.number" 
            :door="door"
            :transitionTime="transitionTime"
            @door-click="$emit('door-click', i)"
        />
    </div>
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
    margin-left: 1.5em;
    margin-right: 1.5em;
    margin-bottom: 1em;
}
</style>
