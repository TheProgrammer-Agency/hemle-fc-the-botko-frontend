<template>
  <div class="main-container user-profil">

    <HeaderElement @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen"/>

    <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen"/>

    <div class="container header-user-profil ">


      <div class="left">


        <label for="upload" style="cursor:pointer">
          <img alt="user" :src="form.avatar" id="fileUpload" width="200" height="200" style="object-fit: cover">
          <input id="upload" style="display:none" type="file" @change="handleValidateChange">
        </label>


        <div class="content">
          <h2>{{ $auth.user?.data?.first_name }} {{ $auth.user?.data?.last_name }}</h2>

          <!--
                    <span>
                      Nyem Kni Hié
                     </span>
          -->




        </div>
      </div>


      <div class="right">


        <div>

          <strong>
            {{$t('user.referrer_member')}}

          </strong>


          <br>

          <span @click.prevent="copySomething($auth.user?.data?.referral_code)" style="cursor:pointer">
             {{ $auth.user?.data?.referral_code }}  <img src="/img/home/copy.png" width="25" height="25">
          </span>


        </div>
        <br>

        <!--        download :href="$auth.user.data.card"
                -->



        <a v-if="$auth?.user.data?.card !== null  && $auth?.user?.data?.is_member" download :href="$auth?.user?.data?.card"  class="bk-btn theme-btn">{{$t('tools.btn.generate_card')}}</a>

        <button v-if="$auth?.user?.data?.card ==null "  class="bk-btn theme-btn" @click.prevent="generateMyCard" >{{$t('tools.btn.generate_card')}}</button>



      </div>


    </div>


    <div class="user-info " id="fill-user-info">


      <header class="header-user ">

        <nav class="container">

          <nuxt-link to="/user">
             <span> Mon profil</span></nuxt-link>
          <nuxt-link :to="localePath('/user/orders')"><i class="fa-solid fa-user-large"></i> Mes commandes</nuxt-link>
          <nuxt-link :to="localePath('/user/referrer')">Parainage</nuxt-link>


        </nav>
      </header>


      <nuxt keep-alive :keep-alive-props="{ max: 10 }"   />


    </div>


    <br><br><br><br><br>
    <br><br><br><br><br>
    <br><br><br><br><br>
    <FooterStyleFour/>

    <a :href="getContact" class="messenger" target="_blank">
      <img src="/img/home/wa_icon.png" alt="" >

    </a>

  </div>
</template>

<script>

import blogs from '~/data/blog.json';
import {slugify} from '~/mixins/slugify'
import FooterStyleFour from "../components/FooterStyleFour";
import HeaderBlack from "../components/HeaderBlack";
import {mapGetters} from "vuex";

export default {
  mixins: [slugify],
  middleware:['auth'],
  layout:'layout-profil',

  components: {
    HeaderBlack,
    FooterStyleFour,

  },


  fetchOnServer: false,


  computed: {
    ...mapGetters({
      error_message: 'error_message'
    }),


      getContact(){

        return process.env.wa_contact;
    
    }
  },

  data() {
    return {

      blogs,
      navOpen: false,
      searchOpen: false,
      phone_number_code:'',
      form: {

        first_name: '',
        last_name: '',
        city: '',
        country: 'Cameroun',
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



    if(!(this.$auth.user?.data?.is_active)){

      this.$swal.fire({
        icon: 'warning',
        title: this.$t('user.user_not_ready'),
        text: this.$t('user.user_not_ready_description')
      })

    }




    this.form = {

      first_name: this.$auth.user.data.first_name,
      last_name: this.$auth.user.data.last_name,
      city: this.$auth.user.data.city,
      country: this.$auth.user.data.country,
      tel: this.$auth.user.data.tel,
      email: this.$auth.user.data.email,
      password: '',
      password_confirmation: '',
      avatar: this.$auth.user.data.avatar? this.$auth.user.data.avatar :'/img/home/avatar.svg'
    }




    document.body.classList.add('template-color-1', 'template-font-2')
  },

  methods: {

    onSelect({name, iso2, dialCode}) {
      this.phone_number_code = dialCode;
    },
    async copySomething(text) {

        let app = this;

        if(this.$auth.user.data.is_member){

          //generate

          try {
            await app.$copyText('text');
            app.$toast.info(app.$t('user.code_copied'))
          } catch (e) {
            console.error(e);
          }

        }
      else{

        if(this.$auth.user.data.is_active){

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

    generateMyCard(){

      if(this.$auth.user.data.is_member){

        //generate

        if(this.$auth.user.data.card == null){

          this.$swal.fire({
            icon: 'info',
            title: this.$t('user.user_generate_card_info_not_available_title')+this.$auth.user.data.last_name,
            text: this.$t('user.user_generate_card_info_not_available_desc')
          })
        }
      }
      else{


        if(this.$auth.user.data.is_active){
          this.$swal.fire({
            icon: 'error',
            title: this.$t('user.user_generate_card_info_not_available_title')+(this.$auth.user.data.last_name == null? '':this.$auth.user.data.last_name),
            text: this.$t('user.user_generate_card_info_inactive_desc'),
            footer: '<a href="/pricing" style="margin:auto;">'+this.$t('tools.btn.it_is_here')+'</a>'
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
    goToOrder(){


      if(this.$auth.user.data.is_active){


        this.$router.push(this.localePath('/user/orders'))

      }else{

        this.$swal.fire({
          icon: 'warning',
          title: this.$t('user.user_not_ready'),
          text: this.$t('user.user_not_ready_description')
        })
      }
    },
    setData(){

      this.data.append('tel','+' + this.phone_number_code + this.form.tel,)
      this.data.append('first_name', this.form.first_name)
      this.data.append('last_name', this.form.last_name)
      this.data.append('city', this.form.city)
      this.data.append('country', this.form.country)
      this.data.append('password', this.form.password)
      this.data.append('password_confirmation', this.form.password_confirmation)



    },
    async deleteUser(){

      let app = this;

      app.$swal.fire({
        title: app.$t('user.are_you_sure'),
        text: app.$t('user.delete_account_confirm_desc'),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: app.$t('tools.btn.delete_account_confirm'),
        cancelButtonText: app.$t('tools.btn.delete_account_canceled'),
        reverseButtons: true
      }).then(async (result) => {
        if (result.isConfirmed) {
          /*
                    app.$router.push('/')
          */
          app.$nuxt.$loading.start()
          await app.$axios.$delete('user/delete').then(async function (response) {

            await app.$auth.logout();

            app.$router.push('/')

            app.$nuxt.$loading.finish()

            app.$swal.fire({
              position: 'Center',
              icon: 'info',
              title: app.$t('auth.success_account_deleted_title'),
              text:app.$t('auth.success_account_deleted_desc'),
              showConfirmButton: true,
              confirmButtonText: app.$t('tools.btn.understood'),
            })

          }).catch(function(err){

          })


        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === app.$swal.DismissReason.cancel
        ) {
          app.$swal.fire(
              app.$t('user.delete_account_canceled_title'),
              app.$t('user.delete_account_canceled_desc'),
              'info'
          )
        }
      })




    },



    async execUpdate() {

      let app = this



      this.setData()



      return new Promise(async (resolve, reject) => {



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
                title: app.$t('user.user_profile_updated_title'),
                text: app.$t('user.user_profile_updated_desc'),
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
              title: app.$t('user.user_img_too_big_title'),
              text:  app.$t('user.user_img_too_big_desc'),
              showConfirmButton: true,
              confirmButtonText: app.$t('tools.btn.understood'),
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
          title: app.$t('user.user_info_updated_title') + app.form.last_name,
          text: app.$t('user.user_info_updated_desc'),
        })

      }).catch(function(error){

        app.$swal.fire({
          icon: 'error',
          title:app.$t('auth.an_error_occured'),
          text:  error.response.data.message,

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
          title: app.$t('user.user_info_updated_title') + app.form.last_name,
          text: app.$t('user.user_info_updated_desc'),
        })

      }).catch(function (error) {

        app.$swal.fire({
          icon: 'error',
          title: app.$t('error.an_error_occured') + app.form.last_name,
          text:error.response.data.message,
        })
      })
    },


    head() {
      return {
        title: this.$t('user.title')
      }
    },
  }
}


</script>