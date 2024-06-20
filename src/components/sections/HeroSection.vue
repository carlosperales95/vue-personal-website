<template>
    <div class="hero-container">
        <div class="nav-container">
            <div class="links">
                <bi-column class="hero-size">
                    <template v-slot:left>
                        <routing-list :pages="['projects', 'devlogs', 'photography']"></routing-list>
                    </template>
                    <template v-slot:right>
                        <div id="scene-container">
                            <!-- Three.js canvas will be inserted here -->
                        </div>
                        <!-- <div class="art-credits">
                            <img src="../../assets/hero/isoroom.gif"/>
                            <h2>VOXELART BY:</h2>
                            <a class="shoutout" href="https://www.behance.net/sircarma">SIRCARMA</a>
                        </div> -->
                    </template>
                </bi-column>
                <div class="action-container">
                    <a class="action-link filled-background" @click="$emit('trigger-show')">
                        Learn more about me
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue';
import { World } from "../../loader/World.js";
import BiColumn from '@/components/layouts/BiColumn.vue';
import RoutingList from '../base/RoutingList.vue';

import '../../assets/sections/hero.scss';

export default {
    emits: ['trigger-show'],
    components: {
        RoutingList,
        BiColumn,
    },
    setup() {
        onMounted(() => {
            const container = document.querySelector("#scene-container");
            // Create an instance of the World app
            const world = new World(container);
            // Start the loop (produce a stream of frames)
            world.start();
        });
    }
}
</script>