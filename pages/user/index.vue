<template>
  <div class="main-container user-profil">


    <HeaderBlack @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen"/>


    <div class="container header-user-profil ">


      <div class="left">

        <ValidationProvider rules="image" v-slot="{ errors, validate }">

          <div class="user-img">

            <label for="upload" style="cursor:pointer">
              <img alt="user" :src="form.avatar" id="fileUpload" width="200" height="200" style="object-fit: cover">
              <input id="upload" style="display:none" type="file" @change="handleValidateChange">
            </label>


          </div>
          <span class="error">{{ errors[0] }}</span>

        </ValidationProvider>



        <div class="content">
          <h2>{{ $auth.user?.user?.first_name }} {{ $auth.user?.user?.last_name }}</h2>
          <span>


            Nyem Kni Hié

           </span>


        </div>
      </div>


      <div class="right">


        <div>

          <strong>
            parrainez un membre grace à votre code et gagnez de l'argent

          </strong>


          <br>

          <span @click.prevent="copySomething($auth.user.user.referral_code)" style="cursor:pointer">
             {{ $auth.user.user.referral_code }}  <img src="/img/home/copy.png" width="25" height="25">
          </span>

        </div>
        <br>
        <button class="bk-btn theme-btn" @click.prevent="generateMyCard">Génerer ma carte</button>


      </div>


    </div>


    <div class="user-info container-fluid">


      <div class="information container">


        <ValidationObserver v-slot="{ invalid }">


          <br><br>
          <div class="wrapper-form-info">


            <h5><img src="/img/home/user-black.png" alt=""> Mes information</h5>

            <div class="wrapper-wrapper-form-info">

              <form class="form-info">

                <div class="form-group-horizontal">

                  <div class="form-group">

                    <label>Votre nom</label>

                    <ValidationProvider name="Nom" rules="required|min:3" v-slot="{ errors }">
                      <input v-model="form.first_name" type="text">
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>

                  </div>

                  <div class="form-group">

                    <label>Votre prénom</label>

                    <ValidationProvider name="Prénom" rules="required|min:3" v-slot="{ errors }">
                      <input v-model="form.last_name" type="text">
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>

                  </div>
                </div>


                <div class="form-group-horizontal">

                  <div class="form-group">

                    <label>Ville</label>

                    <ValidationProvider name="Ville" rules="required|min:2" v-slot="{ errors }">
                      <input v-model="form.city" type="text">
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>

                  </div>

                  <div class="form-group">

                    <label>Pays</label>

                    <ValidationProvider name="First Name" rules="required|alpha" v-slot="{ errors }">
                      <input v-model="form.country" type="text">
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                </div>
                <div class="form-group-horizontal">

                  <div class="form-group">

                    <label>Email</label>

                    <ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors }">
                      <input v-model="form.email" type="email">
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>

                  </div>

                  <div class="form-group">

                    <label>Téléphone</label>

                    <ValidationProvider name="Tel" rules="required" v-slot="{ errors }">
                      <input v-model="form.tel" type="text">
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                </div>


                <br>


              </form>
            </div>

            <div class="form-group ml-auto">


              <button type="submit" class="bk-btn theme-btn" @click.prevent="updateInfo">Modifier</button>

            </div>

            <div class="wrapper-wrapper-info">

              <h5><img src="/img/home/user-black.png" alt=""> Mes mot de passe</h5>


              <form @submit.prevent="updatePassword" class="form-info">


                <div class="form-group-horizontal">

                  <div class="form-group">

                    <label>Mot de passe</label>

                    <ValidationProvider name="Mot de passe" rules="required|min:4" v-slot="{ errors }">
                      <input v-model="form.password" type="password">
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>

                  </div>

                  <div class="form-group">

                    <label>Confirmez votre mot de passe</label>

                    <ValidationProvider name="Mot de passe" rules="required|min:4" v-slot="{ errors }">
                      <input v-model="form.password_confirmation" type="password">
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                </div>

                <br>
              </form>


            </div>
            <div class="form-group ml-auto">

              <button type="submit" class="bk-btn theme-btn" @click.prevent="updatePassword">Mettre à jour</button>

            </div>


            <!--            <div class="wrapper-wrapper-info">

                          <h5 class="red-color"><img src="/img/home/user-black.png" alt=""> Zone de Danger</h5>


                          <form @submit.prevent="onSubmit" class="form-info" style="background:none">


                            <p>Vous n’etes pas satisfait du club Hémlè FC de Botko ? ou vous souhaitez supprimer toutes les informations associés à ce compte ? </p>
                            <br>
                          </form>
                        </div>
                        <div class="form-group ml-auto">


                          <button type="submit" class="bk-btn theme-btn red-color" :disabled="invalid">Devenir membre</button>

                        </div>-->
          </div>
        </ValidationObserver>

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

export default {
  mixins: [slugify],
  middleware: 'auth',

  components: {
    HeaderBlack,
    FooterStyleFour,
    FooterAgency,
    FooterStyleThree,
    FooterTwo,
    PricingItemStyleTwo

  },


  fetchOnServer: false,

  async fetch() {

    let app=this


    if(this.$route.query.reference){


       await this.$axios.get('/payment/verify/status/ ' + this.$route.query.reference).then(async function($res){

        await app.$auth.fetchUser().then(function(res){

             app.$swal.fire({
                title: 'Félicitation ! pour ton paiement !',
                width: 600,
                text: "Tu es désormais membre de Hèmlé, et nous sommes extrêmement fiers de toi. Profite dès maintenant de tous les avantages exceptionnels inclus dans ton pack. 😊" +
                    "\n 🫡",
                padding: '3em',
                color: '#716add',
                background: '#fff url(/img/home/trees.png)',
                backdrop: `
    rgba(0,0,123,0.4)
    url("/img/home/success.gif")
    left top
    no-repeat
  `
              })

          app.$router.push('/user')
        })


      }).catch(function(){

        app.$swal.fire({
          icon: 'error',
          title: "Une erreur s'est produite" +app.$auth.user.user.last_name,
          text: "Nous n'avons pas pu mettre à jour vos données de paiment, veuillez réessayer, si cela persiste, contactez-nous !" +
              "\n 🫡",
          footer: '<a href="/pricing" style="margin:auto;">Payez votre abonnement Hèmlé ICI !!</a>'
        })


      })

    }




  },
  data() {
    return {
      data,
      blogs,
      navOpen: false,
      searchOpen: false,
      form: {

        first_name: '',
        last_name: '',
        city: '',
        country: '',
        tel: '',
        email: '',
        password: '',
        password_confirmation: ''

      },
      config: {
        headers: {
          'content-type': 'multipart/form-data'
        }
      },

      dataImg: null
    }
  },


  mounted() {

    this.data=new FormData()



    this.form = {

      first_name: this.$auth.user.user.first_name,
      last_name: this.$auth.user.user.last_name,
      city: this.$auth.user.user.city,
      country: this.$auth.user.user.country,
      tel: this.$auth.user.user.tel,
      email: this.$auth.user.user.email,
      password: '',
      password_confirmation: '',
      avatar: this.$auth.user.user.avatar? this.$auth.user.user.avatar :'/img/home/avatar.svg'
    }


    document.body.classList.add('template-color-1', 'template-font-2')
  },

  methods: {

    async copySomething(text) {

      let app = this;

      if(this.$auth.user.user.is_member){

        //generate

        try {
          await this.$copyText(text);
          app.$toast.info('Vous copié le code  !   ')
        } catch (e) {
          console.error(e);
        }

      }
      else{
        this.$swal.fire({
          icon: 'error',
          title: "C'est pas le moment " +this.$auth.user.user.last_name,
          text: "Votre code de parrainage sera accessible uniquement après avoir effectué votre paiement.\n" +
              "\n 🫡",
          footer: '<a href="/pricing" style="margin:auto;">Payez votre abonnement Hèmlé ICI !!</a>'
        })

      }

    },

    generateMyCard(){

      if(this.$auth.user.user.is_member){

        //generate
      }
      else{


        this.$swal.fire({
          icon: 'error',
          title: 'Oops... pas si vite '+this.$auth.user.user.last_name,
          text: "Tu n'es pas encore membre de Hemlé , peux-tu finaliser ton paiement d'abord ? 🫡",
          footer: '<a href="/pricing" style="margin:auto;">Ça se passe ici !</a>'
        })
      }
    },

    setData(){

      this.data.append('tel', this.form.tel)
      this.data.append('first_name', this.form.first_name)
      this.data.append('last_name', this.form.last_name)
      this.data.append('city', this.form.city)
      this.data.append('country', this.form.country)
      this.data.append('password', this.form.password)
      this.data.append('password_confirmation', this.form.password_confirmation)



    },
    async execUpdate() {

      let app = this



      this.setData()



      return new Promise(async (resolve, reject) => {


        console.log("avatar",this.data.get('avatar'))

        await app.$axios.$post('/user/update/img', app.data, app.config).then(async function (res) {

          await app.$auth.fetchUser().then(function () {

            resolve()

            console.log("response = ",res.data)

            console.log(app.$auth.user)
            app.$nuxt.$loading.finish()

          })


        }).catch(function () {

          reject()

        })
      });

    },


    handleValidateChange: async function (e) {


      let app = this

      app.$nuxt.$loading.start()

      if(e.target.files.length>0){



      console.log("e = ",e.target.files,e.target.files[0])
      let fileSize = e.target.files[0].size / 1024 / 1024

      if (e.target.files && e.target.files[0]) {


        let file = e.target.files[0];
        //other verification
        if (fileSize < 1) {
          let reader = new FileReader();
          reader.addEventListener(
              "load",
              function () {
                let avatarImg = new Image();
                let src = reader.result;
                avatarImg.src = src;
                app.form.avatar = src;

              },
              false
          );


          this.data.append('avatar', file);


          console.log("avatar", file)
          await app.execUpdate().then(function () {


            app.$nuxt.$loading.finish()

            app.$swal.fire({
              position: 'Center',
              icon: 'success',
              title: 'Génial  !',
              text: 'Vous avez mis à jour votre photo de profil',
              showConfirmButton: true,
              confirmButtonText: "Okay",
              timer: 10000
            })

            reader.readAsDataURL(e.target.files[0]);

          })

        } else {

          app.$nuxt.$loading.finish()

          app.$swal.fire({
            position: 'Center',
            icon: 'info',
            title: 'Image trop grande ! 😯 ',
            text: "Vous devez insérer une image ayant une taille inférieur à 1MO",
            showConfirmButton: true,
            confirmButtonText: "J'ai compris",
            timer: 10000
          })
        }


      } else {
        app.$nuxt.$loading.start()

      }

      }
    },
    async updateInfo() {

      let app = this;



      await this.$axios.$patch('user/update', this.form).then(async function (response) {

        app.$swal.fire({
          icon: 'success',
          title: 'Félicitation ! ' + app.form.last_name,
          text: "Vos information ont été mis à jour !",
        })

      })
    },
    async updatePassword() {

      let app = this;


      let data = {

        password: this.form.password,
        password_confirmation: this.form.password_confirmation,
      }


      await this.$axios.$patch('user/update/password', data).then(async function (response) {

        app.$swal.fire({
          icon: 'success',
          title: 'Félicitation ! ' + app.form.last_name,
          text: "Vos information ont été mis à jour ! ",
        })

      }).catch(function (error) {
        app.$swal.fire({
          icon: 'error',
          title: "Une erreur s'est produite " + app.form.last_name,
          text: "Veuillez réessayer ou contacter l'administrateur  " + error.response.data.message,
        })
      })
    },


    head() {
      return {
        title: 'Home Business'
      }
    },
  }
}


</script>