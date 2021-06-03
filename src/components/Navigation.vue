<template>
  <nav class="navbar-items">
    <a href="#welcome"><font-awesome-icon :icon="['fas', 'home']" /> Welcome</a>
    <a href="#about"><font-awesome-icon :icon="['fas', 'user']" /> About</a>
    <a href="#projects"><font-awesome-icon :icon="['fas', 'list']" /> Projects</a>
    <a href="#contact"><font-awesome-icon :icon="['fas', 'address-card']" /> Contact</a>
  </nav>
</template>

<style lang="scss">
.navbar-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  a {
    width: 6ch;
  }
}
</style>