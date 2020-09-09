<template>
    <div class="panel">
        <div class="panel-item">
            Rounds: <span>{{ rounds }}</span>
        </div>
        <div class="panel-item">
            Wins: <span>{{ wins }}</span>
        </div>
        <div class="panel-item">
            Losses: <span>{{ losses }}</span>
        </div>
        <div class="panel-item">
            Keepeds: <span>{{ keepeds }}</span>
        </div>
        <div class="panel-item">
            Changeds: <span>{{ changeds }}</span>
        </div>
    </div>
</template>

<script>
import Panel from './Panel';

export default {
    extends: Panel,
    name: 'PanelStatus',
    props: {
            rounds: {
                    type: Number,
                    required: true,
                    default: 0,
            },
            wins: {
                    type: Number,
                    required: true,
                    default: 0,
            },
            losses: {
                    type: Number,
                    required: true,
                    default: 0,
            },
            keepeds: {
                    type: Number,
                    required: true,
                    default: 0,
            },
            changeds: {
                    type: Number,
                    required: true,
                    default: 0,
            },
   }

}
</script>