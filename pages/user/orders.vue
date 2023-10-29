<template>
  <div class="main-container user-orders">


    <HeaderElement @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen"/>


    <div class="container">


      <div class="header-order"  v-if="!(getOrdersNumber===0)">
        <h2>Commandes effectuées </h2>
        <span>{{getOrdersNumber }} commande(s) trouvé(es)</span>
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

              <h5>Commande  <span class="reference">#{{ order.external_reference.slice(1,8) }}</span>  </h5>

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
               <h5 class="red-color proceed-payment-btn">Payer maintenant</h5>
          </div>
        </div>

      </div>

      <div class="card-error"  v-if="getOrdersNumber===0">




          <div class="card-error-left">

            <h2>{{$auth.user.data.last_name}} Vous n'avez aucune commande !</h2>

            <p>
              Il semblerait que vous n'ayez aucune commande en cours ! Nous vous invitons à passer une commande ici afin d'activer votre compte. Votre compte restera inactif tant que vous n'aurez pas passé commande pour un package.


            </p>

            <n-link to="/pricing" class="bk-btn theme-btn">Je commande mon package ! </n-link>

          </div>


        <div class="card-error-right">

          <img src="/img/home/notfound.svg" alt="">

        </div>
      </div>




    </div>


    <br><br><br><br><br>
    <br><br><br><br><br>
    <br><br><br><br><br>
    <FooterStyleFour/>

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