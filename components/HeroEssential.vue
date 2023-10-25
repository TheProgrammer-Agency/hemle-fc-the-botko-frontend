<template>
    <div class="hero-essential-area swiper-arrow-hover">
        <swiper :options="swiperOption">
            <div class="swiper-slide" v-for="slider in sliders" :key="slider.id">
                <div class="hero-essential-slide bg-cover" :style="{background: `url(${slider.bgImage})` +' center center /cover'}">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="hero-content hero-essential">
                                    <h2 class="hero-title" v-html="slider.heading"></h2>
                                    <p>{{ slider.description }}</p>
                                  <n-link to="#pricing" class="bk-btn theme-btn">{{ $t('tools.btn.become_member') }}</n-link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </swiper>
        <!-- slider arrow navigation -->
        <div class="ht-swiper-button ht-swiper-button-prev">
            <i class="ion ion-ios-arrow-back"></i>
        </div>
        <div class="ht-swiper-button ht-swiper-button-next">
            <i class="ion ion-ios-arrow-forward"></i>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                swiperOption: {
                    loop: true,
                    speed: 8000,
                    autoplay: true,
                    effect: "fade",

                    navigation: {
                        nextEl: '.ht-swiper-button-next',
                        prevEl: '.ht-swiper-button-prev'
                    },
                },
                sliders: [

                ]
            }
        },

      mounted() {
        this.sliders=[


          {
            id: 2,
            heading: this.$t('home.banner_title_2'),
            bgImage: "/img/home/hero1.jpg",
            description:"",

          },
          {
            id: 3,
            heading: this.$t('home.banner_title_3'),
            bgImage: "/img/home/hero1.jpg",
            description:"",

          },
          {
            id: 1,
            heading: this.$t('home.banner_title_1'),
            heading_completed:"",
            description:"Plongez dans le monde dynamique des Hémlèens et Hémléennes, une famille  de football passionnée. Découvrez notre histoire riche, rencontrez nos joueurs emblématiques et vibrez au rythme de chaque match. Rejoignez-nous pour vivre des moments inoubliables et partager la passion du beau jeu.\n",

            bgImage: "/img/home/hero1.jpg"
          },
        ]
      }
    };
</script>

<style lang="scss" scoped>
    .hero-essential-slide {
        height:100vh;
        display: flex;
        align-items: center;
        position: relative;

      h2{
        color:var(--text-color-inversed)
      }

      p{
        color:var(--text-color-inversed);
        font-size: var(--normal-font);


      }
        // res
        @media #{$md-layout}{
            height: 100vh;
        }
        @media #{$sm-layout}{
          height: 100vh;
        }
        @media #{$small-mobile}{
          height: 100vh;
        }
        .hero-content {
            max-width: 500px;
            .hero-title {
                font-size: 48px;
                font-weight: 300;
                // res
                @media #{$sm-layout}{
                    font-size: 40px;
                }
                @media #{$small-mobile}{
                    font-size: 32px;
                }
            }
            h5 {
                color: #777;
                font-size: 20px;
                font-weight: 300;
                line-height: 1.2;
                margin-bottom: 40px;
                // res
                @media #{$sm-layout}{
                    color: #444;
                }
                @media #{$small-mobile}{
                    margin-top: 15px;
                    line-height: 1.5;
                }
            }
        }
    }
    .hero-essential-area {
        .ht-swiper-button {
            color: $black;
            font-size: 30px;
            left: 70px;
            width: 68px;
            height: 68px;
            line-height: 68px;
            border-radius: 50%;
            text-align: center;
            background-color: $white;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.01);
            &-next {
                right: 70px;
                left: auto;
            }
        }
    }
</style>