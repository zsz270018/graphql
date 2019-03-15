<template>
  <div class="_Safety_Monitoring">
    <div class="amap-page-container">
    <div :style="{width:'100%',height:'300px'}">
      <el-amap vid="amap" :plugin="plugin" class="amap-demo" :center="center">
      </el-amap>
    </div>
    <div class="toolbar">
        <span v-if="loaded">
          经度 = {{ lng }} 纬度 = {{ lat }}
        </span>
      <span v-else>正在定位</span>
    </div>
    <!-- <div
      @click="req_post"
    >
      查询周边
    </div> -->
    <p class="_Historical_record">历史记录</p>
    <el-table style="100%">
      <el-table-column prop="id" label="地址"></el-table-column>
      <el-table-column prop="order" label="经度"></el-table-column>
      <el-table-column prop="payment" label="纬度"></el-table-column>
      <el-table-column prop="payment" label="时间"></el-table-column>
      <el-table-column prop="payment" label="查看"></el-table-column>
    </el-table>
  </div>
  </div>
</template>
<script>
export default {
  data(){
    const self = this;
    return {
      center: [121.59996, 31.197646],
      lng: 0,
      lat: 0,
      loaded: false,
      plugin: [{
        enableHighAccuracy: true,//是否使用高精度定位，默认:true
        timeout: 100,          //超过10秒后停止定位，默认：无穷大
        maximumAge: 0,           //定位结果缓存0毫秒，默认：0
        convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
        showButton: true,        //显示定位按钮，默认：true
        buttonPosition: 'RB',    //定位按钮停靠位置，默认：'LB'，左下角
        showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
        showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
        panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
        zoomToAccuracy:true,//定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：f
        extensions:'all',
        pName: 'Geolocation',
        events: {
          init(o) {
            // o 是高德地图定位插件实例
            o.getCurrentPosition((status, result) => {
              console.log(result)
              if (result && result.position) {
                self.lng = result.position.lng;
                self.lat = result.position.lat;
                self.center = [self.lng, self.lat];
                self.loaded = true;
                self.$nextTick();
              }
            });
          }
        }
      }]
    }
  },
  methods : {
     req_post() {
      const that=this;
      const registerUrl="http://restapi.amap.com/v3/batch?key=85d4e60dcbacd1f0da5e7ae79e241110";
      const newUserInfo={
        "ops": [
          {
            "url": "/v3/place/around?offset=10&page=1&key=85d4e60dcbacd1f0da5e7ae79e241110&location="+that.lng+","+that.lat+"&output=json&radius=100000&types=080000"
          }
        ]
      };
      // that.axios.post(registerUrl, newUserInfo, {
      //   headers: {
      //     'Content-Type': 'application/x-www-form-urlencoded'
      //   }
      // })
      // .then(function (response) {
      //   console.log(response['data'][0]['body']['pois'])
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
    }
  }
}
</script>
<style scoped lang="">
  .amap-logo,.amap-copyright{
    display: none!important;
  }
  ._Historical_record{
    width: 80px;
    text-align: center;
    line-height: 40px;
    border: 1px solid #ccc;
    margin-left: 20px;
  }
  /* ._Safety_Monitoring .el-table tr{
    background-color: rgb(46, 167, 46);
  }
  ._Safety_Monitoring .has-gutter{
    background-color: rgb(46, 167, 46);
  }
  ._Safety_Monitoring .el-table__header{
    background-color: rgb(46, 167, 46);
  }
  ._Safety_Monitoring .el-table__header-wrapper{
    background-color: rgb(46, 167, 46);
  } */
</style>