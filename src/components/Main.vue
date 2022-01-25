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
          <p>This is my personal information page. Here I show you some projects I've worked on and some of skills I've learned.</p>
          <p>This page also serves as a frontend testing place for me, where I try to implement some fun functionalities and designs. 
            For now this page has a moving triangles wallpaper, which you can play arround with in the settings.</p>
        </section>
        <section id="about" class="card section">
          <About />
        </section>
        <section id="skills" class="card section">
          <Skills />
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
import Skills from "./Skills.vue";
import Projects from "./Projects.vue";
import Contact from "./Contact.vue";

export default {
  name: "Main",
  components: {
    Background,
    BackgroundSettings,
    Navigation,
    About,
    Skills,
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
