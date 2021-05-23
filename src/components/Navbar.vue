<template>
  <header>
    <button class="btn btn-white btn-share ml-auto mr-3 ml-md-0 mr-md-auto">
      <img src="./../assets/images/share.svg" alt="share" class="btn-img">
      SHARE
    </button>
    <nav class="collapsible-nav" id="collapsible-nav">
      <a href="#" class="nav-link active">HOME</a>
      <a href="#" class="nav-link">PORTFOLIO</a>
      <a href="#" class="nav-link">BLOG</a>
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
