import axios from '../../axios'
import config from '../config'
/* 
 * 用户模块
 */
let baseUrl=config.baseUrl;

// 登录
export const getUserInfo = (url) => {
    url= baseUrl+url
    return axios.get(
        url
    );
};

//获取用户信息
export const getUserInfoAccId = (url) => {
    url= baseUrl+url
    return axios.get(
        url
    )
}
//获取所有用户信息
export const getAllUserInfo = (url) => {
    url= baseUrl+url
    return axios.post(
        url
    )
}
//根据一组accountid获取用户信息
export const getUserInfoList = (data) => {
    const url= baseUrl+'/api/v1/userinfos'
    return axios.post(
        url,
        data
    )
}
//根据主键获取信息
export const getUserById = (data) => {
    const url= baseUrl+'/api/v1/userinfo?id='+data.id
    return axios.get(
        url
    )
}
//保存用户信息
export const saveUser = (data) => {
    const url= baseUrl+'/api/v1/userinfo'
    return axios.post(
        url,
        data
    )
}
//删除用户信息
export const deleteUser = (data) => {
    const url= baseUrl+'/api/v1/userinfo'
    return axios.Delete(
        url,
        data
    )
}
//编辑用户信息
export const EditUserEdit = (data) => {
    const url= baseUrl+'/api/v1/userinfo'
    return axios.put(
        url,
        data
    )
}
//获取员工用户管理的机构
export const getMechanism = (url) => {
    url= baseUrl+url
    return axios.get(
        url
    )
}
//员工账号根据账号id获取驿站信息
export const getPostStation = (url) => {
    url= baseUrl+url
    return axios.get(
        url
    )
}
