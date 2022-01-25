<template>
  <h2><font-awesome-icon :icon="['fas', 'user']" /><br />About me</h2>
  <img
    src="../assets/images/profile-min.jpg"
    width="300" height="300"
    alt="Profile Toan"
    class="profile-img"
  />
  <p>My name is Toan</p>
  <p>
    I'm a starting developer based in Harderwijk, the Netherlands. I'm currently studying software engineering at the Eindhoven University of Technology.
  </p>
</template>

<style lang="scss">
.profile-img {
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 100%;
}
</style>