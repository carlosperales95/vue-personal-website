<template>
  <!-- <parallax></parallax> -->
  <hero-section @trigger-show="triggerAboutMe"></hero-section>
  <div class="about-container" v-if="!hideContent">
    <div class="separator">
      <div class="about-card">
        <h1>
          My work is all about bringing fresh ideas and original concepts to life.
        </h1>
      </div>
      <employee-card :fullName="fullName" :jobTitle="jobTitle" :aboutMe="aboutMe"></employee-card>

    </div>
    <div class="separator2">
      <div class="about-card">
        <h1>
          I develop reliable and scalable software that stands out with creativity and personality.
        </h1>
      </div>
    </div>
    <resume-layout></resume-layout>
    <div class="centered-content">
      <!-- <timeline-section></timeline-section> -->
      <!-- <section class="others section">
        <h2>Background</h2>
        <div v-for="project in projects" :key="project.id" class="project">
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </section>

      <section class="projects section">
        <h2>Projects</h2>
        <div v-for="project in projects" :key="project.id" class="project">
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </section>

      <section class="contact section">
        <h2>Contact</h2>
        <p>Email: {{ email }}</p>
        <p>LinkedIn: {{ linkedin }}</p>
      </section> -->
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import Parallax from '@/components/base/Parallax.vue';
import HeroSection from '@/components/sections/HeroSection.vue';
import EmployeeCard from '@/components/base/EmployeeCard.vue'
import ResumeLayout from '@/components/layouts/ResumeLayout.vue';

import '../assets/sections/home.scss'


export default {
  components: {
    // TimelineSection,
    Parallax,
    HeroSection,
    EmployeeCard,
    ResumeLayout
  },
  setup() {

    const hideContent = ref(true);

    const fullName = ref('SapoKode');
    const jobTitle = ref('Software Engineer');
    const aboutMe = ref('The best results come from the sheer motivation to improve and taking care of your workers, not from the ideas of the stakeholders throwing money at you.');
    
    const projects = ref([
      {
        id: 1,
        name: 'Project 1',
        description: 'Description of Project 1',
      },
      {
        id: 2,
        name: 'Project 2',
        description: 'Description of Project 2',
      },
    ]);

    const email = ref('your.email@example.com');
    const linkedin = ref('https://www.linkedin.com/in/your-linkedin-profile');
    

    const triggerAboutMe = function() {
      hideContent.value = false;
      setTimeout(function() {
        
        document.querySelector(".about-container")
          .scrollIntoView({
              behavior: 'smooth'
            });
      }, 2000);
    }

    return {
      hideContent,
      fullName,
      jobTitle,
      aboutMe,
      projects,
      email,
      linkedin,
      triggerAboutMe
    };
  },
};
</script>
