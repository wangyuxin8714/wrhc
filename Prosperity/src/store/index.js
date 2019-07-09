import Vue from "vue"
import Vuex from "vuex"
import createLogger from "vuex/dist/logger"

import dissertation from "./modules/dissertation"
import search from "./modules/search"
import home from "./modules/home";
import classify from "./modules/classify"


Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        dissertation,
        search,
        home,
        classify
    },
    state:{
       
    },
    mutations:{
       
    },
    plugins:[createLogger()]
})
