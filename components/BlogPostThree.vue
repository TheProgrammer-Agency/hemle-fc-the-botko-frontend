<template>
    <div class="blog-grid blog-standard" :class="addClass">
        <div class="post-thumb">
            <n-link :to="localePath(`/blog/${blog.uuid}`)">
                <img :src="blog.image" :alt=" blog.title[$i18n.locale]" style="height: 250px;object-fit: cover">
            </n-link>
        </div>
        <div class="post-content text-center">
            <div class="post-inner">
                <div class="post-meta ">

<!--                    <div class="post-date">
                        {{ blog.date }}
                    </div>

                    <div class="post-category">
&lt;!&ndash;
                        <n-link v-for="(category, i) in blog.categories.slice(0, 1)" :key="i" :to="`/blog/category/${slugify(category)}`">{{ category }}</n-link>
&ndash;&gt;
                    </div>-->

                </div>
                <h5 class="heading heading-h5">

                  <n-link :to="localePath(`/blog/${blog.uuid}`)">{{ blog.title[$i18n.locale] }}</n-link>

                </h5>

                <n-link class="post-read-more" :to="`/blog/${blog.slug}`" v-show="readMoreButton"></n-link>

            </div>

        </div>




    </div>
</template>

<script>
    import {slugify} from '~/mixins/slugify';
    import blogs from "../data/blog.json";
    export default {
        mixins: [slugify],
        
        props: ["blog", "addClass", "readMoreButton"],

      data() {
        return {
          blogs,

        }
      },


    };
</script>