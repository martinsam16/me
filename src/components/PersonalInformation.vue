<template>
  <div class="widget">
    <h5 class="widget-title">personal information</h5>
    <div class="widget-content">
      <p>Birthday : {{ birthday}}</p>
      <p>Location : {{location}}</p>
      <button class="btn btn-download-cv btn-primary rounded-pill"
              onclick="window.location.href='https://bit.ly/3qiJQST'">
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
    location: String
  }
}
</script>

<style scoped>

</style>
