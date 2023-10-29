<template>
  <div class="main-container">

    <HeaderElement @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen"/>

    <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen"/>

    <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen"/>


    <PricingItemStyleTwo  />



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
import Header from "../components/Header";
import HeaderBlack from "../components/HeaderBlack";

export default {
  mixins: [slugify],
  auth:false,
  middleware:['checkUserIsActive'],

  components: {
    HeaderBlack,
    Header,
    FooterStyleFour,
    FooterAgency,
    FooterStyleThree,
    FooterTwo,
    PricingItemStyleTwo

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
      title: 'Tarif'
    }
  },
};
</script>