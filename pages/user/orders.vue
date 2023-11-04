<template>
  <div class="main-container user-orders">
    <br><br><br><br><br>

    <div class="container">


      <div class="header-order"  v-if="!(getOrdersNumber===0)">
        <h2>{{$t('order.order_passed')}}</h2>
        <span>{{getOrdersNumber }} {{$t('order.order_found')}}</span>
      </div>

      <br>
      <br>


      <div class="main-order"  v-if="!(getOrdersNumber===0)">

        <div class="card-order"  v-for="(order,index ) in orders.order">

          <div class="card-order-left">

            <div class="left">

              <img src="/img/home/carte2.png" alt="">
            </div>

            <div class="right">

              <h5>{{ $t('order.order') }}  <span class="reference">#{{ order.external_reference.slice(1,8) }}</span>  </h5>

              <span class="primary-color">
              {{order.package_name }}
              </span>

              <span>

              {{ order.amount }} XAF

              <span class="secondary-color">{{ order.status }}</span>

            </span>


            </div>

          </div>

          <div class="card-order-right" @click.prevent="paid(order)" v-if="order.status==='PENDING'">
               <h5 class="red-color proceed-payment-btn">{{$t('tools.btn.buy_now')}}</h5>
          </div>
        </div>

      </div>

      <div class="card-error"  v-if="getOrdersNumber===0">




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
      </div>




    </div>

    <br><br><br><br><br>

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
  middleware:['auth','checkUserIsActive'],

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

  computed:{
    ...mapGetters({
      orders: 'order/orders'
    }),

    getOrdersNumber: function () {
      // `this` points to the vm instance
      return this.orders?.order?.length ? this.orders?.order?.length  : 0;
    }
  },

  async fetch() {

    try {

      await this.$store.dispatch('order/getOrders')

    } catch (errors) {
      // Set validation errors on a form

    }

  },

  methods:{


     paid(order){
      this.$nuxt.$loading.start()

      let getPackage =packages.filter((p)=>p.package_name===order.package_name)[0]

      this.$router.push('/payment?package='+(getPackage.id-1))



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