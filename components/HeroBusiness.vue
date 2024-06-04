<template>
    <div class="slider-area hero-business position-relative">
        <div class="number-dot">
            <swiper :options="swiperOption" v-for="(banner,index) in banners.data">
                <div class="hero-item bg-image swiper-slide" :style="{ background: `url(${banner.image}) center center /cover no-repeat` }">
                    <div class="container">
                      <h1 class="text-center text-white "  style="position: absolute;bottom: 100px;text-align: center;left: 0;right: 0">

                       <span v-html="banner.title[$i18n.locale]"></span>

                      </h1>

                    </div>
                    <div class="hero-bottom-content">

                        <a href="javascript:void(0)" class="scroll-more">
                            <h6>Scroll for more</h6>
                            <img src="/img/slider/mouse-icon.png" alt="icon">
                        </a>

                        <!-- <div class="video-btn">
                            Watch video
                            <a class="play__btn" href="https://www.youtube.com/watch?v=9No-FiEInLA" target="_blank">
                                <div class="video-icon third-icon secondary-color"></div>
                            </a>
                        </div> -->

<!--                        <client-only>
                            <silent-box :image="videos[0]">
                                <template v-slot:silentbox-item>
                                    <div class="video-btn">
                                        <div class="play__btn">
                                            <div class="video-icon second-icon"></div>
                                        </div>
                                    </div>
                                </template>
                            </silent-box>
                        </client-only>-->


                    </div>
                </div>




            </swiper>
            <!-- Add Pagination -->
<!--
            <div class="swiper-pagination-2"></div>
-->

        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        data (){
            return {
                videos: [
                    {
                        src: 'https://youtu.be/8Gu4RWwsIns',
                        thumbnail: "/img/home/bg_3.jpg"
                    }
                ],
                swiperOption: {
                    spaceBetween: 20,
                    loop: true,
                    speed: 1000,
                    autoplay: false,
                    effect: "fade",
                    fadeEffect: { 
                        crossFade: true 
                    },
                    pagination: {
                        el: '.swiper-pagination-2',
                        clickable: true,
                        renderBullet: function (index, className) {
                            return '<span class="' + className + '">' + (index + 1) + '</span>';
                        },
                    },
                },
            }
        },

      computed:{
        ...mapGetters({
          banners: 'banners/banners'
        })
      },
      async fetch() {

        try {

          await this.$store.dispatch('banners/lastBanners')

        } catch (errors) {
          // Set validation errors on a form

        }

      },
    };
</script>

<style lang="scss" >
    .hero-business {
        .hero-content-2 {
            h3 {
                font-size: 70px;
                line-height: 1.2;
                // res
                @media #{$md-layout}{
                    font-size: 50px;
                }
                @media #{$sm-layout}{
                    font-size: 36px;
                }

                span {
                    display: inline-flex;
                    position: relative;
                    padding-left: 90px;
                    margin-left: 45px;
                    // res
                    @media #{$md-layout, $sm-layout}{
                        margin-left: 0;
                    }
                    @media #{$small-mobile}{
                        padding-left: 0;
                    }
                    &:before {
                        width: 70px;
                        height: 5px;
                        left: 0;
                        top: 45px;
                        content: "";
                        position: absolute;
                        background-color: rgb(255, 94, 225);
                        // res
                        @media #{$sm-layout}{
                            top: 20px;
                        }
                        @media #{$small-mobile}{
                            display: none;
                        }
                    }
                }
            }
        }
        .hero-bottom-content {
            bottom: 80px;
            display: flex;
            justify-content: space-between;
            position: absolute;
            width: 100%;
            padding: 0 15px;
            
            // res
            @media screen and (min-width: 1200px) {
                padding: 0 150px;
            }
            @media #{$md-layout, $sm-layout}{
                bottom: 30px;
            }

            .scroll-more {
                display: flex;
                align-items: center;
                border: none;
                text-align: left;
                h6 {
                    color: $white;
                    font-size: 18px;
                    font-weight: 600;
                    margin-bottom: 0;
                    padding-right: 15px;
                    font-family: $body-font;
                }
                // res
                @media #{$small-mobile}{
                    display: none;
                }
            }
            .video-btn {
                display: flex;
                align-items: center;
                color: $white;
                font-weight: 700;
                a {
                    padding-left: 30px;
                    .video-icon {
                        @media #{$sm-layout}{
                            width: 70px;
                            height: 70px;
                        }
                    }
                }
            }
        }
        .swiper-pagination-2 {
            text-align: center;
            bottom: 122px;
            width: auto;
            // res
            @media #{$md-layout}{
                bottom: 72px;
            }
            @media #{$sm-layout}{
                bottom: 52px;
            }
            @media #{$large-mobile}{
                display: none;
            }
        }
        .number-dot {
            .swiper-pagination-2 {
                position: absolute;
                z-index: 1;
                left: 50%;
                transform: translateX(-50%);
                text-align: center;
                bottom: 122px;
                width: auto;
                // Responsive
                @media #{$md-layout}{
                    bottom: 72px;
                }
                @media #{$sm-layout}{
                    bottom: 52px;
                }
                @media #{$large-mobile}{
                    display: none;
                }
                .swiper-pagination-bullet {
                    background: none;
                    color: $white;
                    font-size: 20px;
                    line-height: 20px;
                    position: relative;
                    margin: 0 10px !important;
                    opacity: 1;
                    &:focus {
                        outline: none;
                        box-shadow: none;
                    }
                    &::before {
                        content: "";
                        bottom: -15px;
                        left: 0;
                        width: 0;
                        height: 2px;
                        background-color: $white;
                        z-index: 9;
                        opacity: 0;
                        position: absolute;
                        visibility: hidden;
                        transition: all 0.3s ease-in-out;
                    }
                    &:hover,
                    &-active {
                        &::before{
                            opacity: 1;
                            visibility: visible;
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
    .silentbox-is-opened {
        .swiper-pagination-2 {
            z-index: -1 !important;
        }
    }
</style>

