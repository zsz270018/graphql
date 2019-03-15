<template>
  <div class="_Health_Surveillance">
    <div class="_Health_Surveillance_header">
      <p></p>
      <p>健康监护异常预警</p>
      <p @click="FullScreen"><i class="iconfont icon-quanpingzuidahua"></i></p>
    </div>
    <div class="_Health_Surveillance_section">
      <div :class="$store.state.module.flag?'_Health_Surveillance_section_dl _Health_Surveillance_section_dlTure': '_Health_Surveillance_section_dl'">
        <div>
          <p>一分钟前</p>
          <dl>
            <dt><img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3928438994,3580620744&fm=26&gp=0.jpg"/></dt>
            <dd>
              <p>姓名:{{'李雷'}}</p>
              <p>电话:{{13125564789}}</p>
              <p>紧急号码:{{13290089574}}</p>
              <p>项目:{{'血压'}}</p>
              <p>数值:{{'120/99'}} <i></i></p>
            </dd>
          </dl>
          <p @click="policeDetails(1)">立即处理</p>
        </div>
         <div>
          <p>一分钟前</p>
          <dl>
            <dt><img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3928438994,3580620744&fm=26&gp=0.jpg"/></dt>
            <dd>
              <p>姓名:{{'李雷'}}</p>
              <p>电话:{{13125564789}}</p>
              <p>紧急号码:{{13290089574}}</p>
              <p>项目:{{'血压'}}</p>
              <p>数值:{{'120/99'}} <i></i></p>
            </dd>
          </dl>
          <p>立即处理</p>
        </div>
         <div>
          <p>一分钟前</p>
          <dl>
            <dt><img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3928438994,3580620744&fm=26&gp=0.jpg"/></dt>
            <dd>
              <p>姓名:{{'李雷'}}</p>
              <p>电话:{{13125564789}}</p>
              <p>紧急号码:{{13290089574}}</p>
              <p>项目:{{'血压'}}</p>
              <p>数值:{{'120/99'}} <i></i></p>
            </dd>
          </dl>
          <p>立即处理</p>
        </div>
         <div>
          <p>一分钟前</p>
          <dl>
            <dt><img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3928438994,3580620744&fm=26&gp=0.jpg"/></dt>
            <dd>
              <p>姓名:{{'李雷'}}</p>
              <p>电话:{{13125564789}}</p>
              <p>紧急号码:{{13290089574}}</p>
              <p>项目:{{'血压'}}</p>
              <p><span>数值:{{'120/99'}}</span> <i></i></p>
            </dd>
          </dl>
          <p>立即处理</p>
        </div>
        <div>
          <p>一分钟前</p>
          <dl>
            <dt><img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3928438994,3580620744&fm=26&gp=0.jpg"/></dt>
            <dd>
              <p>姓名:{{'李雷'}}</p>
              <p>电话:{{13125564789}}</p>
              <p>紧急号码:{{13290089574}}</p>
              <p>项目:{{'血压'}}</p>
              <p>数值:{{'120/99'}} <i></i></p>
            </dd>
          </dl>
          <p>立即处理</p>
        </div>
         <div>
          <p>一分钟前</p>
          <dl>
            <dt><img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3928438994,3580620744&fm=26&gp=0.jpg"/></dt>
            <dd>
              <p>姓名:{{'李雷'}}</p>
              <p>电话:{{13125564789}}</p>
              <p>紧急号码:{{13290089574}}</p>
              <p>项目:{{'血压'}}</p>
              <p>数值:{{'120/99'}} <i></i></p>
            </dd>
          </dl>
          <p>立即处理</p>
        </div>
         <div>
          <p>一分钟前</p>
          <dl>
            <dt><img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3928438994,3580620744&fm=26&gp=0.jpg"/></dt>
            <dd>
              <p>姓名:{{'李雷'}}</p>
              <p>电话:{{13125564789}}</p>
              <p>紧急号码:{{13290089574}}</p>
              <p>项目:{{'血压'}}</p>
              <p>数值:{{'120/99'}} <i></i></p>
            </dd>
          </dl>
          <p>立即处理</p>
        </div>
         <div>
          <p>一分钟前</p>
          <dl>
            <dt><img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3928438994,3580620744&fm=26&gp=0.jpg"/></dt>
            <dd>
              <p>姓名:{{'李雷'}}</p>
              <p>电话:{{13125564789}}</p>
              <p>紧急号码:{{13290089574}}</p>
              <p>项目:{{'血压'}}</p>
              <p><span>数值:{{'120/99'}}</span> <i></i></p>
            </dd>
          </dl>
          <p>立即处理</p>
        </div>
      </div>
      <div class="_section_page">
        <el-pagination
          layout="prev, pager, next"
          style="background:#427aa1"
          :total="1000">
        </el-pagination>
      </div>
    </div>
    <div :class="screenFlag?'_Health_Surveillance_Mask':'_Health_Surveillance_Mask _Health_Surveillance_Mask_block'">
      <div class="_Surveillance_Mask_frame">
        <header>
          <h3>报警详情</h3>
        </header>
        <section>
          <p>姓名：李雷   于2016-04-03  08:34：44发生血压偏高</p>
        </section>
        <footer>
          <button @click="policeDetails(2)">知道了</button>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex';
export default {
  data(){
    return{
      screenFlag : true
    }
  },
  computed: {
    // ...mapState({
    //   flag: state=>state.module.flag
    // })
  },
  methods:{
    // ...mapMutations({
    //   updateProvinces: 'module/updateProvinces'
    // }),
    FullScreen(){
      this.updateProvinces()
    },
    policeDetails(id){
      if(id===1){
        this.screenFlag = false
      }else{
        this.screenFlag = true
      }

    }
  }
}
</script>
<style scoped>
  ._Health_Surveillance{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  ._Health_Surveillance_header{
    display: flex;
    height: 60px;
    background: #FFFFFF;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.30);
    align-items: center;
    justify-content: space-between;

  }
  ._Health_Surveillance_header p{
    margin-right: 20px;
  }
  ._Health_Surveillance_header p:nth-child(2){
    font-size: 20px;
    color: #2B5768;
    font-weight: 600;
  }
  ._Health_Surveillance_header p i{
    font-size: 20px;
  }
  ._Health_Surveillance_section{
    flex: 1;
    background-color: #427aa1;
  }
  /* ._Health_Surveillance_header{
    width: 50px;
    height: 50px;
    display: block;
  } */
  ._Health_Surveillance_section_dl{
    display: flex;
    flex-wrap: wrap;
    padding: 35px 20px 0 20px;
  }
  ._Health_Surveillance_section_dl>div{
    width: 22%;
    background: #FFFFFF;
    border: 1px solid #EAEAEA;
    border-radius: 4px;
    padding: 0 10px;
    margin: 10px 0 0 1%;
  }
  ._Health_Surveillance_section_dlTure>div{
    width: 17%!important;
  }
  ._Health_Surveillance_section_dl>div>p:nth-child(1){
    color: #666666;
    padding-left: 10px;
    line-height: 25px;
  }
  ._Health_Surveillance_section_dl>div>p:nth-last-child(1){
    color: #188BD0;
    text-align: center;
    line-height: 40px;
    border-top: 1px solid #EAEAEA;
  }
  ._Health_Surveillance_section_dl>div dl{
    display: flex;
  }
  ._Health_Surveillance_section_dl>div dl dt{
    width: 30%;
    text-align: center;
  }
  ._Health_Surveillance_section_dl>div dl dt img{
    width: 85%;
  }
  ._Health_Surveillance_section_dl>div dl dd p{
    line-height: 30px;
    display: flex;
    align-items: center;
  }
  ._Health_Surveillance_section_dl>div dl dd p i{
    width: 10px;
    height: 20px;
    background: url('../../assets/up.png') no-repeat;
    background-size: 10px;
    margin-left: 5px;
  }
  ._section_page{
    text-align: center;
    background-color: #427aa1;
    margin-top: 10%;
    padding-bottom: 10%;
  }
  .el-pagination{
    background-color: #427aa1;
  }
  ._Health_Surveillance_Mask{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.40);
    display: none;
  }
  ._Health_Surveillance_Mask_block{
    display: block!important;
  }
  ._Surveillance_Mask_frame{
    width: 30%;
    background: #FFFFFF;
    border-radius: 8px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  ._Surveillance_Mask_frame header{
    width: 100%;
    height: 50px;
    background: #0385E8;
    text-align: center;
    line-height: 50px;
    color: #fff;
    border-radius:  8px 8px 0 0;
  }
  ._Surveillance_Mask_frame section{
    height: 100px;
  }
  ._Surveillance_Mask_frame section p{
    margin-top: 15px;
    text-indent:25px;
  }
  ._Surveillance_Mask_frame footer{
    height: 70px;
    border-top: 1px solid #EAEAEA;
    text-align: center;
    line-height: 70px;
  }
  ._Surveillance_Mask_frame footer button{
    width: 30%;
    border:none;
    outline:none;
    padding: 10px 0;
    background: #45AEFF;
    border-radius: 4px;
    cursor: pointer;
    color: #fff;
    font-size: 20px;
  }
</style>
