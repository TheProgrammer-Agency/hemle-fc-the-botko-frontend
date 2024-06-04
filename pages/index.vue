<template>
  <div class="main-container">

    <HeaderElement @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen"/>


    <OffcanvasMenu :class="{'is-visiable' : fullpageOpen}" @toggleFullpageMenu="fullpageOpen = !fullpageOpen" />

    <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen"/>


   <HeroBusiness  />


<!--
    <HeroEssential></HeroEssential>
-->

    <BlogOne />





    <PricingItemStyleTwo  :is_came_from_home="true"  />



<!--    <div class="brook-breadcrumb-area pt&#45;&#45;100 bg_color&#45;&#45;1 breadcrumb-title-bar"


         data-aos="fade-up"
         data-aos-offset="50"
         data-aos-delay="50"
         data-aos-duration="1000"
         data-aos-mirror="true"
         :data-aos-once="true"
         data-aos-anchor-placement="top-bottom"

    >
    </div>-->
<!--
      <div class="container  mb_sm&#45;&#45;30">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb-inner text-left">

              <h1 class="heading heading-h1 line-height-1-5 text-center d-flex justify-content-center  align-items-center">


                <hr class="hr-text">
                  {{$t('home.shop')}}
                <hr class="hr-text">

              </h1>


            </div>
          </div>
        </div>
      </div>
-->

    <OnepageTeammember />


      <FeatureStartUp />

      <br>
      <br>
      <br>

      <FeaturedProjects />

<!--      <div class="brook-service-list-area  mb&#45;&#45;150 ">

        <div class="bk-service-list justify-content-center d-block d-md-flex align-items-center wow move-up">

          <div class="content plr&#45;&#45;130 plr_md&#45;&#45;50 plr_sm&#45;&#45;40">

            <h3 class="heading heading-h3" v-html="$t('home.shop_title_2')"></h3>

            <div class="bkseparator&#45;&#45;35"></div>

            <p class="bk_pra">{{$t('home.shop_description')}}</p>
            <br>

            <a href="https://wa.me/691129524"  target="_blank" class="bk-btn theme-btn">{{ $t('tools.btn.see_our_shop') }}
            </a>

          </div>

          <div class="thumb mt_sm&#45;&#45;30">
            <img class="w&#45;&#45;100" src="/img/home/boutique.jpg" :alt="$t('home.shop_title_2')"/>
          </div>

        </div>
      </div>-->


<!--
    <TestimonialTwo class="mt&#45;&#45;100" />
-->



    <!--     <div class="container">
           <div class="row">
             <div class="col-sm-6 move-up wow mt&#45;&#45;30" v-for="blog in blogs.blogs.slice(1, 3)" :key="blog.id">
               <div class="blog-grid">
                 <div class="post-thumb">
                   <n-link :to="`/blog/${blog.slug}`">
                     <img :src="blog.image" :alt="blog.title">
                   </n-link>
                 </div>
                 <div class="post-content">
                   <div class="post-inner">
                     <h5 class="heading heading-h5">
                       <n-link :to="`/blog/${blog.slug}`">{{ blog.title }}</n-link>
                     </h5>
                     <div class="post-meta">
                       <div class="post-date">{{ blog.date }}</div>
                       <div class="post-category">
                         <n-link v-for="(category, i) in blog.categories.slice(0, 1)" :key="i" :to="`/blog/category/${slugify(category)}`">{{ category }}</n-link>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>

         </div>-->




    <MatchScore></MatchScore>

    <div class="brook-team-area bg_color--1  mt--50 mb--150 "
    >
      <TeamCarouselFull/>

    </div>

    <!--      <ServiceOne id="service" />

            <PortfolioOne />

            <CounterUpOne />-->

    <!--
            <TeamOne />
    -->

    <CurveShape>
      <template v-slot:bgcolor>
        <path style="fill: #f5f5f5;
                    stroke-miterlimit:10;"
              d="M3360.5,97.739c-242,0-480-48.375-480-48.375
                        S2647.5,0.5,2400.5,0.5s-480,48.375-480,48.375s-238,48.864-480,48.864s-480-48.375-480-48.375S727.5,0.5,480.5,0.5
                        S0.5,48.875,0.5,48.875V108h1920h1920V48.875C3840.5,48.875,3602.5,97.739,3360.5,97.739z"/>
      </template>
    </CurveShape>
    <!--        <TestimonialOne />

            <BrandLogoCarousel />-->



<!--
    <ContactUsOne/>
-->

    <FooterStyleFour/>

  </div>
</template>

<script>

import data from "../data/service.json";
import blogs from '~/data/blog.json';
import {slugify} from '~/mixins/slugify'
import PricingItemStyleTwo from "../components/PricingItemStyleTwo";
import FooterTwo from "../components/FooterTwo";
import FooterStyleThree from "../components/FooterStyleThree";
import FooterAgency from "../components/FooterAgency";
import FooterStyleFour from "../components/FooterStyleFour";
import HeroMinimalAgency from "../components/HeroMinimalAgency";
import HeroIndieMusician from "../components/HeroIndieMusician";
import HeroOnepage from "../components/HeroOnepage";
import HeroProductLanding from "../components/HeroProductLanding";
import HeroEssential from "../components/HeroEssential";
import MatchScore from "../components/MatchScore";
import HeroFullscreen from "../components/HeroFullscreen";
import HeroStartUp from "../components/HeroStartUp";
import HeroRestaurant from "../components/HeroRestaurant";
import HeroAuthenticStudio from "../components/HeroAuthenticStudio";
import HeroPortfolioSlide from "../components/HeroPortfolioSlide";
import BlogCreative from "./blog/blog-creative";
import HeroService from "../components/HeroService";
import HeroBusiness from "../components/HeroBusiness";
import BlogRestaurant from "../components/BlogRestaurant";
import BlogTwo from "../components/sections/BlogTwo";

export default {
  mixins: [slugify],
  auth:false,


  components: {
    BlogTwo,
    BlogRestaurant,
    HeroBusiness,
    HeroService,
    BlogCreative,
    HeroPortfolioSlide,
    HeroAuthenticStudio,
    HeroRestaurant,
    HeroStartUp,
    HeroFullscreen,
    HeroEssential,
    HeroProductLanding,
    HeroOnepage,
    HeroIndieMusician,
    HeroMinimalAgency,
    FooterStyleFour,
    FooterAgency,
    FooterStyleThree,
    FooterTwo,
    PricingItemStyleTwo,
    MatchScore

  },

  data() {
    return {
      data,
      blogs,
      navOpen: false,
      searchOpen: false,
      fullpageOpen: false,

    }
  },



  mounted() {


    document.body.classList.add('template-color-1', 'template-font-2')
  },

  head() {
    return {
      title: 'Home Business'
    }
  },
};
</script>