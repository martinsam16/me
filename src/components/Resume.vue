<template>
  <section class="resume-section">
    <div class="row">
      <div class="col-lg-6">
        <h6 class="section-subtitle">RESUME</h6>
        <h2 class="section-title">Experience</h2>
        <ul class="time-line">
          <ResumeEvent v-for="(e, i) in experience_events" class="time-line-item" :key="i"
                       :year-range="e.yearRange"
                       :business="e.business"
                       :position="e.position"
                       :description="e.description"/>
        </ul>
      </div>
      <div class="col-lg-6">
        <h6 class="section-subtitle">RESUME</h6>
        <h2 class="section-title">EDUCATION</h2>
        <ul class="time-line">
          <ResumeEvent v-for="(e, i) in education_events" class="time-line-item" :key="i"
                       :year-range="e.yearRange"
                       :business="e.business"
                       :position="e.position"
                       :description="e.description"/>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import ResumeEvent from "@/components/ResumeEvent";
import * as events from "../data/events.json";

const {education_events, experience_events} = events;

export default {
  name: "Resume",
  components: {ResumeEvent},
  data() {
    return {
      education_events,
      experience_events
    };
  }
}
</script>
