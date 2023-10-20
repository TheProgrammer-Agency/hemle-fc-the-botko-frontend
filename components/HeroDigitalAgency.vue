<template>
    <div class="brook-hero-number-slider-area position-relative">
        <div class="brook-element-carousel number-dot">
            <swiper :options="swiperOption">
                <div class="swiper-slide" v-for="slider in sliders" :key="slider.id">
                    <div class="hero-item bg-image" :style="{ backgroundImage: `url(${slider.bgImage})` }">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <div class="hero-content-2 center">
                                      <h3 v-html="slider.heading"></h3>
                                        <n-link to="#pricing" class="bk-btn theme-btn">{{ $t('tools.btn.become_member') }}</n-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper>

            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                swiperOption: {
                    spaceBetween: 20,
                    loop: false,
                    speed: 1000,
                    autoplay: {
                        delay: 5000
                    },
                    effect: "fade",
                    fadeEffect: { 
                        crossFade: true 
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                        renderBullet: function (index, className) {
                            return '<span class="' + className + '">' + (index + 1) + '</span>';
                        },
                    },
                },

                sliders: [

                ]
            }
        },

      mounted() {

          this.sliders=[

            {
              id: 1,
              heading: this.$t('home.banner_title_1'),
              heading_completed:"",

              bgImage: "/img/home/hero1.jpg"
            },
            {
              id: 2,
              heading: this.$t('home.banner_title_2'),
              bgImage: "/img/home/hero1.jpg"
            },
            {
              id: 3,
              heading: this.$t('home.banner_title_3'),
              bgImage: "/img/home/hero1.jpg"
            }
          ]
      }
    };
</script>