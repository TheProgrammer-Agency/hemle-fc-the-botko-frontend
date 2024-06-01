<template>
    <div class="bk-blog-area"  style=" transform: translateY(-50px); position: relative;z-index: 9;background: linear-gradient(180deg,#080e1f 0,#080e1f 45%,#461117 46%,#5e1821 49%,#181733)" >


<!--
      :style="{ backgroundImage: `url('/img/home/ballon1.jpg')` }"
-->

       <div class="black-bg-wrapper bg_image&#45;&#45;4 section-pt-xl " >

            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title text-center white-text wow move-up">
<!--
                            <h3 class="text-white">{{$t('blog.latest_new')}}</h3>
                            <h2>{{ $t('blog.blog_title') }}</h2>
-->


                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="blog-wrapper pl--230 pr--230 pr_lp--100 pl_lp--100 pl_lg--100 pr_lg--100 pl_md--50 pr_md--50 pl_sm--30 pr_sm--30">
            <div class="row row--0 space_dec--250" style="display: flex; justify-content: center;gap:25px">
              <div class="col-xl-3 col-sm-6 wow move-up mt--30 " v-for="blog in blogs" :key="blog.id" >
                <BlogPostThree :blog="blog" />
              </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../../data/blog.json';

    import BlogPost from '@/components/BlogPost';
    import {mapGetters} from "vuex";
    import BlogPostThree from "../BlogPostThree";

    export default {
        components: {
          BlogPostThree,
            BlogPost,
        },
        data () {
            return {
                data
            }
        },

      computed:{
        ...mapGetters({
          blogs: 'blog/blogs'
        })
      },
      async fetch() {

        try {

          await this.$store.dispatch('blog/allBlogs')

        } catch (errors) {
          // Set validation errors on a form

          console.log("une errror se produit", errors.data)
        }

      },
    };
</script>