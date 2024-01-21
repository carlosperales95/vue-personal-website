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
  padding: 1rem 1rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  font-size: 15px;
}

pre {
  margin: 0;
}

.author-col {
  grid-column-start: 3;
}

.author-col p {
  text-align: center;
}
</style>
