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
import Parallax from '@/components/Parallax.vue';
import HeroSection from '@/components/HeroSection.vue';
import EmployeeCard from '@/components/EmployeeCard.vue'
import ResumeLayout from '@/components/layouts/ResumeLayout.vue';

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

<style scoped>

.about-container {
  display: flex;
  flex-direction: column;
}


.centered-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.about-card {
  width: 40%;
  height: 60%;
  color: azure;
  align-self: center;
  margin-left: 5rem;
  padding: 2rem;
  border-radius: 10px;
  font-size: 28px;
}

.about-card h1 {
  margin-top: 0;
  margin-bottom: 10rem;
}

.separator {
  width: 100%;
  height: 30rem;
  display: flex;
  background-color: #E67E22;
  position: relative;
}

.separator2 h1 {
  color: #E67E22;
}

.section {
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
}

.projects {
  background-color: #35654D;
  color: #fff3f3;
}

.contact {
  background-color: #800020;
  color: #fff3f3;
}

.project {
  margin-bottom: 15px;
}

</style>
