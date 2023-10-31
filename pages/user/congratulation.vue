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

        <h1 v-html="$t('payment.payment_success_title')">

        </h1>


        <p>

          {{$t('payment.payment_success_desc')}}
        </p>


        <n-link to="/user" class="bk-btn theme-btn">{{ $t('tools.btn.download_card') }}</n-link>

      </div>
      <div class="right-congrat">


        <img src="/img/home/thank_membered.png" alt="">

      </div>


    </div>


  </div>
</template>

<script>
export default {

  auth: false,
  fetchOnServer: false,
  middleware:['checkUserIsActive'],

  async fetch() {

    let app = this



    if (this.$auth.loggedIn) {

      if (this.$route.query.reference) {


        await this.$axios.get('/payment/verify/status/ ' + this.$route.query.reference).then(async function ($res) {

          await app.$auth.fetchUser().then(function (res) {

          })


        }).catch(function () {

          app.$swal.fire({
            icon: 'error',
            title: "Une erreur s'est produite" + app.$auth.user.data.last_name,
            text: "Nous n'avons pas pu mettre à jour vos données de paiment, veuillez réessayer, si cela persiste, contactez-nous !" +
                "\n 🫡",
            footer: '<a href="/pricing" style="margin:auto;">Payez votre abonnement Hèmlé ICI !!</a>'
          })


        })

      }


    }


  },

  mounted() {

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