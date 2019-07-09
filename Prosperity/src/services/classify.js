//classify

import request from "../utils/request";


//获取所有的tabs
export let getTabs = () => {
  return request.post("/api/open/product/category/query/1.0.0");
};


//点击获取数据
export let getClassData = payload => {
    return request.post(`/api/open/product/category/productList/1.0.0?pageIndex=${payload.pageIndex}&cid=${payload.cid}&sortType=${payload.sortType}`)
}