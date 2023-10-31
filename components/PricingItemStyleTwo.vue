<template>

  <!--  bg_color&#45;&#45;5-->
  <div id="pricing" :class="is_came_from_home ?
   'brook-pricing-table-area pricing pt--20 pb--50 pb-md--50 pb-sm--50' : 'brook-pricing-table-area pt--20 pb-md--170 pb-sm--170'"

       data-aos="fade-in"
       data-aos-offset="10"
       data-aos-delay="50"
       data-aos-duration="1000"
       data-aos-easing="ease-in-out"
       data-aos-mirror="true"
       data-aos-once="true"
       data-aos-anchor-placement="top-center"
  >
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="brook-section-title text-center mb--45">
            <h6 class=" theme-color text-uppercase fw-500" v-html="$t('pricing.become_member_subtitle')"></h6>
            <div class="bkseparator--25"></div>
            <h2 class="heading-40 fw-200"><strong v-html="$t('pricing.pricing_title')"></strong>

            </h2>
          </div>
        </div>
      </div>
      <div class="row">
        <!-- Start Single Pricing Table -->
        <div class="col-lg-6 col-md-6 col-sm-12">
          <div class="procing-wrap price-style-3 pt--40 move-up wow">
            <div class="pricing-box" style="border-top:3px solid var(--primary-color)">
              <div class="header">
                <div class="price-area">
                  <h4 class="title font-weight-bold secondary-color" style="font-weight: bold">
                    {{ $t('pricing.pricing_1_title') }} </h4>
                  <div class="price-wrap d-flex">
                    <h3 class="">5 000 &nbsp; </h3>
                    <h3 class="currenct">XAF </h3>
                  </div>
                  <h6 class="period">{{ pricing.pricing_1_summary }}</h6>
                </div>
              </div>
              <div class="content">
                <!-- Start Single List -->
                <div class="bk-list--2">

                  <div class="list-header with-ckeck item-available" v-for="pricer in pricing[0]">
                    <div class="marker"></div>
                    <div class="title-wrap">
                      <h6 class="heading heading-h5">{{
                          pricer
                        }}</h6>
                    </div>
                  </div>


                </div>
                <!-- End Single List -->
              </div>
              <div class="footer mt--40 d-flex mx-auto">
                <button @click.prevent="requestPaymentLink(0)"
                        class="brook-btn  mx-auto bk-btn-secondary-border btn-sd-size space-between btn-essential">
                  {{ $t('tools.btn.become_member') }}

                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- End Single Pricing Table -->

        <!-- Start Single Pricing Table -->
        <div class="col-lg-6 col-md-6 col-sm-12">
          <div class="procing-wrap price-style-3 pt--40 move-up wow">
            <div class="pricing-box" style="border-top:3px solid var(--secondary-color)">
              <div class="header">
                <div class="price-area">
                  <div class="header-title">
                    <div class="pricing-feature-mark"> {{ $t('pricing.pricing_popular') }}</div>

                    <h4 class="title font-weight-bold secondary-color" style="font-weight: bold">
                      {{ $t('pricing.pricing_2_title') }} </h4>

                  </div>
                  <div class="price-wrap d-flex">
                    <h3 class="">50 000 &nbsp; </h3>
                    <h3 class="currenct">XAF</h3>

                  </div>

                  <h6 class="period">{{ pricing.pricing_2_summary }}</h6>

                </div>
              </div>
              <div class="content">
                <!-- Start Single List -->
                <div class="bk-list--2">
                  <div class="list-header with-ckeck item-available" v-for="a in pricing[1]">
                    <div class="marker"></div>
                    <div class="title-wrap">
                      <h6 class="heading heading-h5">{{
                          a
                        }}</h6>
                    </div>
                  </div>

                </div>
                <!-- End Single List -->
              </div>
              <div class="footer mt--40 d-flex mx-auto">
                <button @click.prevent="requestPaymentLink(1)"
                        class="brook-btn  mx-auto bk-btn-secondary-border btn-sd-size space-between btn-essential">
                  {{ $t('tools.btn.become_member') }}

                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- End Single Pricing Table -->

        <!-- Start Single Pricing Table -->
        <div class="col-lg-6 col-md-6 col-sm-12">
          <div class="procing-wrap price-style-3 pt--40 move-up wow">
            <div class="pricing-box" style="border-bottom:3px solid var(--primary-color)">
              <div class="header">
                <div class="price-area">
                  <h4 class="title font-weight-bold secondary-color"> {{ $t('pricing.pricing_3_title') }} </h4>
                  <div class="price-wrap d-flex">
                    <h3 class="">500 000 &nbsp;</h3>
                    <h3 class="currenct"> XAF</h3>
                  </div>
                  <h6 class="period">{{ pricing.pricing_3_summary }}</h6>
                </div>
              </div>
              <div class="content">
                <!-- Start Single List -->
                <div class="bk-list--2">
                  <div class="list-header with-ckeck item-available" v-for="a in pricing[2]">
                    <div class="marker"></div>
                    <div class="title-wrap">
                      <h6 class="heading heading-h5">{{ a }}</h6>
                    </div>
                  </div>

                </div>
                <!-- End Single List -->
              </div>
              <div class="footer mt--40 d-flex mx-auto">
                <button @click.prevent="requestPaymentLink(2)"
                        class="brook-btn  mx-auto bk-btn-secondary-border btn-sd-size space-between btn-essential">
                  {{ $t('tools.btn.become_member') }}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
          <div class="procing-wrap price-style-3 pt--40 move-up wow">
            <div class="pricing-box" style="border-bottom:3px solid var(--secondary-color)">
              <div class="header">
                <div class="price-area">
                  <h4 class="title  font-weight-bold secondary-color">{{ $t('pricing.pricing_4_title') }}</h4>
                  <div class="price-wrap d-flex">
                    <h3 class="">1 000 000 &nbsp;</h3>
                    <h3 class="currenct"> XAF</h3>
                  </div>
                  <h6 class="period">{{ pricing.pricing_4_summary }}</h6>
                </div>
              </div>
              <div class="content">
                <!-- Start Single List -->
                <div class="bk-list--2">
                  <div class="list-header with-ckeck item-available" v-for="a in pricing[3]">
                    <div class="marker"></div>
                    <div class="title-wrap">
                      <h6 class="heading heading-h5">{{
                          a
                        }}</h6>
                    </div>
                  </div>

                </div>
                <!-- End Single List -->
              </div>
              <div class="footer mt--40 d-flex mx-auto">
                <button @click.prevent="requestPaymentLink(3)"
                        class="brook-btn bk-btn-secondary-border btn-sd-size space-between btn-essential">
                  {{ $t('tools.btn.become_member') }}

                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- End Single Pricing Table -->
      </div>

    </div>

    <br><br>
  </div>
</template>

<script>
import {v4 as uuidv4} from 'uuid';

import data_form from "../data/package.json"
import packages from "../data/package.json";

export default {


  props: ['is_came_from_home'],
  data() {

    return {

      pricing: [],


    }
  },

  mounted() {

    this.pricing = [

      [

        this.$t('pricing.pricing_1_desc_1'),
        this.$t('pricing.pricing_1_desc_2'),
        this.$t('pricing.pricing_1_desc_3'),
        this.$t('pricing.pricing_1_desc_4'),
        this.$t('pricing.pricing_1_desc_5'),
      ],

      [

        this.$t('pricing.pricing_2_desc_1'),
        this.$t('pricing.pricing_2_desc_2'),
        this.$t('pricing.pricing_2_desc_3'),
        this.$t('pricing.pricing_2_desc_4'),
        this.$t('pricing.pricing_2_desc_5'),
        this.$t('pricing.pricing_2_desc_6'),
        this.$t('pricing.pricing_2_desc_7'),
        this.$t('pricing.pricing_2_desc_8'),
        this.$t('pricing.pricing_2_desc_9'),
      ],


      [

        this.$t('pricing.pricing_3_desc_1'),
        this.$t('pricing.pricing_3_desc_2'),
        this.$t('pricing.pricing_3_desc_3'),
        this.$t('pricing.pricing_3_desc_4'),
        this.$t('pricing.pricing_3_desc_5'),
        this.$t('pricing.pricing_3_desc_6'),
        this.$t('pricing.pricing_3_desc_7'),
        this.$t('pricing.pricing_3_desc_8'),
        this.$t('pricing.pricing_3_desc_9'),
        this.$t('pricing.pricing_3_desc_10'),
        this.$t('pricing.pricing_3_desc_11'),
      ],


      [

        this.$t('pricing.pricing_4_desc_1'),
        this.$t('pricing.pricing_4_desc_2'),
        this.$t('pricing.pricing_4_desc_3'),
        this.$t('pricing.pricing_4_desc_4'),
        this.$t('pricing.pricing_4_desc_5'),
        this.$t('pricing.pricing_4_desc_6'),
        this.$t('pricing.pricing_4_desc_7'),
        this.$t('pricing.pricing_4_desc_8'),
        this.$t('pricing.pricing_4_desc_9'),
        this.$t('pricing.pricing_4_desc_10'),
        this.$t('pricing.pricing_4_desc_11'),
        this.$t('pricing.pricing_4_desc_12'),
        this.$t('pricing.pricing_4_desc_13'),
      ],


    ]
  },
  methods: {

    async requestPaymentLink(numberInTag = 1) {


     localStorage.setItem("package",numberInTag);


      if (this.$auth.loggedIn) {

        this.$router.push(this.localePath('/payment?package=' + numberInTag))

      } else {

        this.$toast.open(this.$t('auth.please_connect'))
        this.$router.push(this.localePath('/auth/register?package=' + numberInTag))


      }

    }
  }
}
</script>