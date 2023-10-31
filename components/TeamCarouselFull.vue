<template>
    <div class="container-fluid p-0" data-aos="fade-in"  id="teams" >

      <h1 class="heading heading-h1 line-height-1-5 text-center d-flex justify-content-center  align-items-center">


        <hr class="hr-text">
        {{$t('home.players')}}
        <hr class="hr-text">

      </h1>

      <br><br>
        <div class="row no-gutters">




            <div class="col-12">
                <div class="brook-element-carousel swiper-custom-arrow swiper-arrow-hover">
                    <swiper :options="swiperOption">

                        <nuxt-link  v-for="teamMember in teams.teams" :key="teamMember.id"  :to="'/teams/'+teamMember.uuid" class="swiper-slide">
                            <TeamMemberThree :teamMember="teamMember" />
                        </nuxt-link>

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
        data () {
            return {
                data,
                swiperOption: {
                    spaceBetween: 60,
                    speed: 1000,
                    navigation: {
                        nextEl: '.swiper-btn-next',
                        prevEl: '.swiper-btn-prev'
                    },
                    // Responsive breakpoints
                    breakpoints: {
                        1499:{
                            slidesPerView : 5
                        },

                        768:{
                            slidesPerView : 3

                        },

                        480:{
                            slidesPerView : 2
                        }
                    }
                }
            }
        },

      computed:{
        ...mapGetters({
          teams : 'user/users'
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
