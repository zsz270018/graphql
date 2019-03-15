<template>
    <div class="management" style="width:100%">
        <div class="_management_Jurisdiction_left">
            <p>功能目录</p>
            <el-tree :data="data" :props="defaultProps" node-key="id" :default-expanded-keys="[]" accordion @node-click="handleNodeClick"></el-tree>
        </div>
        <div class="_management_Jurisdiction_right">
            <p>功能信息</p>
            <el-row class="toolbar" style="padding-bottom: 0px;">
                <el-col :span="24">
                    <el-form :inline="true" :model="filters">
                        <el-form-item>
                            <el-button type="primary" @click="refresh">刷新</el-button>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="handleAdd">新增</el-button>
                        </el-form-item>
                        <!-- <el-form-item>
                            <el-button type="primary" @click="handleAdd">编辑</el-button>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary">删除</el-button>
                        </el-form-item> -->
                    </el-form>
                </el-col>
            </el-row>
            <el-table ref="singleTable" :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%" :default-sort = "{prop: 'Index', order: 'ascending'}">
                <el-table-column type="index" label="ID" width="120" :index="prIndexMethod" ></el-table-column>
                <el-table-column property="Name" label="名称" width="120"></el-table-column>
                <el-table-column property="UniqueId" label="地址" width="280"></el-table-column>
                <el-table-column property="ParentId" label="ParentId" width="120"></el-table-column>
                <!-- <el-table-column property="Index" label="Index" width="120"></el-table-column> -->
                <el-table-column property="Target" label="目标" width="120"></el-table-column>
                <el-table-column property="DescDetail" label="详情描述" width="120"></el-table-column>
                <el-table-column property="Index" label="详情描述" v-if="false"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="small" icon="el-icon-edit" @click="compileEdit(scope.$index, scope.row)"></el-button>
                        <el-button type="danger" size="small" icon="el-icon-delete" @click="deleteAdd(scope.$index, scope.row)"></el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[5, 10, 15, 20]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total='total'>
            </el-pagination>
        </div>
        <!-- 新增编辑页面 -->
        <div v-bind:class="{ '_Jurisdiction_edit' :　commodityTrue,'_Jurisdiction_edit block' : commodityFlase}">
            <div class="_Editing_interface">
                <p class="el-dialog__header">
                    <span>新增资源</span>
                    <button type="button" aria-label="Close" class="dialog__headerbtn" @click="close"><i class="el-dialog__close el-icon el-icon-close"></i></button>
                </p>
                <div class="_Jurisdiction_edit_content_title">
                    <el-steps :active="active" finish-status="success" simple style="margin-top: 20px">
                        <el-step title="资源内容"></el-step>
                        <!-- <el-step title="系统按钮" ></el-step> -->
                    </el-steps>
                </div>
                <div class="_Jurisdiction_edit_content_form">
                    <div v-if="active === 0" class="_Jurisdiction_edit_content_form_div1">
                        <el-form :model="addForm" label-width="120px">
                            <el-form-item label="名称" prop="Name" required>
                                <el-input auto-complete="off" v-model="addForm.Name"></el-input>
                            </el-form-item>
                            <el-form-item label="排序" required prop="Index">
                                <el-input auto-complete="off" v-model="addForm.Index"></el-input>
                            </el-form-item>
                            <el-form-item label="目标" prop="Target">
                                <el-select v-model="value3" clearable placeholder="请选择">
                                    <el-option v-for="item in constList" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            </el-form-item>
                            <el-form-item label="上级" prop="ParentId">
                                <el-select v-model="value4" clearable placeholder="请选择">
                                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="地址" prop="UniqueId">
                                <el-input v-model="addForm.UniqueId" auto-complete="off"></el-input>
                            </el-form-item>
                            <!-- <el-form-item label="选项" prop="read" class="_Jurisdiction_edit_content_form_option">
                                <el-checkbox v-model="checked">菜单</el-checkbox>
                            </el-form-item> -->
                            <el-form-item label="描述" prop="DescDetail" class="_Jurisdiction_edit_content_form_describe">
                                <el-input type="textarea" v-model="addForm.DescDetail"></el-input>
                            </el-form-item>
                        </el-form>
                    </div>
                    <div v-if="active === 1" class="_Jurisdiction_edit_content_form_div1">
                        <el-form :model="editForm" label-width="120px">
                            <el-form-item label="名称" prop="Name" required>
                                <el-input auto-complete="off" v-model="editForm.Name"></el-input>
                            </el-form-item>
                            <el-form-item label="排序" required prop="Index">
                                <el-input auto-complete="off" v-model="editForm.Index"></el-input>
                            </el-form-item>
                            <el-form-item label="目标" prop="Target">
                                <el-input auto-complete="off" v-model="editForm.Target"></el-input>
                            </el-form-item>
                            </el-form-item>
                            <el-form-item label="上级" prop="ParentId">
                                <el-select v-model="value4" clearable placeholder="请选择">
                                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="地址" prop="UniqueId">
                                <el-input v-model="editForm.UniqueId" auto-complete="off"></el-input>
                            </el-form-item>
                            <!-- <el-form-item label="选项" prop="read" class="_Jurisdiction_edit_content_form_option">
                                <el-checkbox v-model="checked">菜单</el-checkbox>
                            </el-form-item> -->
                            <el-form-item label="描述" prop="DescDetail" class="_Jurisdiction_edit_content_form_describe">
                                <el-input type="textarea" v-model="addForm.DescDetail"></el-input>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
                <div slot="footer" class="dialog-footer">
                    <el-button @click.native="commodityFlase = false">取消</el-button>
                    <el-button type="primary" @click.native="next" :loading="addLoading" v-model="commodityFlase">提交</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data() {
            return {
                active: 0,
                activeFlag: true,
                total: 6,
                currentPage: 1, //初始页
                pagesize: 5,
                editIndex: null,
                filters: '',
                btnTrue: true,
                btnFalse: false,
                commodityTrue: true,
                commodityFlase: false,
                editFormVisible: false, //编辑页面是否显示
                // 编辑页面数据
                editForm: {
                    Name: "",
                    DescDetail: "",
                    ParentId: "",
                    UniqueId: ""
                },
                addFormVisible: false, //新增界面是否显示
                addLoading: false,
                checked: true,
                options: [{
                    value: 'zhinan',
                    label: '指南'
                }, {
                    value: 'zujian',
                    label: '组件'
                }, {
                    value: 'ziyuan',
                    label: '资源'
                }],
                selectedOptions: [],
                selectedOptions1: [],
                addForm: {
                    "ParentId": "",
                    "Name": "",
                    "DescDetail": "",
                    "UniqueId": "",
                    "Index": "",
                    "Target": ""
                },
                filters: {
                    name: ''
                },
                tableData: [],
                data: [{
                    id: 1,
                    label: '系统管理',
                    children: [{
                        id: 2,
                        label: '通用字典'
                    }, {
                        id: 3,
                        label: '系统功能'
                    }, {
                        id: 3,
                        label: '人员管理'
                    }, {
                        id: 5,
                        label: '角色管理'
                    }]
                }, {
                    label: '内容管理',
                    children: [{
                        
                        label: '政策发布',
                    }, {
                       
                        label: '政策解读',
                    }, {
                        
                        label: '政策专家',
                    }, {
                        label: '研究机构',
                    }, {
                        label: '政策前瞻',
                    }, {
                        label: '成果发布',
                    }, {
                        label: '专家论坛',
                    }, {
                        label: '政策大讲堂',
                    }, {
                        label: '时政要闻',
                    }, {
                        label: '政策视频',
                    }]
                }, {
                    label: '其他内容',
                    children: [{
                        label: '联系我们',
                    }, {
                        label: '关于我们',
                    }, {
                        label: '首页专题',
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                getPagercs: [],
                options: [],
                constList: [],
                value4: null,
                value3: "",
                parentId: null
            }
        },
        methods: {
            // 角色列表索引计算
            prIndexMethod(index) {
                return (this.currentPage - 1) * this.pagesize + index + 1;
            },
            handleSizeChange(val) {
                this.pagesize = val;
            },
            handleCurrentChange(val) {
                this.currentPage = val;
            },
            handleNodeClick(data) {
                console.log(data);
                this.parentId = data.id
                this.levelpagercs(data.id)
            },
            //查询
            getUsers() {
                // if(this.filters == ''){
                //   this.$message.warning('查询条件不能为空')
                //   return
                // }
                // this.arr = []
                // this.tableData.forEach((value,index)=>{
                //   if(value.name){
                //     if(value.name.indexOf(this.filters)>=0){
                //       this.arr.push(value)
                //     }
                //   }
                // })
                // this.currentPage=1;
                // this.total = this.arr.length
                let arr = []
                for (var item in this.tableData) {
                    if (Object.values(this.tableData[item]).indexOf(this.filters.name) !== -1) {
                        console.log(this.tableData[item])
                        arr.push(this.tableData[item])
                    }
                }
                this.tableData = arr
            },
            //刷新
            refresh: function() {
                this.parentId = null;
                this.getAll();
            },
            //新增
            handleAdd: function() {
                // this.addFormVisible = true
                this.addForm = {
                    "ParentId": "",
                    "Name": "",
                    "DescDetail": "",
                    "UniqueId": "",
                    "Index": "",
                    "Target": ""
                }
                if (this.parentId != null) {
                    this.value4 = this.parentId;
                } else {
                    this.value4 = "";
                }
                this.value3 = "";
                this.commodityFlase = true;
                this.active = 0;
            },
            addSubmit: function() {
                console.log(this.value3)
                console.log(this.addForm)
                this.$confirm('确认提交吗？', '提交', {}).then(() => {
                    if ("" == this.value4) {
                        this.addForm.ParentId = -1
                    } else {
                        this.addForm.ParentId = parseInt(this.value4)
                    }
                    if ("" == this.value3) {
                        this.addForm.Target = -1
                    } else {
                        this.addForm.Target = parseInt(this.value3)
                    }
                    console.log(this.addForm)
                    let params = Object.assign({}, this.addForm)
                    this.$api.role.pagerAdd(params).then(res => {
                        console.log(res)
                        if (res.data.Code == 0) {
                            this.getAll()
                            this.commodityFlase = false;
                        }
                    })

                })
            },
            //修改
            compileEdit(index, row) {
                console.log(row)
                this.editForm = Object.assign({}, row);
                this.editIndex = index;
                this.commodityFlase = true;
                this.active = 1;
                if (row.ParentId != -1) {
                    this.value4 = row.ParentId;
                } else {
                    this.value4 = null;
                }
                console.log(this.value4)
            },
            editSubmit: function() {
                console.log(this.value4)
                this.$confirm('确认修改吗？', '提交', {}).then(() => {
                    this.editLoading = true;
                    if ("" == this.value4) {
                        this.editForm.ParentId = -1
                    } else {
                        this.editForm.ParentId = parseInt(this.value4)
                    }
                    if ("" == this.value3) {
                        this.addForm.Target = -1
                    } else {
                        this.addForm.Target = parseInt(this.value3)
                    }
                    let params = Object.assign({}, this.editForm)
                    this.$api.role.pagerEdit(params).then(res => {
                        console.log(res)
                        this.getAll()
                    })
                    this.commodityFlase = false
                })

            },
            //删除
            deleteAdd: function(index, row) {
                console.log(index)
                console.log(row)
                this.$confirm('确认删除该记录吗？', '提示', {
                    type: 'warning'
                }).then(() => {

                    let url = "/api/v1/pagerc?id=" + row.Id
                    this.$api.role.pagerDelete(url).then(res => {
                        console.log(res)
                        this.getAll()
                    })
                })
            },
            handleChange(value) {
                console.log(value);
            },
            handleChange1(value) {
                console.log(value);
            },
            close() {
                this.addForm = {
                        "ParentId": "",
                        "Name": "",
                        "DescDetail": "",
                        "UniqueId": "",
                        "Index": "",
                        "Target": ""
                    },
                    this.commodityFlase = false;
            },
            next(id) {
                // if (this.active++ > 2) this.active = 0;
                console.log(this.active)
                if (this.active === 0) {
                    this.addSubmit();
                } else if (this.active === 1) {
                    this.editSubmit();
                }
            },
            NewlyAdded() {
                this.btnFalse = true;
            },
            footerClick(id) {
                if (id === 1) {
                    this.btnFalse = false;
                } else if (id == 2) {
                    this.btnFalse = false;
                } else {
                    this.btnFalse = false;
                }
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
                    this.tableData = res.data.Obj
                    console.log(this.tableData)
                    this.total = this.tableData.length;
                })
            },
            //获取所有页面资源
            getAll() {
                const { PageResourceTarget } = require('../../http/moudules/constval.js')
                this.$api.role.pagerFindAll().then(res => {
                    console.log(PageResourceTarget)
                    this.$api.consts.getConst({"parentId":PageResourceTarget}).then(res1 =>{
                        let consts = [];
                        console.log(res1)
                        for (var item of res1.data.Obj) {
                            if (item.ParentId == PageResourceTarget) {
                                var arr = {
                                    value: item.Id,
                                    label: item.Name,
                                }
                                consts = consts.concat(arr)
                            }
                        };
                        this.constList = consts
                        console.log(this.constList)
                    })
                    if (this.parentId != null) {
                        this.levelpagercs(this.parentId)
                    } else {
                        this.tableData = res.data.Obj
                        console.log(this.tableData)
                        this.total = this.tableData.length;
                    }
                    let data = res.data.Obj
                    let list = []
                    for (var item of data) {
                        if (item.ParentId == -1) {
                            var arr = {
                                value: item.Id,
                                label: item.Name,
                            }
                            list = list.concat(arr)
                        }
                    };
                    this.options = list

                    let list1 = []
                    for (var item of data) {
                        if (item.ParentId == -1) {
                            var arr = {
                                id: item.Id,
                                label: item.Name,
                                children: []
                            }
                            list1 = list1.concat(arr)
                        }
                    };
                    for (var item1 of list1) {
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
                    this.data = list1;
                    console.log(this.data)
                })
            },
        },

        created() {
            let Obj = localStorage.getItem('Obj');
            this.Obj = Obj = JSON.parse(Obj);
            // this.getAllPagercs();
            this.getAll();
            // this.levelpagercs(33);
        }
}
</script>
<style scoped>
.management {
    display: flex;
    /* background-color: #999; */
}

._management_Jurisdiction_left {
    width: 15%;
    height: 470px;
    overflow-y: no-display;
    overflow-x: hidden;
    /* background-color: #fff; */
    margin-right: 10px;
}

._management_Jurisdiction_left {
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
}

._management_Jurisdiction_left > p,
._management_Jurisdiction_right > p {
    border-bottom: 1px solid #ccc;
    line-height: 50px;
    padding-left: 10px;
}

._management_Jurisdiction_right {
    width: 85%;
    height: 100%;
}

._management_Jurisdiction_right,
._management_Jurisdiction_left {
    border-top: 1px solid #ccc;
    border-left: 1px solid #ccc;
}

._management_Jurisdiction_right .toolbar form {
    text-align: right;
}

._Jurisdiction_edit {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #000;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    display: none;
    overflow-y: auto;
}

._Jurisdiction_edit ._Editing_interface {
    width: 50%;
    background-color: #fff;
    margin: 30px auto;
    border-radius: 2px;
}

._Jurisdiction_edit ._Editing_interface .el-dialog__header {
    padding: 20px 20px 10px;
    display: flex;
    justify-content: space-between;
}

._Jurisdiction_edit ._Editing_interface .el-dialog__header span {
    line-height: 24px;
    font-size: 18px;
    color: #303133;
}

._Jurisdiction_edit ._Editing_interface .el-dialog__header .dialog__headerbtn {
    background: 0 0;
    border: none;
    outline: 0;
    cursor: pointer;
    font-size: 16px;
}

._Jurisdiction_edit_content_title {
    border-bottom: 1px solid #eee;
}

._Jurisdiction_edit_content_title .el-steps {
    width: 50%;
}

._Jurisdiction_edit_content_title /deep/ .el-step {
    flex-basis: 40% !important;
}

._Jurisdiction_edit_content_title /deep/ .el-step__main {
    flex-grow: 0.5;
}

._Jurisdiction_edit_content_title .el-step.is-simple:not(:last-of-type) /deep/ .el-step__title {
    max-width: 95%
}

._Jurisdiction_edit_content_title /deep/ .el-step__arrow {
    margin-left: 20px;
    flex-grow: 0.5
}

._Jurisdiction_edit ._Editing_interface .dialog-footer {
    text-align: right;
    padding: 0 10px 5px 0;
    border-top: 1px solid #999;
    background-color: rgb(230, 230, 230);
}

._Jurisdiction_edit_content_form {
    height: 450px;
    overflow-y: no-display;
    padding-top: 20px;
}

._Jurisdiction_edit_content_form ._Jurisdiction_edit_content_form_div1 form {
    display: flex;
    flex-wrap: wrap;
}

._Jurisdiction_edit_content_form ._Jurisdiction_edit_content_form_div1 form .el-form-item {
    width: 45%;
}

._Jurisdiction_edit_content_form_address,
._Jurisdiction_edit_content_form_option,
._Jurisdiction_edit_content_form_describe {
    width: 90% !important;
}

._Jurisdiction_edit_content_form form .el-form-item__content .el-cascader {
    width: 100%;
}

._Jurisdiction_edit_content_form ._Jurisdiction_edit_content_form_div2 form {
    text-align: right;
}

._Jurisdiction_edit ._Editing_interface .dialog-footer button:nth-last-child(1) {
    background-color: rgb(28, 202, 28);
    color: #fff;
}

._edit_NewlyAdded_Button {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #000;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    display: none;
    overflow-y: auto;
}

._edit_NewlyAdded_Button ._edit_NewlyAdded_Button_content {
    width: 30%;
    background-color: #fff;
    margin: 10% auto;
    border-radius: 2px;
}

._edit_NewlyAdded_Button ._edit_NewlyAdded_Button_content .el-dialog__header {
    padding: 20px 20px 10px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    margin-bottom: 10px;
    background-color: rgb(85, 85, 206);
}

._edit_NewlyAdded_Button ._edit_NewlyAdded_Button_content .el-dialog__header span {
    line-height: 24px;
    font-size: 18px;
    color: #fff;
}

._edit_NewlyAdded_Button ._edit_NewlyAdded_Button_content .el-dialog__header .dialog__headerbtn {
    background: 0 0;
    border: none;
    outline: 0;
    cursor: pointer;
    font-size: 16px;
}

._edit_NewlyAdded_Button ._edit_NewlyAdded_Button_content .dialog-footer {
    text-align: right;
    padding: 0 10px 5px 0;
    border-top: 1px solid #999;
    background-color: rgb(230, 230, 230);
}

._edit_NewlyAdded_Button ._edit_NewlyAdded_Button_content .dialog-footer button:nth-child(1) {
    background-color: rgb(6, 168, 6);
    color: #fff;
}

._edit_NewlyAdded_Button ._edit_NewlyAdded_Button_content .dialog-footer button:nth-child(2) {
    background-color: rgb(223, 9, 9);
    color: #fff;
}

._edit_NewlyAdded_Button_content form {
    padding-right: 20px;
}

._edit_NewlyAdded_Button_content form .el-cascader {
    width: 100%;
}

.block {
    display: block !important;
}
.el-pagination{
  text-align: center;
  margin-top: 15px;
}
._label_detail{
    display: none;
}
</style>
