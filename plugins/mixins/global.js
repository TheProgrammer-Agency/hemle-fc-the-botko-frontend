import Vue from "vue"

// Make sure to pick a unique name for the flag
// so it won't conflict with any other mixin.

import {mapGetters} from "vuex";

if (!Vue.__my_mixin__) {
    Vue.__my_mixin__ = true
    Vue.mixin({

        computed:{
            ...mapGetters({
                user:'user'
            }),


            user(){
                return this.$auth.user.user
            },



        },

    }) // Set up your mixin then
}
