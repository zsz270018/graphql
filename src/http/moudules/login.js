import axios from '../../axios'
import config from '../config'
/* 
 * 登录模块
 */
let baseUrl = config.baseUrl;

// 登录
export const userLogin = (data) => {
    const url= baseUrl+'api/v1/login'
    return axios.get(
        url,
        data
    )
}