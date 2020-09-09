<template>
    <div class="message" 
        v-if="text !== ''"
        :style="{opacity: opacity}"
    >
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
            blink: {
                type: Boolean,
                required: false,
                default: false,
            },
            fade: {
                type: Boolean,
                required: false,
                default: false,
            },
            inDuration: {
                type: Number,
                required: false,
                default: 1000,
            },
            outDuration: {                
                type: Number,
                required: false,
                default: 1000,
            },
    },

    data: function () {
        return {
            opacity: 1,
        }
    },

    created: function () {
        if (this.blink) {
            this.in();
        }
    },

    methods: {
        in() {
            setTimeout(() => {
                this.opacity = 0;
                this.out();
            }, this.inDuration)
        },
        out() {
            setTimeout(() => {
                this.opacity = 1;
                this.in();
            }, this.outDuration)
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
