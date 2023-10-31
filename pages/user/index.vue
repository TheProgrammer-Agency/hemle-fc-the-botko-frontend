<template>
  <div class="main-container user-profil">

    <HeaderElement @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen"/>

    <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen"/>

    <div class="container header-user-profil ">


      <div class="left">


          <label for="upload" style="cursor:pointer">
            <img alt="user" :src="form.avatar" id="fileUpload" width="200" height="200" style="object-fit: cover">
            <input id="upload" style="display:none" type="file" @change="handleValidateChange">
          </label>






        <div class="content">
          <h2>{{ $auth.user?.data?.first_name }} {{ $auth.user?.data?.last_name }}</h2>
<!--
          <span>


            Nyem Kni Hié

           </span>

-->

        </div>
      </div>


      <div class="right">


        <div>

          <strong>
            {{$t('user.referrer_member')}}

          </strong>


          <br>

          <span @click.prevent="copySomething($auth.user?.data?.referral_code)" style="cursor:pointer">
             {{ $auth.user?.data?.referral_code }}  <img src="/img/home/copy.png" width="25" height="25">
          </span>

        </div>
        <br>

<!--        download :href="$auth.user.data.card"
        -->



        <a v-if="$auth?.user.data?.card !== null  && $auth?.user?.data?.is_member" download :href="$auth?.user?.data?.card"  class="bk-btn theme-btn">Génerer ma carte</a>

        <button v-if="$auth?.user?.data?.card ==null "  class="bk-btn theme-btn" @click.prevent="generateMyCard" >Génerer ma carte</button>


      </div>


    </div>


    <div class="user-info container-fluid">


      <div class="information container">


        <ValidationObserver v-slot="{ invalid }">



          <br><br>
          <div class="wrapper-form-info">

            <div class="text-center">

            <span class="error">

              {{ error_message }}
          </span>

            </div>
            <h5><img src="/img/home/user-black.png" alt=""> {{ $t('user.my_information') }}</h5>

            <div class="wrapper-wrapper-form-info">

              <form class="form-info">

                <div class="form-group-horizontal">

                  <div class="form-group">

                    <label>{{ $t('user.first_name') }}</label>

                    <ValidationProvider :name="$t('user.first_name')" rules="required|min:3" v-slot="{ errors }">
                      <input v-model="form.first_name" type="text">
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>

                  </div>

                  <div class="form-group">

                    <label>{{ $t('user.last_name') }}</label>

                    <ValidationProvider :name="$t('user.last_name')" rules="required|min:3" v-slot="{ errors }">
                      <input v-model="form.last_name" type="text">
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>

                  </div>
                </div>


                <div class="form-group-horizontal">

                  <div class="form-group">

                    <label>{{ $t('auth.city') }}</label>

                    <ValidationProvider :name="$t('auth.city')" rules="required|min:2" v-slot="{ errors }">
                      <input v-model="form.city" type="text">
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>

                  </div>

                  <div class="form-group">

                    <label>{{ $t('user.country') }}</label>

                    <ValidationProvider :name="$t('user.country') " rules="required" v-slot="{ errors }">

                      <span>{{ errors[0] }} </span>

                      <select v-model="form.country" id="country" name="country" >
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Åland Islands">Åland Islands</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="American Samoa">American Samoa</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Angola">Angola</option>
                        <option value="Anguilla">Anguilla</option>
                        <option value="Antarctica">Antarctica</option>
                        <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Aruba">Aruba</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Azerbaijan">Azerbaijan</option>
                        <option value="Bahamas">Bahamas</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Barbados">Barbados</option>
                        <option value="Belarus">Belarus</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Belize">Belize</option>
                        <option value="Benin">Benin</option>
                        <option value="Bermuda">Bermuda</option>
                        <option value="Bhutan">Bhutan</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                        <option value="Botswana">Botswana</option>
                        <option value="Bouvet Island">Bouvet Island</option>
                        <option value="Brazil">Brazil</option>
                        <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                        <option value="Brunei Darussalam">Brunei Darussalam</option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Burkina Faso">Burkina Faso</option>
                        <option value="Burundi">Burundi</option>
                        <option value="Cambodia">Cambodia</option>
                        <option value="Cameroon">Cameroon</option>
                        <option value="Canada">Canada</option>
                        <option value="Cape Verde">Cape Verde</option>
                        <option value="Cayman Islands">Cayman Islands</option>
                        <option value="Central African Republic">Central African Republic</option>
                        <option value="Chad">Chad</option>
                        <option value="Chile">Chile</option>
                        <option value="China">China</option>
                        <option value="Christmas Island">Christmas Island</option>
                        <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Comoros">Comoros</option>
                        <option value="Congo">Congo</option>
                        <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                        <option value="Cook Islands">Cook Islands</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Cote D'ivoire">Cote D'ivoire</option>
                        <option value="Croatia">Croatia</option>
                        <option value="Cuba">Cuba</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Czech Republic">Czech Republic</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Djibouti">Djibouti</option>
                        <option value="Dominica">Dominica</option>
                        <option value="Dominican Republic">Dominican Republic</option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Egypt">Egypt</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Equatorial Guinea">Equatorial Guinea</option>
                        <option value="Eritrea">Eritrea</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                        <option value="Faroe Islands">Faroe Islands</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="French Guiana">French Guiana</option>
                        <option value="French Polynesia">French Polynesia</option>
                        <option value="French Southern Territories">French Southern Territories</option>
                        <option value="Gabon">Gabon</option>
                        <option value="Gambia">Gambia</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Germany">Germany</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Gibraltar">Gibraltar</option>
                        <option value="Greece">Greece</option>
                        <option value="Greenland">Greenland</option>
                        <option value="Grenada">Grenada</option>
                        <option value="Guadeloupe">Guadeloupe</option>
                        <option value="Guam">Guam</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Guernsey">Guernsey</option>
                        <option value="Guinea">Guinea</option>
                        <option value="Guinea-bissau">Guinea-bissau</option>
                        <option value="Guyana">Guyana</option>
                        <option value="Haiti">Haiti</option>
                        <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                        <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                        <option value="Honduras">Honduras</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Iceland">Iceland</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                        <option value="Iraq">Iraq</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Isle of Man">Isle of Man</option>
                        <option value="Israel">Israel</option>
                        <option value="Italy">Italy</option>
                        <option value="Jamaica">Jamaica</option>
                        <option value="Japan">Japan</option>
                        <option value="Jersey">Jersey</option>
                        <option value="Jordan">Jordan</option>
                        <option value="Kazakhstan">Kazakhstan</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Kiribati">Kiribati</option>
                        <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                        <option value="Korea, Republic of">Korea, Republic of</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                        <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                        <option value="Latvia">Latvia</option>
                        <option value="Lebanon">Lebanon</option>
                        <option value="Lesotho">Lesotho</option>
                        <option value="Liberia">Liberia</option>
                        <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Macao">Macao</option>
                        <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                        <option value="Madagascar">Madagascar</option>
                        <option value="Malawi">Malawi</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Mali">Mali</option>
                        <option value="Malta">Malta</option>
                        <option value="Marshall Islands">Marshall Islands</option>
                        <option value="Martinique">Martinique</option>
                        <option value="Mauritania">Mauritania</option>
                        <option value="Mauritius">Mauritius</option>
                        <option value="Mayotte">Mayotte</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                        <option value="Moldova, Republic of">Moldova, Republic of</option>
                        <option value="Monaco">Monaco</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Montenegro">Montenegro</option>
                        <option value="Montserrat">Montserrat</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Mozambique">Mozambique</option>
                        <option value="Myanmar">Myanmar</option>
                        <option value="Namibia">Namibia</option>
                        <option value="Nauru">Nauru</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="Netherlands Antilles">Netherlands Antilles</option>
                        <option value="New Caledonia">New Caledonia</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Niger">Niger</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Niue">Niue</option>
                        <option value="Norfolk Island">Norfolk Island</option>
                        <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                        <option value="Norway">Norway</option>
                        <option value="Oman">Oman</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Palau">Palau</option>
                        <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                        <option value="Panama">Panama</option>
                        <option value="Papua New Guinea">Papua New Guinea</option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Philippines">Philippines</option>
                        <option value="Pitcairn">Pitcairn</option>
                        <option value="Poland">Poland</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Puerto Rico">Puerto Rico</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Reunion">Reunion</option>
                        <option value="Romania">Romania</option>
                        <option value="Russian Federation">Russian Federation</option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="Saint Helena">Saint Helena</option>
                        <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                        <option value="Saint Lucia">Saint Lucia</option>
                        <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                        <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                        <option value="Samoa">Samoa</option>
                        <option value="San Marino">San Marino</option>
                        <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Serbia">Serbia</option>
                        <option value="Seychelles">Seychelles</option>
                        <option value="Sierra Leone">Sierra Leone</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Slovakia">Slovakia</option>
                        <option value="Slovenia">Slovenia</option>
                        <option value="Solomon Islands">Solomon Islands</option>
                        <option value="Somalia">Somalia</option>
                        <option value="South Africa">South Africa</option>
                        <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                        <option value="Spain">Spain</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Sudan">Sudan</option>
                        <option value="Suriname">Suriname</option>
                        <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                        <option value="Swaziland">Swaziland</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                        <option value="Taiwan">Taiwan</option>
                        <option value="Tajikistan">Tajikistan</option>
                        <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Timor-leste">Timor-leste</option>
                        <option value="Togo">Togo</option>
                        <option value="Tokelau">Tokelau</option>
                        <option value="Tonga">Tonga</option>
                        <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                        <option value="Tunisia">Tunisia</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Turkmenistan">Turkmenistan</option>
                        <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                        <option value="Tuvalu">Tuvalu</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="United Arab Emirates">United Arab Emirates</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States">United States</option>
                        <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Uzbekistan">Uzbekistan</option>
                        <option value="Vanuatu">Vanuatu</option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Viet Nam">Viet Nam</option>
                        <option value="Virgin Islands, British">Virgin Islands, British</option>
                        <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                        <option value="Wallis and Futuna">Wallis and Futuna</option>
                        <option value="Western Sahara">Western Sahara</option>
                        <option value="Yemen">Yemen</option>
                        <option value="Zambia">Zambia</option>
                        <option value="Zimbabwe">Zimbabwe</option>
                      </select>

                    </ValidationProvider>
                  </div>
                </div>
                <div class="form-group-horizontal">

                  <div class="form-group">

                    <label>{{$t('user.email')}}</label>

                    <ValidationProvider :name="$t('user.email')" v-slot="{ errors }">
                      <input v-model="form.email" type="email"  readonly disabled>
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>

                  </div>

                  <div class="form-group">

                    <label>{{$t('user.phone_number')}}</label>


                    <ValidationProvider :name="$t('auth.tel')" rules="required|min:7|integer" v-slot="{ errors }">
                      <span class="error">{{ errors[0] }}</span>


                      <div class="flex align-center login-phone">

                        <client-only placeholder="loading..." class="flex">

                          <vue-country-code

                              @onSelect="onSelect"


                          >
                          </vue-country-code>

                        </client-only>
                        <input  v-model="form.tel" type="number">

                      </div>

                    </ValidationProvider>
                  </div>
                </div>




                <br>


              </form>
            </div>

            <div class="form-group ml-auto">


              <button type="submit" class="bk-btn theme-btn" @click.prevent="updateInfo">{{$t('user.update')}}</button>

            </div>

            <div class="wrapper-wrapper-info">

              <h5><img src="/img/home/user-black.png" alt=""> {{$t('user.my_password')}}</h5>


              <form @submit.prevent="updatePassword" class="form-info">


                <div class="form-group-horizontal">

                  <div class="form-group">

                    <label>{{$t('user.password')}}</label>

                    <ValidationProvider :name="$t('user.password')" rules="required|min:4" v-slot="{ errors }">
                      <input v-model="form.password" type="password">
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>

                  </div>

                  <div class="form-group">

                    <label>{{$t('user.confirm_password')}}</label>

                    <ValidationProvider :name="$t('user.confirm_password')" rules="required|min:4" v-slot="{ errors }">
                      <input v-model="form.password_confirmation" type="password">
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                </div>

                <br>
              </form>


            </div>


            <br><br>
            <div class="wrapper-wrapper-info">

              <h4 class="error"><img src="/img/home/delete.png" alt="">  &nbsp; {{$t('user.danger_zone')}}</h4>


              <p>
               {{$t('user.user_delete_account')}}
              </p>


            </div>
            <div class="form-group ml-auto">

              <button type="submit" class="bk-btn  btn-error " @click.prevent="deleteUser">{{$t('tools.btn.delete_account')}}</button>

            </div>




            <!--            <div class="wrapper-wrapper-info">

                          <h5 class="red-color"><img src="/img/home/user-black.png" alt=""> Zone de Danger</h5>


                          <form @submit.prevent="onSubmit" class="form-info" style="background:none">


                            <p>Vous n’etes pas satisfait du club Hémlè FC de Botko ? ou vous souhaitez supprimer toutes les informations associés à ce compte ? </p>
                            <br>
                          </form>
                        </div>
                        <div class="form-group ml-auto">


                          <button type="submit" class="bk-btn theme-btn red-color" :disabled="invalid">Devenir membre</button>

                        </div>-->
          </div>
        </ValidationObserver>

      </div>

    </div>


    <br><br><br><br><br>
    <br><br><br><br><br>
    <br><br><br><br><br>
    <FooterStyleFour/>
  </div>
</template>

<script>

import data from "../../data/service.json";
import blogs from '~/data/blog.json';
import {slugify} from '~/mixins/slugify'
import PricingItemStyleTwo from "../../components/PricingItemStyleTwo";
import FooterTwo from "../../components/FooterTwo";
import FooterStyleThree from "../../components/FooterStyleThree";
import FooterAgency from "../../components/FooterAgency";
import FooterStyleFour from "../../components/FooterStyleFour";
import HeaderBlack from "../../components/HeaderBlack";
import {mapGetters} from "vuex";

export default {
  mixins: [slugify],
  middleware:['auth'],

  components: {
    HeaderBlack,
    FooterStyleFour,
    FooterAgency,
    FooterStyleThree,
    FooterTwo,
    PricingItemStyleTwo

  },


  fetchOnServer: false,


  computed: {
    ...mapGetters({
      error_message: 'error_message'
    })
  },

  data() {
    return {
      data,
      blogs,
      navOpen: false,
      searchOpen: false,
      phone_number_code:'',
      form: {

        first_name: '',
        last_name: '',
        city: '',
        country: 'Cameroun',
        tel: '',
        email: '',
        password: '',
        password_confirmation: ''

      },
      config: {
        headers: {
          'content-type': 'multipart/form-data'
        }
      },

      dataImg: null
    }
  },


  mounted() {

    this.data=new FormData()



    if(!(this.$auth.user?.data?.is_active)){

      this.$swal.fire({
        icon: 'warning',
        title: this.$t('user.user_not_ready'),
        text: this.$t('user.user_not_ready_description')
      })

    }




    this.form = {

      first_name: this.$auth.user.data.first_name,
      last_name: this.$auth.user.data.last_name,
      city: this.$auth.user.data.city,
      country: this.$auth.user.data.country,
      tel: this.$auth.user.data.tel,
      email: this.$auth.user.data.email,
      password: '',
      password_confirmation: '',
      avatar: this.$auth.user.data.avatar? this.$auth.user.data.avatar :'/img/home/avatar.svg'
    }




    document.body.classList.add('template-color-1', 'template-font-2')
  },

  methods: {

    onSelect({name, iso2, dialCode}) {
      this.phone_number_code = dialCode;
    },
    async copySomething(text) {

      let app = this;

      if(this.$auth.user.data.is_member){

        //generate

        try {
          await app.$copyText('text');
          app.$toast.info('Vous copié le code  !   ')
        } catch (e) {
          console.error(e);
        }

      }
      else{

        if(this.$auth.user.data.is_active){

          this.$swal.fire({
            icon: 'error',
            title: this.$t('user.user_error_copy_code_title') +(this.$auth.user.data.last_name == null? '':this.$auth.user.data.last_name),
            text: this.$t('user.user_error_copy_code_desc'),
            footer: '<a href="/pricing" style="margin:auto;">Payez votre abonnement Hèmlé ICI !!</a>'
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

    generateMyCard(){

      if(this.$auth.user.data.is_member){

        //generate

        if(this.$auth.user.data.card == null){

          this.$swal.fire({
            icon: 'info',
            title: this.$t('user.user_generate_card_info_not_available_title')+this.$auth.user.data.last_name,
            text: this.$t('user.user_generate_card_info_not_available_desc')
          })
        }
      }
      else{


        if(this.$auth.user.data.is_active){
          this.$swal.fire({
            icon: 'error',
            title: this.$t('user.user_generate_card_info_not_available_title')+(this.$auth.user.data.last_name == null? '':this.$auth.user.data.last_name),
            text: this.$t('user.user_generate_card_info_inactive_desc'),
            footer: '<a href="/pricing" style="margin:auto;">Ça se passe ici !</a>'
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

    setData(){

      this.data.append('tel','+' + this.phone_number_code + this.form.tel,)
      this.data.append('first_name', this.form.first_name)
      this.data.append('last_name', this.form.last_name)
      this.data.append('city', this.form.city)
      this.data.append('country', this.form.country)
      this.data.append('password', this.form.password)
      this.data.append('password_confirmation', this.form.password_confirmation)



    },
    async deleteUser(){

      let app = this;

      app.$swal.fire({
        title: app.$t('user.are_you_sure'),
        text: app.$t('user.delete_account_confirm_desc'),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: app.$t('tools.btn.delete_account_confirm'),
        cancelButtonText: app.$t('tools.btn.delete_account_canceled'),
        reverseButtons: true
      }).then(async (result) => {
        if (result.isConfirmed) {
/*
          app.$router.push('/')
*/
          app.$nuxt.$loading.start()
          await app.$axios.$delete('user/delete').then(async function (response) {

            await app.$auth.logout();

            app.$router.push('/')

            app.$nuxt.$loading.finish()

            app.$swal.fire({
              position: 'Center',
              icon: 'info',
              title: app.$t('auth.success_account_deleted_title'),
              text:app.$t('auth.success_account_deleted_desc'),
              showConfirmButton: true,
              confirmButtonText: app.$t('tools.btn.understood'),
            })

          }).catch(function(err){

          })


        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === app.$swal.DismissReason.cancel
        ) {
          app.$swal.fire(
              app.$t('user.delete_account_canceled_title'),
              app.$t('user.delete_account_canceled_desc'),
              'info'
          )
        }
      })




    },



    async execUpdate() {

      let app = this



      this.setData()



      return new Promise(async (resolve, reject) => {



        await app.$axios.$post('/user/update/img', app.data, app.config).then(async function (res) {

          await app.$auth.fetchUser().then(function () {

            resolve()

            console.log("response = ",res.data)

            console.log(app.$auth.user)
            app.$nuxt.$loading.finish()

          })


        }).catch(function () {

          reject()

        })
      });

    },


    handleValidateChange: async function (e) {


      let app = this

      app.$nuxt.$loading.start()

      if(e.target.files.length>0){



      console.log("e = ",e.target.files,e.target.files[0])
      let fileSize = e.target.files[0].size / 1024 / 1024

      if (e.target.files && e.target.files[0]) {


        let file = e.target.files[0];
        //other verification
        if (fileSize < 1) {
          let reader = new FileReader();
          reader.addEventListener(
              "load",
              function () {
                let avatarImg = new Image();
                let src = reader.result;
                avatarImg.src = src;
                app.form.avatar = src;

              },
              false
          );


          this.data.append('avatar', file);


          console.log("avatar", file)
          await app.execUpdate().then(function () {


            app.$nuxt.$loading.finish()

            app.$swal.fire({
              position: 'Center',
              icon: 'success',
              title: app.$t('user.user_profile_updated_title'),
              text: $t('user.user_profile_updated_desc'),
              showConfirmButton: true,
              confirmButtonText: "Okay",
              timer: 10000
            })

            reader.readAsDataURL(e.target.files[0]);

          })

        } else {

          app.$nuxt.$loading.finish()

          app.$swal.fire({
            position: 'Center',
            icon: 'info',
            title: app.$t('user.user_img_too_big_title'),
            text:  app.$t('user.user_img_too_big_desc'),
            showConfirmButton: true,
            confirmButtonText: app.$t('tools.btn.understood'),
            timer: 10000
          })
        }


      } else {
        app.$nuxt.$loading.start()

      }

      }
    },
    async updateInfo() {

      let app = this;



      await this.$axios.$patch('user/update', this.form).then(async function (response) {

        app.$swal.fire({
          icon: 'success',
          title: app.$t('user.user_info_updated_title') + app.form.last_name,
          text: app.$t('user.user_info_updated_desc'),
        })

      }).catch(function(error){

        app.$swal.fire({
          icon: 'error',
          title:app.$t('auth.an_error_occured'),
          text:  error.response.data.message,

        })


      })
    },
    async updatePassword() {

      let app = this;


      let data = {

        password: this.form.password,
        password_confirmation: this.form.password_confirmation,
      }


      await this.$axios.$patch('user/update/password', data).then(async function (response) {

        app.$swal.fire({
          icon: 'success',
          title: app.$t('user.user_info_updated_title') + app.form.last_name,
          text: app.$t('user.user_info_updated_desc'),
        })

      }).catch(function (error) {

        app.$swal.fire({
          icon: 'error',
          title: app.$t('error.an_error_occured') + app.form.last_name,
          text:error.response.data.message,
        })
      })
    },


    head() {
      return {
        title: this.$t('user.title')
      }
    },
  }
}


</script>