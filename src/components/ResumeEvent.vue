<template>
  <li class="time-line-item">
    <span class="badge badge-primary">{{ yearRange }}</span>
    <h6 class="time-line-item-title">{{ position }}</h6>
    <p class="time-line-item-subtitle">{{ business }}</p>
    <p class="time-line-item-content">
      {{ description }}
    </p>
  </li>
</template>

<script>
export default {
  name: "ResumeEvent",
  props: {
    yearRange: String,
    business: String,
    position: String,
    description: String
  }
}
</script>

<style scoped>

</style>
