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
                        <div class="skill-icon fe-icon"></div>
                        <li class="fill-60">Frontend Power</li>
                    </div>
                    <div class="skill-bar-wrapper">
                        <div class="skill-icon be-icon"></div>
                        <li class="fill-60">Backend Power</li>
                    </div>
                    <div class="skill-bar-wrapper">
                        <div class="skill-icon fe-icon"></div>
                        <li class="fill-75">Charisma</li>
                    </div>
                    <div class="skill-bar-wrapper">
                        <div class="skill-icon oth-icon"></div>
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
        <!-- TODO Add map of Ams as third option -->
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
                    <div class="stat-bar-wrapper">
                        <div
                        class="stat-btn-wrapper"
                        :class="{'selected-tab': mode == stck.title}"
                        :key="index"
                        v-for="(stck, index) in techStack"
                        >
                            <div
                            class="stack-icon"
                            :class="`${stck.code}-icon`"
                            @click="changeStack(stck.title)"
                            ></div>
                        </div>
                    </div>
                    <div class="stat-tech-title">
                        {{techStack[mode]["title"].toUpperCase()}}
                    </div>
                    <div class="tech-icons-wrapper">
                        <div
                        class="tech-icon"
                        :class="`${tech}-icon`"
                        :key="index"
                        v-for="(tech, index) in techStack[mode].techs"
                        ></div>
                    </div>
                </ul>
            </div>
            <!-- <button class="bar-toggle-btn"></button> -->
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

        const mode = ref('frontend');
        const techStack = ref({
            frontend: {
                title: 'frontend',
                code: 'fe',
                techs: ['html', 'css', 'js', 'sass', 'vue', 'react', 'django', 'flask']

            },
            backend: {
                title: 'backend',
                code: 'be',
                techs: ['java', 'python', 'node', 'mysql', 'php', 'sqlite', 'spring', 'symfony' , 'postgres']
            },
            others: {
                title: 'others',
                code: 'oth',
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