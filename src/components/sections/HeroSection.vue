<template>
    <hero-layout>
        <template v-slot:left>
            <!-- <img src="../../assets/hero/isoroom.gif"/> -->
            <div id="scene-container">
                <!-- Three.js canvas will be inserted here -->
            </div>
            <!-- <div class="art-credits">
                <h2>VOXELART BY:</h2>
                <a class="shoutout" href="https://www.behance.net/sircarma">SIRCARMA</a>
            </div> -->
        </template>
    </hero-layout>
</template>

<script>
import { ref, reactive, onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import HeroLayout from '../layouts/HeroLayout.vue';
import { World } from "../../loader/World.js";

import '../../assets/sections/hero.scss';

export default {
    // emits: ['trigger-show'],
    components: {
        RouterLink,
        RouterView,
        HeroLayout,
    },
    setup() {
        onMounted(() => {
            // console.log("mounted");
            // console.log(document.getElementById("#scene=container"));
            const container = document.querySelector("#scene-container");
            
            // Create an instance of the World app
            const world = new World(container);
            
            // Start the loop (produce a stream of frames)
            world.start();
        })
        
        return {
        }
    }
}
</script>