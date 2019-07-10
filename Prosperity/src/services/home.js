//首页接口
import request from "../utils/request";

//tab切换
export let tabList = data => {
  return request.post("/api/open/product/category/sub/1?parentId=" + data);
};

//为你精选
export let chooseTrue = data => {
  return request.post("/api/open/page/home/products/1.0.0?pageIndex=" + data);
};

//精选好物
export let chooseGood = () => {
  return request.post("/api/open/page/home/list/1.0.0");
};
