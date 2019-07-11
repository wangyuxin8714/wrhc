
import request from '../utils/request';
// 商品详情
export let details = pid=>{
    return request.post('api/open/product/info/1.0.0?pid='+pid)
 }
 //商品详情图片
 export let detailsImg=obj=>{
    console.log("obj123....",obj)
    return request.post(`/api/open/product/detailPicture/1.0.0?pid=${obj.pid}&&basePid=${obj.basePid}&&userIdentity=${obj.userIdentity}`)
 }
 //商品详情提示
 export let detailsRemind=sstid=>{
    return request.post("/api/open/shipping/templates/info/1.0.0?sstid="+sstid)
 }
 //商品详情选择
 export let detailsChoose=pid=>{
    return request.post("/api/open/product/sku/attrs/1.0.0?pid="+pid)
 }

 //获取颜色尺寸
export let getColorSize=params=>{
   return request.post("/api/open/product/sku/query/1",params)
}

export let getplaceOrder=params=>{
   console.log("params",params)
   return request.post("/api/open/order/prepare/1.0.0",params)
}


export let getgopayment=params=>{
   console.log("params",params)
   return request.post("/api/open/order/place/order/1.0.0",params)
}