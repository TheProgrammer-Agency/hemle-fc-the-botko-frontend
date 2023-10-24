<template>
    <div class="bk-blog-area"   data-aos="fade-up"
         data-aos-offset="200"
         data-aos-delay="50"
         data-aos-duration="1000"
         data-aos-easing="ease-in"
         data-aos-mirror="true"
         data-aos-once="true"
         data-aos-anchor-placement="top-center" >
        <div class="black-bg-wrapper bg_image--4 section-pt-xl pb--320" :style="{ backgroundImage: `url('/img/home/ballon1.jpg')` }">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title text-center white-text wow move-up">
                            <h3 class="text-white">{{$t('blog.latest_new')}}</h3>
                            <h2>{{ $t('blog.blog_title') }}</h2>


                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="blog-wrapper pl--230 pr--230 pr_lp--100 pl_lp--100 pl_lg--100 pr_lg--100 pl_md--50 pr_md--50 pl_sm--30 pr_sm--30 section-pb-xl">
            <div class="row row--0 space_dec--250">
                <div class="col-xl-4 col-md-6 wow move-up mt_sm--40" v-for="blog in blogs" :key="blog.id">
                    <BlogPost :blog="blog" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../../data/blog.json';

    import BlogPost from '@/components/BlogPost';
    import {mapGetters} from "vuex";

    export default {
        components: {
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