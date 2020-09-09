<template>
    <input type="range" class="slider"
        :min='min' 
        :max='max' 
        v-model.number='value'
        @input="$emit('slide', value)"
    >
</template>

<script>
export default {
    name: 'Slider',
    
    props: {
        min: {
            type: Number,
            required: true,
            default: 0,
        },
        max: {
            type: Number,
            required: true,
            default: 100,
        },
    },

    data: function () {
        return {
            value: 0,
        }
        
    },

    created: function () {
        this.value = this.min;
    }
}
</script>

<style scoped>
.slider {
    -webkit-appearance: none;
    width: 100%;
    height: 25px;
    outline: none;
    -webkit-transition: .2s;
    transition: opacity .2s;
    opacity: 0.7;
    background: #d3d3d3;
    font-size: inherit;
}

.slider:hover {
    opacity: 1;
}

.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    cursor: pointer;
    background: #4CAF50;
    border-radius: 0px;
    border-color: black;
}

.slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    cursor: pointer;
    background: #4CAF50;
    border-radius: 0px;
    border-color: black;
}
</style>
