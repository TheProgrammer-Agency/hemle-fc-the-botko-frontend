<template>
  <nav class="page_nav">
    <ul class="mainmenu">
      <li class="lavel-1  slide--megamenu">
        <a href="#" @click.prevent="goToHome">
          <span>{{ $t('header.home') }}</span>
        </a>

      </li>

      <li class="lavel-1  slide--megamenu">
        <a @click.prevent="goToEquip" style="cursor:pointer">
          <span>{{ $t('header.equip') }}</span>
        </a>

      </li>

      <li class="lavel-1  slide--megamenu">
        <n-link :to="localePath('/blog')">
          <span>{{ $t('header.actus') }}</span>
        </n-link>

      </li>

      <li class="lavel-1  slide--megamenu">
        <a href="https://wa.me/691129524"  >
          <span>{{ $t('header.shop') }}</span>
        </a>

      </li>


      <li class="lavel-1  slide--megamenu">
        <n-link :to="localePath('/contact-us-with-map')">
          <span>{{ $t('header.contact') }}</span>
        </n-link>

      </li>


    </ul>
  </nav>
</template>

<script>

export default{


  methods:{

    goToHome() {


      console.log(this)
      if(this.$route.path==="/" || this.$route.path==="/"+this.$i18n.locale){


        console.log('go to')
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // Cela permet un défilement fluide
        });

      }

      else{

        this.$router.push(this.localePath('/'))


      }
    },


    goToEquip(){

      const divCible = document.getElementById('teams');


      if(this.$route.path==="/" || this.$route.path==="/"+this.$i18n.locale ||  this.$route.path==="/"+'#teams' || this.$route.path==="/"+this.$i18n.locale+'#teams' ){


        console.log("cibl=,",divCible.offsetTop+400)
        let rect =divCible.offsetTop+400

        window.scrollTo({
          top:rect,
          behavior: 'smooth' // Cela permet un défilement fluide
        });

      }

      else{

        this.$router.push(this.localePath('/#teams'))

        let rect =divCible.offsetTop+400

        window.scrollTo({
          top:rect,
          behavior: 'smooth' // Cela permet un défilement fluide
        });

      }
    }

  },

  mounted() {
    console.log("this ",this)


  }
}
</script>

<style lang="scss">
.mega__list {
  display: flex;
  li {
    flex-basis: 25%;
  }
}
</style>