import Vue from "vue"
import Vuex, { mapMutations } from "vuex"
// import createLogger from "vuex/dist/logger"

import index from "./modules/index"
import address from './modules/address'


Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        index,
        address
    },
    state:{
       
    },
    mutations:{
       
    }
    // plugins:[createLogger()]
})