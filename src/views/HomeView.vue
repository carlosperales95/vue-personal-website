<template>
  <!-- <parallax></parallax> -->
  <hero-section @trigger-show="triggerAboutMe"></hero-section>
  <div class="portfolio" v-if="!hideContent">
    <!-- <section class="about section">
      <div class="employee-card">
        <h1>HELLO my name is</h1>
        <div class="employee-info">
          <div class="basic-info">
            <h2>{{ fullName }}</h2>
            <p class="job-title">{{ jobTitle }}</p>
            <p class="description-line">Height: 180cm</p>
            <p class="description-line">Age: 28years</p>
            <p class="description-line">Nationality: Spanish</p>
            <p class="description-line">Other: Likes plants</p>
          </div>
          <div class="employee-img">
            <img src='../assets/sapokode-img.png'>
          </div>
        </div>
        <p class="about-description">{{ aboutMe }}</p>
      </div>
    </section> -->
    <timeline-section></timeline-section>
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
</template>

<script>
import { ref } from 'vue';
import TimelineSection from '@/components/TimelineSection.vue';
import Parallax from '@/components/Parallax.vue';
import HeroSection from '@/components/HeroSection.vue';

export default {
  components: {
    TimelineSection,
    Parallax,
    HeroSection
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
        
        document.querySelector(".portfolio")
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

.portfolio {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.section {
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
}
.employee-card {
  background-color: #fff3f3;
  color: #1a1a1a;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  text-align: center;
}

.employee-card h1 {
  background-color: #800020;
  color: #fff3f3;
  font-size: 45px;
  border-radius: inherit;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  padding: 1%;
  margin-bottom: 0;
}

.employee-card:hover {
  transform: scale(1.05);
}

.basic-info {
  text-align: center;
  padding: 2%;
  border: 1px dashed #800020;
  border-radius: 10px;
}

.employee-info {
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 2%;
}

.employee-img {
  padding: 5%;
}

.employee-img img {
  height: 100%;
  width: 100%;
  border: 1px solid #fff3f3;
  text-align: center;
}

.basic-info h2 {
  margin: 0;
  padding: 0;
  width: 100%;
  color: #E67E22;
  border-bottom: 1px dashed #800020;
}

.job-title {
  margin-top: 5px;
  font-weight: bold;
  border-bottom: 1px dashed #cac8c8;
}

.description-line {
  font-weight: bold;
  border-bottom: 1px dashed #cac8c8;
  text-align: left;
  font-size: 15px;
}

.about-description {
  margin-top: 0;
  background-color: #800020;
  color: #fff3f3;
  font-size: 10px;
  border-radius: inherit;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  padding: 1%;
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
