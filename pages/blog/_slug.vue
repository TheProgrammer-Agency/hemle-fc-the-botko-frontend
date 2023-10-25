<template>
  <div class="main-container">

    <HeaderElement @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen"/>

    <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen"/>

    <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen"/>


    <div class="blog-creative-area pt--170 pb--100">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="blog-details-wrapper">
              <article class="blog-post standard-post">
                <!-- Start Header -->
                <div class="header mb--40 text-center">
                  <h3 class="heading heading-h3 font-32">{{ blog.title['fr'] }}</h3>
                  <div class="post-meta mt--20">
                    <div class="post-date">{{ toDate(blog.created_at) }}</div>
                    <!--                                        <div class="post-category">
                                                                <n-link v-for="(category, i) in data.categories" :key="i" :to="`/blog/category/${slugify(category)}`" class="mr-2">{{ category }},</n-link>
                                                            </div>-->
                  </div>
                </div>
                <!-- Start Thumbnail -->
                <div class="thumbnail mb--60">
                  <img class="w-100" :src="blog.image" alt="Blog Image 01">
                </div>
                <!-- Start Content -->
                <div class="content basic-dark2-line-1px pb--50 mb--35">
                  <div class="inner">
                    <div class="desc mt--45 mb--50">
                      <p class="bk_pra wow move-up" v-html="blog.description[$i18n.locale]"></p>
                    </div>
                  </div>
                  <div class="thumbnail">
                    <img class="w-100" :src="blog.image_title1" alt="Blog Image 01">
                  </div>
                  <div class="desc mt--45">
                    <p class="bk_pra wow move-up" v-html="blog.description[$i18n.locale]"></p>
                  </div>

                  <!-- Start Blockquote -->
                  <div class="bk-quote-content">
                    <blockquote class="brook-quote move-up wow">
                      <div class="quote-text">Platform companies are product organizations that think in terms of
                        roadmaps and features and sprints.
                      </div>
                    </blockquote>
                  </div>
                  <!-- End Blockquote -->


                  <div class="thumbnail mb--60">
                    <img class="w-100" :src="blog.image_title2" alt="Blog Image 01">
                  </div>

                  <div class="desc mt--45">
                    <p class="bk_pra wow move-up" v-html="blog.description2[$i18n.locale]"></p>
                  </div>
                </div>
                <!-- Start Footer -->
                <!--                                <div class="blog-footer mb&#45;&#45;85 wow move-up">
                                                    <div class="row">
                                                        <div class="col-lg-6 col-sm-6 col-12">
                                                            <div class="post-tag d-flex align-items-center">
                                                                <h6 class="heading heading-h6">TAGS:</h6>
                                                                <div class="blog-tag-list pl&#45;&#45;5">
                                                                    <n-link to="/blog/blog-creative">business</n-link>
                                                                    <n-link to="/blog/blog-creative">format</n-link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6 col-sm-6 col-12">
                                                            <div class="post-share text-left text-sm-right">
                                                                <h6 class="heading heading-h6">SHARE:</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>-->
              </article>
              <!-- Start Post Nav Links -->
              <div class="post-nav-lisnt mb--45 wow move-up">
                <div v-for="(blog,index) in last_blog"
                     :class="index===1 ? 'nav-item previous' : 'nav-item next mt_sm--30'">

                  <n-link :to="localePath(`/blog/${blog.uuid}`)">
                    <div class="link-text">
                      <span :class="index===1? 'fa fa-arrow-left':'fa fa-arrow-right'"></span>
                      <p class="">{{ index === 1 ? 'Prev' : 'Next' }}</p>
                    </div>
                    <span>{{ blog.title[$i18n.locale] }}</span>
                  </n-link>
                </div>

              </div>
              <!-- End Post Nav Links -->

              <!--                            <div class="comments-wrapper">
                                              <div class="inner">
                                                  <h4 class="heading heading-h4">3 Comments</h4>
                                                  <div class="commnent-list-wrap mt&#45;&#45;25">

                                                      &lt;!&ndash; Start Single Comment &ndash;&gt;
                                                      <div class="comment wow move-up">
                                                          <div class="thumb">
                                                              <img src="/img/blog/client/client-1.jpg" alt="Multipurpose">
                                                          </div>
                                                          <div class="content">
                                                              <h6 class="heading heading-h6">SCOTT JAMES</h6>
                                                              <div class="text mt&#45;&#45;10 pr&#45;&#45;50 pr_sm&#45;&#45;5">
                                                                  <p class="bk_pra">To link your Facebook and Twitter accounts, open the Instagram app on your phone or tablet, and select the Profile tab in the bottom-right corner of the screen.</p>
                                                              </div>
                                                              <div class="comment-footer mt&#45;&#45;10">
                                                                  <span>May 17, 2018 at 1:59 am</span>
                                                                  <span class="reply-btn">
                                                                      <button>Reply</button>
                                                                  </span>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      &lt;!&ndash; End Single Comment &ndash;&gt;

                                                      &lt;!&ndash; Start Single Comment &ndash;&gt;
                                                      <div class="comment comment-reply wow move-up">
                                                          <div class="thumb">
                                                              <img src="/img/blog/client/client-2.jpg" alt="Multipurpose">
                                                          </div>
                                                          <div class="content">
                                                              <h6 class="heading heading-h6">OWEN CHRIST</h6>
                                                              <div class="text mt&#45;&#45;10 pr&#45;&#45;50 pr_sm&#45;&#45;5">
                                                                  <p class="bk_pra">To link your Facebook and Twitter accounts, open the Instagram app on your phone or tablet, and select the Profile tab in the bottom-right corner of the screen.</p>
                                                              </div>
                                                              <div class="comment-footer mt&#45;&#45;10">
                                                                  <span>May 17, 2018 at 1:59 am</span>
                                                                  <span class="reply-btn">
                                                                      <button>Reply</button>
                                                                  </span>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      &lt;!&ndash; End Single Comment &ndash;&gt;

                                                      &lt;!&ndash; Start Single Comment &ndash;&gt;
                                                      <div class="comment wow move-up">
                                                          <div class="thumb">
                                                              <img src="/img/blog/client/client-3.jpg" alt="Multipurpose">
                                                          </div>
                                                          <div class="content">
                                                              <h6 class="heading heading-h6">EDNA WATSON</h6>
                                                              <div class="text mt&#45;&#45;10 pr&#45;&#45;50 pr_sm&#45;&#45;5">
                                                                  <p class="bk_pra">To link your Facebook and Twitter accounts, open the Instagram app on your phone or tablet, and select the Profile tab in the bottom-right corner of the screen.</p>
                                                              </div>
                                                              <div class="comment-footer mt&#45;&#45;10">
                                                                  <span>May 17, 2018 at 1:59 am</span>
                                                                  <span class="reply-btn">
                                                                      <button>Reply</button>
                                                                  </span>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      &lt;!&ndash; End Single Comment &ndash;&gt;

                                                  </div>
                                              </div>
                                          </div>-->

              <!-- Start Comment Form -->
              <!--                            <div class="comment-form-wrapper">
                                              <div class="header wow move-up">
                                                  <h4 class="heading heading-h4">Leave A Comment</h4>
                                                  <div class="coppent-note mt&#45;&#45;20 mb&#45;&#45;30">
                                                      <p class="bk_pra">Your email address will not be published. Required fields are marked</p>
                                                  </div>
                                              </div>
                                              &lt;!&ndash; Start Contact Area &ndash;&gt;
                                              <div class="contact-form wow move-up">
                                                  <form>
                                                      <div class="row">
                                                          <div class="col-lg-12">
                                                              <input type="text" placeholder="Name *">
                                                          </div>

                                                          <div class="col-lg-12 mt&#45;&#45;30">
                                                              <input type="text" placeholder="Email *">
                                                          </div>

                                                          <div class="col-lg-12 mt&#45;&#45;30">
                                                              <input type="text" placeholder="Website">
                                                          </div>

                                                          <div class="col-lg-12 mt&#45;&#45;30">
                                                              <textarea placeholder="Your Comment"></textarea>
                                                          </div>

                                                          <div class="col-lg-12 mt&#45;&#45;30">
                                                              <div class="blog-btn">
                                                                  <button class="brook-btn bk-btn-theme btn-sd-size btn-rounded space-between">Post Comment</button>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </form>
                                              </div>
                                              &lt;!&ndash; End Contact Area &ndash;&gt;

                                          </div>
                                          &lt;!&ndash; End Comment Form &ndash;&gt;-->
            </div>
          </div>

          <!--          <div class="col-lg-4 mt_md&#45;&#45;40 mt_sm&#45;&#45;40">
                      <BlogSidebar />
                    </div>-->
        </div>
      </div>
    </div>

    <FooterStyleFour/>

  </div>
</template>

<script>
import data from '~/data/blog.json';
import {slugify} from '~/mixins/slugify'
import moment from "moment";
import FooterStyleFour from "../../components/FooterStyleFour";

export default {
  auth: false,

  components: {
    FooterStyleFour

  },

  async asyncData({app, params}) {


    console.log("params", params)
    let blog = (await app.$axios.get('/blog/' + params.slug)).data


    console.log("blog ", blog)
    console.log("this ", this)
    let last_blog = blog.last_blog
    blog = blog.blog


    return {blog, last_blog}
  },


  mixins: [slugify],

  data() {
    return {
      data,
      navOpen: false,
      searchOpen: false,
      slug: this.$route.params.slug,
      last_blog: []
    }
  },

  mounted() {


/*
    document.body.classList.add('template-color-1', 'template-font-1')
*/
  },


  methods: {


    toDate($date) {

      let d = new Date($date);

      return moment(d).format('MMMM Do YYYY')

    }
  },
  head() {
    return {
      title: this.$route.params.slug
    }
  },
};
</script>