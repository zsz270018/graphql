<template>
  <div class="_Health_management">
    <dl>
      <dt><img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4061345204,1630980284&fm=111&gp=0.jpg"/></dt>
      <dd>
        <p>2019/1/15</p>
        <p>120/90</p>
        <p>本周测量<span>5</span>次,正常:<span>2</span>次,异常:<span>3</span>次</p>
      </dd>
    </dl>
    <dl>
      <dt><img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4061345204,1630980284&fm=111&gp=0.jpg"/></dt>
      <dd>
        <p>2019/1/15</p>
        <p>120/90</p>
        <p>本周测量<span>5</span>次,正常:<span>2</span>次,异常:<span>3</span>次</p>
      </dd>
    </dl>
    <dl>
      <dt><img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4061345204,1630980284&fm=111&gp=0.jpg"/></dt>
      <dd>
        <p><span>今日未测量</span><span>提醒</span></p>
        <p>本周测量<span>5</span>次,正常:<span>2</span>次,异常:<span>3</span>次</p>
      </dd>
    </dl>
    <dl>
      <dt><img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4061345204,1630980284&fm=111&gp=0.jpg"/></dt>
      <dd>
        <p><span>今日未测量</span><span>提醒</span></p>
        <p>本周测量<span>5</span>次,正常:<span>2</span>次,异常:<span>3</span>次</p>
      </dd>
    </dl>
    <dl>
      <dt><img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4061345204,1630980284&fm=111&gp=0.jpg"/></dt>
      <dd>
        <p><span>今日未测量</span><span>提醒</span></p>
        <p>本周测量<span>5</span>次,正常:<span>2</span>次,异常:<span>3</span>次</p>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
  ._Health_management{
    display: flex;
    flex-wrap: wrap;
  }
  ._Health_management dl{
    width: 45%;
    display: flex;
    border: 1px solid #eee;
    margin: 20px 1.5% 0 1%;
    padding: 10px 0;
    border-radius: 4px;
  }
  ._Health_management dl dt{
    width: 30%;
    text-align: center;
  }
  ._Health_management dl dt img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
  }
  ._Health_management dl dd{
    width: 80%;
    padding: 0 10px;
  }
  ._Health_management dl dd p{
    line-height: 30px;
  }
  ._Health_management dl dd p:nth-child(1){
    display: flex;
    justify-content: space-between;
  }
  ._Health_management dl dd p:nth-child(1) span:nth-child(1),._Health_management dl dd p:nth-child(1) span:nth-child(2){
    border: 1px solid #999;
    padding: 3px 5px;
    border-radius: 4px;
    margin:10px 0;
  }
</style>
