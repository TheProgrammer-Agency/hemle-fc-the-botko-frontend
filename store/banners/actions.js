export default {


    async lastBanners({ commit }) {



      let banners=   (await this.$axios.get('/banners')).data

        commit('LAST_BANNER',banners)

    },

 /*    async setSelectStory({ commit },story) {


        commit('SET_STORY',story)

    },*/


}