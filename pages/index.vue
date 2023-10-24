<template>
  <div class="main-container">

    <HeaderElement @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen"/>

    <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen"/>

    <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen"/>

<!--    <HeroDigitalAgency  />-->
    <HeroEssential></HeroEssential>

    <PricingItemStyleTwo :is_came_from_home="true"  />



    <div class="brook-breadcrumb-area pt--100 pb--70 bg_color--1 breadcrumb-title-bar"

         data-aos-offset="50"
         data-aos-delay="50"
         data-aos-duration="1000"
         data-aos-easing="ease-in"
         data-aos-mirror="true"
         :data-aos-once="true"
         data-aos-anchor-placement="top-center"

    >
      <div class="container-fluid plr--150 plr_md--50 plr_sm--50 mb_sm--30">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb-inner text-left">
              <h1 class="heading heading-h1 line-height-1-5" v-html="$t('home.shop_title')">



              </h1>
            </div>
          </div>
        </div>
      </div>


      <div class="brook-service-list-area"


      >

        <div class="bk-service-list d-block d-md-flex mb--20 align-items-center wow move-up">

          <div class="content plr--130 plr_md--50 plr_sm--40">
            <h3 class="heading heading-h3">{{$t('home.shop_title_2')}} </h3>
            <div class="bkseparator--35"></div>

            <p class="bk_pra">{{$t('home.shop_description')}}</p>
            <br>

            <a href="https://wa.me/691129524"  target="_blank" class="bk-btn theme-btn">{{ $t('tools.btn.see_our_shop') }}
            </a>
          </div>

          <div class="thumb mt_sm--30">
            <img class="w--100" src="/img/home/boutique.jpg" :alt="$t('home.shop_title_2')"/>
          </div>

        </div>
      </div>
    </div>



   <MatchScore></MatchScore>


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

    <div class="brook-team-area bg_color--1"   data-aos="fade-up"
         data-aos-offset="10"
         data-aos-delay="50"
         data-aos-duration="1000"
         data-aos-easing="ease-in"
         data-aos-mirror="true"
         :data-aos-once="true"
         data-aos-anchor-placement="top-center"

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


    <BlogOne />

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

export default {
  mixins: [slugify],
auth:false,

  components: {
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
      searchOpen: false
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