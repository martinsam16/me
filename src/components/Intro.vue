<template>
  <section class="intro-section">
    <h2 class="section-title">Hello, welcome to my Web site 👋🎉</h2>
    <p>
      {{ description }}
    </p>
    <a href="mailto:martinsam1610@gmail.com" target="_blank" class="btn btn-primary btn-hire-me">HIRE ME</a>
  </section>
</template>

<script>
export default {
  name: "Intro",
  props: {
    description: String
  }
}
</script>

