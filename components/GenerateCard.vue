<template>


  <div>

<!--

-->

      <vue-html2pdf
          :show-layout="false"
          :float-layout="true"
          :enable-download="true"
          :preview-modal="true"
          :paginate-elements-by-height="1400"
          filename="hee hee"
          :pdf-quality="2"
          :manual-pagination="false"
          pdf-format="a4"
          pdf-orientation="portrait"
          pdf-content-width="800px"

          ref="html2Pdf"
      >
        <section slot="pdf-content" class="pdf-content" v-if="checkUserPackage(  'ÑEM KÍÍ ÑJÉÉ')">

          <div class="wrapper-pdf">

            <div class="wrapper-img  ">

              <img ref="image" src="/img/home/carte.jpg" alt="Image">
              <div class="overlay-text njee">{{generateUserNames}} </div>
              <div class="overlay-text njee-date" style="color:#000" >{{ $t('tools.expire_on') }} {{
                  generateDate}}</div>
            </div>

            <div class="wrapper-img  ">

              <img ref="image" src="/img/home/carte-back.jpg" alt="Image">
              <img ref="image" src="/img/home/signature-white.png" alt="Image" class="overlay-text njee-date" style="width: 300px" >

            </div>

          </div>
        </section>
        <section slot="pdf-content" class="pdf-content" v-if="checkUserPackage('ÑÈM KÍÍ NGOCK')">

          <div class="wrapper-pdf">

            <div class="wrapper-img ">

              <img ref="image" src="/img/home/carte-ngock.jpg" alt="Image">
              <div class="overlay-text  njee">{{generateUserNames}}</div>
              <span class="overlay-text njee-date"  >{{ $t('tools.expire_on') }} {{generateDate}}</span>


            </div>

            <div class="wrapper-img  ">

              <img ref="image" src="/img/home/carte-ngock-back.jpg" alt="Image">
              <img ref="image" src="/img/home/signature-white.png" alt="Image" class="overlay-text njee-date" style="width: 270px" >

            </div>

          </div>
        </section>

        <section slot="pdf-content" class="pdf-content" v-if="checkUserPackage(   'ÑEM KÍÍ HIAÑNGA\'A')">

          <div class="wrapper-pdf">


            <div class="wrapper-img">

              <img ref="image" src="/img/home/carte2.jpg" alt="Image">
              <div class="overlay-text nianga">{{generateUserNames}}</div>
              <span class="overlay-text nianga-date"  >{{ $t('tools.expire_on') }} {{generateDate}}</span>

            </div>

            <div class="wrapper-img  ">

              <img ref="image" src="/img/home/carte2-back.jpg" alt="Image">
              <img ref="image" src="/img/home/signature-white.png" alt="Image" class="overlay-text njee-date" style="width: 300px;top: 91%" >

            </div>


          </div>


        </section>
        <section slot="pdf-content" class="pdf-content"   v-if="checkUserPackage(   'ÑÈM KÍÍ HIÉE'  )">

          <div class="wrapper-pdf">

            <div class="wrapper-img">

              <img ref="image" src="/img/home/carte-hiee.jpg" alt="Image">
              <div class="overlay-text hiee">{{generateUserNames}}</div>
              <span class="overlay-text hiee-date"  >{{ $t('tools.expire_on') }} {{generateDate}}</span>

            </div>


            <div class="wrapper-img  ">

              <img ref="image" src="/img/home/carte-hiee-back.jpg" alt="Image">
              <img ref="image" src="/img/home/signature-white.png" alt="Image" class="overlay-text njee-date" style="width: 300px;top: 89%" >

            </div>

          </div>
        </section>
      </vue-html2pdf>

    <button  class="bk-btn theme-btn"  v-for="(element,index) in my_packages"  data-toggle="tooltip"
             data-placement="top" :title="element"
             :key="index"  @click.prevent="generateMyCard(element)">
      {{$t('tools.btn.generate_card')}} </button>

  </div>
</template>

<script >

import { jsPDF } from "jspdf";


export default {
  name: "pdf",
  auth:false,
  middleware:['auth'],



  data(){

    return{

     user_package:"ÑEM KÍÍ ÑJÉÉ",
      my_packages:[]
    }
  },

  computed:{


    generateDate(){

      const date = new Date(this.$auth.user.data.card_renewal_date);

      return  date.toLocaleDateString().split('/').join('-');

    },
    generateUserNames(){


      let first_name=this.$auth.user.data.first_name;
      let last_name=this.$auth.user.data.last_name;


      let TabFirstName=""
      if(first_name){
       TabFirstName= first_name?.split(' ')[0];

      }
      let TabLastName=""
      if(last_name){

         TabLastName=last_name?.split(' ')[0];

      }


      console.log("yahour",TabFirstName,TabLastName)

      return TabFirstName + " " + TabLastName
    },

  },
  fetchOnServer: false,

  async fetch() {


    let packages= (await this.$axios.get('/user/get-my-packages')).data.packages


    let tab=[]
    packages.forEach(function (element) {

      tab.push(element.package_name)
    })



    this.my_packages=tab;




  },

  methods:{



    generatePdf(){




    },

    generateMyCard(package_user){

      if(this.$auth.user.data.is_member){

        //generate

        this.user_package=package_user
        this.$refs.html2Pdf.generatePdf()

      }
      else{


        if(this.$auth.user.data.is_active){
          this.$swal.fire({
            icon: 'error',
            title: this.$t('user.user_generate_card_info_not_available_title')+(this.$auth.user.data.last_name == null? '':this.$auth.user.data.last_name),
            text: this.$t('user.user_generate_card_info_inactive_desc'),
            footer: '<a href="/pricing" style="margin:auto;">'+this.$t('tools.btn.it_is_here')+'</a>'
          })

        }
        else{

          this.$swal.fire({
            icon: 'warning',
            title: this.$t('user.user_not_ready'),
            text: this.$t('user.user_not_ready_description')
          })
        }





      }
    },



    checkUserPackage(element){

     if(element === this.user_package){

       return true;
     }
     if(element === this.user_package){


       return true;
     }
     else if(element===this.user_package){

       return true;
     }
     else if(element === this.user_package){
       return true;

     }

    }
  }
}
</script>

<style>
.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
}
</style>