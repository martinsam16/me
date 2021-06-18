<template>
  <header>
    <button class="btn btn-white btn-share ml-auto mr-3 ml-md-0 mr-md-auto">
      <img src="./../assets/images/share.svg" alt="share" class="btn-img">
      SHARE
    </button>
    <nav class="collapsible-nav" id="collapsible-nav">
      <router-link to="/" class="nav-link">Home 🏠</router-link>
      <router-link to="/knowledge" class="nav-link">Know 🧠</router-link>
      <router-link to="/portfolio" class="nav-link">Portfolio 💼</router-link>
      <router-link to="/ideas" class="nav-link">Ideas 💡</router-link>
      <router-link to="/preferences" class="nav-link">⚙️</router-link>
    </nav>
    <button class="btn btn-menu-toggle btn-white rounded-circle" data-toggle="collapsible-nav"
            data-target="collapsible-nav"><img src="./../assets/images/hamburger.svg" alt="hamburger"></button>
  </header>
</template>

<script>
export default {
  name: "Navbar"
}
</script>
