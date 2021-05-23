<template>
  <div id="app">
    <Navbar/>
    <div class="content-wrapper">
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
      <main>
        <Intro :description="personal_information.description"/>
        <Resume/>
      </main>
    </div>
  </div>
</template>

<script>

import $ from 'jquery';
import jQuery from 'jquery';
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import PersonalInformation from "@/components/PersonalInformation";
import Intro from "@/components/Intro";
import Resume from "@/components/Resume";

import personal_information from './data/me.json';

export default {
  name: 'App',
  components: {
    Resume,
    Intro,
    PersonalInformation,
    Profile,
    Navbar
  },
  data() {
    return {personal_information};
  },
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
