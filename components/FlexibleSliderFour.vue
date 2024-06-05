<template>
    <div class="flexableimage__wrapper">
        <swiper :options="swiperOption">

          <n-link class="swiper-slide" v-for="(blog,index) in blogs" :key="index" :to="localePath(`/blog/${blog.uuid}`)">


              <div class="flexale-image">
                <div class="thumb">
                  <img :src="blog.image" alt="image">
                </div>
                <h2 class="text-white text-center">{{ blog.title[[$i18n.locale]] }}</h2>

              </div>



          </n-link>



        </swiper>

        <!-- Add Arrows -->
        <button class="swiper-btn swiper-btn-prev">
            <i class="fas fa-angle-left"></i>
        </button>
        <button class="swiper-btn swiper-btn-next">
            <i class="fas fa-angle-right"></i>
        </button>
    </div>
</template>

<script>
    export default {

      props:['blogs'],
        data () {
            return {
                swiperOption: {
                    speed: 1500,
                    slidesPerView: 2,
                    spaceBetween: 60,
                    loop: true,
                    centeredSlides: true,
                    autoplay: true,
                    navigation: {
                        nextEl: '.swiper-btn-next',
                        prevEl: '.swiper-btn-prev'
                    },
                    // Responsive breakpoints
                    breakpoints: {
                        992:{
                            slidesPerView: 2,
                            centeredSlides: true,
                        },

                        768:{
                            centeredSlides: false,
                        },

                        576:{
                            slidesPerView : 2,
                            centeredSlides: false,
                        },
                        300:{
                            slidesPerView : 1,
                            centeredSlides: false,
                        }
                    }
                },
                sliders: [
                    {
                        id: 1,
                        image: "/img/flexable-image-slide/flexale-1/flexable-lg--image-1.jpg"
                    },
                    {
                        id: 2,
                        image: "/img/flexable-image-slide/flexale-1/flexable-lg--image-2.jpg"
                    },
                    {
                        id: 3,
                        image: "/img/flexable-image-slide/flexale-1/flexable-lg--image-3.jpg"
                    },
                    {
                        id: 4,
                        image: "/img/flexable-image-slide/flexale-1/flexable-lg--image-4.jpg"
                    },
                    {
                        id: 5,
                        image: "/img/flexable-image-slide/flexale-1/flexable-lg--image-5.jpg"
                    }
                ]
            }
        }
    };
</script>