import Vue from "vue"
import Vuex from "vuex"
import createLogger from "vuex/dist/logger"

import dissertation from "./modules/dissertation"
import search from "./modules/search"
import home from "./modules/home";

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        dissertation,
        search,
        home
    },
    state:{
       
    },
    mutations:{
       
    },
    plugins:[createLogger()]
})
