<template>

  <div class="auth">



    <div class="auth-right container">


      <ValidationObserver v-slot="{ invalid }">


        <h2 class="text-center">Remplissez vos informations</h2>

        <br><br>
        <form @submit.prevent="onSubmit" class="auth-form">



          <div class="form-group">

            <label >Email</label>

            <ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors }">
              <input v-model="email" type="email" >
              <span>{{ errors[0] }}</span>
            </ValidationProvider>

          </div>



          <br>
          <div class="form-group mx-auto">
            <button type="submit" class="bk-btn theme-btn" :disabled="invalid">S'identifier</button>
          </div>

          <br>

          <p class="mx-auto">Vous avez déjà un compte ?  <nuxt-link to="/auth/login" class="text-primary">Me connecter</nuxt-link></p>
        </form>
      </ValidationObserver>

    </div>

    <div class="auth-left" style="background-image: url('/img/home/bg_3.jpg');background-size: cover">


    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  auth: 'guest',

  data() {
    return {

      email: '',
      password: '',
    }
  }
}
</script>

<style scoped>

</style>