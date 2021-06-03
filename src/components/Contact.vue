<template>
  <h2><font-awesome-icon :icon="['fas', 'address-card']" /><br/> 
  Contact</h2>
  <ul class="contact-info">
    <li>
      <a href="tel:0612463062"><font-awesome-icon :icon="['fas', 'phone']" /></a>
      <a href="https://wa.me/31612463062"><font-awesome-icon :icon="['fab', 'whatsapp']" /></a> 
      +31 6 12463062
      
    </li>
    <li>
      <a href="mailto:chi.toan.luu@gmail.com"><font-awesome-icon :icon="['fas', 'envelope']" /></a>
      chi.toan.luu@gmail.com
    </li>
    <li>
      <a href="https://github.com/ChiToan"><font-awesome-icon :icon="['fab', 'github']" /></a>
      ChiToan
    </li>
    <li>
      <a href="https://www.linkedin.com/in/toan-luu"><font-awesome-icon :icon="['fab', 'linkedin']" style="padding:0 1.5px;"/></a>
        Chi-Toan Luu
    </li>
  </ul>
</template>

<style lang="scss">
.contact-info {
  text-align: left;
  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    height: 2rem;

    a {
      margin: 0;
      padding: 0 0.5em;
      font-size: 1.5rem;
    }
  }
}
</style>