<template>
    <div class="photos-container">
        <div class="photos-sidebar">
            <special-nav-link :pages="['home', 'devlogs', 'projects']"/>
            <h1> ALBUMS </h1>
            <ul>
                <li v-for="album in albums" :key="album.name">
                    <span></span>
                    <router-link
                        :to="`/photography/${album.name}`"
                        :album="album"
                    >
                        <p>{{album.name}}</p>
                    </router-link>
                </li>
            </ul>
        </div>
        <album-section :strips="strips" :albums="albums"></album-section>
    </div>
</template>

<script>
// import PhotoGallery from '@/components/base/PhotoGallery.vue';
import AlbumSection from '@/components/base/AlbumSection.vue';
import { useAlbumsStore } from '@/stores/albums';
import { storeToRefs } from 'pinia';

import '../assets/sections/gallery.scss';
import { RouterLink } from 'vue-router';
import SpecialNavLink from '@/components/base/SpecialNavLink.vue';

export default {
    components: {
        // PhotoGallery,
        AlbumSection,
        RouterLink,
        SpecialNavLink
    },
    setup() {
        const albumsStore = useAlbumsStore();

        const {
            albums,
            isLoading,
            strips
        } = storeToRefs(albumsStore);

        albumsStore.getUrlAlbums();
        albumsStore.divideIntoStrips();

        return {
            albums,
            isLoading,
            strips
        }
    },
}
</script>