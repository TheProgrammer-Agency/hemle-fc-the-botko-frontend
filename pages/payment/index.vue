<template>

  <div class="payment">




    <div class="payment-left">



      <div class="container payment-left-wrapper">

        <h3 class="text-center">{{ package.amount }} XAF
         </h3>

        <div class="wrapper-package">

          <h3>{{ package.package_name }}</h3>

          <p>
           {{package.description}}
          </p>
        </div>

        <div class="payment-order">

          <div class="sub">
            <span>Sous total</span>
            <span>{{ package.amount }}  XAF</span>
          </div>


          <div class="sub">
            <span>Tax</span>
            <span>0 XAF</span>
          </div>

          <div class="sub">
            <span>Total de votre commande</span>
            <span>{{ package.amount }} XAF</span>
          </div>


        </div>


      </div>
    </div>

    <div class="payment-right">


      <div class="container payment-right-wrapper">

        <h2>
          Choisissez votre mode de paiement
        </h2>

        <br>
        <div class="list-payment">

          <div class="card-payment-method">

            <img src="/img/home/stripe.png" alt="">
          </div>


          <div class="card-payment-method" @click.prevent="paidWithOrangeOrMtn">

            <img src="/img/home/orange2.jpg" alt="mtn">
          </div>


          <div class="card-payment-method">

            <img src="/img/home/mtn2.jpg" alt="orange" @click.prevent="paidWithOrangeOrMtn">
          </div>




        </div>

      </div>
    </div>

  </div>
</template>

<script>
import packages from "../../data/package.json";

export default {
  name: "payment",


  middleware: ['checkParam','auth','checkUserIsActive'],

  data() {
    return {

      package:''
    }
  },


  methods: {

    async paidWithOrangeOrMtn(){

      this.$nuxt.$loading.start()

      let app=this;

      let payment_form = {
        amount: this.package.amount,
        currency: this.package.currency,
        from: this.$auth.user.data.tel,
        description: this.package.description,
        package_name: this.package.package_name,
        external_user: this.package.external_user,


      }

      payment_form.user = this.$auth.user.data.uuid
      payment_form.external_reference = this.$auth.user.data.uuid

      payment_form.redirect_url = process.env.PAYMENT_RETURN_URL + '?reference=' + this.$auth.user.data.uuid

      await app.$api.$post(process.env.PAYMENT_API_URL + 'get_payment_link/', payment_form).then(async function (response) {


        let $payment_link = response.link

        //log in

        await app.$axios.post('/payment/order', payment_form)

            .then(async function (res) {

              app.$nuxt.$loading.finish()



              app.$swal.fire({
                icon: 'success',
                title: app.$t('auth.register_order_success') +' ' +app.$auth.user.data.first_name,
                text: app.$t('auth.register_order_success_desc'),
                footer: '<a href="' + process.env.wa_contact + '"  style="margin:auto; ">' + app.$t("tools.btn.need_to_contact_us") + '</a>'
              })


              setTimeout(() => {
                window.location.href = $payment_link;
              }, 5000);


            }).catch(function (error) {




              app.$swal.fire({
                icon: 'error',
                title:app.$t('auth.an_error_occured')+' '+ app.$auth.user.data.first_name,
                text:  error.response.data.message,
                footer: '<a href="/"  style="margin:auto; ">' + app.$t("tools.btn.return_to_home") + '</a>'

              })

              app.$nuxt.$loading.finish()


            });





      })


      app.$nuxt.$loading.finish()

    }
  },
  mounted() {


    this.package = packages[this.$route.query.package]

    this.contact = process.env.wa_contact


  },
}
</script>

<style scoped>

</style>