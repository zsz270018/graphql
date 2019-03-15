<template>
  <div class="_Health_Service">
    <el-row class="toolbar" style="padding-bottom:0px">
      <el-form :inline="true" class="_Health_Service_form">
        <div class="_Health_Service_form_left">
          <el-form-item>
            <el-input v-model="content" placeholder="请输入内容查询关键字"></el-input>
          </el-form-item>
          <el-form-item label="状态">
            <el-select v-model="state" placeholder="全部类型" style="width:130px;">
              <el-option style="height:45px;" v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button click="primary">查询</el-button>
          </el-form-item>
        </div>
        <div class="_Health_Service_right">
          <el-form-item style="float:right;">
            <el-button-group>
              <el-button type="primary" @click=" ReleaseFalse = true">+添加</el-button>
            </el-button-group>
          </el-form-item>
        </div>
      </el-form>
    </el-row>
    <el-table style="100%">
      <el-table-column prop="id" label="序号"></el-table-column>
      <el-table-column prop="order" label="图标"></el-table-column>
      <el-table-column prop="payment" label="名称"></el-table-column>
      <el-table-column prop="payment" label="连接"></el-table-column>
      <el-table-column prop="order" label="发布时间"></el-table-column>
      <el-table-column prop="payment" label="操作">
        <template slot-scope="scope">
          <el-button size="small" icon="el-icon-edit" @click="EditData(scope.$index, scope.row)"></el-button>
          <el-button type="danger" size="small" icon="el-icon-delete" @click="deleteData(scope.$index, scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 添加页面 -->
    <div class="_Release_Elastic_frame" v-bind:class="{'_Release_Elastic_frame' :ReleaseTrue,'_Release_Elastic_frame ReleaseFalse' : ReleaseFalse}">
      <div class="_Release_Elastic_frame_flex">
        <div class="_Release_Elastic_frame_top">
          <div class="_Release_Elastic_frame_top_left">
            <el-form :model="addForm" label-width="120px" ref="addForm">
              <!-- <el-form-item label="所属机构" prop="CompanyId" :rules="[{ required: true, message: '请选择所属机构'}]">
                <el-select v-model="addForm.CompanyId" style="width:100%" placeholder="请选择您所属的机构">
                  <el-option v-for="item in companyOpption" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item> -->
              <el-form-item label="所属驿站" prop="CompanyId" :rules="[{ required: true, message: '请选择所属驿站'}]">
                <el-select v-model="addForm.CompanyId" style="width:100%" placeholder="请选择您所属的驿站">
                  <!-- <el-option v-for="item in companyOpption" :key="item.value" :label="item.label" :value="item.value">
                  </el-option> -->
                </el-select>
              </el-form-item>
               <el-form-item label="服务类型" prop="CompanyId" :rules="[{ required: true, message: '请选择状态'}]">
                <el-select v-model="addForm.CompanyId" style="width:100%" placeholder="请选择">
                  <el-option v-for="item in companyOpption" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="服务名称" prop="Name" :rules="[{ required: true, message: '服务名称不能为空'}]">
                <el-input v-model="addForm.Name" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="服务单位" prop="date" :rules="[{ required: true, message: '单位不能为空'}]">
                <el-cascader
                  :options="options"
                  v-model="selectedOptions"
                  @change="handleChange">
                </el-cascader>
              </el-form-item>
            </el-form>
            <div>服务时间<input type="text" value="1"/>小时 服务费用<input type="text" value="100"/>元   <button>删除</button></div>
            <div class="ServicePublishing_button">
              <span>+添加</span>
            </div>
          </div>
          <div class="_Release_Elastic_frame_top_right">
            <div class="item_bock head_p">
              <div class="head_img">
                <i class="el-icon-plus avatar-uploader-icon"></i>
              </div>
              <div class="setting_right">
                <button>本地上传</button>
                <button @click="btnClick">系统上传</button>
              </div>
              <input type="file" accept="image/*" @change="handleFile" class="hiddenInput"/>
            </div>
          </div>
        </div>
        <div class="_Release_Elastic_frame_bottom">
          <el-form>
            <el-form-item label="服务介绍" prop="issue">
              <div class='tinymce'>
                <editor id='tinymce' v-model='tinymceHtml' :init='init'></editor>
              </div>
            </el-form-item>
          </el-form>
        </div>
        <div class="_Release_Elastic_frame_button">
          <el-button type="success" @click="ReleaseFlag(1)">保存</el-button>
          <el-button type="success" @click="ReleaseFlag(2)">保存并发布</el-button>
          <el-button type="danger" @click="ReleaseFlag(3)">关闭</el-button>
        </div>
      </div>
    </div>
    <div class="popContainer" v-show="maskShow" @click.self="btnClick">
      <div class="dialog">
        <p>系统LOGO</p>
        <div class="dialog_img">
          <ul>
            <li><img src="../../img/daiban.png" alt=""></li>
            <li><img src="../../img/falvzixun.png" alt=""></li>
            <li><img src="../../img/huodongyuyue.png" alt=""></li>
            <li><img src="../../img/jiankanghuli.png" alt=""></li>
            <li><img src="../../img/jiatingyisheng.png" alt=""></li>
            <li><img src="../../img/jiazhengfuwu .png" alt=""></li>
            <li><img src="../../img/jinronglicai.png" alt=""></li>
            <li><img src="../../img/jishidingwei.png" alt=""></li>
            <li><img src="../../img/jujiahuli.png" alt=""></li>
            <li><img src="../../img/kangfuliliao.png" alt=""></li>
            <li><img src="../../img/laoniancan.png" alt=""></li>
            <li><img src="../../img/rijianzhaogu.png" alt=""></li>
            <li><img src="../../img/tijian.png" alt=""></li>
            <li><img src="../../img/yanglaobaoxian.png" alt=""></li>
            <li><img src="../../img/zhinengwenzhne.png" alt=""></li>
          </ul>
        </div>
        <div class="dialog_bottom">
          <button>确认</button>
          <button>取消</button>
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
      content:'',
      maskShow:false,
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
      userInfo: {
        avatar: 'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=62d46c39067b020818c437b303b099b6/d4628535e5dde7119c3d076aabefce1b9c1661ba.jpg'
      },
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
      },
      ReleaseTrue : true,
      ReleaseFalse : false,
      addForm: {

      }
    }
  },
  methods : {
    btnClick(){
       this.maskShow = !this.maskShow;
    },
    handleChange(value) {
      console.log(value);
    },
    // 打开图片上传
    uploadHeadImg: function () {
      this.$el.querySelector('.hiddenInput').click()
    },
    // 将头像显示
    handleFile: function (e) {
      let $target = e.target || e.srcElement
      let file = $target.files[0]
      var reader = new FileReader()
      reader.onload = (data) => {
        let res = data.target || data.srcElement
        this.userInfo.avatar = res.result
      }
      reader.readAsDataURL(file)
    },
    ReleaseFlag(id){
      if(id===1){
        this.ReleaseFalse = false
      }else if(id===2){
        this.ReleaseFalse = false
      }else if(id===3){
        this.ReleaseFalse = false
      }
    }
  },
  mounted () {
    tinymce.init({})
  },
  components: {Editor},
}
</script>
<style scoped>
  /* ._Service_Publishing_ServiceList_form{
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    padding: 0 10px;
  } */
._Health_Service_form {
  display: flex;
  justify-content: space-between;
}
  ._Release_Elastic_frame{
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
  .ReleaseFalse{
    display: block;
  }
  ._Release_Elastic_frame_top{
    display: flex;
    padding: 1% 5% 0 3%;
  }
  ._Release_Elastic_frame_flex{
    width: 60%;
    background-color: #fff;
    margin: 5% auto;
  }
  .item_bock {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding:0px 24px 0px 38px;
  }
  .head_p {
    height:132px;
  }  
  .head_img{
    width:80px;
    height:80px;
    background: #FFFFFF;
    border: 2px solid #979797;
    border-radius: 4px;
  }
  .head_img i{
    display:flex;
    justify-content: center;
    align-items: center;
    line-height: 80px;
    font-size: 38px;
    color: #1088D8;
  }
  .head_img img{
    width:90px;
    height:90px;
    border-radius:50px
  }
  .setting_right{
    display: flex;
    /* height: 37px; */
    /* justify-content: flex-end;
    align-items: center; */
  }
  .setting_right button{
    background-image: linear-gradient(-180deg, #FFFFFF 0%, #EEEEEE 98%);
    border: 1px solid #979797;
    border-radius: 6px;
    padding: 5px 7px;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #333333;
    letter-spacing: 1px;
    margin-top: 10px;
    outline: 0;
  }
  .setting_right button:nth-child(1){
    margin-right: 8px;
  }
  .hiddenInput{
    display: none;
  }
  .caption {
    color: #8F8F8F;
    line-height: 35px;
    margin-top: 10px;
    cursor: pointer;
    border: 1px solid skyblue;
    padding: 0px 5px;
  }
  ._Release_Elastic_frame_top_left{
    width: 60%;
    height: auto;
  }
  ._Release_Elastic_frame_top_right{
    width: 40%;
    padding-top: 3%;
  }
  ._Release_Elastic_frame_top_left form .el-input,._Release_Elastic_frame_top_left form .el-cascader{
    width: 50%;
  }
  ._Release_Elastic_frame_top_left>div{
    display: flex;
    line-height: 20px;
  }
  ._Release_Elastic_frame_top_left>div input{
    width: 60px;
    height: 20px;
    border: 1px solid #eee;
    text-align: center;
    margin: 0 3%;
  }
  ._Release_Elastic_frame_top_left>div button{
    background-image: linear-gradient(-180deg, #EF7676 0%, #DA4141 100%);
    border-radius: 2px;
    border:none;
    outline: none;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #FFFFFF;
    letter-spacing: 0;
    padding:2px 7px;
    margin-left: 30px;
  }
  .ServicePublishing_button span{
    background-image: linear-gradient(-180deg, #25BDEE 0%, #1088D8 100%);
    border-radius: 2px;
    font-family: PingFangSC-Medium;
    font-size: 12px;
    color: #fff;
    letter-spacing: 0;
    padding:2px 7px;
    margin-left: 15.5%;
    margin-top: 10px;
  }
  ._Release_Elastic_frame_flex ._Release_Elastic_frame_bottom{
    width: 100%;
  }
  ._Release_Elastic_frame_flex ._Release_Elastic_frame_bottom form{
    padding: 3% 3% 0 3%;
  } 
  ._Release_Elastic_frame_flex ._Release_Elastic_frame_bottom form .el-form-item .tinymce{
    width: 85%;
    margin-left: 8%;
  }
  ._Release_Elastic_frame_flex  /deep/ .el-form-item__label{
    width: 9%;
    text-align: left;
  }
  ._Release_Elastic_frame_flex ._Release_Elastic_frame_button{
    text-align: center;
    padding-bottom: 1%;
  }
  /* .mce-notification.mce-has-close .mce-notification-error{
    display: none;
  }
  .mce-notification.mce-has-close /deep/ .mce-notification-inner{
    display: none;
  } */
  /* .mce_widget /deep/ .mce-notification.mce-notification-error .mce-has-close.mce-in{
    display: none;
  } */
div.popContainer{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.3);
  width: 100%;
  height: 100%;
  z-index: 999;
}
.popContainer .dialog{
  width: 574px;
  height: 450px;
  background: #FFFFFF;
  border-radius: 8px;
  margin-left: 50%;
  margin-top: 15%;
  transform: translate(-50%,-15%);
}
.popContainer .dialog p{
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #999999;
  letter-spacing: 0.65px;
  padding:14px 15px;
}
.popContainer .dialog .dialog_img{
  width: 541px;
  height: 301px;
  background: #F7F7F7;
  box-shadow: inset 0 0 5px 0 rgba(0,0,0,0.35);
  border-radius: 8px;
  display: flex;
  margin-left: 15px;
}
.popContainer .dialog .dialog_img ul{
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  align-items: center;
}
.popContainer .dialog .dialog_img ul li{
  display: flex;
  justify-content: space-around;
  width: 20%;
}
.popContainer .dialog .dialog_img ul li img{
  width: 60px;
  height: 60px;
}
.popContainer .dialog .dialog_bottom{
  text-align: center;
  margin-top: 30px;
}
.popContainer .dialog .dialog_bottom button{
  background-image: linear-gradient(-180deg, #FFFFFF 0%, #EEEEEE 98%);
  border: 1px solid #979797;
  border-radius: 6px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #333333;
  letter-spacing: 1px;
  padding: 8px 36px;
}
</style>