<template>

  <div class="auth">


    <div class="auth-left" style="background-image: url('/img/home/player2.png')">


    </div>
    <div class="auth-right container">


      <ValidationObserver v-slot="{ invalid }">


        <h2 class="text-center">{{$t('auth.register_title')}}</h2>


        <br><br>


        <div class="text-center">

            <span class="error" >

              {{ error_message }}

              <br>
          </span>
          <br>
        </div>
        <br>
        <form @submit.prevent="onSubmit" class="auth-form">

          <div class="form-group-horizontal">

            <div class="form-group">

              <label>{{$t('auth.your_name')}}</label>

              <ValidationProvider :name="$t('auth.first_name')" rules="required|min:3" v-slot="{ errors }">
                <input v-model="form.first_name" type="text">
                <span>{{ errors[0] }}</span>
              </ValidationProvider>

            </div>

            <div class="form-group">

              <label>{{$t('auth.your_first_name')}}</label>

              <ValidationProvider :name="$t('auth.last_name')" rules="required|min:3" v-slot="{ errors }">
                <input v-model="form.last_name" type="text">
                <span>{{ errors[0] }}</span>
              </ValidationProvider>

            </div>
          </div>


          <div class="form-group-horizontal">

            <div class="form-group">

              <label>{{ $t('auth.city') }}</label>

              <ValidationProvider :name="$t('auth.city')" rules="required|min:2" v-slot="{ errors }">
                <input v-model="form.city" type="text">
                <span>{{ errors[0] }}</span>
              </ValidationProvider>

            </div>

            <div class="form-group">

              <label>{{ $t('auth.country') }}</label>

              <ValidationProvider :name="$t('auth.first_name')" rules="required|alpha" v-slot="{ errors }">
                <input v-model="form.country" type="text">
                <span>{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
          </div>
          <div class="form-group-horizontal">

            <div class="form-group">

              <label>Email</label>

              <ValidationProvider :name="$t('auth.email')" rules="required|email" v-slot="{ errors }">
                <input v-model="form.email" type="email">
                <span>{{ errors[0] }}</span>
              </ValidationProvider>

            </div>

            <div class="form-group">

              <label>{{ $t('auth.tel') }}</label>

              <ValidationProvider :name="$t('auth.tel')" rules="required|min:7|integer" v-slot="{ errors }">
                <span>{{ errors[0] }}</span>



                <div class="flex align-center login-phone">

                 <client-only placeholder="loading..." class="flex">

                   <vue-country-code

                       @onSelect="onSelect"
                       :onlyCountries="['cm']"

                   >
                   </vue-country-code>

                 </client-only>
                  <input v-model="form.tel"  type="number"  >

                </div>

              </ValidationProvider>
            </div>
          </div>
          <div class="form-group-horizontal">

            <div class="form-group">

              <label>{{$t('auth.password')}}</label>

              <ValidationProvider :name="$t('auth.password')" rules="required|min:4" v-slot="{ errors }">
                <input v-model="form.password" type="password">
                <span>{{ errors[0] }}</span>
              </ValidationProvider>

            </div>

            <div class="form-group">

              <label>{{$t('auth.confirm_password')}}</label>

              <ValidationProvider :name="$t('auth.password')" rules="required|min:4" v-slot="{ errors }">
                <input v-model="form.password_confirmation" type="password">
                <span>{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
          </div>


          <div class="form-group-horizontal">

            <div class="form-group">

              <label>{{$t('auth.referral_code')}} </label>

              <ValidationProvider :name="$t('auth.code')" rules="min:4" v-slot="{ errors }">
                <input v-model="form.referral_code" type="text">
                <span>{{ errors[0] }}</span>
              </ValidationProvider>

            </div>

          </div>


          <br>
          <div class="form-group mx-auto">


            <button type="submit" class="bk-btn theme-btn" :disabled="invalid">{{$t('tools.btn.become_member')}}</button>

          </div>

          <br>

          <p class="mx-auto">{{$t('auth.already_member')}}
            <nuxt-link to="/auth/login" class="text-primary">{{ $t('auth.log_in') }}</nuxt-link>
          </p>
        </form>
      </ValidationObserver>

    </div>


  </div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
  auth: "guest",


  data() {
    return {

      email: '',
      contact: '',

      form: {

        first_name: '',
        last_name: '',
        city: '',
        country: '',
        tel: '',
        email: '',
        password: '',
        password_confirmation: '',
        referral_code: ''
      },
      phone_number_code:''
    }
  },
  computed: {
    ...mapGetters({
      error_message: 'error_message'
    })
  },
  methods: {

    onSelect({name, iso2, dialCode}) {
      console.log(name, iso2, dialCode);
      this.phone_number_code=dialCode;
    },
    async onSubmit() {

      this.$nuxt.$loading.start()

      let app = this;


      let payment_form = {
        amount: "5",
        currency: "XAF",
        from: '+'+this.phone_number_code+app.form.tel,
        description: "theprogrammer",
        package_name: "ÑÈM KÍÍ ÑJÉÉ",
        external_user: "",


      }




      let formRegister =app.form

      formRegister= {
        first_name: app.form.first_name,
        last_name: app.form.last_name,
        city:  app.form.city,
        country: app.form.country,
        tel:  '+'+this.phone_number_code+app.form.tel,
        email:  app.form.email,
        password:  app.form.password,
        password_confirmation: app.form.password_confirmation,
        referral_code:  app.form.referral_code
      }


      console.log("form register",formRegister,app.form)
          await app.$axios.$post('auth/register', formRegister).then(async function (response) {


    /*    app.$swal.fire({
          icon: 'success',
          title: 'Félicitation ! ' + app.form.last_name,
          text: "Veuillez compléter votre inscription , en effectuant le paiement pour  votre plan",
          footer: '<a href="' + process.env.wa_contact + '"  style="margin:auto; ">Besoin de nous contacter  ? </a>'
        })
        */

            payment_form.user = response.data.uuid
            await app.$api.$post(process.env.PAYMENT_API_URL + 'collect/', payment_form).then(async function (response) {


          //save order in database

          payment_form.external_reference = response.reference
          payment_form.operator = response.operator


          await app.$api.$post(process.env.PAYMENT_API_URL + 'get_payment_link/', payment_form).then(async function (response) {


            let $payment_link=response.link


            await app.$axios.post('/payment/order', payment_form)

                .then(async function (res) {

                  app.$nuxt.$loading.finish()


                  app.$swal.fire({
                    icon: 'success',
                    title: app.$t('auth.register_order_success') + app.form.last_name,
                    text: app.$t('auth.register_order_success_desc'),
                    footer: '<a href="' + process.env.wa_contact + '"  style="margin:auto; ">'+ app.$t("tools.btn.need_to_contact_us")+'</a>'
                  })


                  setTimeout(() => {    window.location.href = $payment_link; }, 8000);


                }).catch(function (error) {
                  app.$nuxt.$loading.finish()


                });


          }).catch(function (error) {
            app.$nuxt.$loading.finish()

            console.log("error", error)

          });


        }).catch(function (error) {

          app.$nuxt.$loading.finish()


        })


        app.$nuxt.$loading.finish()






      })
          .catch(function (error) {

            app.$nuxt.$loading.finish()

          })





    }
  },

  mounted() {




    this.contact = process.env.wa_contact

  }
}
</script>

<style scoped>

</style>
