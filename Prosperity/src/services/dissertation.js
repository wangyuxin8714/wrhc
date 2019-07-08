import request from '../utils/request';

// 登陆接口
//export let login = code=>{
//    return request.post('/user/code2session', {
//      code
//    })
//}



// 获取专题
export let getdissertation = id=>{
   return request.post('/api/open/sepcial/query/1.0.0?siid='+id)
}

// 搜索列表
export let getsearchlist = data=>{
    return request.post(`/api/open/search/query/1.0.0?queryWord=${data.queryWord}&queryType=${data.queryType}&querySort=${data.querySort}&pageIndex=${data.pageIndex}`)
 }
