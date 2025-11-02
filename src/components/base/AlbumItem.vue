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

<script setup>
import { computed } from 'vue';
import { AdvancedImage } from '@cloudinary/vue';
    
const props = defineProps(["album"]);

const albumUrl = computed(() => {
    return `/photography/${props.album.name}`;
});
</script>