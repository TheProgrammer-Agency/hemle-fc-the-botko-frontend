export default {


    async allBlogs({ commit }) {

      let blogs=   (await this.$axios.get('/blogs')).data.data



        console.log("blog, ",blogs)
        commit('ALL_BLOGS',blogs)
    },

    async similarBlogs({ commit }) {

      let blogs=   (await this.$axios.get('/blogs/similar')).data.data

        commit('SIMILAR_BLOGS',blogs)
    },
}