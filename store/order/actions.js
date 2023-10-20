export default {


    async getOrders({ commit }) {

      let orders=   (await this.$axios.get('/user/orders')).data
        commit('SET_ORDER',orders)

    },


}