<template>
  <div class="container-fluid p-0  mb--50" data-aos="fade-in" id="teams"


  >
    <div class="row no-gutters">


      <div class="col-12">
        <div class="brook-element-carousel swiper-custom-arrow swiper-arrow-hover">
          <swiper :options="swiperOption">

            <div v-for="teamMember in 7" :key="teamMember"
                       class="swiper-slide">
              <div class="card-new-match">

                <div class="card-new-match-header">
                  <h2>08</h2>
                  <div>
                    <h3 >JEUDI</h3>
                    <h3>JUIN</h3>
                  </div>
                </div>


                <div class="card-new-match-body">


                  <img src="/img/home/other_logo_1.png" alt="">

                  <div class="score">

            <span>
              90 +2
            </span>

                    <div class="wrapper-score">
                      <h2>
                        2-3
                      </h2>
                    </div>

                  </div>

                  <img src="/img/home/other_logo_2.png" alt="">


                </div>

                <div class="card-new-match-footer">

                  <h4>Pays de Galle VS Hémlè FC de botko</h4>
                  <span>
          Stage Amadou Aijo

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
      teams: 'user/users'
    })
  },

  async fetch() {

    try {

      await this.$store.dispatch('user/allUser')

    } catch (errors) {
      // Set validation errors on a form

      console.log("une errror se produit", errors.data)
    }

  },

};
</script>