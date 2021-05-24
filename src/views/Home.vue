<template>
  <div class="content-wrapper">
    <ProfileBox/>
    <main>
      <Intro :description="personal_information.description"/>
      <Resume/>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from "@/components/Intro";
import Resume from "@/components/Resume";

import personal_information from '../data/me.json';
import ProfileBox from "@/components/ProfileBox";

export default {
  name: 'Home',
  components: {
    ProfileBox,
    Resume,
    Intro
  },
  data() {
    return {personal_information};
  }
}
</script>
