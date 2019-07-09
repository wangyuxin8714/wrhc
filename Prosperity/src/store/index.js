import Vue from "vue"
import Vuex, { mapMutations } from "vuex"
import createLogger from "vuex/dist/logger"

Vue.use(Vuex)

import index from "./modules/index"
import address from './modules/address'
import dissertation from "./modules/dissertation"
import search from "./modules/search"
import home from "./modules/home";
import order from "./modules/order";

import commodityDetails from "./modules/commodityDetails";

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        index,
        address,
        dissertation,
        search,
        home,
        order,
        commodityDetails
    },
    state:{
       
    },
    mutations:{
       
    },
    plugins:[createLogger()]
})
