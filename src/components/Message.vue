<template>
    <div class="message" v-if="text !== ''">
        {{ text }}
    </div>
</template>

<script>
export default {
    name: 'Message',
    
    props: {
            text: {
                    type: String,
                    required: false,
                    default: '',
            },
    }
}
</script>

<style scoped>
.message {
    color: black;
    border: solid white 2px;
    padding: 5px 10px;
    text-align: center;
}

@media screen and (min-width: 600px) {
    .message {
        padding: 5px 70px;
    }
}
</style>
