<template>
    <footer class="page-footer position-relative bg_color--3 pl--150 pr--150 pl_lp--40 pr_lp--40 pl_lg--30 pr_lg--30 pl_md--30 pr_md--30 pl_sm--20 pr_sm--20 pl_mobile--20 pr_mobile--20">
        <div class="bk-footer-inner pt--150 pb--100 pt_sm--80 pb_sm--40 pt_md--80 pb_md--40">
            <div class="row">
                <div class="col-lg-6 col-xl-6">
                    <div class="bk-footer-widget">
                        <h2 class="heading heading-h2 text-white line-height-1-39"  v-html="$t('footer.title')">

                        </h2>
                    </div>
                </div>

                <div class="col-lg-6 col-xl-5 offset-xl-1">
                    <div class="bk-footer-widget menu--contact mt_md--30 mt_sm--30">
                        <h4 class="heading heading-h4 text-white line-height-1-2">{{$t('footer.contact_us')}}</h4>
                        <div class="bkseparator--35"></div>
                        <div class="footer-address">
                            <div class="row">
                                <div class="col-lg-7 col-md-6 col-sm-6 col-12">
                                    <p class="bk_pra line-height-1-63 text-white" v-html="$t('footer.location')">

                                    </p>
                                    <div class="social-share social--transparent text-white mt--45">
                                        <a href="https://www.facebook.com/FCHEMLE?mibextid=2JQ9oc" target="_blank"><i class="fab fa-facebook"></i></a>

<!--                                        <a href="https://twitter.com/explore" target="_blank"><i class="fab fa-twitter"></i></a>
                                      -->
                                        <a href="https://instagram.com/hemlefcdebotko237?igshid=NTc4MTIwNjQ2YQ==" target="_blank"><i class="fab fa-instagram"></i></a>
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
                                </div>
                                <div class="col-lg-5 col-md-6 col-sm-6 col-12 mt_mobile--30">
                                    <p class="bk_pra line-height-1-63 bk-hover">
                                        <a class="text-white" href="mailto:info@yourdomain.com">ah.voila2010@gmail.com</a>
                                    </p>
                                    <p class="bk_pra line-height-1-63 bk-hover">
                                        <a class="text-white" href="tel:+237691129524">+237 691 12 95 24</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Start Copyright Area -->
        <div class="copyright ptb--50">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <div class="copyright-left text-md-left text-center">
                        <ul class="bk-copyright-menu d-flex bk-hover justify-content-center justify-content-md-start flex-wrap flex-sm-nowrap">
                            <li>
                                <n-link :to="localePath('contact-us-with-map')">{{ $t('header.contact') }}</n-link>
                            </li>


                            <li>
                                <n-link :to="localePath('/#teams')">{{ $t('header.equip') }}</n-link>
                            </li>
                            <li>
                                <a href="https://wa.me/691129524"   target="_blank" >{{ $t('header.shop') }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="copyright-right text-md-right text-center">
                        <p>&copy; 2023 <b></b> <span v-html="$t('footer.made_with_by')"> </span> <a href="https://josuenguimatio.com"><b>TheProgrammer</b></a></p>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Copyright Area -->
    </footer>
</template>

<script>
    import {localeChanged} from "vee-validate";
    import { localize } from 'vee-validate';

    export default {

      data(){

       return{

         localeSelected:''
       }

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


        async switchLocale() {




          let locale= this.localeSelected


          this.$nuxt.$loading.start()



          let app=this


          await this.$i18n.setLocale(this.localeSelected)

          await this.$axios.get('/lang/set/'+locale,{

            locale:locale

          }).then(function (response) {

            app.$nuxt.$loading.finish()



/*
            localeChanged();
*/


            localize(locale);

          }).catch(function(){

            app.$toast.error(app.$t('auth.an_error_occured'))
            app.$nuxt.$loading.finish()

          });
        }
      },

      mounted() {
        this.localeSelected=this.$i18n.loadedLanguages['0']

      }
    };
</script>

<style lang="scss">

</style>