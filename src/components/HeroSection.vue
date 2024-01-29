<template>
    <div class="hero-container">
        <div class="site-title">
            <socials-bar/>
            <div class="intro">
                <p> Hello ! I am </p>
                <h2>SapoKode</h2>
            </div>
        </div>
        <div class="nav-container">
            <div class="img-container">
                <img src="../assets/hero/isoroom.gif"/>
                <div class="art-credits">
                    <h2>VOXELART BY:</h2>
                    <a href="https://www.behance.net/sircarma">SIRCARMA</a>
                </div>
            </div>
            <div class="links">
                <ul>
                    <li><router-link to="/projects">Projects</router-link></li>
                    <li><router-link to="/devlogs">DevLogs</router-link></li>
                    <li><router-link to="/">Photography</router-link></li>
                    <li><router-link to="/">Music</router-link></li>
                </ul>
                <div class="action-container">
                    <a class="action-link" @click="$emit('trigger-show')">Learn more about me</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import SocialsBar from './SocialsBar.vue';

export default {
    components: {
        RouterLink,
        RouterView,
        SocialsBar
    },
    emits: ['trigger-show']
}
</script>

<style scoped>
@font-face {
    font-family: 'Karma Future';
    src: url('../assets/fonts/karma/ka1.ttf');
}

.hero-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-height: 100vh;
    overflow: hidden;
    background: rgb(26,26,26);
    background: linear-gradient(-9deg, rgba(26,26,26,1) 0%, rgba(0,0,0,1) 15%);
}

.site-title {
    background-color: azure;
    color: black;
    padding-right: 10%;
    margin-bottom: 1rem;
    margin-top: 10%;
    text-align: right;
    width: 60%;
    align-self: flex-end;
    display: flex;
    flex-direction: row-reverse;
    font-family: 'Karma Future';
    padding: 0.5rem;
    align-items: flex-end;
}

.site-title h2 {
    margin: 0;
    align-self: center;
    text-align: left;
}

.intro {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    -webkit-text-fill-color: black;
}

.nav-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    color: azure;
}

.action-container {
    background-color: transparent;
    width: 100%;
    text-align: center;
    display: flex;
    min-height: 20%;
}

.action-link {
    min-width: 25rem;
    height: 5rem;
    font-size: 22px;
    background-color: transparent;
    color: azure;
    align-self: flex-end;
    border: 2px solid azure;
    line-height: 5rem;
}

.action-link:hover {
    cursor: pointer;
    border-color: #E67E22;
}

.img-container {
    width: 100%;
    text-align: center;
    /* margin-top: 2%; */
}

.img-container h3 {
    font-size: 15px;
    margin: 0;
    padding-left: 10%;
}

img {
    max-width: 80%;
    padding: 7%;
    padding-bottom: 3%;
}

.art-credits {
    height: 50px;
    width: 60%;
    color: azure;
    transform: rotate3d(0, 0, 1, 0.47rad);
    /* margin-top: 2rem; */
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

.links {
    font-family: 'Karma Future';
    width: 60%;
    text-align: left;
}

.links ul {
    list-style: none;
    font-size: 30px;
    margin-bottom: 6rem;
    list-style: '\21B3';
}

.links ul li {
    margin-bottom: 2rem;
}

.links ul li {
    /* background-color: #E67E22; */
    margin-right: 20%;
}

.links ul li::marker {
    font-weight: bolder;
    font-size: 40px;
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

</style>