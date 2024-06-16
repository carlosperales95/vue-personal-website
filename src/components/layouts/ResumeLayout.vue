<template>
    <div class="about-me-container">
        <p>
            Fully committed to the philosophy of life-long learning, I’m a developer with a deep passion for complex problems.<br><br>
            I enjoy finding simple and elegant solutions, both in backend and web development projects. The unique combination of creativity, logic, technology, and discovery hunger, drives my excitement and passion for code.<br><br>
            When I’m not at my computer I like to spend my time traveling in the wild, mixing some songs or going out to take some great photos.
        </p>
        <div class="technologie">
            <div class="skills-container">
                <ul>
                    <div class="skill-bar-wrapper">
                        <svg class="skill-icon">
                            <use xlink:href="#frontend"></use>
                        </svg>
                        <li class="fill-60">Frontend Power</li>
                    </div>
                    <div class="skill-bar-wrapper">
                        <svg class="skill-icon">
                            <use xlink:href="#backend"></use>
                        </svg>
                        <li class="fill-60">Backend Power</li>
                    </div>
                    <div class="skill-bar-wrapper">
                        <svg class="skill-icon">
                            <use xlink:href="#frontend"></use>
                        </svg>
                        <li class="fill-75">Charisma</li>
                    </div>
                    <div class="skill-bar-wrapper">
                        <svg class="skill-icon">
                            <use xlink:href="#luck"></use>
                        </svg>
                        <li class="fill-90">Luck</li>
                    </div>
                </ul>
            </div>
        </div>
    </div>
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
                        {{techStack[mode]["title"].toUpperCase()}}
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
<script>
import { ref, computed } from 'vue';
import TimelineSection from '@/components/sections/TimelineSection.vue';
import RippleCircles from '@/components/base/RippleCircles.vue';
import PipBoy from '@/components/base/PipBoy.vue';
import '../../assets/sections/resume.scss';
import '../../assets/sections/ripple.scss';


export default {
    components: {
        TimelineSection,
        PipBoy,
        RippleCircles
    },
    setup() {
        const section = ref('skills');

        const changeSection = (sec) => {
            if(section.value === sec) return;

            section.value = sec;
        };

        const mode = ref('frontend');
        const techStack = ref({
            frontend: {
                title: 'frontend',
                code: 'frontend',
                techs: ['html', 'css', 'js', 'sass', 'vue', 'react', 'django', 'flask']

            },
            backend: {
                title: 'backend',
                code: 'backend',
                techs: ['java', 'python', 'node', 'mysql', 'php', 'sqlite', 'spring', 'symfony' , 'postgres']
            },
            others: {
                title: 'others',
                code: 'luck',
                techs: ['git', 'bash', 'docker']
            }
        });



        const rolledSection = computed(() => {
            return section.value === 'skills' ? false : true;
        });

        const changeStack = function(newMode) {
            mode.value = newMode;
        };

        return {
            rolledSection,
            techStack,
            mode,
            changeSection,
            changeStack
        }
    },
}
</script>

<style scoped>

</style>