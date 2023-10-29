<template>
  <div class="container">
    <div class="loader"></div>
    <p>{{$t('auth.social_waiting')}}</p>
  </div>
</template>

<script>
export default {
  auth:"guest",
  data() {
    return {
      token: this.$route.query.token ? this.$route.query.token : null
    }
  },
  mounted() {



    let $token='Bearer ' + this.token;
    this.$auth.setUserToken($token)


    let app=this;

    this.$auth.fetchUser().then((res) => {

      app.$router.push('/user');

    }).catch((e) => {

      this.$auth.logout();
      return this.$router.push(`/auth/${this.$route.query.origin ? this.$route.query.origin : 'register'}?error=1`);
    });
  }
}
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
}

.loader {
  margin: 20px auto;
  border: 8px solid #f3f3f3;
  border-radius: 50%;
  border-top: 8px solid #3B5998;
  border-bottom: 8px solid #3B5998;
  width: 60px;
  height: 60px;
  -webkit-animation: spin 1.2s linear infinite;
  animation: spin 1.2s linear infinite;
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>