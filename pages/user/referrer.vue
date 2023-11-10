<template>
  <div class="main-container user-orders">



    <div class="container">


      <!--
            <div class="header-order"  v-if="!(getOrdersNumber===0)">
              <h2>{{$t('order.order_passed')}}</h2>
              <span>{{getOrdersNumber }} {{$t('order.order_found')}}</span>
            </div>-->

      <br>
      <br>

      <div class="card-error"   v-if="!hasReferrer && !hasReferrals">




        <div class="card-error-left">

          <h2>  {{$t('referrer.referer_error_title')}}  {{$auth.user.data.first_name}}</h2>

          <p>
            {{$t('referrer.referer_error_desc')}}


          </p>

          <button class="bk-btn theme-btn"  @click.prevent="copySomething($auth.user?.data?.referral_code)">{{$t('tools.btn.copy_code')}} </button>

        </div>


        <div class="card-error-right">

          <img src="/img/home/not_found.png" alt="">

        </div>
      </div>

      <div class="main-order" v-if="hasReferrer">



        <h2>{{ $t('referrer.my_referrer') }} </h2>

        <div class="card-order">

          <div class="card-order-left">


            <div class="left">

              <img :src="getReferrer?.avatar" alt="">
            </div>

            <div class="right">


              <h5>{{ getReferrer?.first_name }} {{ getReferrer?.last_name }} </h5>


              <span>



                <br>

            </span>


            </div>

          </div>

<!--                <div class="card-order-right" >
                      <h5 class="red-color proceed-payment-btn">{{$t('tools.btn.buy_now')}}</h5>
                </div>-->
        </div>

      </div>
      <br>


      <div class="main-order  " v-if="hasReferrals">

        <h2>{{ $t('referrer.my_child') }}</h2>

        <div class="main-referrer">

          <div class="card-order card-referrer" v-for="referrer in referrers?.referrals">

            <div class="card-order-left">

              <div class="left">

                <img :src="referrer.referrer.avatar" alt="">
              </div>

              <div class="right">

                <h5>{{ referrer.referrer.first_name }} {{ referrer.referrer.last_name }} </h5>

                <!--                    <span class="primary-color">
                                     sdfsdf
                                    </span>-->

                <span>

                   {{ referrer.amount }} XAF


                  <br>
                <span class="secondary-color">{{ referrer.is_paid ? 'Est déjà membre !' : 'Pas encore membre'}}</span>


                  </span>


              </div>

            </div>

          </div>


        </div>

        <h2>{{$t('referrer.total')}}  <strong class="secondary-color">  {{getTotalToPaid}} xaf</strong></h2>





      </div>
      <!--      <div class="card-error"  v-if="getOrdersNumber===0">




              <div class="card-error-left">

                <h2> {{$auth.user.data.last_name}} {{$t('order.you_have_no_order')}} </h2>

                <p>
                  {{$t('order.you_have_no_order_desc')}}


                </p>

                <n-link to="/pricing" class="bk-btn theme-btn">{{$t('order.i_order_my_package')}} </n-link>

              </div>


              <div class="card-error-right">

                <img src="/img/home/notfound.svg" alt="">

              </div>
            </div>-->


    </div>



  </div>
</template>

<script>

import data from "../../data/service.json";
import blogs from '~/data/blog.json';
import {slugify} from '~/mixins/slugify'
import PricingItemStyleTwo from "../../components/PricingItemStyleTwo";
import FooterTwo from "../../components/FooterTwo";
import FooterStyleThree from "../../components/FooterStyleThree";
import FooterAgency from "../../components/FooterAgency";
import FooterStyleFour from "../../components/FooterStyleFour";
import HeaderBlack from "../../components/HeaderBlack";
import {mapGetters} from "vuex";

export default {
  mixins: [slugify],
  middleware: ['auth', 'checkUserIsActive'],

  layout:"layout-profil",
  components: {
    HeaderBlack,
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



  computed: {
    ...mapGetters({
      referrers: 'user/referrers'
    }),


    getReferrer() {

      return this.referrers?.referrer?.referrer
    },
    hasReferrer(){

      return  !(this.referrers?.referrer == null)

    },

    hasReferrals(){
     return  this.referrers?.referrals?.length>0
    },

    getTotalToPaid(){


      let total=0;
     this.referrers?.referrals?.forEach(function (referrer) {


        if (referrer.is_paid) {


          total +=   parseFloat(referrer.amount)


        }


      });

     return total;


    }




  },

  async fetch() {

    try {

      await this.$store.dispatch('user/getMyReferer')

    } catch (errors) {
      // Set validation errors on a form

    }

  },
  fetchOnServer: false,
  methods: {
    async copySomething(text) {

      let app = this;

      if(this.$auth?.user.data?.is_member){

        //generate

        try {
          await app.$copyText('text');
          app.$toast.info(app.$t('user.code_copied'))
        } catch (e) {
          console.error(e);
        }

      }
      else{

        if(this.$auth?.user?.data?.is_active){

          this.$swal.fire({
            icon: 'error',
            title: this.$t('user.user_error_copy_code_title') +(this.$auth.user.data.last_name == null? '':this.$auth.user.data.last_name),
            text: this.$t('user.user_error_copy_code_desc'),
            footer: '<a href="/pricing" style="margin:auto;">' + this.$t('user.subscribe_here') +'</a>'
          })

        }
        else{


          this.$swal.fire({
            icon: 'warning',
            title: this.$t('user.user_not_ready'),
            text: this.$t('user.user_not_ready_description')
          })
        }

      }

    },
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