<template>
    <div class="photos-container">
        <div class="photos-sidebar">
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
import { onMounted, computed } from 'vue';

export default {
    components: {
        // PhotoGallery,
        AlbumSection
    },
    setup() {
        const albumsStore = useAlbumsStore();

        const {
            albums,
            isLoading,
            strips
        } = storeToRefs(albumsStore);

        onMounted(() => {
            albumsStore.getUrlAlbums();
            albumsStore.divideIntoStrips();
        });

        return {
            albums,
            isLoading,
            strips
        }
    },
}
</script>