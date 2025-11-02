<template>
    <about-me-layout :textContent="aboutTextContent"></about-me-layout>
    <div class="resume-container">
        <button @click="changeSection('skills')">
            Stats
        </button>
        <button @click="changeSection('experience')">
            Experience
        </button>
    </div>
    <ripple-circles></ripple-circles>
    <div class="sections" :class="{'alternative': rolledSection}">
        <div class="slider-section anothaone">
            <pip-boy></pip-boy>
            <div class="skills-container">
                <ul>
                    <div class="stat-bar-wrapper">
                        <div
                        class="stat-btn-wrapper"
                        :class="{'selected-tab': mode == stck.title}"
                        :key="index"
                        v-for="(stck, index) in techStack"
                        >
                            <svg class="stack-icon" @click="changeStack(stck.title)">
                                <use :xlink:href="`#${stck.code}`"></use>
                            </svg>
                        </div>
                    </div>
                    <div class="stat-tech-title">
                        {{ techStack[mode]["title"].toUpperCase() }}
                    </div>
                    <div class="tech-icons-wrapper">
                        <svg
                        :key="index"
                        v-for="(tech, index) in techStack[mode].techs"
                        class="tech-icon"
                        >
                            <use :xlink:href="`#${tech}`"></use>
                        </svg>
                    </div>
                </ul>
            </div>
        </div>
        <div class="slider-section">
            <timeline-section></timeline-section>
        </div>
    </div>
</template>
<script setup>
import { ref, computed } from 'vue';
import TimelineSection from '@/components/sections/TimelineSection.vue';
import RippleCircles from '@/components/base/RippleCircles.vue';
import PipBoy from '@/components/base/PipBoy.vue';

import '../../assets/sections/resume.scss';
import '../../assets/sections/ripple.scss';
import AboutMeLayout from './AboutMeLayout.vue';

const props = defineProps(['techStack', 'aboutTextContext']);

const section = ref('skills');

const changeSection = (sec) => {
    if(section.value === sec) return;

    section.value = sec;
};

const mode = ref('frontend');

const rolledSection = computed(() => {
    return section.value === 'skills' ? false : true;
});

const changeStack = function(newMode) {
    mode.value = newMode;
};
</script>

<style scoped>

</style>