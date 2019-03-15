import axios from '../../axios'
import config from '../config'
/* 
 * 常量接口
 */
let baseUrl = config.baseUrl;

// 根据父节点获取常量
export const getConstByParentId = (parentId) => {
    const url = baseUrl + '/api/v1/consts?parentId=' + parentId;
    return axios.get(
        url
    )
}
// 保存常量
export const saveConst = (parentId, name) => {
    const url = baseUrl + '/api/v1/const'
    return axios.post(
        url,
        {
            "Id": 0,
            "ParentId": parentId,
            "Name": name,
        }
    )
}
// 编辑常量
export const editConst = (id, parentId, name) => {
    const url = baseUrl + '/api/v1/const'
    return axios.put(
        url,
        {
            "Id": id,
            "ParentId": parentId,
            "Name": name,
        }
    )
}
// 删除常量
export const deleteConst = (id) => {
    const url = baseUrl + '/api/v1/const?id=' + id;
    return axios.delete(
        url
    )
}