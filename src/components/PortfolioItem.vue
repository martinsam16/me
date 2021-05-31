<template>
  <figure class="portfolio-item hover-box">
    <a :href="projectUrl" target="_blank">
    <img :src="projectCover"
         alt="project"
         class="portfolio-item-img">
    </a>
    <figcaption class="portfolio-item-details overlay">
      <h4>{{projectName}}</h4>
      <p class="portfolio-item-description">{{projectDescription}}</p>
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: "PortfolioItem",
  props: {
    projectCover: String,
    projectName: String,
    projectDescription: String,
    projectUrl: String
  }
}
</script>
