<template>
    <fixed-header>
        <header class="br_header header-default  header-transparent black-logo--version haeder-fixed-width header-mega-menu clearfix" :class="addClass">


          <div class="message-box move-up wow bg_cat--2 " v-if="$auth.loggedIn && !($auth.user.data.is_member) ">

            <div class="icon">
              <i class=" fas fa-bell "></i>
            </div>
            <div class="content" > Hey {{$auth.user.data.first_name}}  ! Votre compte est inactif car vous n'êtes pas encore membre. Souscrivez à un abonnement pour finaliser votre inscription
              <nuxt-link to="/user/orders"  style="color:#ac0404;text-decoration: underline"> ici !</nuxt-link></div>
          </div>


            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="header__wrapper mr--0">
                            <!-- Header Left start -->
                            <div class="header-left flex-20">
                                <div class="logo">
                                    <n-link to="/">
                                        <img src="/img/logo/hemle1.png" alt="Brook Logo" >
                                    </n-link>
                                </div>
                            </div>
                            <!-- Header Left end -->

                            <!-- Mainmenu Wrap start -->
                            <div class="mainmenu-wrapper d-none d-lg-block">
                                <navigation-global />
                            </div>
                            <!-- Mainmenu Wrap end -->

                            <!-- Header Right start -->
                            <div class="header-right ">
                                <!-- Start Popup Search Wrap -->
<!--                                <div class="popup-search-wrap">
                                    <button class="btn-search-click" @click="$emit('toggleSearch')">
                                        <i class="fa fa-search"></i>
                                    </button>
                                </div>-->
                                <!-- End Popup Search Wrap -->
                              <div class="header-to-hide">

                                <a href="https://wa.me/691129524" target="_blank" class="white d-flex">{{ $t('header.shop') }}  <img src="/img/home/boutique-blackd.png" alt="" width="25" height="25"></a>
                                <nuxt-link v-if="!$auth.loggedIn" to="/auth/login" class="white d-flex">{{ $t('header.login') }} <img src="/img/home/user-black.png" alt="" width="25" height="25"></nuxt-link>
                                <nuxt-link v-if="$auth.loggedIn" to="/user" class="white d-flex">{{ $t('header.my_account') }} <img src="/img/home/user-black.png" alt="" width="25" height="25"></nuxt-link>

                              </div>
                                <!-- Start Hamberger -->
                                <div class="manu-hamber popup-mobile-click d-block d-lg-none black-version d-block d-xl-none" @click="$emit('togglenav')">
                                    <div>
                                        <i></i>
                                    </div>
                                </div>
                                <!-- End Hamberger -->
                            </div>
                            <!-- Header Right end -->
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </fixed-header>
</template>

<script>
    import FixedHeader from 'vue-fixed-header'
    import Navigation from '@/components/Navigation';
    import NavigationGlobal from "./global/navigation-global";

    export default {
        components: {
          NavigationGlobal,
            FixedHeader,
            Navigation
        },

        props: ['addClass'],
    };
</script>

<style lang="scss" scoped>
    .vue-fixed-header--isFixed {
        top: 0;
        left: 0;
        width: 100%;
        z-index: 999;
        position: fixed !important;
        background-color: #fff;
        box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.2);
        animation: 900ms cubic-bezier(0.2, 1, 0.22, 1) 0s normal none 1 running fadeInDown;
    }
</style>