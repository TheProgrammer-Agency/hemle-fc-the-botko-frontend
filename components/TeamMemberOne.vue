<template>
    <div class="team team_style--1">
        <!-- Image Wrap -->
        <div class="image-wrap">
            <div class="thumb" :style="{ background: `url(/img/cobail3.jpg) center center / cover`,  height: '550px' }">

<!--
              background: `url(${teamMember.avatar}) center center / cover`,
-->

              <img :src="teamMember.avatar"  style="object-fit: cover">

                <div class="overlay"></div>

                <div class="shape">
                    <img class="shape-01" src="/img/team/shape/team-shape-1.png" alt="shape image">
                    <img class="shape-02" src="/img/team/shape/team-shape-2.png" alt="shape image">
                    <img class="shape-03" src="/img/team/shape/team-shape-3.png" alt="shape image">

                  <!-- Team Info -->

                </div>
              <div class="info"  >

                <h2 class="name white" >{{ teamMember.first_name }}</h2>
                <span class="position white">{{ teamMember.last_name }}</span>
              </div>

            </div>
            <!-- Social Network -->
<!--            <div class="social-networks">
                <div class="inner">
                    <a class="hint&#45;&#45;bounce hint&#45;&#45;top hint&#45;&#45;primary" href="https://www.facebook.com/" aria-label="Facebook" target="_blank">
                        <i class="fab fa-facebook"></i>
                    </a>
                    <a class="hint&#45;&#45;bounce hint&#45;&#45;top hint&#45;&#45;primary" href="https://twitter.com/" aria-label="Twitter" target="_blank">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a class="hint&#45;&#45;bounce hint&#45;&#45;top hint&#45;&#45;primary" href="https://www.instagram.com/" aria-label="Instagram" target="_blank">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
            </div>-->

        </div>

    </div>
</template>

<script>
    export default {
        props: ['teamMember']
    };
</script>

<style lang="scss">

</style>