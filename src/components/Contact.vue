<template>
  <h2>
    <font-awesome-icon :icon="['fas', 'address-card']" /><br />
    Contact
  </h2>
  <ul class="contact-info">
    <li>
      <a href="tel:+31612463062" aria-label="Phone"
        ><font-awesome-icon :icon="['fas', 'phone']"
      /></a>
      <!-- <a href="https://wa.me/31612463062" aria-label="WhatsApp"
        ><font-awesome-icon :icon="['fab', 'whatsapp']"
      /></a> -->
      <br />
      +31612463062
    </li>
    <li>
      <a
        href="mailto:chi.toan.luu@gmail.com"
        target="_blank"
        rel="noopener"
        aria-label="Email"
        ><font-awesome-icon :icon="['fas', 'envelope']"
      /></a>
      <br />
      chi.toan.luu@gmail.com
    </li>
    <li>
      <a
        href="https://github.com/ChiToan"
        target="_blank"
        rel="noopener"
        aria-label="Github"
        ><font-awesome-icon :icon="['fab', 'github']"
      /></a>
      <br />ChiToan
    </li>
    <li>
      <a
        href="https://www.linkedin.com/in/toan-luu"
        target="_blank"
        rel="noopener"
        aria-label="LinkedIn"
        ><font-awesome-icon
          :icon="['fab', 'linkedin']"
          style="padding: 0 1.5px"
      /></a>
      <br />Chi-Toan Luu
    </li>
  </ul>
</template>

<style lang="scss">
.contact-info {
  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    // height: 2rem;
    // word-wrap: break-word;
    // white-space: nowrap;
    padding: 1rem 0;
    // border-top: 1px solid #ddd;

    a {
      margin: 0;
      padding: 0 0.5em;
      font-size: 1.8rem;
    }
  }
}
</style>