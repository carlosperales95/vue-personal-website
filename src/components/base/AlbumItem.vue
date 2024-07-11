<template>
    <router-link
        :to="albumUrl"
        :album="album"
    >
        <div class="photo__image">
            <AdvancedImage :cldImg="album.thumbnail.elem" />
        </div>
        <div class="photo__name">
            {{album.name}}
        </div>
    </router-link>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { AdvancedImage } from '@cloudinary/vue';
export default {
    props: ["album"],
    components: {
        AdvancedImage
    },
    setup(props) {
        const albumUrl = computed(() => {
            return `/photography/${props.album.name}`;
        });

        return {
            albumUrl
        }
    },
}
</script>