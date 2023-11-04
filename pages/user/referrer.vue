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


      <div class="main-order">



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
      <div class="main-order  ">

        <h2>{{ $t('referrer.my_child') }}</h2>

        <div class="main-referrer">

          <div class="card-order card-referrer" v-for="referrer in referrers.referrals">

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
                <span class="secondary-color">{{ referrer.referrer.is_paid ? 'Est déjà membre !' : 'Pas encore membre'}}</span>


                  </span>


              </div>

            </div>

          </div>


        </div>

        <h2 v-html="$t('referrer.total')"></h2>



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
import packages from "../../data/package.json";

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
  methods: {},


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