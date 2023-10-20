export default {


    async allUser({ commit }) {

      let users=   (await this.$axios.get('/users/teams')).data




        console.log("user = ",users)
        commit('ALL_USER_STAFF',users)



    },


   async  createContact({commit}){

       await this.$axios.post('/contact')

    }
}