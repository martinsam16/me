<template>
  <div class="widget">
    <h5 class="widget-title">personal information</h5>
    <div class="widget-content">
      <p>Birthday : {{ birthday }}</p>
      <p>Location : {{ location }}</p>
      <button class="btn btn-download-cv btn-primary rounded-pill"
              v-on:click="openResumeFile(cv)">
        <img src="../assets/images/download.svg"
             alt="download"
             class="btn-img">
        Download CV
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalInformation",
  props: {
    birthday: String,
    location: String,
    cv: String
  },
  methods: {
    openResumeFile: (cv) => {
      window.open(cv, '_blank');
    }
  }
}
</script>

<style scoped>

</style>
