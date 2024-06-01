<template>
  <div class="container-fluid mt--50 mb--50" id="teams"
       style="padding:50px 0; background:var(--background-secondary-transparent)"


  >


    <div class="row no-gutters ">


      <div class="col-12 ">
        <div class="brook-element-carousel  swiper-custom-arrow swiper-arrow-hover">
          <swiper :options="swiperOption">



            <div v-for="(score,index) in scores?.scores" :key="index"
                 class="swiper-slide">
              <div class="card-new-match">

                <div class="card-new-match-header">
                  <h2>{{ score.day }}</h2>
                  <div>
                    <h3>{{ score.dayOfTheWeek }}</h3>
                    <h3>{{ score.month }}</h3>
                  </div>
                </div>


                <div class="card-new-match-body">


                  <img :src="score.logo_opposing_team" alt="" style="object-fit: cover">

                  <div class="score">

<!--                <span>
                  90 +2
                </span>-->

                    <div class="wrapper-score">
                      <h2>
                        {{ score.score}}
                      </h2>
                    </div>

                  </div>

                  <img :src="score.logo_visiting_team" alt="" style="object-fit: cover">


                </div>

                <div class="card-new-match-footer">

                  <h4>Pays de Galle VS Hémlè FC de botko</h4>
                  <span>
             {{score.place}}
          </span>
                </div>

              </div>

            </div>
          </swiper>

          <!-- slider arrow navigation -->
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
import data from '../data/team.json';
import {mapGetters} from "vuex";

export default {
  components: {
    TeamMemberThree: () => import('../components/TeamMemberThree'),
  },
  data() {
    return {
      data,
      swiperOption: {
        spaceBetween: 20,
        loop: true,
        speed: 1000,
        autoplay: true,

        navigation: {
          nextEl: '.swiper-btn-next',
          prevEl: '.swiper-btn-prev'
        },
        // Responsive breakpoints
        breakpoints: {
          1499: {
            slidesPerView: 3
          },

          768: {
            slidesPerView: 3

          },

          480: {
            slidesPerView: 2
          }
        }
      }
    }
  },

  computed: {
    ...mapGetters({
      scores: 'scores/scores'
    })
  },

  async fetch() {

    try {


      await this.$store.dispatch('scores/allScore')

    } catch (errors) {
      // Set validation errors
      //
      // console.loon a form

      console.log("errrors scores", errors.response)
      console.log("errrors scores", errors)

      console.log("une errror se produit", errors.data)
    }

  },

};
</script>