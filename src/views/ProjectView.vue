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
          <li v-for="project in projects" :key="project.id">
            {{ project.name }}
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
        <img src="../assets/hero/glitch-sword.png">
      </div>
      <div class="cell rowed">
        <div>
          <h2>COSA:</h2>
          <p>Algo</p>
        </div>
        <div>
          <h2>COSA:</h2>
          <p>Algo</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="cell lens">
        <img src="../assets/hero/lens-girl.gif">
      </div>
      <div class="proj-container cell">
        <ul>
          <li>PROJ1</li>
          <li>PROJ2</li>
          <li>PROJ3</li>
          <li>PROJ4</li>
          <li>PROJ5</li>
          <li>PROJ6</li>
          <li>PROJ7</li>
          <li>PROJ8</li>
          <li>PROJ9</li>
          <li>PROJ10</li>
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
        name: 'PROJ1',
        img_url: 'glitch-sword.png'
      },
      {
        id: '2',
        name: "PROJ2"
      },
      {
        id: '3',
        name: "PROJ3"
      },
      {
        id: '4',
        name: "PROJ4"
      },
      {
        id: '5',
        name: "PROJ5"
      },
      {
        id: '6',
        name: "PROJ6"
      },
      {
        id: '7',
        name: "PROJ7"
      },
      {
        id: '8',
        name: "PROJ8"
      },
      {
        id: '9',
        name: "PROJ9"
      }
    ]);


    const text = `I'm still not sure why I chose Sapokode as my dev name. I find toads weird and fascinating, and came up while I was coming up with an easy logo idea to use as my website logo.
          The rules were simple, attempt so make some kind of convincing logo or dev signature using only my initials and some extra lines (but keeping it simple). Due to my software engineering background, the logo needed to be made with real keyboard characters.
          After some playing around with letters, I put them together a bit better in paint, and what looked like the first toad face appeared. This was not intentional, but after making it I kinda thought it looked like a frog.
          I will attempt to improve it in the future and try to make it look less wonky. This above logo came from another idea, making a frog out of special characters and punctuations.
          Although my real name has nothing to do with toads, they have become my official mascot. The toad is also big in japanese culture, which I draw a lot of inspiration from.`;

    return {
      frogASCII,
      text,
      projects
    }
  },
}
</script>


<style scoped>
.projects {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: black;
  background-color: #E67E22;
  padding: 2rem;
}

body {
  min-height: 100vh;
  max-height: 100vh;
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

.cell p {
  font-size: 9px;
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
}

img {
  max-width: 80%;
}
</style>
