<template>
    <hero-layout>
        <template v-slot:left>
            <img src="../../assets/hero/isoroom.gif"/>
            <!-- <div class="art-credits">
                <h2>VOXELART BY:</h2>
                <a class="shoutout" href="https://www.behance.net/sircarma">SIRCARMA</a>
            </div> -->
        </template>
    </hero-layout>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import HeroLayout from '../layouts/HeroLayout.vue';

import '../../assets/sections/hero.scss'

export default {
    // emits: ['trigger-show'],
    components: {
        RouterLink,
        RouterView,
        HeroLayout,
    },
}
</script>