import axios from '../../axios'
import config from '../config'
/* 
 * 用户模块
 */
let baseUrl=config.baseUrl;
// 获取所有机构和驿站的用户数量
export const getAllUserNum = (url,data) => {
    url= baseUrl+url
    return axios.post(
        url,
        data
    );
};
// 获取所有机构和驿站的用户信息
export const getAllUserInfo = (url) => {
    url= baseUrl+url
    return axios.post(
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

//根据一组accountid获取用户信息
export const getUserInfoList = (data) => {
    const url= baseUrl+'/api/v1/userinfos'
    return axios.post(
        url,
        data
    )
}
//根据主键获取信息
export const getUser = (data) => {
    const url= baseUrl+'/api/v1/userinfo'
    return axios.get(
        url,
        data
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
//机构增加人员实体
export const postPersonnelEntity = (url,data) => {
    url= baseUrl+url
    return axios.post(
        url,
        data
    );
};

//驿站增加人员实体
export const postInstitutionalEntity = (url,data) => {
    url= baseUrl+url
    return axios.post(
        url,
        data
    );
};
//删除员工用户与机构关系
export const deleteStafftocompany = (url) => {
    url= baseUrl+url
    return axios.delete(
        url
    )
}
