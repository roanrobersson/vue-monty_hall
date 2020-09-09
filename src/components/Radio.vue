<template>
    <div>
        <input type="radio" 
            id="input"
            class="radio"
            :name="group" 
            :value="value" 
            v-model="checked"
            @change="$emit('checked', value)"
        />
        <label for="input">{{ label }}</label>
    </div>
</template>

<script>
export default {
    name: 'Radio',
    
    props: {
        group: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: false,
            default: '',
        },
        value: {
            type: Number,
            required: true,
        },
        initChecked: {
            type: Boolean,
            required: false,
            default: false,
        }
    },

    data: function () {
        return {
            checked: this.initChecked ? this.value : -1,
        } 
    },
}
</script>

<style scoped>

</style>
