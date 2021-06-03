<template>
  <Background />
  <div class="container">
    <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->

    <div class="card navbar">
      <Navigation />
    </div>
    <div class="settings">
      <BackgroundSettings />
    </div>
    <div class="content">
      <section id="welcome" class="card section">
        <h2><font-awesome-icon :icon="['fas', 'home']" /><br />Welcome</h2>
        <p>This is my page WIP</p>
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

<script lang="ts">
import { defineComponent } from "vue";
import Background from "./components/Background.vue";
import BackgroundSettings from "./components/BackgroundSettings.vue";
import Navigation from "./components/Navigation.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";
// import HelloWorld from "./components/HelloWorld.vue"
import "./assets/styles.scss";

export default defineComponent({
  name: "App",
  components: {
    Background,
    BackgroundSettings,
    Navigation,
    About,
    Projects,
    Contact,
    // HelloWorld
  },
});
</script>

<style lang="scss" scoped src="./assets/styles.scss">
</style>