export default {


    async allStories({ commit }) {

      let stories=   (await this.$axios.get('/stories')).data

        commit('ALL_STORIES',stories)

    },

     async setSelectStory({ commit },story) {


        commit('SET_STORY',story)

    },


}