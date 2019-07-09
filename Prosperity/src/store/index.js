import Vue from "vue"
import Vuex, { mapMutations } from "vuex"
import createLogger from "vuex/dist/logger"

import index from "./modules/index"
import dissertation from "./modules/dissertation"
import search from "./modules/search"
import home from "./modules/home";
import commodityDetails from "./modules/commodityDetails";

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        index,
        dissertation,
        search,
        home,
        commodityDetails
    },
    state:{
       
    },
    mutations:{
       
    },
    plugins:[createLogger()]
})
