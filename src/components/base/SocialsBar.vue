<template>
    <div class="socials-container">
        <ul>
            <li v-for="social in socials" :key="social.id">
                <a class="social-link" :href="social.url">
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
import IconGithub from '../icons/IconGithub.vue';
import IconTwitch from '../icons/IconTwitch.vue';
import IconLinkedin from '../icons/IconLinkedin.vue';
import IconInstagram from '../icons/IconInstagram.vue';

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


</style>