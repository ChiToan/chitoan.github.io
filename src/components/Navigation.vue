<template>
  <nav class="navbar-items card">
    <a href="#"><font-awesome-icon :icon="['fas', 'home']" /> Home</a>
    <a href="#about"><font-awesome-icon :icon="['fas', 'user']" /> About</a>
    <a href="#projects"
      ><font-awesome-icon :icon="['fas', 'list']" /> Projects</a
    >
    <a href="#contact"
      ><font-awesome-icon :icon="['fas', 'address-card']" /> Contact</a
    >
  </nav>
</template>

<style lang="scss">
.navbar-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  a {
    max-width: 6ch;
    padding: 0.2rem 0.5rem;
  }
}
</style>