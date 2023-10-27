<template>

  <div class="auth">


    <div class="auth-left" style="background-image: url('/img/home/player2.png')">


    </div>
    <div class="auth-right container">


      <ValidationObserver v-slot="{ invalid,validate }"  style="width: 100%">


        <h2 class="text-center">{{ $t('auth.register_title') }}</h2>


        <div class="text-center">

            <span class="error">

              {{ error_message }}

              <br>
          </span>
          <br>
        </div>
        <br>
        <form @submit.prevent="onSubmit" class="auth-form">

          <div class="form-group-horizontal">

            <div class="form-group">

              <label>{{ $t('auth.your_name') }}</label>

              <ValidationProvider :name="$t('auth.first_name')" rules="required|min:3" v-slot="{ errors }">

                <div class="wrapper-input-icon">
                   <img src="/img/home/user.svg" alt="">

                  <input v-model="form.first_name" type="text">
                </div>
                <span class="error">{{ errors[0] }}</span>
              </ValidationProvider>

            </div>

            <div class="form-group">

              <label>{{ $t('auth.your_first_name') }}</label>

              <ValidationProvider :name="$t('auth.last_name')" rules="required|min:3" v-slot="{ errors }">

                <div class="wrapper-input-icon">
                  <img src="/img/home/user.svg" alt="">

                  <input v-model="form.last_name" type="text">
                </div>

                <span class="error">{{ errors[0] }}</span>
              </ValidationProvider>

            </div>
          </div>


          <div class="form-group-horizontal">

            <div class="form-group">

              <label>{{ $t('auth.city') }}</label>

              <ValidationProvider :name="$t('auth.city')" rules="required|min:2" v-slot="{ errors }">

                <div class="wrapper-input-icon">
                  <img src="/img/home/city.svg" alt="">

                  <input v-model="form.city" type="text">
                </div>


                <span class="error">{{ errors[0] }}</span>
              </ValidationProvider>

            </div>

            <div class="form-group">

              <label>{{ $t('auth.country') }}</label>

              <ValidationProvider :name="$t('auth.country')" rules="required|alpha" v-slot="{ errors }">

                <div class="wrapper-input-icon">
                  <img src="/img/home/country.svg" alt="">

                  <input v-model="form.country" type="text">
                </div>

                <span class="error">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
          </div>
          <div class="form-group-horizontal">

            <div class="form-group">

              <label>Email</label>

              <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">


                <div class="wrapper-input-icon">
                  <img src="/img/home/mail.svg" alt="">

                  <input v-model="form.email" type="email">
                </div>

                <span class="error">{{ errors[0] }}</span>
              </ValidationProvider>

            </div>

            <div class="form-group">

              <label>{{ $t('auth.tel') }}</label>

              <ValidationProvider :name="$t('auth.tel')" rules="required|min:7|integer" v-slot="{ errors }">
                <span class="error">{{ errors[0] }}</span>


                <div class="flex align-center login-phone">

                  <client-only placeholder="loading..." class="flex">

                    <vue-country-code

                        @onSelect="onSelect"


                    >
                    </vue-country-code>

                  </client-only>
                  <input v-model="form.tel" type="number">

                </div>

              </ValidationProvider>
            </div>
          </div>
          <div class="form-group-horizontal">

            <div class="form-group">

              <label>{{ $t('auth.password') }}</label>

              <ValidationProvider :name="$t('auth.password')" rules="required|min:4" v-slot="{ errors }">

                <div class="wrapper-input-icon">
                  <img src="/img/home/password.svg" alt="">

                  <input v-model="form.password" type="password">
                </div>

                <span  class="error">{{ errors[0] }}</span>
              </ValidationProvider>

            </div>

            <div class="form-group">

              <label>{{ $t('auth.confirm_password') }}</label>

              <ValidationProvider :name="$t('auth.password')" rules="required|min:4" v-slot="{ errors }">

                <div class="wrapper-input-icon">
                  <img src="/img/home/password.svg" alt="">

                  <input v-model="form.password_confirmation" type="password">
                </div>

                <span  class="error">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
          </div>


          <div class="form-group-horizontal">

            <div class="form-group">

              <label>{{ $t('auth.referral_code') }} </label>

              <ValidationProvider :name="$t('auth.code')" rules="min:4" v-slot="{ errors }">


                <div class="wrapper-input-icon">
                  <img src="/img/home/password.svg" alt="">

                  <input v-model="form.referral_code" type="text">
                </div>

                <span  class="error">{{ errors[0] }}</span>
              </ValidationProvider>

            </div>

          </div>


          <br>
          <div class="form-group mx-auto">


            <button type="submit" class="bk-btn theme-btn" :disabled="invalid">{{ $t('tools.btn.become_member') }}
            </button>

          </div>

          <br>

          <p class="mx-auto">{{ $t('auth.already_member') }}
            <nuxt-link to="/auth/login" class="text-primary">{{ $t('auth.log_in') }}</nuxt-link>
          </p>
        </form>
      </ValidationObserver>

    </div>


  </div>
</template>

<script>

import {mapGetters} from "vuex";
import packages from "../../data/package.json"

export default {
  auth: "guest",

  middleware: 'checkParam',


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
      phone_number_code: '',
      package: ''
    }
  },
  computed: {
    ...mapGetters({
      error_message: 'error_message'
    })
  },
  methods: {

    onSelect({name, iso2, dialCode}) {
      this.phone_number_code = dialCode;
    },
    async onSubmit() {

      this.$nuxt.$loading.start()

      let app = this;



      let formRegister = app.form

      formRegister = {
        first_name: app.form.first_name,
        last_name: app.form.last_name,
        city: app.form.city,
        country: app.form.country,
        tel: '+' + this.phone_number_code + app.form.tel,
        email: app.form.email,
        password: app.form.password,
        password_confirmation: app.form.password_confirmation,
        referral_code: app.form.referral_code,
        redirect_url: ''
      }


      await app.$axios.$post('auth/register', formRegister).then(async function (response) {


        await app.$auth.loginWith('local', {
          data: {
            email: formRegister.email,
            password: formRegister.password
          }
        }).then(async function () {


          await app.$auth.fetchUser().then(async function (res) {


            app.$nuxt.$loading.finish()


            app.$swal.fire({
              icon: 'success',
              title: app.$t('auth.register_success') + app.form.last_name,
              text: app.$t('auth.register_success_desc'),
              footer: '<a href="' + process.env.wa_contact + '"  style="margin:auto; ">' + app.$t("tools.btn.need_to_contact_us") + '</a>'
            })


            app.$router.push('/payment?package='+app.$route.query.package)


          }).catch(function (error) {
            app.$nuxt.$loading.finish()

            app.$swal.fire({
              icon: 'error',
              title:app.$t('auth.an_error_occured'),
              text:  error.response.data.message,
              footer: '<a href="/"  style="margin:auto; ">' + app.$t("tools.btn.return_to_home") + '</a>'

            })


          });
          app.$nuxt.$loading.finish()

        })


        /*    app.$swal.fire({
              icon: 'success',
              title: 'Félicitation ! ' + app.form.last_name,
              text: "Veuillez compléter votre inscription , en effectuant le paiement pour  votre plan",
              footer: '<a href="' + process.env.wa_contact + '"  style="margin:auto; ">Besoin de nous contacter  ? </a>'
            })
            */


      }).catch(function(error){

        app.$nuxt.$loading.finish()

        app.$swal.fire({
          icon: 'error',
          title:app.$t('auth.an_error_occured'),
          text:  error.response.data.message,
          footer: '<a href="/"  style="margin:auto; ">' + app.$t("tools.btn.return_to_home") + '</a>'

        })
      })


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
