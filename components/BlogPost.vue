<template>
    <div class="blog blog-style--1">
        <div class="thumb">
            <n-link :to="`/blog/${blog.uuid}`">
                <img 
                    :src="blog.image" 
                    :alt="blog.title[$i18n.locale]"
                >
            </n-link>
        </div>
        <div class="blog-content blog-position--bottom">
            <div class="content">
                <ul class="meta">
                    <li>{{ toDate(blog.created_at) }}</li>
<!--                    <li>{{ blog.category }}</li>-->
                </ul>
                <h3 class="the-title">

                    <n-link :to="'/blog/'+ blog.uuid">{{ blog.title[$i18n.locale]}}</n-link>
                </h3>
            </div>
        </div>
    </div>
</template>


<!--'title' => $this->getTranslations('title'),
'description' => $this->getTranslations('description'),

'title1' => $this->getTranslations('title1'),
'description1' => $this->getTranslations('description1'),

'title2' => $this->getTranslations('title2'),
'description2' => $this->getTranslations('description2'),

'image'=>$this->getFirstMediaUrl('blog_image_collection','medium'),
'image_title1'=>$this->getFirstMediaUrl('blog_title2_image_collection','medium'),
'image_title2'=>$this->getFirstMediaUrl('blog_title2_image_collection','medium'),
'create_at'=>$this->created_at,-->


<script>

import moment from 'moment';

    export default {
        props: ['blog'],


      methods:{

          toDate($date){

            let d=new Date($date);

            return moment(d).format('MMMM Do YYYY')

          }
      }
    };
</script>