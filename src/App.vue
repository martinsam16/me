<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>


<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import $ from 'jquery';


export default {
  components: {Footer, Navbar},
  mounted() {

    this.theme = localStorage.getItem('theme');
    document.documentElement.setAttribute('data-theme', this.theme);

    $('[data-toggle="collapsible-nav"]').on('click', function (e) {
      console.log(e);
      const target = ($(this).data('target'));
      $('#' + target).toggleClass('show');
    });
    $(document).ready(function () {
      if (window.innerWidth >= 992) {
        $('#collapsible-nav').addClass('show');  //Show navigation menu in bigger screens by default.
      } else {
        $('#collapsible-nav').removeClass('show');
      }
    });
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700&display=swap');
@import 'assets/css/me.css';
</style>
