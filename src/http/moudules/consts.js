import axios from '../../axios'
import config from '../config'
/* 
 * 常量模块
 */
let baseUrl = config.baseUrl;

// 获取常量
export const getConst = (data) => {
    const url= baseUrl+'/api/v1/consts?parentId='+data.parentId;
    return axios.get(
        url
    )
}
// 保存常量
export const saveConst = (data) => {
    const url= baseUrl+'/api/v1/const'
    return axios.post(
        url,
        data
    )
}
// 编辑常量
export const editConst = (data) => {
    const url= baseUrl+'/api/v1/const'
    return axios.put(
        url,
        data
    )
}
// 删除常量
export const deleteConst = (data) => {
    const url= baseUrl+'/api/v1/const?id='+data.id;
    return axios.Delete(
        url
    )
}
// 根据父节点获取常量
export const getParentConst = (parentId) => {
    const url= baseUrl+'/api/v1/consts?parentId='+parentId;
    return axios.put(
        url
    )
}