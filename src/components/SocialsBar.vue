<template>
    <div class="socials-container">
        <ul>
            <li v-for="social in socials" :key="social.id">
                <a :href="social.url">
                    <icon-twitch v-if="social.name === 'twitch'" class="icon" />
                    <icon-instagram v-if="social.name === 'instagram'" class="icon" />
                    <icon-linkedin v-if="social.name === 'linkedin'" class="icon" />
                    <icon-github v-if="social.name === 'github'" class="icon" />
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import { ref } from 'vue';
import IconGithub from './icons/IconGithub.vue';
import IconTwitch from './icons/IconTwitch.vue';
import IconLinkedin from './icons/IconLinkedin.vue';
import IconInstagram from './icons/IconInstagram.vue';

export default {
    components: {
        IconGithub,
        IconInstagram,
        IconLinkedin,
        IconTwitch
    },
    setup() {
        const socials = ref([
            {
                id: 1,
                name: "instagram",
                url: 'https://www.instagram.com/cp.raw/',
            },
            {
                id: 2,
                name: "linkedin",
                url: 'https://www.linkedin.com/in/carlos-perales95',
            },
            {
                id: 3,
                name: "github",
                url: 'https://github.com/carlosperales95',
            },
            {
                id: 4,
                name: "twitch",
                url: 'https://www.twitch.tv/sapokode',
            }
        ]);

        return {
            socials,
        }
    },
}
</script>

<style scoped>

.socials-container {
    color: azure;
    align-self: center;
}

.socials-container ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    margin: 0;
    margin-left: 4rem;
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
    fill: black;
}

.icon:hover {
    cursor: pointer;
    fill: #E67E22;
}


</style>