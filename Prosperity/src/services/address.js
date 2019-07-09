//收货地址接口
import request from "../utils/request";
//收货地址列表
export let addressFn = () => {
    return request.post('/api/open/user/address/list/1.0.0')
}
//添加收货地址
export let addAddressFn = (params) => {
    return request.post('/api/open/user/address/addAddress/1.0.0',params)
}