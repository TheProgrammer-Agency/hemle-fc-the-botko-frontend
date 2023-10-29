<template>

  <div class="auth">


    <div class="auth-left" style="background-image: url('/img/home/player2.png')">


    </div>

    <div class="auth-right container"  style="  width: 480px;">

      <ValidationObserver v-slot="{ invalid }">


        <h2 class="text-center">{{ $t('auth.log_in') }}</h2>
        <br>
        <div class="auth-oauth">

          <span @click.prevent="socialLogin('facebook')" >
            <img src="/img/home/facebook.png" alt="facebook" >
          </span>


          <span @click.prevent="socialLogin('google')">

                      <img src="/img/home/google.png" alt="google" >

          </span>
        </div>

        <br>
        <div class="register_or">

          <hr>
          <span>
           {{$t('auth.or')}}
          </span>

          <hr>
        </div>
    <br>


        <form @submit.prevent="onSubmit" class="auth-form">

          <div class="form-group">

            <label >Email</label>

            <ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors }">

              <div class="wrapper-input-icon">
                <img src="/img/home/mail.svg" alt="">

                <input v-model="email" type="email" >
              </div>
              <span class="error">{{ errors[0] }}</span>
            </ValidationProvider>

          </div>


         <div class="form-group">

           <label >{{$t('auth.password')}}</label>

           <ValidationProvider name="Mot de passe" rules="required|min:3" v-slot="{ errors }">


             <div class="wrapper-input-icon">
               <img src="/img/home/password.svg" alt="">

               <input v-model="password" type="text">
             </div>
             <span class="error">{{ errors[0] }}</span>
           </ValidationProvider>
         </div>


          <br>
          <div class="form-group mx-auto">

              <button type="submit" class="bk-btn theme-btn" :disabled="invalid">{{ $t('auth.identifier') }}</button>


            <nuxt-link :to="localePath('/pricing')">
              <button type="submit" class="bk-btn theme-btn" >{{$t('auth.create_account')}}</button>
            </nuxt-link>
          </div>

          <br>

          <p>{{$t('auth.lost_account')}}  <nuxt-link :to="localePath('/auth/forgot-password')" class="text-primary">{{$t('auth.find_my_account')}}</nuxt-link></p>

        </form>
      </ValidationObserver>

    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from  "vuex";

export default {

  auth:"guest",


  data() {
    return {

      email: '',
      password: '',
    }
  },

  methods:{
    ...mapActions({
      setErrorMessage :'setErrorMessage'
    }),
    socialLogin(service) {
      window.location.href = `${process.env.baseUrlSimple}api/auth/login/${service}`;
    },


    async onSubmit(){


      try {

        this.$nuxt.$loading.start()

        let app=this;



        await this.$auth.loginWith('local', { data: {
            email:app.email,
            password:app.password


          }}).then(async function(){


          await app.$auth.fetchUser().then(function(res){

            app.$nuxt.$loading.finish()



            console.log(app.$auth)


            app.$router.push('/user')

            app.$toast.open(app.$t('tools.hello ') +res.data?.user?.first_name== null ?'':res.data?.user?.first_name +' 😊')


          })

          app.phone_number=undefined
          app.password=undefined






        }).catch(function (error){


          app.$swal.fire({
            title: app.$t('auth.error_check_your_credential'),
            text: app.$t('auth.error_check_your_credential_desc'),
            imageUrl: '/img/home/no-login-found.svg',
            confirmButtonColor: "var(--warning)",
            imageWidth: 1000,
            imageHeight: 300,
            imageAlt: app.$t('auth.error_check_your_credential'),
            confirmButtonText: app.$t('tools.btn.im_checking'),

          })

          app.setErrorMessage(error)
        })
      }

      catch (err) {
      }

      this.$nuxt.$loading.finish()



    }
  },

  mounted() {

    console.log(this.$auth)
  }
}
</script>

<style scoped>

</style>