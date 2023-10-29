<template>
  <div class="content errors-page congratulation">


    <canvas class="snow" id="snow"></canvas>


    <div class="main-text">
      <h1>{{ error.message}}</h1>

      <n-link class="home-link" to="/">{{ $t('error.back_to_home')}}</n-link>

    </div>
    <br>
   <div class="ground">
      <div class="mound">
        <div class="mound_text">{{error.statusCode}}</div>
        <div class="mound_spade"></div>
      </div>
    </div>




  </div>
</template>

<script>
    export default {
        props: ['error'],

      mounted() {


          console.log("erro ",this.error)

        document.body.style.backgroundColor = 'rgba(0,0,0,.07)';

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