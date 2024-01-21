<template>
  <div class="portfolio">
    <header class="header">
      <h1 class="main-title">{{ fullName }}</h1>
      <p class="subtitle">{{ jobTitle }}</p>
    </header>

    <section class="about section">
      <h2>About Me</h2>
      <p>{{ aboutMe }}</p>
    </section>

    <section class="projects section">
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
    </section>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const fullName = ref('Your Full Name');
    const jobTitle = ref('Your Job Title');
    const aboutMe = ref('Write a brief about yourself and your skills.');
    
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
    

    return {
      fullName,
      jobTitle,
      aboutMe,
      projects,
      email,
      linkedin,
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

.header {
  background-color: #8b4513;
  color: #fff3f3;
  padding: 20px;
  text-align: center;
}

.main-title {
  margin: 0;
}

.subtitle {
  margin: 5px 0;
}

.section {
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
}

.about {
  background-color: #E67E22;
  color: #fff3f3;
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
