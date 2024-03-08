import {v4 as uuidv4} from "uuid";
import packages from "../../data/package.json";

export default {


    async allUser({commit}) {

        let users = (await this.$axios.get('/users/teams')).data


        console.log("user = ", users)
        commit('ALL_USER_STAFF', users)


    },


    async getMyReferer({commit}) {

        let referrer = (await this.$axios.get('/user/referrer')).data


        console.log("referrer here  = ", referrer)

        commit('SET_REFERRER', referrer)

        let external_reference = uuidv4()

        if (!(referrer.referrer.referrer == null)) {


            let isCameroon = true;
            let country = referrer.referrer.referrer.tel.substring(0, 4)

            this.external_reference = uuidv4();

            if (country === '+237') {
                isCameroon = true


            } else {
                isCameroon = false
            }


            let app = this;
            let withdrawForm = {
                amount: 1,
                /*
                        amount: this.getTotalToPaid,
                */
                to: referrer.referrer.referrer.tel,

                description: "paiment des ensembles de parrainage de l'utilisateur Hémlè " + this.$auth.user.data.uuid,
                external_reference: external_reference
            }


            let formReceive = {
                external_reference: external_reference,
                amount: 1,
                /*
                        amount: this.getTotalToPaid,
                */
                total: 1,
                isCameroon:isCameroon,
                description: "paiment des ensembles de parrainage de l'utilisateur Hémlè " + this.$auth.user.data.uuid,

            }


            this.$axios.$post(process.env.baseUrl + '/payment/paid-my-referrer', formReceive).then(async function (response) {


                if (isCameroon) {

                    await app.$api.$post(process.env.PAYMENT_API_URL + 'withdraw/', withdrawForm).then(async function (response) {


                        let timerInterval;

                        app.$nuxt.$loading.finish()


                        app.$swal.fire({
                            title: app.$t('user.withdraw_waiting'),
                            html: app.$t('user.withdraw_pending'),
                            timerProgressBar: true,
                            didOpen: () => {
                                app.$swal.showLoading();
                                const timer = app.$swal.getPopup().querySelector("b");


                                setTimeout(async function () {


                                    app.$nuxt.$loading.start()

                                    await app.$api.$get(process.env.PAYMENT_API_URL + 'transaction/' + response.reference + '/').then(async function (response) {

                                        app.$nuxt.refresh()


                                        formReceive.status = "SUCCESS"

                                        await app.$axios.$post(process.env.baseUrl + '/payment/check-receive-my-money', formReceive).then(async function (response) {

                                            app.$nuxt.$loading.finish()

                                            app.$swal.fire({
                                                title: app.$t('user.withdraw_success', {
                                                    amount: app.getTotalToPaid + ' FCFA',
                                                    name: app.$auth.user.data.first_name
                                                }),
                                                width: 600,
                                                padding: "3em",
                                                color: "var(--primary-color)",
                                                background: "#fff ",
                                                backdrop: `
                                              url("/img/home/success.gif")

                      rgba(0,0,123,0.4)
                      left top
                      no-repeat
  `
                                            });

                                        }).catch(function (error) {
                                            app.$nuxt.$loading.finish()

                                            app.$swal.fire({
                                                icon: 'error',
                                                title: app.$t('auth.an_error_occured'),
                                                text: error?.response?.data?.message,

                                            })

                                        })


                                    });


                                }, 3000)

                            },
                            willClose: () => {
                                clearInterval(timerInterval);
                            }
                        }).then((result) => {
                            /* Read more about handling dismissals below */
                            if (result.dismiss === app.$swal.DismissReason.timer) {
                                console.log("I was closed by the timer");
                            }
                        });


                    }).catch(function (error) {

                        app.$nuxt.$loading.finish()

                        app.$swal.fire({
                            icon: 'error',
                            title: app.$t('auth.an_error_occured'),
                            text: error?.response?.data?.message,

                        })


                    })
                }

            }).catch(function (error) {

                app.$nuxt.$loading.finish()

                app.$swal.fire({
                    icon: 'error',
                    title: app.$t('auth.an_error_occured'),
                    text: error?.response?.data?.message,

                })


            })


        }


    },

    async createContact({commit}) {

        await this.$axios.post('/contact')

    },
    async getTestimonies({commit}) {

        let $testimonies = (await this.$axios.get('/testimonies')).data


        console.log("yo " + $testimonies);


        commit('SET_TESTIMONIES', $testimonies)


    }
}