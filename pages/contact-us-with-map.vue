<template>
    <div class="main-container">

      <HeaderElement @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen"/>

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <GoogleMap   />

        <ContactUsTwo />

      <FooterStyleFour/>


    </div>
</template>

<script>

    import HeaderElement from "../components/HeaderElement";
    export default {

      auth:false,


      components: {
        HeaderElement,
            HeaderAbout: () => import('@/components/HeaderAbout'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            GoogleMap: () => import('@/components/GoogleMap'),
            ContactUsTwo: () => import('@/components/ContactUsTwo'),
        FooterStyleFour: () => import('@/components/FooterStyleFour'),
          HeaderBlack: () => import('@/components/HeaderBlack'),

        },

        data() {
            return {
                navOpen: false,
                searchOpen: false,
            }
        },

        mounted () {
            document.body.classList.add('template-color-1', 'template-font-1')
        },

        head() {
            return {
                title: 'Contactez-nous'
            }
        },
    };
</script>

