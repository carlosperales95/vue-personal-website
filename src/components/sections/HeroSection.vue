<template>
    <hero-layout>
        <template v-slot:header>
            <socials-bar/>
            <div class="intro">
                <p> Hello ! I am </p>
                <h2>SapoKode</h2>
            </div>
        </template>

        <template v-slot:left>
            <img src="../../assets/hero/isoroom.gif"/>
            <div class="art-credits">
                <h2>VOXELART BY:</h2>
                <a class="shoutout" href="https://www.behance.net/sircarma">SIRCARMA</a>
            </div>
        </template>
    </hero-layout>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import HeroLayout from '../layouts/HeroLayout.vue';
import SocialsBar from '../base/SocialsBar.vue';

import '../../assets/sections/hero.scss'

export default {
    // emits: ['trigger-show'],
    components: {
        RouterLink,
        RouterView,
        SocialsBar,
        HeroLayout
    },
}
</script>