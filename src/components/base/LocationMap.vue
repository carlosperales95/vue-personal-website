<template>
    <div class="map-container">
        <div class="map-overlay">
            <h1>Based in Amsterdam, been all around</h1>
        </div>
        <div id="map"></div>
    </div>
</template>
<script>
import { onMounted } from 'vue';
import * as L from 'leaflet';
export default {
    setup() {
        
        onMounted(() => {
            // const {latitude} = 52.379;
            // const {longitude} = 4.899;

            // const coords = [latitude, longitude];
            // const map = document.getElementById("map");
            // TODO: Add all cities I've lived in and make caroussel or buttons
            const map = L.map('map').setView([52.372, 4.899], 14);

            L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
            ).addTo(map);

            map.dragging.disable();
            map.touchZoom.disable();
            map.doubleClickZoom.disable();
            map.scrollWheelZoom.disable();
            map.boxZoom.disable();
            map.keyboard.disable();
            if (map.tap) map.tap.disable();
            document.getElementById('map').style.cursor='default';
        })
    },
}
</script>