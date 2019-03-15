<template>
    <section class="index" style="width:100%">
        <header class="header">
            <ul>
                <li>
                    <p>下单金额</p>
                    <h4>0.00</h4>
                    <i class="icon iconfont icon-gouwuche"></i>
                </li>
                <li>
                    <p>下单量</p>
                    <h4>100</h4>
                    <i class="icon iconfont icon-yqfxiadanliang"></i>
                </li>
                <li>
                    <p>新增会员</p>
                    <h4>20</h4>
                    <i class="icon iconfont icon-huiyuan"></i>
                </li>
                <li>
                    <p>会员数量</p>
                    <h4>4</h4>
                    <i class="icon iconfont icon-xinhuiyuanshuliang"></i>
                </li>
                <li>
                    <p>新增商品</p>
                    <h4>22</h4>
                    <i class="icon iconfont icon-iconSVG-"></i>
                </li>
                <li>
                    <p>商品数量</p>
                    <h4>107</h4>
                    <i class="icon iconfont icon-shangpinshuliang"></i>
                </li>
                <li>
                    <p>新增店铺</p>
                    <h4>1</h4>
                    <i class="icon iconfont icon-dianpu"></i>
                </li>
                <li>
                    <p>店铺数量</p>
                    <h4>5</h4>
                    <i class="icon iconfont icon-dianpushuliang"></i>
                </li>
            </ul>
        </header>
        <div class="section">
            <div class="_section_left">
                <div id="myChart"></div>
                <div id="nursing"></div>
                <div id="san"></div>
                <div id="right"></div>
                <div id="histogram"></div>
            </div>
            <div class="_section_right">
                <div id="canvas"></div>
                <div id="top"></div>
            </div>
        </div>
    </section>
</template>
<script>
    import axios from 'axios';

    export default {
        methods:{
    drawLine(){
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        tooltip : {
          //trigger: 'item',
          //formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          //orient: 'vertical',
          left: 'left',
          data: ['保姆保洁','养老陪护','月嫂','小时工']
        },
        series:[
          {
            type: 'pie',
            radius : '35%',
            center: ['45%', '57%'],
            data:[
              {value:134, name:'保姆保洁'},
              {value:135, name:'养老陪护'},
              {value:1548, name:'月嫂'},
              {value:210,name:'小时工'}
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]  
      });
    },
    weatherIcons(){
      let nursing = this.$echarts.init(document.getElementById('nursing'))
      nursing.setOption({
        tooltip:{},
        legend:{
          left: 'left',
          data:['育婴师','保姆保洁']
        },
        series:[{
          type:'pie',
          radius:'35%',
          center:['53%','50%'],
          data:[
            {value:1548,name:'育婴师'},
            {value:430,name:'保姆保洁'}
          ],
          itemStyle:{
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }]
      })
    },
    weather(){
      let san = this.$echarts.init(document.getElementById('san'))
      san.setOption({
        tooltip:{},
        legend:{
          left: 'left',
          data:['小时工','保姆保洁','育婴师']
        },
        series:[{
          type:'pie',
          radius:'35%',
          center:['55%','52%'],
          data:[
            {value:1548,name:'小时工'},
            {value:330,name:'保姆保洁'},
            {value:260,name:'育婴师'}
          ],
          itemStyle:{
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }]
      })
    },
    can(){
      let canvas = this.$echarts.init(document.getElementById('canvas'))
      canvas.setOption({
        grid:{
          left:'3%',
          right:'4%',
          bottom:'3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [20, 52, 101, 0, 0,230, 120],
          type: 'line'
        }]
      })
    },
    histogram(){
      let histogram = this.$echarts.init(document.getElementById('histogram'))
      // 绘制图表
      histogram.setOption({
        color:['#3398DB'],
        tooltip:{
          trigger:'axis',
          axisPointer:{            // 坐标轴指示器，坐标轴触发有效
            type:'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid:{
          left:'3%',
          right:'4%',
          bottom:'3%',
          containLabel: true
        },
        xAxis:[
          {
            type : 'category',
            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis:[
          {
              type : 'value'
          }
        ],
        series:[
          {
            type:'bar',
            barWidth: '40%',
           data:[30, 52, 150, 334, 60, 130, 90]
          }
        ]
      });
    },
    right(){
      let right =this.$echarts.init(document.getElementById('right'))
      right.setOption({
        tooltip:{
          trigger:'axis',
          axisPointer:{            // 坐标轴指示器，坐标轴触发有效
            type:'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend:{
          data:['利润', '支出', '收入']
        },
        grid:{
          left:'3%',
          right:'4%',
          bottom:'3%',
          containLabel:true
        },
        xAxis:[
          {
            type:'value'
          }
        ],
        yAxis:[
          {
            type : 'category',
            axisTick : {show:false},
            data : ['周一','周二','周三','周四','周五','周六','周日']
          }
        ],
        series:[
          {
            name:'利润',
            type:'bar',
            label: {
              normal: {
                show: true,
                position: 'inside'
              }
            },
            data:[200, 170, 240, 244, 200, 220, 210]
          },
          {
            name:'收入',
            type:'bar',
            stack: '总量',
            label:{
              normal: {
                show: true
              }
            },
            data:[320, 302, 341, 374, 390, 450, 420]
          },
          {
            name:'支出',
            type:'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'left'
              }
            },
            data:[-120, -132, -101, -134, -190, -230, -210]
          }
        ]
      })
    },
    top(){
      let top = this.$echarts.init(document.getElementById('top'))
      top.setOption({
        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis : [
          {
            type : 'category',
            data : ['周一','周二','周三','周四','周五','周六','周日']
          }
        ],
        yAxis : [
          {
            type : 'value'
          }
        ],
        series : [
          {
            name:'直接访问',
            type:'bar',
            data:[320, 332, 301, 334, 390, 330, 320]
          },
          {
            name:'邮件营销',
            type:'bar',
            stack: '广告',
            data:[120, 132, 101, 134, 90, 230, 210]
          },
          {
            name:'联盟广告',
            type:'bar',
            stack: '广告',
            data:[220, 182, 191, 234, 290, 330, 310]
          },
          {
            name:'视频广告',
            type:'bar',
            stack: '广告',
            data:[150, 232, 201, 154, 190, 330, 410]
          },
          {
            name:'搜索引擎',
            type:'bar',
            data:[862, 1018, 964, 1026, 1679, 1600, 1570],
            markLine : {
              lineStyle: {
                normal: {
                  type: 'dashed'
                }
              },
              data : [
                [{type : 'min'}, {type : 'max'}]
              ]
            }
          },
          {
            name:'百度',
            type:'bar',
            barWidth : 5,
            stack: '搜索引擎',
            data:[620, 732, 701, 734, 1090, 1130, 1120]
          },
        ]
      })
    }
  },
  mounted(){
    this.drawLine();
    this.weatherIcons();
    this.weather();
    this.can();
    this.histogram();
    this.right(),
    this.top();
    // let str = md5(`Unicode=${Obj.Unicode}&Timestamp=${Obj.Timestamp}&Token=${Obj.Token}`);
    // console.log(str)
    // this.$http.get(`/api/v1/userinfo/${Obj.Unicode}`).then(function (res) {
    //   console.log(res)
    // })
  }
    }
</script>
<style scoped>
    .index {
        display: -webkit-box; /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
        display: -moz-box; /* 老版本语法: Firefox (buggy) */
        display: -ms-flexbox; /* 混合版本语法: IE 10 */
        display: -webkit-flex; /* 新版本语法: Chrome 21+ */
        display: flex;
        flex-direction: column;
        margin-top: 5px;
    }

    .index .header {
        width: 100%;
        height: 205px;
        background: #D9E0E7;
    }

    .index .header ul {
        height: 198px;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        display: -ms-flexbox;
        flex-wrap: wrap;
        -ms-justify-content: space-evenly;
        -webkit-justfy-content: space-evenly;
        justify-content: space-evenly
    }

    .index .header ul li {
        width: 24%;
        height: 89px;
        border-radius: 5px;
        margin: 10px 0.5% 0 0.5%;
        position: relative;
    }

    .index .header ul li p, h4 {
        margin-left: 10px;
        line-height: 2;
        color: #fff;
        font-weight: normal;
    }

    .index .header ul li i {
        position: absolute;
        right: 20px;
        top: 10px;
        font-size: 30px;
        color: rgba(247, 245, 245, 0.692);
    }

    .index .header ul li:nth-child(1) {
        background: #727CB6;
    }

    .index .header ul li:nth-child(2) {
        background: #338FE1;
    }

    .index .header ul li:nth-child(3) {
        background: #49B6D6;
    }

    .index .header ul li:nth-child(4) {
        background: #FE5A56;
    }

    .index .header ul li:nth-child(5) {
        background: #02ACAC;
    }

    .index .header ul li:nth-child(6) {
        background: #40BD59;
    }

    .index .header ul li:nth-child(7) {
        background: #F59C1B;
    }

    .index .header ul li:nth-child(8) {
        background: #BB3C9E;
    }

    .index .section {
        background: #D9E0E7;
        height: 900px;
        margin-top: 8px;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
    }

    ._section_left {
        flex: 6;
        display: flex;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        flex-wrap: wrap;
    }

    ._section_left div, ._section_right div {
        background: #fff;
        width: 100%;
    }

    ._section_left div:nth-child(1) {
        width: 32%;
        height: 240px;
    }

    ._section_left div:nth-child(2) {
        width: 32%;
        height: 240px;
    }

    ._section_left div:nth-child(3) {
        width: 32%;
        height: 240px;
    }

    ._section_left div:nth-child(1), ._section_left div:nth-child(2), ._section_left div:nth-child(3) {
        margin: 0.5%;
    }

    ._section_left div:nth-child(4) {
        width: 98%;
        height: 240px;
    }

    ._section_left div:nth-child(4), ._section_left div:nth-child(5) {
        margin: -150px 0 0 3px;
    }

    ._section_left div:nth-child(5) {
        width: 98%;
        height: 240px;

    }

    ._section_right {
        flex: 4;
    }

    ._section_right div {
        width: 100%;
        height: 240px;
        margin: 0.7% 0 10px 0;
    }

</style>
