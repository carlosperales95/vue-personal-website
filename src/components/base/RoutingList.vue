<template>
    <ul>
        <li
        v-for="(page, index) in pages"
        :key="index"
        >
            <router-link
            class="filled-background"
            :to="page == 'home' ? '/' : `/${page}`"
            >
                {{ page.toUpperCase() }}
            </router-link>
        </li>
    </ul>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
export default {
    props: ['pages'],
    components: {
        RouterLink,
        RouterView
    },
    setup() {
        
    },
}
</script>