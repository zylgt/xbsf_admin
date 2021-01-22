import axios from '../utils/axios';
// 登录
export function login(data){
    return axios({
        url:'/infinitiConsult/login', //请求的地址
        method:'POST',
        data
    })
}
// 获取列表
export function getList(data){
    return axios({
        url:'/infinitiConsult/getList',
        method:'POST',
        data
    })
}
// 下载
export function downList(data){
	 return axios({
        url: '/infinitiConsult/download',
        method:'POST',
        data
    }); 
}
