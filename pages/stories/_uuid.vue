<template>
  <div class="main-container main-container-stories" style="background-image: url('/img/home/bg_5.jpg');background-size: cover">





    <div class="story">

      <div class="story__slider swiper">
        <div class="story__wrapper swiper-wrapper">

          <div class="story__slide swiper-slide" v-for="(image, index) in story.images">
            <img :src="image" />
          </div>
<!--
          <div class="story__slide swiper-slide">
            <video autoplay muted>
              &lt;!&ndash; May not work in the future, just change source &ndash;&gt;
              <source src="https://exit109.com/~dnn/clips/RW20seconds_1.mp4#t=.1" type="video/mp4">
            </video>
          </div>

          <div class="story__slide swiper-slide">
            <img src="https://picsum.photos/450/810" />
          </div>-->


        </div>

        <div class="story__next swiper-button-next"></div>
        <div class="story__prev swiper-button-prev"></div>

        <div class="story__pagination swiper-pagination"></div>
      </div>
    </div>


  </div>
</template>

<script>

import data from "../../data/service.json";
import blogs from '~/data/blog.json';
import {slugify} from '~/mixins/slugify'
import {mapGetters} from "vuex";


export default {
  mixins: [slugify],
  auth:false,


  components: {

  },

  data() {
    return {
      data,
      blogs,
      navOpen: false,
      searchOpen: false
    }
  },

  computed:{
    ...mapGetters({
      story : 'stories/story_selected'
    })
  },

  mounted() {



    console.log("story = ",this.story)

    document.body.classList.add('template-color-1', 'template-font-2')


    //set video duration
    const videos = document.querySelectorAll('.story__slide video');
    videos.forEach(video => {
      $(video).parent('.story__slide').attr('data-swiper-autoplay', video.duration * 1000);
    });

    const slider = new Swiper(".story__slider", {
      speed: 1,
      watchSlidesProgress: true,
      loop: true,
      autoplay: {
        delay: 15000,
        disableOnInteraction: false
      },
      slidesPerView: 1,
      navigation: {
        nextEl: ".story__next",
        prevEl: ".story__prev",
      },
      pagination: {
        el: '.story__pagination',
        renderBullet: function (index, className) {
          return '<div class="' + className + '"> <div class="swiper-pagination-progress"></div> </div>';
        }
      },
      on: {
        autoplayTimeLeft(swiper, time, progress) {
          let currentSlide = document.querySelectorAll('.story__slider .swiper-slide')[swiper.activeIndex]
          let currentBullet = document.querySelectorAll('.story__slider .swiper-pagination-progress')[swiper.realIndex]
          let fullTime = currentSlide.dataset.swiperAutoplay ? parseInt(currentSlide.dataset.swiperAutoplay) : swiper.params.autoplay.delay;

          let percentage = Math.min( Math.max ( parseFloat(((fullTime - time) * 100 / fullTime).toFixed(1)), 0), 100) + '%';

          gsap.set(currentBullet, {width: percentage});
        },
        transitionEnd(swiper) {
          let allBullets = $('.story__slider .swiper-pagination-progress');
          let bulletsBefore = allBullets.slice(0, swiper.realIndex);
          let bulletsAfter = allBullets.slice(swiper.realIndex, allBullets.length);
          if(bulletsBefore.length) {gsap.set(bulletsBefore, {width: '100%'})}
          if(bulletsAfter.length) {gsap.set(bulletsAfter, {width: '0%'})}

          let activeSlide = document.querySelectorAll('.story__slider .swiper-slide')[swiper.realIndex];
          if (activeSlide.querySelector('video')) {
            activeSlide.querySelector('video').currentTime = 0;
          }
        },
      }
    });
  },

  head() {
    return {
      title: 'Home Business'
    }
  },
};
</script>

<style lang="scss">

.main-container-stories{

  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #171933;

}
.story {


  position: relative;
&__slider {
   width: 450px;
   height: 800px;
   border-radius: 6px;
   overflow: hidden;
 }

&__wrapper {

 }

&__slide {
   position: relative;

video,
img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
}

&__pagination {
   bottom: unset !important;
   top: 8px !important;
   display: flex;
   padding: 0 4px;

  width: 100%;


.swiper-pagination-bullet {
  flex-grow: 1;
  border-radius: 100vh;
  height: 3px;
  margin: 0 2px !important;
  background-color: rgba($color: #f7f7f5, $alpha: .4);
  opacity: 1;

.swiper-pagination-progress {
  height: 100%;
  width: 0%;
  border-radius: 100vh;
  background-color: #f7f7f5;
}
}
}

&__prev,
&__next {
   height: 100%;
   width: 50%;
   top: 0;
   margin-top: 0;

&::after {
   content: none;
 }
}

&__prev {
   left: 0;
 }

&__next {
   right: 0;
 }
}
</style>