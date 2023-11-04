export default {


    async allUser({ commit }) {

      let users=   (await this.$axios.get('/users/teams')).data




        console.log("user = ",users)
        commit('ALL_USER_STAFF',users)



    },


    async getMyReferer({ commit }){

        let referrer=   (await this.$axios.get('/user/referrer')).data


        commit('SET_REFERRER',referrer)



    },

   async  createContact({commit}){

       await this.$axios.post('/contact')

    },
   async  getTestimonies({commit}){

      let $testimonies= (await this.$axios.get('/testimonies')).data



       console.log("yo "+$testimonies);


       commit('SET_TESTIMONIES',$testimonies)


   }
}