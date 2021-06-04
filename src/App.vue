<template>
  <Background />
  <div class="container">
    <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->

    <div class="navbar">
      <Navigation />
      <BackgroundSettings />
    </div>
    <div class="content">
      <section id="welcome" class="card section">
        <h2><font-awesome-icon :icon="['fas', 'home']" /><br />Welcome</h2>
        <p>This is my page (WIP!)</p>
        <p>
          Et ipsum amet irure fugiat ex ex cillum. Reprehenderit fugiat
          consequat ex magna nostrud occaecat ad sit reprehenderit esse
          cupidatat sit. Labore non nulla aute sunt. Laborum laboris est
          pariatur quis dolore cupidatat. Consequat quis ipsum qui do laborum
          excepteur. Est deserunt cillum aliqua incididunt ullamco exercitation
          dolor pariatur in ut duis.
        </p>
      </section>
      <section id="about" class="card section">
        <About />
      </section>
      <section id="projects" class="card section">
        <Projects />
      </section>
      <section id="contact" class="card section">
        <Contact />
      </section>
    </div>
  </div>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Background from "./components/Background.vue"
import BackgroundSettings from "./components/BackgroundSettings.vue"
import Navigation from "./components/Navigation.vue"
import About from "./components/About.vue"
import Projects from "./components/Projects.vue"
import Contact from "./components/Contact.vue"
// import HelloWorld from "./components/HelloWorld.vue"
import "./assets/styles.scss"

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style lang="scss" scoped src="./assets/styles.scss">
</style>