<template>
  <div class="content-wrapper">
    <ProfileBox/>
    <main>
      <section class="portfolio-section">
        <h2 class="section-title">PORTFOLIO</h2>

        <div class="portfolio-wrapper">
          <PortfolioItem v-for="(e, i) in portfolioItems" :key="i"
                         :project-name="e.projectName"
                         :project-description="e.projectDescription"
                         :project-cover="e.projectCover"
                         :project-url="e.projectUrl"/>
        </div>

      </section>
    </main>
  </div>
</template>

<script>
import ProfileBox from "@/components/ProfileBox";
import setHoverBoxPerspective from "@/assets/js/me";
import $ from "jquery";
import PortfolioItem from "@/components/PortfolioItem";
import * as items from "../data/items.json";

const {portfolioItems} = items;

export default {
  name: 'Portfolio',
  components: {
    PortfolioItem,
    ProfileBox
  },
  mounted() {
    if ($('.hover-box').length) {
      setHoverBoxPerspective();
    }
  },
  data() {
    return {portfolioItems};
  }
}
</script>
