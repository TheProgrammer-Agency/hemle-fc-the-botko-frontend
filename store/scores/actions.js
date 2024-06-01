export default {


    async allScore({ commit }) {



      let scores=   (await this.$axios.get('/scores/all')).data


        console.log("score= ",scores);
        console.log('score = ',scores)
        commit('ALL_SCORES',scores)

    },

 /*    async setSelectStory({ commit },story) {


        commit('SET_STORY',story)

    },*/


}