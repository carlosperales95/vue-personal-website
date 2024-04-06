<template>
  <div class="projects">
    <div class="header row">
      <div class="cell">
        <h4>0922 VER0.0</h4>
        <p>holaholaholahola</p>
        <h2>CARLOS PERALES</h2>
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
      <div class="cell">
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
      <div class="cell rowed">
        <div>
          <h2>{{ selectedProject.title.toUpperCase() }}:</h2>
          <p>{{ selectedProject.description }}</p>
        </div>
        <div>
          <h2>STACK:</h2>
          <p v-for="tech in selectedProject.technologies" :key="tech">
            {{ tech }}
          </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="cell lens">
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
        <h2> hello </h2>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  components: {
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


    const text = `I'm still not sure why I chose Sapokode as my dev name. I find toads weird and fascinating, and came up while I was coming up with an easy logo idea to use as my website logo.
          The rules were simple, attempt so make some kind of convincing logo or dev signature using only my initials and some extra lines (but keeping it simple). Due to my software engineering background, the logo needed to be made with real keyboard characters.
          After some playing around with letters, I put them together a bit better in paint, and what looked like the first toad face appeared. This was not intentional, but after making it I kinda thought it looked like a frog.
          I will attempt to improve it in the future and try to make it look less wonky. This above logo came from another idea, making a frog out of special characters and punctuations.
          Although my real name has nothing to do with toads, they have become my official mascot. The toad is also big in japanese culture, which I draw a lot of inspiration from.`;


    const showImageUrl = ref(new URL(`../assets/projects/${projects.value[0].img_url}`, import.meta.url).href);

    const selectedProject = ref(projects.value[0]);

    const changeImageUrl = (id) => {
      const imgUrl = projects.value.find(proj => proj.id === id).img_url;

      showImageUrl.value = new URL(`../assets/projects/${imgUrl}`, import.meta.url).href;

      selectedProject.value = projects.value.find(proj => proj.id === id);
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


<style scoped>
.projects {
  display: flex;
  flex-direction: column;
  color: black;
  background-color: #E67E22;
  padding: 2rem;
}

body {
  min-height: 100vh;
  max-height: 100vh;
  overflow-y: hidden;
}

.back-btn {
  color: black;
  font-size: 38px;
  line-height: 30px;
  text-decoration: none;
  overflow: hidden;
}

.back-btn::after {
  content: '';
  position: relative;
  display: block;
  width: 50%;
  bottom: 0;
  left: 0.8em;
  height: 0.1em;
  background-color: #e6c222;
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
  transition: opacity 300ms, transform 300ms;
}

.back-btn:hover::after,
.back-btn:focus::after {
  opacity: 1;
  transform: translate3d(0, 0.2em, 0);
  transform: translate3d(0, 0, 0);
}

.back-btn:hover {
  color: #e6c222;
  cursor: pointer;
}

.row {
  display: grid;
  grid-template-columns: 3fr 6fr 3fr;

  /* justify-content: space-between; */
}

.header {
  grid-template-columns: 3fr 9fr;
}

.row .cell {
    border-top: solid 1px black;

}

.row div {
  margin: 0.3rem;
}

.cell {
  /* width: 25%; */
}

.frog {
  font-size: 10px;
  margin: 1rem;
  margin-left: 0;
  font-weight: bold;
}

h4 {
  font-size: 12px;
  border-bottom: solid 1px black;
  margin: 0;
}

.cell p,
.cell pre {
  font-size: 12px;
  margin: 0;
}


/* .cell h2 {
  font-size: 25px;
  width: 50%;
  margin-top: 0.5rem;
} */

.lens img {
  margin-top: 1rem;
  border: solid 1px #E67E22 inline;
  width: 50%;
}

.proj-container {
  /* width: 70%; */
}

.proj-container ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style: '\21B3';
}

.proj-container ul li:hover {
  cursor: pointer;
  color: #e6c222;

}

.view-container {
  /* width: 40%; */
  padding: 0.4rem;
  text-align: center;
  /* min-height: 50vh; */
  overflow: hidden;
  height: 500px;
  width: 900px;

}

.view-container img {
  max-height: 80%;
  width: auto;
  /* object-fit: contain; */
}

img {
  max-width: 80%;
  height: auto;
}
</style>
