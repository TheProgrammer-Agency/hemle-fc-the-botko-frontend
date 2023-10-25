<template>
  <div class="brook-testimonial-area bg_color--7 swiper-custom-arrow swiper-arrow-hover">
    <div class="row row--0 align-items-center">
      <div class="col-lg-3 col-xl-5 text-center ptb-md--80 ptb-sm--80">
        <div class="brook-section-title text-left title-max-width plr_sm--30 plr_md--40">
          <h3 class="heading heading-h3 text-white">Ils  sont devenus membre  <br>Et  ils  disent ..
          </h3>
        </div>

      </div>

      <div class="col-lg-9 col-xl-7">
        <div class="brook-element-carousel testimonial-space-right testimonial-color-variation">
          <swiper :options="swiperOption">
            <div class="swiper-slide" v-for="testimonial in testimonies?.testimonies" :key="testimonial.id">
              <div class="testimonial testimonial_style--1 hover-transparent space-large--topbottom bg-dark">
                <div class="content">
                  <p class="bk_pra" v-html="testimonial.testimony"></p>
                  <div class="testimonial-info">
                    <div class="post-thumbnail">
                      <img :src="testimonial.image" :alt="+'Image Client '+testimonial.first_name" width="80">
                    </div>
                    <div class="clint-info">
                      <h6>{{ testimonial.first_name }} {{ testimonial.last_name }}</h6>
                      <span>{{ testimonial.role }}</span>
                    </div>
                  </div>
                  <div class="testimonial-quote">
                    <span class="fa fa-quote-right"></span>
                  </div>
                </div>
              </div>
            </div>
          </swiper>

          <!-- Add Arrows -->
          <button class="swiper-btn swiper-btn-prev">
            <i class="ion ion-ios-arrow-back"></i>
          </button>
          <button class="swiper-btn swiper-btn-next">
            <i class="ion ion-ios-arrow-forward"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../../data/testimonial.json';
import {mapGetters} from "vuex";

export default {
  data () {
    return {
      data,
      swiperOption: {
        loop: true,
        arrows: true,
        centeredSlides: true,
        navigation: {
          nextEl: '.swiper-btn-next',
          prevEl: '.swiper-btn-prev',
          clickable: true,
        },
        // Responsive breakpoints
        breakpoints: {
          768:{
            slidesPerView : 3
          },

          300:{
            slidesPerView : 1
          }
        }
      }
    }
  },
  computed:{
    ...mapGetters({
      testimonies: 'user/testimonies'
    }),


  },

  async fetch() {

    try {

      await this.$store.dispatch('user/getTestimonies')

    } catch (errors) {
      // Set validation errors on a form

      console.log("une errror se produit", errors.data)
    }

  },

};
</script>