<template>
  <!-- <parallax></parallax> -->
  <div>
    <nav-bar />
    <hero-section @trigger-show="triggerAboutMe"></hero-section>
      <about-section :hideContent="hideContent"></about-section>
      <div class="centered-content">
        <resume-layout></resume-layout>
      </div>
      <about-section :hideContent="hideContent"></about-section>
      <location-map></location-map>
      <about-section :hideContent="hideContent"></about-section>

  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Parallax from '@/components/base/Parallax.vue';
import HeroSection from '@/components/sections/HeroSection.vue';
import ResumeLayout from '@/components/layouts/ResumeLayout.vue';
import NavBar from '@/components/base/NavBar.vue';

import '../assets/sections/home.scss'
import AboutSection from '@/components/sections/AboutSection.vue';
import LocationMap from '@/components/base/LocationMap.vue';


export default {
  components: {
    Parallax,
    HeroSection,
    ResumeLayout,
    NavBar,
    AboutSection,
    LocationMap
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
        window.scrollTo({
          top: document.querySelector(".about-container").getBoundingClientRect().top + window.scrollY - 200,
          behavior: "smooth"});
        
        // document.querySelector(".about-container")
        //   .scrollIntoView({
        //       behavior: 'smooth'
        //     });
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
      triggerAboutMe,
    };
  },
};
</script>
