<template>
    <div class="_Role_Management">
        <div>
            <el-row class="toolbar" style="padding-bottom: 0px;">
                <el-col :span="24">
                    <el-form :inline="true" class="_Role_Management_form">
                        <div>
                            <!-- <el-form-item label="编号">el-table
                                <el-input auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="名称">
                                <el-input auto-complete="off"></el-input>
                            </el-form-item> -->
                        </div>
                        <div>
                            <el-form-item>
                                <el-button type="primary" @click="roles_False = true">+ 新增</el-button>
                            </el-form-item>
                        </div>
                    </el-form>
                </el-col>
            </el-row>
            <el-table style="100%" :data="listData">
                <el-table-column type="index" label="序号" :index="roleIndexMethod"></el-table-column>
                <el-table-column prop="Name" label="角色名称"></el-table-column>
                <el-table-column prop="DescDetail" label="角色描述"></el-table-column>
                <el-table-column prop="CreateTime" :formatter="formatter" label="创建时间"></el-table-column>
                <!-- <el-table-column width="140" label="绑定用户">
                    <template slot-scope="scope">
                        <el-button type="success" icon="el-icon-delete" @click="bangding(scope.$index, scope.row)">绑定
                        </el-button>
                    </template>
                </el-table-column> -->
                <el-table-column label="操作" width="140" fixed="right">
                    <template slot-scope="scope">
                        <el-button size="small" icon="el-icon-edit" @click="setting(scope.$index, scope.row)">权限设置</el-button>
                        <el-button size="small" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)">修改
                        </el-button>
                        <el-button type="danger" size="small" icon="el-icon-delete" @click="handleDel(scope.$index, scope.row)">删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 新增页面 -->
            <div v-bind:class="{'_Add_roles' : roles_True,'_Add_roles _Add_roles_False' : roles_False}">
                <div class="_Add_roles_div">
                    <div class="_Add_roles_header">
                        <p>添加角色</p>
                        <button type="button" aria-label="Close" class="dialog__headerbtn" @click="rolesFlag(3)"><i class="el-dialog__close el-icon el-icon-close"></i></button>
                    </div>
                    <div class="_Add_roles_section">
                        <el-form :model="roleForm">
                            <el-form-item label="角色名称" prop="Name" required>
                                <el-input auto-complete="off" v-model="roleForm.Name"></el-input>
                            </el-form-item>
                            <el-form-item label="角色描述" prop="DescDetail">
                                <el-input type="textarea" v-model="roleForm.DescDetail"></el-input>
                            </el-form-item>
                        </el-form>
                    </div>
                    <div class="_Add_roles_footer">
                        <el-button type="success" @click="rolesFlag(1)" :disabled="roleForm.ctrl">确认</el-button>
                        <el-button type="danger" @click="rolesFlag(2)">关闭</el-button>
                    </div>
                </div>
            </div>
            <!-- 编辑页面 -->
            <el-dialog title="编辑" :visible.sync="editFormVisible" :close-on-click-modal="false">
                <el-form :model="editForm" label-width="120px" ref="editForm">
                    <el-form-item label="角色名称" prop="Name" required>
                        <el-input auto-complete="off" v-model="editForm.Name" required></el-input>
                    </el-form-item>
                    <el-form-item label="角色描述" prop="DescDetail">
                        <el-input type="textarea" v-model="editForm.DescDetail"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click.native="editFormVisible = false">取消</el-button>
                    <el-button type="primary" @click.native="editSubmit">提交</el-button>
                </div>
            </el-dialog>
            <!-- 角色授权 -->
            <div class="_Role_authorization" v-bind:class="{'_Role_authorization' : authorizationTrue,'_Role_authorization _Role_authorization_Block' : authorizationFalse}">
                <div class="_Editing_interface">
                    <p class="el-dialog__header">
                        <span>权限设置</span>
                        <button type="button" aria-label="Close" class="dialog__headerbtn" @click="next(4)"><i class="el-dialog__close el-icon el-icon-close"></i></button>
                    </p>
                    <div class="_Role_authorization_content_title">
                        <el-steps :active="active" finish-status="success" simple style="margin-top: 20px">
                            <!-- <el-step title="角色名称"></el-step> -->
                            <el-step title="权限选择"></el-step>
                        </el-steps>
                    </div>
                    <div class="_Role_authorization_section">
                        <!--                         <div v-if="active === 0" class="_Jurisdiction_edit_content_form_div1" style="width: 90%;margin-left: 5%;">
                            <el-form :model="roleForm">
                                <el-form-item label="角色名称" prop="Name" required="true">
                                    <el-input auto-complete="off" v-model="roleForm.Name"></el-input>
                                </el-form-item>
                                <el-form-item label="角色描述" prop="DescDetail">
                                    <el-input v-model="roleForm.DescDetail"></el-input>
                                </el-form-item>
                            </el-form>
                        </div> -->
                        <div v-if="active === 0" class="_Jurisdiction_edit_content_form_div1">
                            <div v-if="settingFlag">
                                <el-tree :data="date" show-checkbox node-key="id" ref="tree" :default-checked-keys="checkedIds"
                                :props="defaultProps">
                                </el-tree>
                            </div>
                        </div>
                    </div>
                    <div slot="footer" class="dialog-footer">
                        <div v-if="active === 0">
                            <!--                           <el-button style="margin-top: 12px;" @click="next(1)" disabled>上一步</el-button>
                            <el-button style="margin-top: 12px;" @click="next(2)">下一步</el-button> -->
                            <el-button style="margin-top: 12px;" @click="next(3)">完成</el-button>
                        </div>
                        <!--                         <div v-if="active === 1">
                            <el-button style="margin-top: 12px;" @click="next(1)">上一步</el-button>
                            <el-button style="margin-top: 12px;" @click="next(2)" disabled>下一步</el-button>
                            <el-button style="margin-top: 12px;" @click="next(3)">完成</el-button>
                        </div> -->
                    </div>
                </div>
            </div>
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[5, 10, 15, 20]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total='list.length'>
            </el-pagination>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

// 添加角色时的原始值
let roleForm = {
    AccountId: '',
    Name: '',
    DescDetail: '',
    PageRcIds: ""
};

export default {
    data() {
            return {
                filters: '',
                roles_True: true,
                roles_False: false,
                currentPage: 1, //初始页
                pagesize: 5,
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                active: 0,
                authorizationTrue: true,
                authorizationFalse: false,
                list: [],
                editFormVisible: false, //编辑界面是否显示
                //编辑界面数据
                editForm: {
                    // id: 0,
                    // name: '',
                    // code: '',
                    // statutory: '',
                    // phone: '',
                    // date: '',
                },
                editIndex: null,
                list1: [],
                Obj: {},
                roleForm: JSON.parse(JSON.stringify(roleForm)),
                checkedIds: [],
                row: {},
                lengths : [],
                date : [],
                settingFlag : false,
                arr : []
            }
        },
        computed: {
            listData() {
                let newList = [];
                let sonList = [];
                var _this = this;
                var NewItems = [];
                let pages = Math.ceil(_this.list.length / _this.pagesize); //8为每页设置数量
                for (let i = 0; i < pages; i++) {
                    sonList = _this.list.slice(i * _this.pagesize, i * _this.pagesize + _this.pagesize); //8为每页设置数量
                    newList.push(sonList)
                }
                if (_this.filters !== '') {
                    _this.list.map(item => {
                        if (item.name.indexOf(_this.filters) != -1) {
                            NewItems.push(item);
                        }
                    })
                    _this.totalItems = NewItems.length
                    return NewItems;
                }
                _this.totalItems = _this.list.length;
                // console.log(newList)
                return newList[_this.currentPage - 1];
            },
        },
        methods: {
            // 角色列表索引计算
            roleIndexMethod(index) {
                return (this.currentPage - 1) * this.pagesize + index + 1;
            },
            formatter(row, column) {
                // console.log(row, column)
                var time = row.CreateTime;
                // console.log(time)
                // var d = new Date(time);
                // var times = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
                var dateee = new Date(time).toJSON();
                var times = new Date(+new Date(dateee) + 16 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
                return times;
            },
            rolesFlag(id) {
                // 保存，提交
                if (id === 1) {
                    this.roleForm.ctrl = true;
                    this.addRole().then(() => {
                        this.roles_False = false;
                        // 重置role form
                        this.roleForm = JSON.parse(JSON.stringify(roleForm));
                        // 添加完成后也需要重新更新一下列表
                        this.getRoles();
                    });
                }
                this.roles_False = false
            },
            handleSizeChange(val) {
                this.pagesize = val;
                this.handleCurrentChange(this.currentPage)
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                if (!this.flag) {
                    this.currentChangePage(this.data)
                } else {
                    this.currentChangePage(this.filterTableDataEnd)
                }
            },
            currentChangePage(nursing, currentPage) {
                let from = (this.currentPage - 1) * this.pagesize;
                let to = this.currentPage * this.pagesize;
                for (; from < to; from++) {
                    if (nursing[from]) {
                        this.data.push(nursing[from])
                    }
                }
            },
            //权限设置
            setting(index, row) {
                this.row = row
                // console.log("checked ids : " + this.row.PageRcIds)
                this.checkedIds = JSON.parse(this.row.PageRcIds)
               
                if (this.settingFlag)
                    this.$refs.tree.setCheckedKeys(this.checkedIds, false);
                this.next(5);
                this.settingFlag = true
            },
            next(id) {
                // if (this.active++ > 2) this.active = 0;
                if (id === 1) {
                    this.active = 0;
                } else if (id === 2) {
                    this.active = 1;
                    // this.activeFlag = false;
                } else if (id === 3) {
                    this.editRole();
                    this.authorizationFalse = false
                        // this.commodityFlase = false;
                } else if (id === 4) {
                    this.authorizationFalse = false;
                    this.checkedIds = [];
                    console.log(this.checkedIds)
                } else {
                    this.authorizationFalse = true
                }
            },
            //显示编辑界面
            handleEdit(index, row) {
                this.editFormVisible = true;
                // console.log(row);
                this.editForm = Object.assign({}, row);
                this.editIndex = index;
            },
            //编辑
            editSubmit: function(row) {
                this.$refs.editForm.validate((valid) => {
                    if (valid) {
                        this.$confirm('确认提交吗？', '提示', {}).then(() => {
                            this.editLoading = true;
                            // 修改 role
                            this.$api.role.roleEdit(this.editForm).then(() => {
                                this.editLoading = false;
                                this.editFormVisible = false;

                                // 重新获取数据
                                this.getRoles();
                            });

                        });
                    }
                });
            },
            //删除
            handleDel: function(index, current) {
                console.log(index, current)
                this.$confirm('确认删除该角色吗？', '提示', {
                    type: 'warning'
                }).then(() => {
                    // 调用接口删除当前角色
                    this.deleteRole(current.Id)
                })
            },
            //将角色与用户绑定起来
            bangding: function(index, row) {
                console.log(row)
                this.deleteAccounttoRole(row.Id).then(res => {
                    console.log(res)
                })
            },
            //取消绑定
            unbind: function(index, row) {
                console.log(row)
                this.addAccounttoRole(row.Id).then(res => {
                    console.log(res)
                })
            },
            //获取选取的树节点ID
            getCheckedNodes() {
                console.log(this.$refs.tree.getCheckedKeys());
            },
            // 获取角色列表
            getRoles() {
                return this.$api.role.getRoleList(`/api/v1/user/${this.Obj.Unicode}/managedrole`)
                    .then(res => {
                        this.list = res.data.Obj;
                    })
            },
            // 添加角色
            addRole() {
                // let arr = this.$refs.tree.getCheckedKeys();
                // arr = JSON.stringify(arr)
                return this.$api.role.roleAdd({
                    Name: this.roleForm.Name,
                    DescDetail: this.roleForm.DescDetail,
                    PageRcIds: "[]",
                    AccountId: this.Obj.Unicode
                })
            },
            // 删除角色
            deleteRole(id) {
                this.$api.role.roleDelete(`/api/v1/role/${id}`).then(res => {
                    // console.log(res);
                    this.getRoles();
                });
            },
            //编辑角色
            editRole() {
                let arr = this.$refs.tree.getCheckedKeys();
                arr = JSON.stringify(arr)
                this.row.PageRcIds = arr
                this.$api.role.roleEdit(this.row).then(res => {
                    // console.log(res);
                    this.getRoles();
                });
            },
            //获取所有页面资源
            getAll() {
                this.$api.role.pagerFindAll().then(res => {
                    // console.log(res)
                    let data = res.data.Obj;
                    let list = []
                    for (var item of data) {
                        if (item.ParentId == -1) {
                            var arr = {
                                id: item.Id,
                                label: item.Name,
                                children: []
                            }
                            list = list.concat(arr)
                        }
                    };
                    for (var item1 of list) {
                        for (var item of data) {
                            if (item.ParentId == item1.id) {
                                var arr = {
                                    id: item.Id,
                                    label: item.Name
                                }
                                item1.children = item1.children.concat(arr)
                            }
                        }
                    }
                    this.data2 = list;
                    console.log(list)
                })
            },
            // 获取权限列表
            getAllPagercs() {
                this.$api.role.getPageList(`/api/v1/user/${this.Obj.Unicode}/allpagercs`)
                .then(res => {
                    console.log(res);
                    this.list = res.Obj;
                })
            },
            // 根据父节点主键获取子页面资源
            levelpagercs(parentId) {
                let arr = {
                    "parentId": parentId
                }
                let params = Object.assign({}, arr)
                this.$api.role.levelpagerFind(params).then(res => {
                    // this.getPagercs = res.data.Obj
                    console.log(res)
                })
            },
            //获取特定角色所拥有的权限
            getRolePager(roleId) {
                return this.$api.role.rolePagerFind(`/api/v1/role/${roleId}/pagercs`)
            },
            //根据roleId获取其拥有权限页面资源
            getLevelPagercs(roleId) {
                return this.$api.role.roleIdFind(`/api/v1/role/${roleId}/levelpagercs`)
            },
            //获取用户的所有角色
            getUserRole(accountId) {
                return this.$api.role.userFindAll(`/api/v1/user/${accountId}/roles`)
            },
            //添加角色与用户的关联
            addAccounttoRole(roleId) {
                let url = "/api/v1/accounttorole?accountId=" + this.Obj.Unicode + "&roleId=" + roleId
                return this.$api.role.accounttoroleAdd(url)
            },
            //编辑用户与角色关联
            editAccounttoRole(roleId) {
                let arr = {
                    "roleId": roleId,
                    "accountId": this.Obj.Unicode
                }
                let params = Object.assign({}, arr)
                return this.$api.role.accounttoroleEdit(params)
            },
            //删除用户与角色之间的关联
            deleteAccounttoRole(id) {
                return this.$api.role.accounttoroleDelete(id)
            },
            //获取用户的所有权限
            getUserPager() {
                return this.$api.role.userPagerFindAll(`/api/v1/user/${this.Obj.Unicode}/allpagercs`)
            },
        },
        created() {
            let Obj = localStorage.getItem('Obj');
            this.Obj = Obj = JSON.parse(Obj);
        },
        mounted() {
            this.getRoles();
            this.getAll();
            this.getUserRole(this.Obj.Unicode).then(res => {
                this.getUserPager().then(res3 => {
                    console.log(res3)
                    let data = res3.data.Obj;
                    let list = []
                    for (var item of data) {
                        if (item.ParentId == -1) {
                            var arr = {
                                id: item.Id,
                                label: item.Name,
                                children: []
                            }
                            list = list.concat(arr)
                        }
                    };
                    for (var item1 of list) {
                        for (var item of data) {
                            if (item.ParentId == item1.id) {
                                var arr = {
                                    id: item.Id,
                                    label: item.Name
                                }
                                item1.children = item1.children.concat(arr)
                            }
                        }
                    }
                    this.date = list;
                    console.log(this.date)
                })
            })
        }
}
</script>
<style scoped>
._Role_Management > div {
    overflow-y: auto;
}
._Role_Management .toolbar ._Role_Management_form {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
}

._Add_roles {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #000;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    display: none;
}

._Add_roles_False {
    display: block;
}

._Add_roles ._Add_roles_div {
    width: 60%;
    margin: 4% auto;
    background-color: #fff;
}

._Add_roles_header {
    height: 40px;
    background-color: rgb(112, 112, 228);
    display: flex;
    justify-content: space-between;
}

._Add_roles_header p {
    line-height: 24px;
    font-size: 18px;
    margin-left: 20px;
    line-height: 40px;
    color: #fff;
}

._Add_roles_header .dialog__headerbtn {
    background: 0 0;
    border: none;
    outline: 0;
    cursor: pointer;
    font-size: 16px;
    margin-right: 10px;
}

._Add_roles_div ._Add_roles_section {
    padding: 5% 10% 0 10%;
}
._Add_roles_div ._Add_roles_section /deep/ .el-form-item__label{
  width: 120px;
}
._Add_roles_div ._Add_roles_section form .el-input,
._Add_roles_div ._Add_roles_section form .el-textarea {
    width: 75%;
}

._Add_roles_div ._Add_roles_footer {
    padding: 10px 3% 0 0;
    text-align: right;
    border-top: 1px solid #999;
    background-color: #ccc;
}

._Role_authorization {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #000;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    display: none;
}

._Role_authorization_Block {
    display: block;
}

._Role_authorization ._Editing_interface {
    width: 50%;
    background-color: #fff;
    margin: 30px auto;
    border-radius: 2px;
}

._Role_authorization ._Editing_interface .el-dialog__header {
    padding: 20px 20px 10px;
    display: flex;
    background-color: rgb(112, 112, 228);
    justify-content: space-between;
}

._Role_authorization ._Editing_interface .el-dialog__header span {
    line-height: 24px;
    font-size: 18px;
    color: #fff;
}

._Role_authorization ._Editing_interface .el-dialog__header .dialog__headerbtn {
    background: 0 0;
    border: none;
    outline: 0;
    cursor: pointer;
    font-size: 16px;
}

._Role_authorization_content_title {
    border-bottom: 1px solid #eee;
}

._Role_authorization_content_title .el-steps {
    width: 35%;
}

._Role_authorization_section {
    height: 370px;
    overflow-y: scroll;
    background-color: #fff;
}

._Role_authorization_section .el-tree {
    height: 100%;
}

._Role_authorization ._Editing_interface .dialog-footer {
    text-align: right;
    padding: 0 10px 5px 0;
    border-top: 1px solid #999;
    background-color: rgb(230, 230, 230);
}

._Role_authorization_content_title .el-steps {
    width: 50%;
}

._Role_authorization_content_title /deep/ .el-step {
    flex-basis: 40% !important;
}

._Role_authorization_content_title /deep/ .el-step__main {
    flex-grow: 0.5;
}

._Role_authorization_content_title .el-step.is-simple:not(:last-of-type) /deep/ .el-step__title {
    max-width: 95%
}

._Role_authorization_content_title /deep/ .el-step__arrow {
    margin-left: 20px;
    flex-grow: 0.5
}
.el-table__fixed-right .cell button{
  width: 100%;
  margin-left: 0;
}
.el-pagination{
  text-align: center;
  margin-top: 15px;
}
</style>
