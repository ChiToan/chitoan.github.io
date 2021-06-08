<template>
  <h2>
    <font-awesome-icon :icon="['fas', 'code']" /><br />
    Skills
  </h2>
  <ul class="skills-list">
    <li>
      <font-awesome-icon :icon="['fab', 'css3-alt']" />
    </li>
    <li>
      <font-awesome-icon :icon="['fab', 'html5']" />
    </li>
    <li>
      <font-awesome-icon :icon="['fab', 'js']" />
    </li>
    <li>
      <font-awesome-icon :icon="['fab', 'vuejs']" />
    </li>
    <li>
      <font-awesome-icon :icon="['fab', 'react']" />
    </li>
    <li>
      <font-awesome-icon :icon="['fab', 'php']" />
    </li>
    <li>
      <font-awesome-icon :icon="['fab', 'laravel']" />
    </li>
    <li>
      <font-awesome-icon :icon="['fab', 'python']" />
    </li>
    <li>
      <font-awesome-icon :icon="['fab', 'java']" />
    </li>
  </ul>
</template>

<style lang="scss">
.skills-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  place-content: center;

  li {
    font-size: xx-large;
    padding: 0.3em;
    // border-top: 1px solid $soft-border;
  }
}
</style>>