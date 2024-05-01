<template>
  <div class="projects">
    <div class="header row">
      <div class="cell slim">
        <h4>0922 VER0.0</h4>
        <p>holaholaholahola</p>
        <h2 class="name-title">CARLOS PERALES</h2>
        <router-link class="back-btn" to="/"> &lt; BACK</router-link>
      </div>
      <div class="proj-container">
        <h4>PROJECTS</h4>
        <ul>
          <li v-for="project in projects" :key="project.id" @mouseover="changeImageUrl(project.id)">
            {{ project.link_name }}
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="cell justified">
        <pre class="frog">
          {{ frogASCII }}
        </pre>
        <p>
          {{ text }}
        </p>
      </div>
      <div class="cell view-container">
        <img :src="showImageUrl">
      </div>
      <div class="cell rowed justified">
        <div>
          <h2>{{ selectedProject.title.toUpperCase() }}:</h2>
          <p>{{ selectedProject.description }}</p>
        </div>
        <div>
          <h2>STACK:</h2>
          <div class="tech-section">
            <tech-tag v-for="tech in selectedProject.technologies" :key="tech" :name="tech"></tech-tag>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="cell lens slim">
        <img src="@/assets/hero/lens-girl.gif">
      </div>
      <div class="proj-container cell">
        <ul>
          <li><a :href="selectedProject.git_url">CODE REPO</a></li>
          <li>PROJ2</li>
          <li>PROJ3</li>
          <li>PROJ4</li>
          <li>PROJ5</li>
          <li>PROJ6</li>
        </ul>
      </div>
      <div class="cell">
        <special-nav-link/>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import TechTag from '@/components/base/TechTag.vue';
import SpecialNavLink from '@/components/base/SpecialNavLink.vue';

import '../assets/sections/projects.scss'


export default {
  components: {
    TechTag,
    SpecialNavLink
  },
  setup() {

    const frogASCII = `
           ::'.:
            ''$;
            """:;
                $;.     .
       ...... ..$:'    $$;.
     ;$$$$$$$$$$:     :$$$$.
     $$$$$$$$$$$$$..  ;$$$$;.
     '$$$$$$$$$$$$$$;.$$$'$$;
      '"$$$$$$$$$$$$$$$$$ '$$;     ,. .
, ,:    ':$$$$$$$$$$$$$$$  '$$.   :;'""
"'.:     :$:":$$$$$$$$$$$   '$; ,;:;;""
'"'$;..;.;$'  ""$$$$$$$$:    '$.$$$$:""
'"'  ""'""" ;.$$$$$$$$""      '"""'
         ,;$$$$$$$:""
         '$$$$$$$;.;.
            """'""""":$..
                      ,$$
                     ;$$:
                   ,;'$$'
                   ":"$:
                  ::::.`;

    const projects = ref([
      {
        id: '1',
        link_name: 'PROJ1',
        title: 'Pinia Knowledge',
        description: `
Pinia Knowledge is an example of a personal knowledge manager, where the user saves the courses they want to follow, quite similat to a ToDo list.
The features include:

    Listing courses
    Adding course
    Modifying a course
    Deleting a course

The data is managed using Firebase as DB, where all courses are saved.`,
        technologies: ["java", "sql", "spring"],
        img_url: 'glitch-sword.png',
        git_url: "https://github.com/carlosperales95/frontend-knowledge"
      },
      {
        id: '2',
        link_name: "PROJ2",
        title: 'Fluid Box',
        description: `
I started this project to practice some Vue.js, since most of the things I've been doing were made with React.`,
        technologies: ["java", "sql", "spring"],
        img_url: 'water-concept.png',
        git_url: "https://github.com/carlosperales95/fluid-box-css"
      },
      {
        id: '3',
        link_name: "PROJ3",
        title: 'Hacker Effect',
        description: `
I started this project to practice some Vue.js, since most of the things I've been doing were made with React.`,
        technologies: ["java", "sql", "spring"],
        img_url: 'preview-concept-hacker.png',
        git_url: "https://github.com/carlosperales95/hacker-effect-title"
      },
      {
        id: '4',
        link_name: "PROJ4",
        title: 'Card Hover Effect',
        description: `
I started this project to practice some Vue.js, since most of the things I've been doing were made with React.`,        technologies: ["js", "html", "css", "vue", "pinia"],
        img_url: 'preview-concept.png',
        git_url: "https://github.com/carlosperales95/light-card-hover"
      },
      {
        id: '5',
        link_name: "PROJ5",
        title: 'Habit Tracker',
        description: `
Started this project to practice some Vue.js + Pinia for store management.
The project is a simple habit tracker application, that allows to keep track of the habits the user wants to follow.`,
        technologies: ["js", "html", "css", "react", "webpack"],
        img_url: 'sunny-git.png',
        git_url: "https://github.com/carlosperales95/vue-pinia-habit-tracker"
      },
      {
        id: '6',
        link_name: "PROJ6",
        title: 'Padel Tour',
        description: `
        I started this project to practice some Vue.js, since most of the things I've been doing were made with React. 
        In addition, some friends want to organize a Padel tournament, so maybe this could help us reach to as many people as possible with a great presentaion.`,
        technologies: ["python", "flask", "django", "html", "css"],
        img_url: 'padeltour-git.png',
        git_url: "https://github.com/carlosperales95/vue-padel-tour"
      },
      {
        id: '7',
        link_name: "PROJ7",
        title: 'Plugin LogReader',
        description: "Small project made at work to improve readability and filtering of plugin integration logs",
        technologies: ["python", "flask", "django", "html", "css"],
        img_url: 'logreader-pic.png',
        git_url: "https://github.com/carlosperales95/plugin-beauty-logreader"
      },
      {
        id: '8',
        link_name: "PROJ8",
        title: 'Magento Headless Example',
        description: `This project made at work provides a demo for integrating Magento payment plugin with Vue.js in a headless architecture, using Gitpod as the development environment. 
        This demo allows developing and testing Magento storefront using Vue.js components, while keeping the backend functionality and data management in Magento.`,
        technologies: ["js", "html", "css", "react", "webpack"],
        img_url: 'robot-coding.gif',
        git_url: "https://github.com/adyen-examples/magento-headless-demo"

      },
      {
        id: '9',
        link_name: "PROJ9",
        title: "frogKode",
        description: "Small project aimed to become a beginner cheatsheet for basic html elements for a future course",
        technologies: ["js", "html", "css", "react", "webpack"],
        img_url: 'millionaire-office.png',
        git_url: "https://github.com/carlosperales95/frogKode"
      }
    ]);


    const text = `I'm still not sure why I chose the toad as a my logo. I find toads weird and fascinating, and came up while I was coming up with an easy logo idea to use as my website logo.
          The rules were simple, attempt so make some kind of convincing logo or dev signature using only my initials and some extra lines (but keeping it simple). Due to my software engineering background, the logo needed to be made with real keyboard characters.
          After some playing around with letters, I put them together a bit better in paint, and what looked like the first toad face appeared. This was not intentional, but after making it I kinda thought it looked like a frog.
          I will attempt to improve it in the future and try to make it look less wonky. This above logo came from another idea, making a frog out of special characters and punctuations.
          Although my real name has nothing to do with toads, they have become my official mascot. The toad is also big in japanese culture, which is cool`;


    const selectedProject = ref(projects.value[0]);
    const showImageUrl = ref(new URL(`../assets/projects/${selectedProject.value.img_url}`, import.meta.url).href);


    const changeImageUrl = (id) => {
      selectedProject.value = projects.value.find(proj => proj.id === id);

      showImageUrl.value = new URL(`../assets/projects/${selectedProject.value.img_url}`, import.meta.url).href;
    };


    return {
      frogASCII,
      text,
      projects,
      showImageUrl,
      selectedProject,
      changeImageUrl
    }
  },
}
</script>
