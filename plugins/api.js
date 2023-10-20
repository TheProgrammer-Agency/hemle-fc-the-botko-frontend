export default function ({ $axios,store }, inject) {
    // Create a custom axios instance
    const api = $axios.create({
        headers: {
            common: {
                Accept: 'text/plain, */*'
            }
        }
    })

    // Set baseURL to something different
    api.setBaseURL(process.env.PAYMENT_API_URL)
    api.setHeader('Authorization','Token '+process.env.PAYMENT_API_TOKEN)

    inject('api', api)

    api.onError(error => {



        console.log("response.data",error.response,error.response.data)


        if(error.response.data.error_code==="ER101"){


            console.log("messaage 401",error.response.data.message)


            console.log("store = ",store)
            store.dispatch('setErrorMessage',"Numéro de téléphone incorrect, veuillez saisir un numéro correct ")

        }
        else if(error.response.data.error_code==="ER102"){



            store.dispatch('setErrorMessage','Numéro de téléphone de l\'opérateur non pris en charge. Actuellement, seuls les numéros de téléphone MTN et Orange sont acceptés pour le mobile money.')


        }
        else if(error.response.data.error_code==="ER1201") {

            store.dispatch('setErrorMessage','Montant invalide. Les nombres décimaux ne sont PAS autorisés. Le montant peut être envoyé sous forme d\'entier ou de chaîne')

        }
        else if(error.response.data.error_code==="ER1301") {

            store.dispatch('setErrorMessage','Solde insuffisant. Essayer de retirer un montant supérieur à votre solde actuel pour un opérateur spécifique\n')

        }


    // Inject to context as $api











        /*    if (code === 401) {
              app.$toast.error("Vous n'êtes pas autorisé à éffectuer cette action")

            }*/
    })
}