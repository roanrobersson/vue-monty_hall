<template>
    <button class="button">
        {{label}}
    </button>
</template>

<script>
export default {
  name: 'Button',
  
  props: {
        label: {
            type: String,
            required: true,
            default: 'Button Label',
        }
  }
}
</script>

<style scoped>
.button {
    transition: all 0.2s ease-in-out;
    border: 2px solid black;
    white-space: nowrap;
    cursor: pointer;
    padding: 0.4em 0.7em;
    font-family: 'silkscreennormal', Arial, sans-serif;
    font-size: inherit;
}

.button:hover {
    background-color: green;
    color: white;
}
</style>
