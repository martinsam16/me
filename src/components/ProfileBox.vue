<template>
  <aside>
    <Profile :name="personal_information.short_name"
             :degree="personal_information.degree"
             :linkedin="personal_information.linkedin"
             :github="personal_information.github"
             :twitter="personal_information.twitter"/>
    <PersonalInformation
        :location="personal_information.location"
        :birthday="personal_information.birthday"
        :cv="personal_information.cv"/>
  </aside>
</template>

<script>
import Profile from "@/components/Profile";
import PersonalInformation from "@/components/PersonalInformation";
import personal_information from "@/data/me.json";

export default {
  name: "ProfileBox",
  components: {
    Profile,
    PersonalInformation
  },
  data() {
    return {personal_information};
  }
}
</script>

<style scoped>

</style>
