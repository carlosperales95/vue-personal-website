<template>
    <div class="about-container">
        <slot name="center" v-if="hasCard">

        </slot>
        <div class="separator-top">
            <div class="about-row">
                <h1>
                {{header.toUpperCase()}}
                </h1>
            </div>
        </div>
        <div class="separator-bottom">
            <div class="about-row">
                <h1>
                {{header.toUpperCase()}}
                </h1>
            </div>
        </div>
    </div>
</template>

<script>
import EmployeeCard from '@/components/base/EmployeeCard.vue';
import TimeBoard from '@/components/base/TimeBoard.vue';
import '../../assets/sections/about.scss';


export default {
    props: ['hasCard', 'header'],
    components: {
        EmployeeCard,
        TimeBoard
    },
    setup() {
    
        return {
        }
    },
};
</script>
