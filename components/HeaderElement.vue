<template>
    <fixed-header>

        <header class="br_header header-default header-transparent light-logo--version haeder-fixed-width headroom--sticky header-mega-menu clearfix">
          <div class="message-box move-up wow bg_cat--2 " v-if="$auth.loggedIn && !($auth.user?.data?.is_member)">

            <div class="icon">
              <i class=" fas fa-bell "></i>
            </div>
            <div class="content" >Hey ! {{$auth.user?.data?.first_name}}  {{$t('header.account_inactive_notification')}}

              <button style="color:#ac0404;text-decoration: underline" @click="goToOrder"> {{$t('header.here')}}</button>

            </div>
          </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="header__wrapper mr--0">
                            <!-- Header Left start -->
                            <div class="header-left flex-20">
                                <div class="logo">
                                    <n-link :to="localePath('index')">
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

                              <div class="header-to-hide">



                                <button v-if="!$auth.user?.data?.is_member" @click="goToPricing"  class="white d-flex bk-btn theme-btn">{{ $t('header.become_member') }} </button>


                                <nuxt-link v-if="!$auth.loggedIn" style="color:#000" :to="localePath('/auth/login')" class="white d-flex bk-btn btn-secondary">
                                  <img src="/" alt=""> {{ $t('header.login') }} </nuxt-link>
                                <nuxt-link v-if="$auth.loggedIn" :to="localePath('/auth/login')" class="white d-flex">
                                  <img :src="$auth.user.data.avatar" style="object-fit: cover" alt="" width="30px"></nuxt-link>

                                <div @click="logout"  v-if="$auth.loggedIn" class="white d-flex">

                                  <img src="/img/home/logout.png" style="object-fit: contain;cursor:pointer" alt="" width="25px">

                                </div>

                              </div>

                              <span  style="cursor: pointer;color: var(--white)">


                                   <select name="" id="" v-model="localeSelected"  @change="switchLocale"  class="select-language">

                                     <option v-for="locale in availableLocales"
                                             :key="locale.code"
                                             :value="locale.code">
                                       <img src="/img/home/eng.png" alt=""> {{locale.name}}
                                     </option>

                                   </select>
                              </span>
                                <!-- End Popup Search Wrap -->

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
    import { localeChanged } from 'vee-validate';

    export default {
        components: {
          NavigationGlobal,
            FixedHeader,
            Navigation
        },

      data(){

        return {



          localeSelected:''
        }
      },

      mounted() {

      },
      fetch(){

        this.localeSelected=this.$i18n.loadedLanguages['0']

      },
      computed:{

        availableLocales () {
          return this.$i18n.locales
        },

        locale(){
          return this.$i18n.locales.filter(i => i.code === this.$i18n.locale)[0]
        }

      },
      methods:{


          goToOrder(){


            if(this.$auth?.user?.data?.is_active){


              this.$router.push(this.localePath('/user/orders'))

            }else{

              this.$swal.fire({
                icon: 'warning',
                title: this.$t('user.user_not_ready'),
                text: this.$t('user.user_not_ready_description')
              })

              this.$router.push(this.localePath('/user/#fill-user-info'))

            }
          }, goToPricing(){


            console.log("go to prici")

            if(this.$auth.loggedIn){

              if(this.$auth?.user?.data?.is_active){


                this.$router.push(this.localePath('/pricing'))

              }else{

                this.$swal.fire({
                  icon: 'warning',
                  title: this.$t('user.user_not_ready'),
                  text: this.$t('user.user_not_ready_description')
                })
                this.$router.push(this.localePath('/user/#fill-user-info'))

              }
            }
            else{

              this.$router.push(this.localePath('/pricing'))

            }


          },
       async    logout(){

            await this.$auth.logout();
          },


        async switchLocale() {




          let locale= this.localeSelected


          this.$nuxt.$loading.start()



          let app=this


          console.log("locale ",locale)
          this.$i18n.setLocale(this.localeSelected)

          await this.$axios.get('/lang/set/'+locale,{

            locale:locale

          }).then(function (response) {

            app.$nuxt.$loading.finish()



            localeChanged();


          }).catch(function(){

            app.$toast.error("Une erreur s'est produite, veuillez contactez l'administrateur  ")
            app.$nuxt.$loading.finish()

          });
        }
      }
    };
</script>

<style lang="scss" scoped>
    .vue-fixed-header--isFixed {
        top: 0;
        left: 0;
        width: 100vw;
        z-index: 999;
        position: fixed !important;
        background-color: rgba($black, 0.9);
        box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.2);
        animation: 900ms cubic-bezier(0.2, 1, 0.22, 1) 0s normal none 1 running fadeInDown;

          color:var(--text-color-inversed);
    }
</style>

