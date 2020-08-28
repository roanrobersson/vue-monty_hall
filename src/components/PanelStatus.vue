<template>
    <div class="panelStatus">
        <div class="panelStatus-item">
            Wins: <span>{{wins}}</span>
        </div>
        <div class="panelStatus-item">
            Loses: <span>{{loses}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PanelStatus',
    
    props: {
            wins: {
                    type: Number,
                    required: true,
                    default: 0,
            },
            loses: {
                    type: Number,
                    required: true,
                    default: 0,
            }
    }
}
</script>

<style scoped>
.panelStatus > * {
    margin-bottom: 0.5em;
}
.panelStatus-item {

}
</style>
