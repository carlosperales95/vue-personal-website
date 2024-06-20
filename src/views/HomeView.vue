<template>
  <div>
    <nav-bar />
    <hero-section @trigger-show="triggerAboutMe"></hero-section>
    <div v-if="!hideContent">
      <title-separator
      :hasCenteredElem="true"
      :header="'sapokode'"
      >
        <template v-slot:center>
          <employee-card
          :fullName="fullName"
          :jobTitle="jobTitle"
          :aboutMe="aboutMe"
          ></employee-card>
        </template>
      </title-separator>
      <div class="centered-content">
        <resume-layout
          :techStack="techStack"
          :aboutTextContent="aboutTextContent"
        ></resume-layout>
      </div>
      <title-separator
      :hasCenteredElem="true"
      :header="'based-in'"
      >
        <template v-slot:center>
          <timeboard-text :location="'amsterdam'"></timeboard-text>
        </template>
      </title-separator>
      <location-map></location-map>
      <title-separator
      :hasCenteredElem="false"
      :header="'contact'"
      ></title-separator>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import HeroSection from '@/components/sections/HeroSection.vue';
import ResumeLayout from '@/components/layouts/ResumeLayout.vue';
import NavBar from '@/components/layouts/NavBar.vue';
import EmployeeCard from '@/components/base/EmployeeCard.vue';


import '../assets/sections/home.scss'
import TitleSeparator from '@/components/layouts/SplitTitleSeparator.vue';
import LocationMap from '@/components/base/LocationMap.vue';
import TimeboardText from '@/components/base/TimeboardText.vue';

import { useHomeStore } from '@/stores/home';
import { storeToRefs } from 'pinia';



export default {
  components: {
    HeroSection,
    ResumeLayout,
    NavBar,
    TitleSeparator,
    LocationMap,
    EmployeeCard,
    TimeboardText
  },
  setup() {

    const hideContent = ref(true);

    const homeStore = useHomeStore();

        const {
          fullName,
          jobTitle,
          aboutMe,
          email,
          linkedin,
          aboutTextContent,
          techStack
        } = storeToRefs(homeStore);
    

    const triggerAboutMe = function() {
      hideContent.value = false;
      setTimeout(function() {
        window.scrollTo({
          top: document.querySelector(".separator-container").getBoundingClientRect().top + window.scrollY - 250,
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
      email,
      linkedin,
      techStack,
      aboutTextContent,
      triggerAboutMe,
    };
  },
};
</script>
