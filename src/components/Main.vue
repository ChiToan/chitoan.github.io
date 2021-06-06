<template>
  <div id="main" :class="{ 'invert-theme': isInverted }">
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
            excepteur. Est deserunt cillum aliqua incididunt ullamco
            exercitation dolor pariatur in ut duis.
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
  </div>
</template>

<script>
import Background from "./Background.vue";
import BackgroundSettings from "./BackgroundSettings.vue";
import Navigation from "./Navigation.vue";
import About from "./About.vue";
import Projects from "./Projects.vue";
import Contact from "./Contact.vue";

export default {
  name: "Main",
  components: {
    Background,
    BackgroundSettings,
    Navigation,
    About,
    Projects,
    Contact,
  },
  computed: {
    isDark() {
      return this.$store.state.systemTheme && this.$store.state.dark;
    },
    isLight() {
      return this.$store.state.systemTheme && !this.$store.state.dark;
    },
    isInverted() {
      return !this.$store.state.systemTheme;
    },
  },
};
</script>
