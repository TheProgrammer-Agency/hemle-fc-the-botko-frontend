<template>
  <div class="contact-form">

    <ValidationObserver ref="form_reset" v-slot="{ invalid,reset }">

      <form id="contact-form" @submit.prevent="onSubmit" >


        <div class="row">


          <div class="col-12">

            <ValidationProvider :name="$t('auth.first_name')" rules="required|min:3" v-slot="{ errors }">
              <input v-model="form.first_name" type="text" :placeholder="$t('auth.name_placeholder')" >
              <span>{{ errors[0] }}</span>
            </ValidationProvider>

          </div>

          <div class="col-12">

            <ValidationProvider :name="$t('auth.email')" rules="required|min:3" v-slot="{ errors }">
              <input v-model="form.email" type="email" :placeholder="$t('auth.email_placeholder')">
              <span>{{ errors[0] }}</span>
            </ValidationProvider>

          </div>



          <div class="col-12">

            <ValidationProvider :name="$t('auth.tel')" rules="required|min:7|integer" v-slot="{ errors }">
              <span>{{ errors[0] }}</span>


              <div class="flex align-center login-phone">

                <client-only placeholder="loading..." class="flex">

                  <vue-country-code

                      @onSelect="onSelect"


                  >
                  </vue-country-code>

                </client-only>
                <input v-model="form.tel" type="number" :placeholder="$t('auth.tel_placeholder')">

              </div>

            </ValidationProvider>
          </div>




          <div class="col-12">

            <ValidationProvider :name="$t('auth.message')" rules="required|min:8" v-slot="{ errors }">

              <textarea v-model="form.message" :placeholder="$t('auth.message_placeholder')"></textarea>

              <span>{{ errors[0] }}</span>
            </ValidationProvider>

          </div>





          <div class="col-12 mt--10">
            <button class="bk-btn theme-btn mx-auto"  type="submit"  >
              {{$t('contact.contact_btn')}}
            </button>


          </div>

        </div>
      </form>
    </ValidationObserver>


  </div>
</template>

<script>
export default {

  data() {

    return {

      form: {

        first_name: '',
        last_name: '',
        city: '',
        country: '',
        tel: '',
        email: '',
      },
    }
  },

  methods: {

    onSelect({name, iso2, dialCode}) {
      console.log(name, iso2, dialCode);
      this.phone_number_code = dialCode;
    },

    async onSubmit() {

      this.$nuxt.$loading.start()

      let app = this;
      this.$nuxt.$loading.start()


      await app.$axios.$post('contact', this.form).then(async function (response) {




        app.$swal.fire({
          icon: 'success',
          title: app.$t('contact.success_contact_title') + app.form.first_name,
          text: app.$t('contact.success_contact_description'),
        })


        app.form={
          first_name: '',
          last_name: '',
          city: '',
          country: '',
          tel: '',
          email: '',
        }

        app.$nuxt.$loading.finish()

      })
      .catch(function () {
        
      })

    }
  }
};
</script>

<style lang="scss">

</style>