<template>

  <div class="auth">


    <div class="auth-left" style="background-image: url('/img/home/bg_2.jpg');background-size: cover">


    </div>
    <div class="auth-right container">


      <ValidationObserver v-slot="{ invalid,validate,errors }"  style="width: 100%">


        <h2 class="text-center">{{ $t('auth.register_title') }} </h2>

        <div class="text-center">{{$t('auth.info_right_path')}} </div>

        <br>
        <div class="auth-oauth">

          <span @click.prevent="socialLogin('facebook')" >
            <img src="/img/home/facebook.png" alt="facebook" >
          </span>


          <span @click.prevent="socialLogin('google')">

                      <img src="/img/home/google.png" alt="google" >

          </span>
        </div>

        <br>
        <div class="register_or">

          <hr>
          <span>
           {{$t('auth.or')}}
          </span>

          <hr>
        </div>
        <br>
        <div class="text-center" v-if="error_message!==''">

            <span class="error">

              {{ error_message }}

              <br>
          </span>

        </div>

        <form @submit.prevent="onSubmit" class="auth-form">

          <div class="form-group-horizontal">

            <div class="form-group">

              <label>{{ $t('auth.your_name') }}</label>

              <ValidationProvider :name="$t('auth.first_name')" rules="required|min:3" v-slot="{ errors }">

                <div class="wrapper-input-icon">
                   <img src="/img/home/user.svg" alt="">

                  <input v-model="form.first_name" type="text">
                </div>
                <span class="error">{{ errors[0] }}</span>
              </ValidationProvider>

            </div>

            <div class="form-group">

              <label>{{ $t('auth.your_first_name') }}</label>

              <ValidationProvider :name="$t('auth.last_name')" rules="required|min:3" v-slot="{ errors }">

                <div class="wrapper-input-icon">
                  <img src="/img/home/user.svg" alt="">

                  <input v-model="form.last_name" type="text">
                </div>

                <span class="error">{{ errors[0] }}</span>
              </ValidationProvider>

            </div>
          </div>


          <div class="form-group-horizontal">

            <div class="form-group">

              <label>{{ $t('auth.city') }}</label>

              <ValidationProvider :name="$t('auth.city')" rules="required|min:2" v-slot="{ errors }">

                <div class="wrapper-input-icon">
                  <img src="/img/home/city.svg" alt="">

                  <input v-model="form.city" type="text">
                </div>


                <span class="error">{{ errors[0] }}</span>
              </ValidationProvider>

            </div>

            <div class="form-group">

              <label>{{ $t('auth.country') }}</label>
              <div class="wrapper-input-icon">
                <img src="/img/home/country.svg" alt="">

                <ValidationProvider :name="$t('user.country') " rules="required" v-slot="{ errors }">

                  <span class="error">{{ errors[0] }} </span>

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
          </div>

          <div class="form-group-horizontal">

            <div class="form-group">

              <label>Email</label>

              <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">


                <div class="wrapper-input-icon">
                  <img src="/img/home/mail.svg" alt="">

                  <input v-model="form.email" type="email">
                </div>

                <span class="error">{{ errors[0] }}</span>
              </ValidationProvider>

            </div>

            <div class="form-group">

              <label>{{ $t('auth.tel') }}</label>

              <ValidationProvider :name="$t('auth.tel')" rules="required|min:7|integer" v-slot="{ errors }">


                <div class="flex align-center login-phone">

                  <client-only placeholder="loading..." class="flex">

                    <vue-country-code

                        @onSelect="onSelect"


                    >
                    </vue-country-code>

                  </client-only>
                  <input v-model="form.tel" type="text">

                </div>
                <span class="error">{{ errors[0] }}</span>

              </ValidationProvider>
            </div>
          </div>
          <div class="form-group-horizontal">

            <div class="form-group">

              <label>{{ $t('auth.password') }}</label>

              <ValidationProvider :name="$t('auth.password')" rules="required|min:4" v-slot="{ errors }">

                <div class="wrapper-input-icon">
                  <img src="/img/home/password.svg" alt="">

                  <input v-model="form.password" type="password">
                </div>

                <span  class="error">{{ errors[0] }}</span>
              </ValidationProvider>

            </div>

            <div class="form-group">

              <label>{{ $t('auth.confirm_password') }}</label>

              <ValidationProvider :name="$t('auth.password')" rules="required|min:4" v-slot="{ errors }">

                <div class="wrapper-input-icon">
                  <img src="/img/home/password.svg" alt="">

                  <input v-model="form.password_confirmation" type="password">
                </div>

                <span  class="error">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>


          </div>


          <div class="form-group-horizontal">

            <div class="form-group" v-if="form.referral_code!==null">

              <label>{{ $t('auth.referral_code') }} </label>

              <ValidationProvider :name="$t('auth.code')" rules="min:4" v-slot="{ errors }">


                <div class="wrapper-input-icon">
                  <img src="/img/home/password.svg" alt="">

                  <input v-model="form.referral_code" type="text">
                </div>

                <span  class="error">{{ errors[0] }}</span>
              </ValidationProvider>

            </div>



              <div class="form-group">

                <label>{{ $t('auth.sex') }} </label>

                <ValidationProvider  v-slot="{ errors }">

                  <div class="wrapper-input-icon">
                    <img src="/img/home/password.svg" alt="">
                    <select name="" id="" v-model="form.sex">

                      <option value="male">{{ $t('user.man') }}</option>
                      <option value="female">{{ $t('user.woman') }}</option>

                    </select>
                  </div>

                  <span  class="error">{{ errors[0] }}</span>
                </ValidationProvider>

              </div>





          </div>



          <br>
          <div class="form-group mx-auto">


            <button v-if="invalid"  @click.prevent="validate()"  class="bk-btn theme-btn" >{{ $t('tools.btn.become_member') }}
            </button>
            <button v-if="!invalid" type="submit"   class="bk-btn theme-btn" >{{ $t('tools.btn.become_member') }}
            </button>



          </div>

          <br>

          <p class="mx-auto">{{ $t('auth.already_member') }}
            <nuxt-link to="/auth/login" class="text-primary">{{ $t('auth.log_in') }}</nuxt-link>
          </p>

        </form>
      </ValidationObserver>

    </div>


  </div>
</template>

<script>

import {mapGetters} from "vuex";
import packages from "../../data/package.json"

export default {
  auth: "guest",

  middleware: 'checkParam',


  data() {
    return {

      email: '',
      contact: '',

      form: {

        first_name: '',
        last_name: '',
        city: '',
        country: 'Cameroun',
        tel: '',
        email: '',
        password: '',
        password_confirmation: '',
        referral_code: null,
        sex:'male'
      },
      phone_number_code: '',
      package: ''
    }
  },
  computed: {
    ...mapGetters({
      error_message: 'error_message'
    })
  },
  methods: {

    socialLogin(service) {
      window.location.href = `${process.env.baseUrlSimple}api/auth/login/${service}`;
    },

    onSelect({name, iso2, dialCode}) {
      this.phone_number_code = dialCode;
    },

    async registerGoogle(){


      await this.$auth.loginWith('social', {params: {prompt: 'select_account'}}).then(function(res){


        alert("wait")

      }).catch(function (err) {


      })

    },

    async onSubmit() {









        this.$nuxt.$loading.start()

        let app = this;



        let formRegister = app.form

        formRegister = {

          first_name: app.form.first_name,
          last_name: app.form.last_name,
          city: app.form.city,
          country: app.form.country,
          tel: '+' + this.phone_number_code + " "+ app.form.tel,
          email: app.form.email,
          password: app.form.password,
          password_confirmation: app.form.password_confirmation,
          referral_code: app.form.referral_code,
          sex: app.form.sex,
          redirect_url: ''

        }


        await app.$axios.$post('auth/register', formRegister).then(async function (response) {


          await app.$auth.loginWith('local', {
            data: {
              email: formRegister.email,
              password: formRegister.password
            }
          }).then(async function () {


            await app.$auth.fetchUser().then(async function (res) {


              app.$nuxt.$loading.finish()


              app.$swal.fire({
                icon: 'success',
                title: app.$t('auth.register_success') + app.form.last_name,
                text: app.$t('auth.register_success_desc'),
                footer: '<a href="' + process.env.wa_contact + '"  style="margin:auto; ">' + app.$t("tools.btn.need_to_contact_us") + '</a>'
              })


              console.log("autht =",app.$auth)

              app.$router.push(app.localePath('/payment?package='+app.$route.query.package))


            }).catch(function (error) {

              app.$nuxt.$loading.finish()


              console.log("error",error,error.response)
              app.$swal.fire({
                icon: 'error',
                title:app.$t('auth.an_error_occured'),
                text:  error.response?.data?.message,
                footer: '<a href="/"  style="margin:auto; ">' + app.$t("tools.btn.return_to_home") + '</a>'

              })


            });
            app.$nuxt.$loading.finish()

          })


          /*    app.$swal.fire({
                icon: 'success',
                title: 'Félicitation ! ' + app.form.last_name,
                text: "Veuillez compléter votre inscription , en effectuant le paiement pour  votre plan",
                footer: '<a href="' + process.env.wa_contact + '"  style="margin:auto; ">Besoin de nous contacter  ? </a>'
              })
              */


        }).catch(function(error){

          app.$nuxt.$loading.finish()

          console.log("error",error,error.response)

          app.$swal.fire({
            icon: 'error',
            title:app.$t('auth.an_error_occured'),
            text:  error.response?.data?.message,
            footer: '<a href="/"  style="margin:auto; ">' + app.$t("tools.btn.return_to_home") + '</a>'

          })
        })

      }


  },

  mounted() {


    this.package = packages[this.$route.query.package]


    if(this.$route.query.code){

      this.form.referral_code= this.$route.query.code.substring(1)
      this.form.referral_code="+"+this.form.referral_code
      console.log("code=",this.form.referral_code)
    }

    this.contact = process.env.wa_contact


  },

  head: function() {
    return this.$seo({
      name: 'Hémlè FC de Botko',
      title: 'Inscription',
      templateTitle: '%name% - %title%',
      description: 'Inscrivez-vous sur le site officiel du Hémlè FC de Botko pour rejoindre notre communauté et rester informé des dernières nouvelles, matchs et événements du club de deuxième division au Cameroun.'
    })
  }



}
</script>

<style scoped>

</style>
