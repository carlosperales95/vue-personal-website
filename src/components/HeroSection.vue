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
            <img src="../assets/hero/isoroom.gif"/>
            <div class="art-credits">
                <h2>VOXELART BY:</h2>
                <a href="https://www.behance.net/sircarma">SIRCARMA</a>
            </div>
        </template>
    </hero-layout>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import HeroLayout from './layouts/HeroLayout.vue';
import SocialsBar from './SocialsBar.vue';

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

<style scoped>
@font-face {
    font-family: 'Karma Future';
    src: url('../assets/fonts/karma/ka1.ttf');
}

.intro {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

img {
    max-width: 80%;
    padding: 0 7% 7% 3%;

}

.art-credits {
    height: 50px;
    width: 60%;
    color: azure;
    transform: rotate3d(0, 0, 1, 0.47rad);
    position: relative;
    left: 25%;
    bottom: 0;
    display: flex;
    flex-direction: column;
}

.art-credits a {
    padding-left: 5%;
    font-size: 25px;
    color: azure;
    text-align: left;
    width: 40%;
}

.art-credits h2 {
    font-size: 14px;
    margin: 0;
    padding-left: 5%;
    font-weight: bolder;
    text-align: left;
    width: 40%;
}



a {
    text-decoration: none;
    color: azure;
    padding: 1rem;
    background: linear-gradient(to left, transparent 50%, #E67E22 50%) right;
    background-size: 201% 100%;
    transition: .5s ease-out;
}

a:hover {
    /* color: #E67E22; */
    background-position: left;
}

.img-container h3 {
    font-size: 15px;
    margin: 0;
    padding-left: 10%;
}

.site-title h2 {
    margin: 0;
    align-self: center;
    text-align: left;
}

</style>