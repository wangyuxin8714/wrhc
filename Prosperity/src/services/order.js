//订单接口
import request from "../utils/request";
//我的订单
export let orderFn = (params) => {
    // console.log('params...',params)
    return request.post('/api/open/order/query/1.0.0',params)
}
//订单详情
export let orderDetailFn = (params) => {
    // console.log('paramsFn...',params)
    return request.post('/api/open/order/query/detail/1.0.0',params)
}
