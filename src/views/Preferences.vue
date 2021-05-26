<template>
  <div class="content-wrapper">
    <ProfileBox/>
    <main>
      <div class="row">
        <div class="col-lg-3 col-md-3">
          <p>Dark mode</p>
        </div>
        <div class="col-lg-3 col-md-3">
          <label class="switch">
            <input type="checkbox" v-on:click="toggleTheme" :checked="this.theme === 'darkMode'">
            <span class="slider round"></span>
          </label>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import ProfileBox from "@/components/ProfileBox"
export default {
  name: "Preferences",
  components: {
    ProfileBox
  },
  mounted() {
    let localTheme = localStorage.getItem('theme');
    this.theme = localTheme;
    document.documentElement.setAttribute('data-theme', localTheme);
  },
  data() {
    return {
      theme: ''
    };
  },
  methods: {
    toggleTheme
  }
}

function toggleTheme() {
  this.theme = this.theme === 'darkMode' ? '' : 'darkMode';
  document.documentElement.setAttribute('data-theme', this.theme);
  localStorage.setItem('theme', this.theme);
}
</script>

