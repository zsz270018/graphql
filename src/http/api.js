/* 
 * 接口统一集成模块
 */
import * as role from './moudules/role'
import * as login from './moudules/login'
import * as user from './moudules/user'
import * as consts from './moudules/apiconsts'
import * as staff from './moudules/staff'
// 默认全部导出
export default {
    role,login,user,consts,staff
}