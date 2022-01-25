<template>
  <h2>
    <font-awesome-icon :icon="['fas', 'code']" /><br />
    Skills
  </h2>
  <ul class="skills-list">
    <li>
      <a href="https://html.spec.whatwg.org/multipage/" aria-label="HTML">
        <font-awesome-icon :icon="['fab', 'html5']" />
      </a>
    </li>
    <li>
      <a href="https://www.w3.org/Style/CSS/" aria-label="CSS">
        <font-awesome-icon :icon="['fab', 'css3-alt']" />
      </a>
    </li>
    <li>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" aria-label="JavaScript">
        <font-awesome-icon :icon="['fab', 'js']" />
      </a>
    </li>
    <li>
      <a href="https://vuejs.org/" aria-label="Vue.js">
        <font-awesome-icon :icon="['fab', 'vuejs']" />
      </a>
    </li>
    <li>
      <a href="https://reactjs.org/" aria-label="React">
        <font-awesome-icon :icon="['fab', 'react']" />
      </a>
    </li>
    <li>
      <a href="https://www.php.net/" aria-label="PHP">
        <font-awesome-icon :icon="['fab', 'php']" />
      </a>
    </li>
    <li>
      <a href="https://laravel.com/" aria-label="Laravel">
        <font-awesome-icon :icon="['fab', 'laravel']" />
      </a>
    </li>
    <li>
      <a href="https://www.python.org/" aria-label="Python">
        <font-awesome-icon :icon="['fab', 'python']" />
      </a>
    </li>
    <li>
      <a href="https://www.java.com/" aria-label="Java">
        <font-awesome-icon :icon="['fab', 'java']" />
      </a>
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
</style>