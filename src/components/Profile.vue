<template>
  <div>
    <div class="profile-img-wrapper">
      <img src="../assets/images/me.png" alt="profile">
    </div>
    <h1 class="profile-name">{{ name }}</h1>
    <div class="text-center">
      <span class="badge badge-white badge-pill profile-designation">{{ degree }}</span>
    </div>
    <nav class="social-links">
      <a :href="linkedin" target="_blank" class="social-link">
        <font-awesome-icon :icon="['fab', 'linkedin']"/>
      </a>
      <a :href="github" target="_blank" class="social-link">
        <font-awesome-icon :icon="['fab', 'github']"/>
      </a>
      <a :href="twitter" target="_blank" class="social-link">
        <font-awesome-icon :icon="['fab', 'twitter']"/>
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Profile",
  props: {
    name: String,
    degree: String,
    linkedin: String,
    github: String,
    twitter: String
  }
}
</script>

<style scoped>

</style>
