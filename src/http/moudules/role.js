import axios from '../../axios'
import config from '../config'

/* 
 * 角色管理模块
 */
let baseUrl=config.baseUrl;
// 1.删除页面资源
export const pagerDelete = (url) => {
    url= baseUrl+url
    return axios.Delete(
        url
    );
};
// 2.添加页面资源
export const pagerAdd = (data) => {
    const url= baseUrl+'/api/v1/pagerc'
    return axios.post(
        url,
        data
    )
}
// 3.编辑页面资源
export const pagerEdit = (data) => {
    const url= baseUrl+'/api/v1/pagerc'
    return axios.put(
        url,
        data
    )
}
// 4.获取所有页面资源
export const pagerFindAll = (data) => {
    const url= baseUrl+'/api/v1/pagercs'
    return axios.get(
        url,
        data
    )
}
// 5.根据父节点主键获取子页面资源
export const levelpagerFind = (data) => {
    const url= baseUrl+'/api/v1/levelpagercs'
    return axios.get(
        url,
        data
    )
}
// 6.添加角色
export const roleAdd = (data) => {
    const url= baseUrl+'/api/v1/role'
    return axios.post(
        url,
        data
    )
}
// 7.编辑角色
export const roleEdit = (data) => {
    const url= baseUrl+'/api/v1/role'
    return axios.put(
        url,
        data
    )
}
// 8.删除角色
export const roleDelete = (url) => {
    url= baseUrl+url
    return axios.Delete(
        url
    )
}
// 9.获取特定角色所拥有的权限
export const rolePagerFind = (url) => {
    url= baseUrl+url
    return axios.get(
        url
    )
}
// 10.根据roleId获取其拥有权限页面资源
export const roleIdFind = (url) => {
    url= baseUrl+url
    return axios.get(
        url
    )
}
// 11.获取用户的所有角色
export const userFindAll = (url) => {
    url= baseUrl+url
    return axios.get(
        url
    )
}
// 12.添加角色与用户的关联
export const accounttoroleAdd = (url) => {
    url= baseUrl+url
    return axios.post(
        url
    )
}
// 13.编辑用户与角色关联
export const accounttoroleEdit = (data) => {
    const url= baseUrl+'/api/v1/accounttorole'
    return axios.put(
        url,
        data
    )
}
// 14.删除用户与角色之间的关联
export const accounttoroleDelete = (data) => {
    const url= baseUrl+' /api/v1/accounttorole'
    return axios.Delete(
        url,
        data
    )
}
// 15.获取用户的所有权限
export const userPagerFindAll = (url) => {
    url= baseUrl+url
    return axios.get(
        url
    )
}
// 16.获取用户特定父节点的权限
export const userLevelpagerFind = (data) => {
    const url= baseUrl+'/api/v1/user/levelpagercs'
    return axios.get(
        url,
        data
    )
}
// 17.获取用户特定父唯一id下的权限
export const userUniqueFind = (data) => {
    const url= baseUrl+'/api/v1/user/leveluniquepagercs'
    return axios.get(
        url,
        data
    )
}
// 18.获取权限列表
export const getPageList = (url) => {
    url= baseUrl+url
    return axios.post(
        url
    )
}
// 19.获取角色列表
// export const getRoleList = (url) => {
//     url= baseUrl+url
//     return axios.get(
//         url
//     )
// }
// 20. 获取用户管理的角色列表
export const getRoleList = (url) => {
    url= baseUrl+url
    return axios.get(
        url
    )
}