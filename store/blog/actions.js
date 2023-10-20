export default {


    async allBlogs({ commit }) {

      let blogs=   (await this.$axios.get('/blogs')).data.data



        console.log("blog, ",blogs)
        commit('ALL_BLOGS',blogs)
    },
}