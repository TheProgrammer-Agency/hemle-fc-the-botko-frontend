<template>
  <div class="main-container">

    <HeaderBlack @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen"/>

    <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen"/>

    <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen"/>

    <div class="brook-portfolio-details bg_color--1">
      <div class="container">
        <div class="row pt--100 pt_md--5 pt_sm--5 pb--80">

          <!-- Portfolio Left -->
          <div class="col-lg-6 col-md-6 col-12 order-2 mt--40 order-lg-1 mt_md--40 mt_sm--40" id="is_stuck_inner">
            <div class="portfolio-left bk-portfolio-details">
              <div class="portfolio-main-info">


                <h3 class="heading heading-h3 line-height-1-42">{{ user.first_name }} {{ user.last_name }}</h3>

                <br>

                <div class="portfolio-details-list ">
                  <div class="details-list">
                    <label>Match avec FC BOTKO</label>
                    <h3>{{ user.matches_number }}</h3>

<!--
                    <span> saison 2021/2023</span>
-->

                  </div>

                  <div class="details-list">
                    <label>Buts avec FC Botko</label>
                    <h3>{{ user.but_number }}</h3>

<!--
                    <span> saison 2021/2023</span>
-->

                  </div>

                  <div class="details-list">
                    <label>PASSES DECISIVES AVEC BOTCO</label>
                    <h3>{{ user.decisive_pass_number }}</h3>
<!--
                    <span> saison 2021/2023</span>
-->

                  </div>

                  <!--                  <div class="details-list">
                                      <label>Awards</label>
                                      <h3>2020</h3>
                                      <span> saison 2021/2023</span>
                                    </div>-->
                </div>

                <div class="portfolio-content mt--75 mb--75 mt_md--40 mb_md--40 mt_sm--40 mb_sm--40">

                  <!--                                    <h6 class="heading heading-h6">ABOUT THE PROJECT</h6>
                                                    -->
                  <div class="desc mt--20">
                    <p class="bk_pra" v-html="user.bio['fr']"></p>
                  </div>
                </div>

                <div class="portfolio-details-list-1 portfolio-details-list-test">
                  <div class="details-list">
                    <label>{{ user.place_of_birth }}</label>
                    <span>Cameroun</span>
                  </div>

                  <div class="details-list">
                    <label>Date de naissance</label>
                    <span>{{ toDate(user.birthdate) }}</span>
                  </div>

                  <div class="details-list">
                    <label>Poids</label>
                    <span>
                      <n-link to="/">
                        {{ user.weight }}
                      </n-link>
                                        </span>
                  </div>

                  <div class="details-list">
                    <label>Taille</label>
                    <span>{{ user.size }} cm</span>
                  </div>

                  <div class="details-list">
                    <label> Date de début au club</label>
                    <span>{{ toDate(user.start_date)}}</span>
                  </div>


                </div>
                <!-- Start Details List -->

                <!-- End Details List -->
                <!-- Start Portfolio Share -->
<!--                <div class="portfolio-share pt&#45;&#45;70 pt_md&#45;&#45;40 pt_sm&#45;&#45;40">
                  <h6 class="heading heading-h6">SHARE</h6>
                </div>-->
              </div>
            </div>
          </div>
          <!-- Portfolio Right -->

          <div class="col-lg-6  col-md-6 col-12 order-1 order-lg-2">
            <div class="portfolio-right portfolio-details-gallery text-center text-lg-right">
              <!-- Start Portfolio Image -->
              <div class="portfolio-image mb--50">
                <img :src="user.image" alt="portfolio">
              </div>
              <!-- End Portfolio Image -->

              <!-- Start Portfolio Image -->

              <!-- End Portfolio Image -->
            </div>
          </div>
        </div>
      </div>

      <!--            <div class="container">
                      <div class="row">
                          <div class="col-lg-12">
                              &lt;!&ndash; Portfolio Nav List &ndash;&gt;
                              <div class="portfolio-nav-list pt&#45;&#45;50 pb&#45;&#45;150 pb_md&#45;&#45;80 pb_sm&#45;&#45;60 pt_md&#45;&#45;5 pt_sm&#45;&#45;5">
                                  <div class="portfolio-page prev">
                                      <div class="inner">
                                          <n-link to="/portfolio/portfolio-grid-wide">
                                              <p>Prev</p>
                                              <h3 class="heading heading-h3">Awe-inspiring <br> Projects</h3>
                                          </n-link>
                                      </div>
                                  </div>
                                  <div class="portfolio-page next mt_sm&#45;&#45;30">
                                      <div class="inner">
                                          <n-link to="/portfolio/portfolio-grid-wide">
                                              <p>Next</p>
                                              <h3 class="heading heading-h3">B-sharp High-end <br> Audio</h3>
                                          </n-link>
                                      </div>
                                  </div>
                              </div>
                              &lt;!&ndash; Portfolio Nav List &ndash;&gt;
                          </div>
                      </div>
                  </div>-->
    </div>
    <FooterStyleFour/>


  </div>
</template>

<script>
import data from '../../data/portfolio.json';

export default {
  auth:false,
  components: {
    HeaderBlack: () => import('@/components/HeaderBlack'),
    OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
    SearchPopup: () => import('@/components/SearchPopup'),
    FooterTwo: () => import('@/components/FooterTwo'),
  },

  data() {
    return {
      data,
      navOpen: false,
      searchOpen: false,
    }
  },

  mounted() {
    document.body.classList.add('template-color-1', 'template-font-1')
  },
  async asyncData({app, params}) {


    let user = (await app.$axios.get('/user/show/' + params.uuid)).data.teams


    return {user}
  },


  methods:{


    toDate($dat){

      let $date= new Date($dat)


      return $date.getFullYear()+'/'+$date.getUTCMonth()+'/'+$date.getUTCDay()

    }
  },


  head() {
    return {
      title: 'Portfolio Details'
    }
  },
};
</script>