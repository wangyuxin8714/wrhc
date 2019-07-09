
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