<template>
    <div class="hero-container">
        <h2 class="site-title">SapoKode</h2>
        <div class="nav-container">
            <div class="img-container">
                <img src="../assets/hero/isoroom.gif"/>
                <div class="art-credits">
                    <h2>BY:</h2>
                    <a href="https://www.behance.net/sircarma">SIRCARMA</a>
                </div>
            </div>
            <div class="links">
                <ul>
                    <li><router-link to="/projects">Projects</router-link></li>
                    <li><router-link to="/">Other</router-link></li>
                    <li><router-link to="/">Other</router-link></li>
                    <li><router-link to="/">Other</router-link></li>
                </ul>
                <div class="action-container">
                    <a class="action-link" @click="$emit('trigger-show')">Learn more about me</a>
                </div>
            </div>
        </div>
        <div class="socials-container">
            <ul>
                <li>
                    <icon-github class="icon" />
                </li>
                <li>
                    <icon-linkedin class="icon" />
                </li>
                <li>
                    <icon-twitch class="icon" />
                </li>
                <li>
                    <icon-instagram class="icon" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import IconGithub from './icons/IconGithub.vue';
import IconTwitch from './icons/IconTwitch.vue';
import IconLinkedin from './icons/IconLinkedin.vue';
import IconInstagram from './icons/IconInstagram.vue';
export default {
    components: {
        RouterLink,
        RouterView,
        IconGithub,
        IconInstagram,
        IconLinkedin,
        IconTwitch
    },
    emits: ['trigger-show']
}
</script>

<style scoped>

.hero-container {
    display: flex;
    flex-direction: column;
    background-color: black;
    min-height: 100vh;
}

.site-title {
    background-color: azure;
    color: black;
    padding-right: 10%;
    margin-bottom: 1rem;
    margin-top: 20%;
    text-align: right;
    width: 60%;
    align-self: flex-end;
}


.nav-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    color: azure;
}

.action-container {
    background-color: black;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    min-height: 20vw;
}

.action-link {
    width: 20rem;
    height: 5rem;
    font-size: 25px;
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
    width: 60%;
    margin-top: 8%;
}

.img-container h3 {
    font-size: 15px;
    margin: 0;
    padding-left: 10%;
}

img {
    /* width: 90%; */
    max-width: 80%;
    padding: 7%;
}

.art-credits {
    height: 50px;
    width: 100%;
    color: azure;
    transform: rotate3d(0, 0, 1, 0.47rad);
}

.art-credits a {
    padding-left: 5%;
    font-size: 25px;
    color: azure;
}

.art-credits h2 {
    font-size: 18px;
    margin: 0;
    padding-left: 5%;
    font-weight: bolder;
}

.links {
    width: 40%;
    text-align: right;
}

.links ul {
    list-style: none;
    font-size: 30px;
    margin-bottom: 6rem;
}

.links ul li {
    margin-bottom: 1rem;
}

.links ul li:nth-child(1) {
    /* background-color: #E67E22; */
    margin-right: 20%;
}

.links ul li:nth-child(2) {
    margin-right: 40%;
}

.links ul li:nth-child(3) {
    margin-right: 60%;
}

.links ul li:nth-child(4) {
    margin-right: 80%;
}

a {
    text-decoration: none;
    color: azure;
}

a:hover {
    color: #E67E22;
}

.socials-container {
    color: azure;
}

.socials-container ul {
    list-style: none;
    display: flex;
    flex-direction: row;
}

.socials-container ul li {
    width: 3rem;
    height: 3rem;
    padding: 0.5rem;
    border-radius: 50%;
}

.icon {
    display: block;
    width: 100%;
    height: 100%;
    fill: azure;
}

.icon:hover {
    cursor: pointer;
    fill: #E67E22;
}

</style>