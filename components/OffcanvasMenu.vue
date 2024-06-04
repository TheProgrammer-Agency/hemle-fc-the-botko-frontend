<template>
    <!-- Start Hamberger Menu -->
    <div class="open-hamberger-wrapper d-none d-lg-block" id="popup-fullscreen-menu"  >
        <div class="page-close light-version" @click="$emit('toggleFullpageMenu')"></div>
        <div class="header-default light-logo--version poss_relative">
            <div class="mainmenu-wrapper" :style="{ background: `url('/img/bg/test.jpg') center center /cover`,height: '50vh' }">
            </div>
        </div>

        <!-- Start Search -->
       <div class="container">


         <br>
         <div class="row ">


           <h1 class="text-white">Hemle fc De botko en final de chamions league</h1>

           <p class="text-white">

             lors que les matches de la saison 2023/24 sont terminés, il est temps de choisir le plus beau but du FC Barcelone.
             Les internautes culers peuvent décider, à travers un vote sponsorisé par Konami, lequel ils
             préfèrent. Deux maillots et deux places pour la saison 2024/25 seront à remporter parmi les votants.
           </p>


         </div>

         <div class="offcanvas-extra-info mt--150">
           <div class="row align-items-end">
             <div class="col-lg-6">
               <div class="info">

                 <ul class="social-icon text-left tooltip-layout icon-size-large">
                   <li class="facebook">
                     <a href="https://www.facebook.com/" target="_blank" class="link hint--bounce hint--top hint--white" aria-label="Facebook">
                       <i class="fab fa-facebook"></i>
                     </a>
                   </li>
                   <li class="twitter">
                     <a href="https://twitter.com/" target="_blank" class="link hint--bounce hint--top hint--white" aria-label="Twitter">
                       <i class="fab fa-twitter"></i>
                     </a>
                   </li>
                   <li class="instagram">
                     <a href="https://www.instagram.com/" target="_blank" class="link hint--bounce hint--top hint--white" aria-label="Instagram">
                       <i class="fab fa-instagram"></i>
                     </a>
                   </li>
                 </ul>

               </div>
             </div>
             <div class="col-lg-6">
               <div class="copyright-right text-right">
                 <p class="bk_pra font-16">
                   &copy; 2024 <b class="text-white">Brook</b> Made with <i class="fa fa-heart text-danger"></i> by <a href="https://hasthemes.com/"><b>HEMLE FC </b></a>
                 </p>
               </div>
             </div>
           </div>
         </div>

       </div>
    </div>
    <!-- End Hamberger Menu -->
</template>

<script>
    export default {
        components: {
            Navigation: () => import ('@/components/Navigation'),
        },
    };
</script>

<style lang="scss" scoped>
    .offcanvas-extra-info {
        .bk_pra {
            color: #999;
        }
    }
</style>