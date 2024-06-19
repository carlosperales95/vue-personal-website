<template>
    <div class="gallery">
        <div
        class="gallery__strip__wrapper"
        v-for="strip in strips"
        :key="strip.id"
        >
            <div class="gallery__strip" :class="`${strip.id}`">
                <div
                class="photo"
                v-for="album in strip.elems"
                :key="album.name"
                >
                    <album-item :album="album"></album-item>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ref, computed, onMounted } from 'vue';
import AlbumItem from './AlbumItem.vue';

export default {
    props: ['albums', 'strips'],
    components: {
        AlbumItem
    },
    setup() {
        
    },
}
</script>