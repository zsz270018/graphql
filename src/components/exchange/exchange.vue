<template>
  <div class="_Communication_Administration">
    <el-col :span="24" class="_toolbar_header" style="padding-bottom: 0px;display: flex;justify-content: space-between;padding:5px 0;border:1px solid #eee;margin-top:20px;">
      <el-form :inline="true" :model="filters" style="padding-top:10px;margin-left:10px;">
        <el-form-item>
          <el-input v-model="tableDataName" placeholder="请输入内容查询关键字"></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="date">
          <el-cascader
            :options="options"
            v-model="selectedOptions"
            placeholder="全部状态"
            @change="handleChange">
          </el-cascader>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="detailsClick">查询</el-button>
        </el-form-item>
      </el-form>
      <el-form style="padding-top:10px;">
        <el-form-item>
          <el-button type="primary" style="margin-right:20px">删除</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-table style="100%">
      <el-table-column prop="id" label="序号"></el-table-column>
      <el-table-column prop="order" label="发布人"></el-table-column>
      <el-table-column prop="payment" label="内容"></el-table-column>
      <el-table-column prop="money" label="转发量"></el-table-column>
      <el-table-column prop="date" label="评论数"></el-table-column>
      <el-table-column prop="status" label="点赞量"></el-table-column>
      <el-table-column prop="date" label="发布时间"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="danger" size="small" icon="el-icon-delete" @click="deleteAdd(scope.$index, scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 弹框内容 -->
    <div class="_Communication_Administration_ElasticFrame" v-bind:class="{ '_Communication_Administration_ElasticFrame' : ElasticFrameTrue , '_Communication_Administration_ElasticFrame _Communication_Administration_ElasticFrame_Block' : ElasticFrameFalse}" @click="flagClick">
      <div class="_Communication_Administration_ElasticFrame_content">
        <dl class="_ElasticFrame_header_information">
          <dt>
            <p>
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=625823598,3620777947&fm=27&gp=0.jpg"/>
            </p>
          </dt>
          <dd>
            <p>张三</p>
            <p>2019-1-8-15:45</p>
            <p>被转量:100次 评论量:1000 点赞量:200</p>
          </dd>
        </dl>
        <el-form>
          <el-form-item>
            <el-input type="textarea"></el-input>
          </el-form-item>
          <div class="_form_img">
            <span>图片附件:</span>
            <div class="_from_img_content">
              <p><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=625823598,3620777947&fm=27&gp=0.jpg"/></p>
              <p><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=625823598,3620777947&fm=27&gp=0.jpg"/></p>
              <p><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=625823598,3620777947&fm=27&gp=0.jpg"/></p>
              <p><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=625823598,3620777947&fm=27&gp=0.jpg"/></p>
              <p><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=625823598,3620777947&fm=27&gp=0.jpg"/></p>
              <p><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=625823598,3620777947&fm=27&gp=0.jpg"/></p>
              <p><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=625823598,3620777947&fm=27&gp=0.jpg"/></p>
              <p><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=625823598,3620777947&fm=27&gp=0.jpg"/></p>
              <p><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=625823598,3620777947&fm=27&gp=0.jpg"/></p>
            </div>
          </div>
          <div class="_form_comment">
            <span>评论内容:</span>
            <div class="_form_comment_content">
              <p>李四:你好</p>
              <p>李四:你好</p>
              <p>李四:你好</p>
              <p>李四:你好</p>
              <p>李四:你好</p>
            </div>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      filters:{
        name:''
      },
      tableDataName:'',
      options: [{
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
      ElasticFrameTrue : true,
      ElasticFrameFalse : false
    }
  },
  methods : {
    handleChange(value) {
      console.log(value);
    },
    detailsClick(){
      this.ElasticFrameFalse = true
    },
    flagClick(){
      this.ElasticFrameFalse = false
    }
  }
}
</script>
<style scoped>
  ._toolbar_header form:nth-last-child(1) button{
    padding-right: 10px;
  }
  ._Communication_Administration_ElasticFrame{
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
  ._Communication_Administration_ElasticFrame_Block{
    display: block;
  }
  ._Communication_Administration_ElasticFrame_content{
    width: 60%;
    background-color: #fff;
    margin: 0 auto;
    margin-top: 5%;
    padding-bottom: 5%;
  }
  ._ElasticFrame_header_information{
    display: flex;
    padding: 15px 0 0 10px;
  }
  ._ElasticFrame_header_information dt{
    width: 20%;
  }
  ._ElasticFrame_header_information dt p{
    width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 auto;
  }
  ._ElasticFrame_header_information dt img{
    width: 100%;
  }
  ._ElasticFrame_header_information dd{
    width: 80%;
  }
  ._ElasticFrame_header_information dd p{
    line-height: 30px;
  }
  ._Communication_Administration_ElasticFrame_content form .el-form-item{
    width: 80%;
  }
  ._Communication_Administration_ElasticFrame_content form .el-form-item, ._form_img,._form_comment{
    margin: 30px 0 0 100px;
  }
  ._form_img,._form_comment{
    display: flex;
  }
  ._from_img_content {
    width: 400px;
    display: flex;
    flex-wrap: wrap;
  }
  ._from_img_content p{
    width: 100px;
    height: 100px;
    overflow: hidden;
    margin: 10px 10px;
  }
  ._from_img_content p img{
    width: 100%;
  }
  ._form_comment p{
    margin-left: 10px;
    line-height: 25px;
  }
</style>