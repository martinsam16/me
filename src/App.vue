<template>
  <div id="app">
    <Navbar/>
    <router-view/>
   <Footer/>
  </div>
</template>


<script>
import Navbar from "@/components/Navbar";

import $ from 'jquery';
import jQuery from 'jquery';
import Footer from "@/components/Footer";


export default {
  components: {Footer, Navbar},
  mounted() {
    $('[data-toggle="collapsible-nav"]').on('click', function (e) {
      console.log(e);
      var target = ($(this).data('target'));
      $('#' + target).toggleClass('show');
    });
    $(document).ready(function () {
      if (window.innerWidth >= 992) {
        $('#collapsible-nav').addClass('show');  //Show navigation menu in bigger screens by default.
      } else {
        $('#collapsible-nav').removeClass('show');
      }
      if ($('.hover-box').length) {
        setHoverBoxPerspective();
      }
    });
    $(window).resize(
        function () {
          if ($('.hover-box').length) {
            setHoverBoxPerspective();
          }
        }
    );

    function setHoverBoxPerspective() {
      $('.hover-box').css({
        'perspective': function () {
          return Math.max($(this).width(), $(this).height()) * 2 + 50;
        }
      });
    }

    var classNames = ['in-up', 'in-right', 'in-down', 'in-left', 'out-up', 'out-right', 'out-down', 'out-left']; // Animation classes.
    $('.hover-box').hover(
        function (event) {
          var direction = "up";
          if (jQuery.fn.entry) { //Check if entry js file is loaded.
            direction = $(this).entry({e: event}); // Get mouse in direction.
          }
          $(this).removeClass(classNames.join(" ")); // Remove existing animation classes.
          $(this).addClass("in-" + direction); //Add mouse in animation
        },
        function (event) {
          var direction = "up";
          if (jQuery.fn.entry) {
            direction = $(this).entry({e: event}); // Get mouse out direction.
          }
          $(this).removeClass(classNames.join(" "));
          $(this).addClass("out-" + direction); //Add mouse out animation
        }
    );
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700&display=swap');
@import 'assets/css/me.css';
</style>
