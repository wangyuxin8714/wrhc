import Vue from "vue"
import Vuex, { mapMutations } from "vuex"
// import createLogger from "vuex/dist/logger"

import index from "./modules/index"



Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        index,
        
    },
    state:{
       
    },
    mutations:{
       
    }
    // plugins:[createLogger()]
})