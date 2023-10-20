import error from "../layouts/error";

export const strict = false



export const state = () => ({



    errors: undefined,
    error_message: undefined,
    user_location:{},
    user:{}


})
export const mutations = {



    SET_ERRORS(state, errors) {

        state.errors = errors

    },

    SET_ERROR_MESSAGE(state, error_message) {

        state.error_message = error_message

    },

    SET_USER(state, user) {
        state.user = user

    },


}

export const getters = {

    errors: state => state.errors,
    error_message: state => state.error_message,
    user: state => state.user,


}



export const actions = {

    setErrors({commit}, errors) {
        commit('SET_ERRORS', errors)
    },
    setErrorMessage({commit}, error_message) {

        console.log("ther is error message",error_message)
        commit('SET_ERROR_MESSAGE', error_message)
    },
    setUser({commit}, user) {
        commit('SET_USER', user)
    },

}