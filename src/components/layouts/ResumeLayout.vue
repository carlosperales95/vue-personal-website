<template>
    <div class="resume-container">
        <button @click="changeSection('skills')">
            Skills
        </button>
        <button @click="changeSection('experience')">
            Experience
        </button>
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
.resume-container {
    display: flex;
    width: 100%;
    align-self: center;
    justify-content: center;
    margin-bottom: 3rem;
}

.resume-container::before {
    content: '';
    display: block;
    position: absolute;
    margin-top: 1rem;
    width: 100%;
    height: 1px;
    background-color: azure;
    z-index: -1;
}

.resume-container button {
    align-self: center;
    min-width: 10rem;
    min-height: 2rem;
    background-color: rgb(59, 136, 126);
    color: azure;
    border: 1px solid azure;
}

.resume-container button:hover {
    background-color: aqua;
}

.resume-container button:nth-child(1) {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}

.resume-container button:nth-child(2) {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}

section {
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 8px;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.sections {
    width: 200vw;
    position: relative;
    left: calc(-50vw + 50%);
    display: grid;
    grid-template-columns: 1fr 1fr;
    transition: left 1s;
}

.alternative {
    left: -100vw
}

.slider-section {
    /* width: 100vw; */
    width: 50vw;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 8px;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.anothaone {
    min-width: 70%;
    display: flex;
    /* background-color: brown; */
    border: 1px solid azure;
    margin: 0;
    margin-left: 10%;
}

.skills-container {
    font-family: 'Chakra Petch', sans-serif;
    color: azure;
    min-width: 30%;
    border-radius: 20px;
    border: 3px solid azure;
    background-color: #fff3f3;
    /* background-image: linear-gradient(0deg, rgb(0,142,0), azure); */
}

.anothaone ul {
    list-style: none;
}

.anothaone ul li {
    padding: 1rem;
    margin: 1rem;
    background-color: #008e00;
    /* background-color: azure; */
}
</style>