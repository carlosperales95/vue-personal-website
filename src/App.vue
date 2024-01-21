<template>
  <header>
    <div class="logo">SapoKode</div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      </nav>
  </header>

  <router-view />

  <footer class="footer">
    <div class="site-info-col">
      <h3>Where to find me:</h3>
      <a href="https://www.linkedin.com/in/carlos-perales95/">LinkedIn</a>
      <a>GlassDoor</a>
      <a href="https://github.com/carlosperales95">Github</a>
      <a href="https://www.hackerrank.com/profile/carlos_perales95">HackerRank</a>
      <a href="https://app.hackthebox.com/profile/overview">HackInTheBox</a>
    </div>
    <div class="author-col">
      <pre>{{ frogASCII }}</pre>
      <p>Site Made by: SapoKode</p>
    </div>
  </footer>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
export default {
  components: {
    RouterLink,
    RouterView
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

    
    return {
      frogASCII
    }
  }
}
</script>

<style scoped>
header {
  max-height: 100vh;
  padding-top: 3%;
  line-height: 1.5;
  font-size: 40px;
  
  display: flex;
  flex-flow: row;
  justify-content: space-between;

  color: #fff3f3;
  background-color: #111111;
  font-family: 'Teko', sans-serif;
}

.logo {
  width: 50%;
  margin-left: 1rem;
}

nav {
  right: 0;
  width: 100%;
  text-align: center;
  display: flex;
}

nav a.router-link-exact-active {
  color: #E67E22;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  height: 100%;
  padding: 0 1rem;
  margin: auto;
  
  display: inline-block;
  text-decoration: none;
  text-align: center;
  font-weight: bold;

  color: #fff3f3;
}

footer {
  color: #fff3f3;
  background-color: #111111;
  padding: 1rem 6rem 0rem 8rem;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}

pre {
  margin: 0;
}

.author-col {
  grid-column-start: 3;
  font-size: 10px;
}


.site-info-col {
  grid-column-start: 1;
  font-size: 18px;
  display: flex;
  flex-direction: column;
}

.site-info-col a {
  margin-bottom: 1rem;
  color: #fff3f3;
  text-decoration: none;
}

.site-info-col a:hover {
  color: #E67E22;
  cursor: pointer;
}

.author-col p {
  text-align: center;
  font-size: 15px;
  font-weight: bold;
}
</style>
