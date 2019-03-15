<template>
  <div class="_content_management">
    <div class="_content_management_header">
      <el-form :inline="true">
        <el-form-item prop="date">
          <el-input v-model="filters" placeholder="请输入要查询关键字"></el-input>
          <el-button type="primary" icon="el-icon-search" @click="getUsers">搜索</el-button>
        </el-form-item>
      </el-form>
      <div class="_content_management_headerOperation">
        <p><i class="el-icon-refresh"></i> 刷新</p>
        <p><i class="el-icon-plus"></i> 新增</p>
        <p  @click="modify"><i class="el-icon-edit-outline"></i> 编辑</p>
        <p><i class="el-icon-delete"></i> 删除</p>
        <p @click="moveClick"><i class="el-icon-refresh"></i> 移动</p>
        <p><i class="el-icon-refresh"></i> 复制</p>
        <el-select v-model="value" placeholder="更多">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
    <div class="_content_management_form">
      <el-table style="100%">
        <el-table-column prop="id"></el-table-column>
        <el-table-column prop="order" label="选中"></el-table-column>
        <el-table-column prop="payment" label="采编人员"></el-table-column>
        <el-table-column prop="money" label="发布时间"></el-table-column>
        <el-table-column prop="date" label="阅读次数"></el-table-column>
        <el-table-column prop="status" label="发布状态"></el-table-column>
        <el-table-column prop="date" label="推荐"></el-table-column>
        <el-table-column prop="date" label="排序"></el-table-column>
        <el-table-column prop="date" label="操作"></el-table-column>
      </el-table>
    </div>
    <!-- 编辑弹框 -->
    <div class="_edit_ElasticFrame" v-bind:class="{'_edit_ElasticFrame' : modifyTrue,'_edit_ElasticFrame _edit_ElasticFrame_Block' : modifyFalse}">
      <div class="_edit_ElasticFrame_flex">
        <div class="_edit_ElasticFrame_header">
          <p>修改</p>
          <button type="button" aria-label="Close" class="dialog__headerbtn"><i class="el-dialog__close el-icon el-icon-close" @click="modifyFlag(3)"></i></button>
        </div>
        <div class="_edit_ElasticFrame_section">
          <el-form>
            <el-form-item label="编号" prop="name">
              <el-input auto-complete="off"></el-input>
            </el-form-item>
          </el-form>
          <el-form :inline="true">
            <el-form-item label="名称" prop="read">
                <el-input auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="品牌" prop="date">
              <el-cascader
                :options="options1"
                v-model="selectedOptions"
                @change="handleChange">
              </el-cascader>
            </el-form-item>
            <el-form-item label="单位" prop="issue">
                <el-input auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="单位" prop="issue">
                <el-input auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="销售名" prop="issue">
                <el-input auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="库存" prop="issue">
                <el-input auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="库存" prop="issue">
              <div class='tinymce'>
                <editor id='tinymce' v-model='tinymceHtml' :init='init'></editor>
              </div>
            </el-form-item>
          </el-form>
        </div>
        <div class="_edit_ElasticFrame_footer">
          <el-button type="success" @click="modifyFlag(1)">确认</el-button>
          <el-button type="danger" @click="modifyFlag(2)">关闭</el-button>
        </div>
      </div>
    </div>
    <!-- 移动弹框 -->
    <div class="_move_ElasticFrame"  v-bind:class="{ '_move_ElasticFrame' : ElasticFrameTrue , '_move_ElasticFrame _move_ElasticFrameTrue' : ElasticFrameFalse}">
      <div class="_move_ElasticFrame_flex">
        <div class="_move_ElasticFrame_header">
          <p>移动到</p>
          <button type="button" aria-label="Close" class="dialog__headerbtn"><i class="el-dialog__close el-icon el-icon-close" @click="moveElasticFrameClick"></i></button>
        </div>
        <div class="_move_ElasticFrame_section">
          <el-tree
            :data="data2"
            show-checkbox
            node-key="id"
            :default-expanded-keys="[2, 3]"
            :props="defaultProps">
          </el-tree>
        </div>
        <div class="_move_ElasticFrame_footer">
          <el-button type="success">确认</el-button>
          <el-button type="danger" @click="bindFlag">关闭</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import tinymce from 'tinymce/tinymce'
import 'tinymce/themes/modern/theme'
import Editor from '@tinymce/tinymce-vue'
export default {
  data(){
    return {
      filters:'',
      modifyTrue : true,
      modifyFalse : false,
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      data2: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 9,
          label: '二级 1-1',
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 10,
          label: '二级 2-1'
        }, {
          id: 11,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 12,
          label: '二级 3-1'
        }, {
          id: 13,
          label: '二级 3-2'
        }]
      }, {
        id: 4,
        label: '一级 3',
        children: [{
          id: 14,
          label: '二级 3-1'
        }, {
          id: 15,
          label: '二级 3-2'
        }]
      },  {
        id: 5,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      },  {
        id: 6,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      },  {
        id: 7,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      },  {
        id: 8,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }, {
        id: 8,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }, {
        id: 8,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }, {
        id: 8,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }, {
        id: 8,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }, {
        id: 8,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }, {
        id: 8,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      ElasticFrameTrue : true,
      ElasticFrameFalse : false,
      options1: [{
        value : 'zhinan',
        label : '指南'
      },{
        value : 'zujian',
        label : '组件'
      },{
        value : 'ziyuan',
        label : '资源'
      }],
      selectedOptions: [],
      tinymceHtml: '请输入内容',
      init: {
        language_url: '/static/tinymce/zh_CN.js',
        language: 'zh_CN',
        skin_url: '/static/tinymce/skins/lightgray',
        height: 300,
        plugins: 'link lists image code table colorpicker textcolor wordcount contextmenu',
        toolbar:
          'bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat',
        branding: false
      }
    }
  },
  methods : {
    //查询
    getUsers(){

    },
    moveClick(){
      this.ElasticFrameFalse = true;
    },
    bindFlag(){
      this.ElasticFrameFalse = false;
    },
    moveElasticFrameClick(){
      this.ElasticFrameFalse = false;
    },
    handleChange(value) {
      console.log(value);
    },
    modifyFlag(id){
      if(id===1){
        this.modifyFalse = false
      }else if(id===2){
        this.modifyFalse = false
      }else{
        this.modifyFalse = false
      }
      
    },
    modify(){
      this.modifyFalse = true
    }
  },
  mounted () {
    tinymce.init({})
  },
  components: {Editor},
}
</script>

<style scoped>
  ._content_management_header{
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
  }
  ._content_management_headerOperation{
    width: 70%;
    display: flex;
    justify-content: flex-end;
  }
  ._content_management_headerOperation p{
    width: 10%;
    border-top: 1px solid #dcdfe6;
    text-align: center;
    height: 40px;
    border-bottom: 1px solid #dcdfe6;
    border-left: 1px solid #dcdfe6;
    line-height: 40px;
  }
  ._content_management_headerOperation p:nth-child(1){
    border-radius: 4px 0 0 4px;
  }
  ._content_management_headerOperation .el-select{
    width: 10%;
  }
  ._content_management_header .el-form{
    width: 30%;
  }
  ._content_management_header form .el-input{
    width: 65%;
  }
  ._move_ElasticFrame{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color:#000;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    display: none;
  }
  ._move_ElasticFrame_flex{
    /* display: flex;
    flex-direction: column; */
    padding-top: 10%;
    overflow: hidden;
  }
  ._move_ElasticFrameTrue{
    display: block;
  }
  ._move_ElasticFrame_header{
    height: 40px;
    background-color: rgb(112, 112, 228);
    display: flex;
    justify-content:space-between;
  }
  ._move_ElasticFrame_header,._move_ElasticFrame_section,._move_ElasticFrame_footer{
    width: 60%;
    margin: 0 auto;
  }
  ._move_ElasticFrame_section{
    height: 370px;
    overflow-y: scroll;
    background-color: #fff;
  }
  ._move_ElasticFrame_section .el-tree{
    height: 100%;
  }
  ._move_ElasticFrame_footer{
    text-align: right;
    background-color: #eee;
    padding: 5px 0;
  }
  ._move_ElasticFrame_footer button{
    margin-right: 10px;
  }
  ._move_ElasticFrame_header p{
    line-height: 24px;
    font-size: 18px;
    color: #303133;
    margin-left: 20px;
    line-height: 40px;
  }
  ._move_ElasticFrame_header .dialog__headerbtn{
    background: 0 0;
    border: none;
    outline: 0;
    cursor: pointer;
    font-size: 16px;
    margin-right: 10px;
  }
  ._edit_ElasticFrame{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color:#000;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    display: none;
    overflow-y: auto;
  }
  ._edit_ElasticFrame_Block{
    display: block;
  }
  ._edit_ElasticFrame ._edit_ElasticFrame_flex{
    width: 70%;
    margin: 20px auto;
    background-color: #fff;
  }
  ._edit_ElasticFrame ._edit_ElasticFrame_flex ._edit_ElasticFrame_header{
    padding: 20px 20px 10px;
    display: flex;
    justify-content:space-between;
    background-color: rgb(79, 79, 167);
    margin-bottom: 5%;
  }
  ._edit_ElasticFrame ._edit_ElasticFrame_flex ._edit_ElasticFrame_header p{
    line-height: 24px;
    font-size: 18px;
    color: #fff;
  }
  ._edit_ElasticFrame ._edit_ElasticFrame_flex ._edit_ElasticFrame_header .dialog__headerbtn{
    background: 0 0;
    border: none;
    outline: 0;
    cursor: pointer;
    font-size: 16px;
    color: #999;
  }
  ._edit_ElasticFrame ._edit_ElasticFrame_flex ._edit_ElasticFrame_section form:nth-child(2){
    display: flex;
    flex-wrap: wrap;
  }
  ._edit_ElasticFrame ._edit_ElasticFrame_flex ._edit_ElasticFrame_section form:nth-child(2) .el-form-item{
    width: 50%;
    margin-right: 0;
  }
  ._edit_ElasticFrame ._edit_ElasticFrame_flex ._edit_ElasticFrame_section form:nth-child(1),._edit_ElasticFrame ._edit_ElasticFrame_flex ._edit_ElasticFrame_section form:nth-child(2){
    padding: 0 5%;
  }
  ._edit_ElasticFrame ._edit_ElasticFrame_flex ._edit_ElasticFrame_section form:nth-child(1) .el-input{
    width:90%;
  }
  ._edit_ElasticFrame ._edit_ElasticFrame_flex ._edit_ElasticFrame_section form:nth-child(1) .el-form-item /deep/ .el-form-item__label{
    width: 7.5%;
  }
  ._edit_ElasticFrame ._edit_ElasticFrame_flex ._edit_ElasticFrame_section form:nth-child(2) .el-form-item /deep/ .el-form-item__label{
    width: 15%;
  }
  ._edit_ElasticFrame ._edit_ElasticFrame_flex ._edit_ElasticFrame_section form:nth-child(2) .el-form-item /deep/ .el-form-item__content{
    width: 80%;
  }
  ._edit_ElasticFrame ._edit_ElasticFrame_flex ._edit_ElasticFrame_section form:nth-child(2) .el-form-item .el-cascader{
    width: 100%;
  }
  ._edit_ElasticFrame ._edit_ElasticFrame_flex ._edit_ElasticFrame_section form:nth-child(2) .el-form-item:nth-last-child(1){
    width: 100%;
  }
  ._edit_ElasticFrame ._edit_ElasticFrame_flex ._edit_ElasticFrame_section form:nth-child(2) .el-form-item:nth-last-child(1) /deep/ .el-form-item__label {
    width: 7.5%;
  }
  ._edit_ElasticFrame ._edit_ElasticFrame_flex ._edit_ElasticFrame_section form:nth-child(2) .el-form-item:nth-last-child(1) /deep/  .el-form-item__content{
    width: 90%;
  }
  ._edit_ElasticFrame ._edit_ElasticFrame_footer{
    text-align: right;
  }
  ._edit_ElasticFrame ._edit_ElasticFrame_footer button{
    margin-right: 1%;
  }
  /* ._edit_ElasticFrame ._edit_ElasticFrame_flex ._edit_ElasticFrame_section form:nth-child(1){
    width: 90%;
  } */
  /* ._edit_ElasticFrame ._edit_ElasticFrame_flex ._edit_ElasticFrame_section form .el-form-item:nth-child(1) .el-input{
    width: 100%;
  } */
</style>