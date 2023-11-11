<template>
  <nav class="page_nav">
    <ul class="mainmenu">
      <li class="lavel-1  slide--megamenu">
        <n-link :to="localePath('index')">
          <span>{{ $t('header.home') }}</span>
        </n-link>

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

    goToEquip(){

      const divCible = document.querySelector('#teams');


      if(this.$route.path==="/"){




        divCible.scrollIntoView({
          behavior: 'smooth' // Utilisez 'smooth' pour un défilement fluide, ou 'auto' pour un défilement instantané
        });

      }else{

        this.$router.push(this.localePath('/#teams'))

        divCible.scrollIntoView({
          behavior: 'smooth' // Utilisez 'smooth' pour un défilement fluide, ou 'auto' pour un défilement instantané
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