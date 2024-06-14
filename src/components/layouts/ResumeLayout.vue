<template>
    <div class="resume-container">
        <button @click="changeSection('skills')">
            Skills
        </button>
        <button @click="changeSection('experience')">
            Experience
        </button>
    </div>
    <div class="ripple-background">
            <div class="circle xxxxlarge shade1"></div>
            <div class="circle xxxlarge shade1"></div>
            <div class="circle xxlarge shade1"></div>
            <div class="circle xlarge shade2"></div>
            <div class="circle large shade3"></div>
            <div class="circle medium shade4"></div>
            <div class="circle small shade5"></div>
    </div>
    <div class="sections" :class="{'alternative': rolledSection}">
        <div class="slider-section anothaone">
            <pip-boy></pip-boy>
            <div class="skills-container">
                <ul>
                    <li>Frontend Power</li>
                    <li>Backend Power</li>
                    <li>Charisma</li>
                    <li>Luck</li>
                </ul>
            </div>
        </div>
        <div class="slider-section">
            <timeline-section></timeline-section>
        </div>
    </div>
</template>
<script>
import { ref, computed } from 'vue';
import TimelineSection from '@/components/sections/TimelineSection.vue';
import PipBoy from '@/components/base/PipBoy.vue';
import '../../assets/sections/resume.scss'


export default {
    components: {
        TimelineSection,
        PipBoy
    },
    setup() {
        const section = ref('skills');

        const changeSection = (sec) => {
            if(section.value === sec) return;

            section.value = sec;
        };

        const rolledSection = computed(() => {
            return section.value === 'skills' ? false : true;
        })

        return {
            rolledSection,
            changeSection
        }
    },
}
</script>

<style scoped>

</style>