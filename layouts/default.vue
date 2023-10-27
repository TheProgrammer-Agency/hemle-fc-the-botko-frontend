<template>
    <div>
        <nuxt />

      <a :href="getContact" class="messenger" target="_blank">
        <img src="/img/home/wa_icon.png" alt="" >

      </a>
    </div>
</template>

<script>
    export default {
        components: {
        },

      computed:{

          getContact(){

            return process.env.wa_contact;
          }
      }
    }
</script>

<style>

</style>
