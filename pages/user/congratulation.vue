<template>
  <div class="content errors-page congratulation">


    <canvas class="snow" id="snow"></canvas>

    <!--    <div class="main-text">
          <h1>IMEREO <br/>Cette page a disparu.</h1><a class="home-link" href="/">Faites du stop pour rentrer chez vous.</a>
        </div>-->
    <!--    <div class="ground">
          <div class="mound">
            <div class="mound_text"></div>
            <div class="mound_spade"></div>
          </div>
        </div>-->

    <div class="wrapper-congratulation container">

      <div class="left-congrat">

        <h1>

          {{$t('payment.payment_success_title')}} {{ $auth.user.data.first_name }}
          <strong class='secondary-color'>{{ $auth?.user?.data?.sex==='male' ? 'le Hémlèen ':'la Hémlèenne ' }}!!</strong>

        </h1>


        <p>

          {{
            $t('payment.payment_success_desc')
          }}

        </p>

        <button class="bk-btn theme-btn" @click.prevent="downloadMyCard">{{ $t('tools.btn.download_card') }}</button>

      </div>
      <div class="right-congrat">


        <img src="/img/home/congrat2.svg" alt="" v-if="$auth?.user?.data?.sex==='male'">
        <img src="/img/home/thank_membered.png" alt="" v-if="$auth?.user?.data?.sex==='female'">

      </div>


    </div>


  </div>
</template>

<script>
import {mapGetters} from "vuex";
import {v4 as uuidv4} from "uuid";

export default {

  auth: false,
  fetchOnServer: false,
  middleware:['checkUserIsActive','auth'],


  data(){

    return{

      external_reference:''
    }
  },

  ...mapGetters({
    referrers: 'user/referrers'
  }),

computed:{

  getReferrer() {

    return this.referrers?.referrer?.referrer
  },
  hasReferrer() {

    return !(this.referrers?.referrer == null)

  },

  hasReferrals() {
    return this.referrers?.referrals?.length > 0
  },
},

  async fetch() {

    try {

      await this.$store.dispatch('user/getMyReferer')

    } catch (errors) {
      // Set validation errors on a form

    }





    if (this.$auth.loggedIn) {

      if (this.$route.query.reference) {


        await this.$axios.get('/payment/verify/status/ ' + this.$route.query.reference).then(async function ($res) {

          await app.$auth.fetchUser().then(function (res) {

          })


        }).catch(function (e) {

          app.$swal.fire({
            icon: 'error',
            title: app.$t('auth.an_error_occured')+ ' '+app.$auth.user.data.last_name,
            text: e.response.data.message,
          })

        })

      }


    }


  },

  methods:{



    downloadMyCard(){

      window.location.href=process.env.APP_URL+'/user'
    }
  },

   mounted() {

     this.external_reference = uuidv4();

    if(!this.hasReferrer){







    }
    document.body.style.backgroundColor = 'rgba(0,0,0,.07)';

  },

  beforeDestroy() {

    document.body.style.backgroundColor = '#fff';

  }
}
</script>

<style lang="scss" scoped>
.error404 {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;

  .error-image {
    max-width: 60%;
    margin: auto;
  }
}
</style>