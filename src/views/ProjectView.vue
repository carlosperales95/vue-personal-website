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
    </div>
    <div class="row">
      <div class="cell">
        <h2>CARLOS PERALES</h2>
      </div>
      <div class="cell view-container">
        <img src="../assets/hero/glitch-sword.png">
      </div>
      <div class="cell">
        <h2>CARLOS PERALES</h2>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  components: {

  },
  setup() {
    
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
  display: flex;
  justify-content: space-between;
}

.row .cell {
    border-top: solid 1px black;

}

.row div {
  margin: 0.3rem;
}

.cell {
  width: 25%;
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

.cell h2 {
  font-size: 25px;
  width: 50%;
  margin-top: 0.5rem;
}


.proj-container {
  width: 70%;
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
  width: 40%;
  padding: 0.4rem;
  text-align: center;
}

img {
  width: 100%;
}
</style>
