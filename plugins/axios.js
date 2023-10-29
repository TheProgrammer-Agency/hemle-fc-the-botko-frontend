export default function ({ app, $axios, redirect,store,context }) {



    $axios.onRequest(config => {

        store.dispatch('setErrors',[])
        store.dispatch('setErrorMessage',"")

        console.log('Making request to ' + config.url)

    })



    $axios.onError(error => {



        console.log("response.data",error)


            store.dispatch('setErrors',error.response.data.errors)
            store.dispatch('setErrorMessage',error.response.data.message)







        /*    if (code === 401) {
              app.$toast.error("Vous n'êtes pas autorisé à éffectuer cette action")

            }*/
    })


}
