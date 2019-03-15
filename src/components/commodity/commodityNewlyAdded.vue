<template>
  <div class="_commodity_newly_added">
    <div class="_commodity_newly_added_top">
      <el-form label-width="90px">
        <el-form-item label="所属机构" class="_mechanism">
          <el-select v-model="strMechanism" clearable placeholder="请选择">
            <el-option v-for="item in mechanism" :key="item.Id" :label="item.Name" :value="item.Id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所属驿站">
          <el-select v-model="strStation" clearable placeholder="请选择">
            <el-option v-for="item in postStation" :key="item.Id" :label="item.Name" :value="item.Id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="姓名" required>
          <el-input v-model="NewlyForm.Name" auto-complete="off" placeholder="请输入名字"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="Sex">
          <el-radio v-model="NewlyForm.Sex" label="1">男</el-radio>
          <el-radio v-model="NewlyForm.Sex" label="2">女</el-radio>
        </el-form-item>
        <el-form-item label="出生日期" required>
            <el-date-picker v-model="NewlyForm.Birthday" type="date" placeholder="选择日期">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="身份证号" prop="CardId">
            <el-input v-model="NewlyForm.CardId" auto-complete="off" placeholder="证件号码"></el-input>
        </el-form-item>
        <el-form-item label="手机号码" class="_identity" required>
            <el-input v-model="NewlyForm.Telephone" auto-complete="off" placeholder="手机号码"></el-input>
        </el-form-item>
        <el-form-item label="家庭座机">
            <el-input v-model="NewlyForm.Phone" auto-complete="off" placeholder="家庭座机"></el-input>
        </el-form-item>
        <el-form-item label="身高(cm)" prop="Height" class="_identity">
            <el-input v-model="NewlyForm.Height" auto-complete="off" placeholder="身高"></el-input>
        </el-form-item>
        <el-form-item label="体重(kg)" prop="Weight">
            <el-input v-model="NewlyForm.Weight" auto-complete="off" placeholder="体重"></el-input>
        </el-form-item>
        <el-form-item label="居住地址" prop="Addr" class="_address">
            <el-input v-model="NewlyForm.Addr" auto-complete="off" placeholder="详细地址"></el-input>
        </el-form-item>
        <div v-if="!routeId" class="userPard">
          <el-form-item label="账号" required>
            <el-input v-model="NewlyForm.userName" auto-complete="off" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码" required>
            <el-input v-model="NewlyForm.passWord" auto-complete="off" type="password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item label="重新密码" required>
            <el-input v-model="NewlyForm.againPassWord" auto-complete="off" type="password" placeholder="请输入密码"></el-input>
          </el-form-item>
        </div>
      </el-form>
      <el-form>
        <div class="item_bock head_p">
          <div class="head_img">
            <img :src="userInfo.avatar" />
          </div>
          <div class="setting_right" @click.stop="uploadHeadImg">
            <div class="caption">更改头像</div>
          </div>
          <input type="file" accept="image/*" @change="handleFile" class="hiddenInput" />
        </div>
      </el-form>
    </div>
    <div class="_commodity_newly_added_bottom">
      <el-form :model="guardian" ref="guardian" label-width="90px">
        <el-form-item label="监护人" v-for="(item, index) in guardian" :key="item.key" :prop="'guardian.' + index + '.value'">
          <el-input v-model="item.Name" auto-complete="off" placeholder="姓名"></el-input>
          <el-input v-model="item.Relation" auto-complete="off" placeholder="关系"></el-input>
          <el-input v-model="item.Phone" auto-complete="off" placeholder="联系电话"></el-input>
          <el-button v-if="index == (guardian.length-1)" @click="addGuardian" type="success">新增监护人</el-button>
          <el-button v-if="guardian.length!=1" @click.prevent="removeGuardian(item)" type="danger">删除</el-button>
        </el-form-item>
      </el-form>
      <el-form label-width="90px">
        <el-form-item label="紧急联系人" v-for="(item, index) in linkman" :key="item.key" :prop="'guardian.' + index + '.value'">
          <el-input v-model="item.Name" auto-complete="off" placeholder="姓名"></el-input>
          <el-input v-model="item.Relation" auto-complete="off" placeholder="关系"></el-input>
          <el-input v-model="item.Phone" auto-complete="off" placeholder="联系电话"></el-input>
          <el-button v-if="index == (linkman.length-1)" @click="addLinkman" type="success">新增联系人</el-button>
          <el-button v-if="linkman.length!=1" @click.prevent="removeLinkman(item)" type="danger">删除</el-button>
        </el-form-item>
      </el-form>
      <div class="_commodity_newly_added_emergency_contact">
        <el-button type="primary" @click="saveInformation">保存</el-button>
        <router-link to="/commodity/integration">
          <el-button>取消</el-button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: '1',
      NewlyForm: {
        Name: '',
        Sex: "1",
        Birthday: '',
        Weight: "",
        Height: "",
        CardId: '',
        CardType: "CARD_ID",
        Linkman: "",
        Guardian: "",
        Telephone: "",
        Addr: '',
        State: 1,
        Phone: '',
        HeadUrl: 'string',
        userName : '',
        passWord : '',
        AccountId : 35,
        againPassWord : ''
      },
      addForm: {
        Name: '',
        date: '',
        read: '',
        issue: '',
        name1: '',
        desc: ''
      },
      options: [],
      selectedOptions: [],
      selectedOptions1: [],
      selectedOptions2: [],
      selectedOptions3: [],
      value: '',
      userInfo: {
        avatar: 'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=62d46c39067b020818c437b303b099b6/d4628535e5dde7119c3d076aabefce1b9c1661ba.jpg'
      },
      routeId: '',
      guardian: [{
        "Name": "",
        "Relation": "",
        "Phone": ""
      }],
      linkman: [{
        "Name": "",
        "Relation": "",
        "Phone": ""
      }],
      mechanism : [],
      postStation : [],
      strMechanism : '',
      strStation : '',
      accObj : 0
    }
  },
  created() {
    var Obj = localStorage.getItem('Obj');
    this.Obj = JSON.parse(Obj);
    if (this.$route.query.id) {
      this.routeId = this.$route.query.id;
      console.log(Obj)
      if (Obj) {
        Obj = JSON.parse(Obj);
        this.$api.user.getUserById({id:this.routeId}).then(res => {
          console.log(res)
          var time = res.data.Obj.Birthday
          var dateee = new Date(time).toJSON();
          var times = new Date(+new Date(dateee) + 16 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
          res.data.Obj.Birthday = times;
          let user = res.data.Obj;
          this.NewlyForm = user;
          this.guardian = JSON.parse(user.Guardian);
          this.linkman = JSON.parse(user.Linkman);
        })
      }
    }
  },
  methods: {
    removeGuardian(item) {
      var index = this.guardian.indexOf(item)
      if (index !== -1) {
        this.guardian.splice(index, 1)
      }
    },
    addGuardian() {
      this.guardian.push({
        "Name": "",
        "Relation": "",
        "Phone": ""
      });
    },
    removeLinkman(item) {
      var index = this.linkman.indexOf(item)
      if (index !== -1) {
        this.linkman.splice(index, 1)
      }
    },
    addLinkman() {
      this.linkman.push({
        "Name": "",
        "Relation": "",
        "Phone": ""
      });
    },
    handleChange(value) {
        console.log(value);
    },
    handleChange1(value) {
        console.log(value);
    },
    handleChange2(value) {
        console.log(value);
    },
    handleChange3(value) {
        console.log(value);
    },
    // 打开图片上传
    uploadHeadImg: function() {
        this.$el.querySelector('.hiddenInput').click()
    },
    // 将头像显示
    handleFile: function(e) {
      let $target = e.target || e.srcElement
      let file = $target.files[0]
      var reader = new FileReader()
      reader.onload = (data) => {
          let res = data.target || data.srcElement
          this.userInfo.avatar = res.result
      }
      reader.readAsDataURL(file)
      this.NewlyForm.HeadUrl = file.name
    },
    saveInformation() {
      if(!this.routeId){
        if(this.NewlyForm.passWord && this.NewlyForm.userName && this.NewlyForm.Name && this.NewlyForm.Birthday && this.NewlyForm.Telephone){
          if(this.NewlyForm.againPassWord === this.NewlyForm.passWord){
            if(this.strMechanism){
              this.PersonnelEntity().then(res=>{
                if (this.routeId) {
                  console.log('编辑:',12331)
                  this.userEdit().then(res => {
                      this.$router.push({
                          path: '/commodity/integration'
                      })
                  })
                } else {
                  this.userPreservation().then(res => {
                    this.$router.push({
                      path: '/commodity/integration'
                    })
                  })
                }
              }) 
            }else{
              this.InstitutionalEntity().then(res=>{
                if (this.routeId) {
                  this.userEdit().then(res => {
                      this.$router.push({
                          path: '/commodity/integration'
                      })
                  })
                } else {
                  this.userPreservation().then(res => {
                    this.$router.push({
                      path: '/commodity/integration'
                    })
                  })
                }
              })
            }
          }else{
            alert('您输入的密码两次不正确，请重新输入')
          }
        }else{
          alert('请输入关键选项')
        }
      }else{
        this.userEdit().then(res => {
          this.$router.push({
              path: '/commodity/integration'
          })
        })
      }
    },
    InstitutionalEntity(){
      var time = this.NewlyForm.Birthday;
      var dateee = new Date(time).toJSON();
      var times = new Date(+new Date(dateee) + 16 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '');
      return this.$api.staff.postPersonnelEntity(`/api/v1/station/${this.strStation}/userinfo`,{
        User : {
          Name: this.NewlyForm.Name,
          Sex: parseInt(this.NewlyForm.Sex),
          Birthday: times,
          Weight: parseInt(this.NewlyForm.Weight),
          Height: parseInt(this.NewlyForm.Height),
          CardId: this.NewlyForm.CardId,
          CardType: this.NewlyForm.CardType,
          Addr: this.NewlyForm.Addr,
          State: this.NewlyForm.State,
          Guardian: JSON.stringify(this.guardian),
          Linkman: JSON.stringify(this.linkman),
          Telephone: this.NewlyForm.Telephone,
          Phone: this.NewlyForm.Phone,
          HeadUrl: this.NewlyForm.HeadUrl,
          AccountId: this.NewlyForm.AccountId,
        },
        accountName : this.NewlyForm.userName,
        passwd : this.NewlyForm.passWord
      })
    },
    PersonnelEntity(){
      var time = this.NewlyForm.Birthday;
      var dateee = new Date(time).toJSON();
      var times = new Date(+new Date(dateee) + 16 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '');
      return this.$api.staff.postPersonnelEntity(`/api/v1/company/${this.strMechanism}/userinfo`,{
        User : {
          Name: this.NewlyForm.Name,
          Sex: parseInt(this.NewlyForm.Sex),
          Birthday: times,
          Weight: parseInt(this.NewlyForm.Weight),
          Height: parseInt(this.NewlyForm.Height),
          CardId: this.NewlyForm.CardId,
          CardType: this.NewlyForm.CardType,
          Addr: this.NewlyForm.Addr,
          State: this.NewlyForm.State,
          Guardian: JSON.stringify(this.guardian),
          Linkman: JSON.stringify(this.linkman),
          Telephone: this.NewlyForm.Telephone,
          Phone: this.NewlyForm.Phone,
          HeadUrl: this.NewlyForm.HeadUrl,
          AccountId: this.NewlyForm.AccountId,
        },
        accountName : this.NewlyForm.userName,
        passwd : this.NewlyForm.passWord
      })
    },
    userEdit() {
      return this.$api.user.EditUserEdit({
        Name: this.NewlyForm.Name,
        Sex: parseInt(this.NewlyForm.Sex),
        Birthday: this.NewlyForm.Birthday,
        Weight: parseInt(this.NewlyForm.Weight),
        Height: parseInt(this.NewlyForm.Height),
        CardId: this.NewlyForm.CardId,
        CardType: this.NewlyForm.CardType,
        Addr: this.NewlyForm.Addr,
        State: this.NewlyForm.State,
        Guardian: JSON.stringify(this.guardian),
        Linkman: JSON.stringify(this.linkman),
        Telephone: this.NewlyForm.Telephone,
        Phone: this.NewlyForm.Phone,
        HeadUrl: this.NewlyForm.HeadUrl,
        AccountId: this.NewlyForm.AccountId,
        Id: this.NewlyForm.Id
      })
    },
    userPreservation() {
      return this.$api.user.saveUser({
        Name: this.NewlyForm.Name,
        Sex: parseInt(this.NewlyForm.Sex),
        Birthday: this.NewlyForm.Birthday,
        Weight: parseInt(this.NewlyForm.Weight),
        Height: parseInt(this.NewlyForm.Height),
        CardId: this.NewlyForm.CardId,
        CardType: this.NewlyForm.CardType,
        Addr: this.NewlyForm.Addr,
        State: this.NewlyForm.State,
        Guardian: JSON.stringify(this.guardian),
        Linkman: JSON.stringify(this.linkman),
        Telephone: this.NewlyForm.Telephone,
        Phone: this.NewlyForm.Phone,
        HeadUrl: this.NewlyForm.HeadUrl,
        AccountId: this.accObj.AccountId,
      })
    }
  },
  mounted() {
    //保存用户信息
    var Obj = sessionStorage.getItem('role');
    if (Obj) {
      Obj = JSON.parse(Obj);
      console.log(Obj)
      this.accObj = Obj
      //获取员工用户下的机构
      this.$api.user.getMechanism(`/api/v1/staff/${Obj.AccountId}/company`).then(res=>{
        console.log(res)
        this.mechanism = res.data.Obj
      })
      //根据账号id获取驿站信息
      this.$api.user.getPostStation(`/api/v1/user/${Obj.AccountId}/station`).then(res=>{
        console.log(res)
        this.postStation = res.data.Obj
      })
    }
  }
}
</script>
<style scoped>
._commodity_newly_added_top {
    border-top: 1px solid #f2f2f2;
    margin-top: 5px;
    display: flex;
}

._commodity_newly_added_top form:nth-child(1) {
    width: 70%;
    display: flex;
    flex-wrap: wrap;
}

._commodity_newly_added_top form:nth-child(1) {
    padding-top: 5%;
}

._commodity_newly_added_top form:nth-child(1) .el-form-item {
    width: 50%;
}

._commodity_newly_added_top form:nth-child(1) /deep/ .el-form-item__label {
    width: 20%;
}

._commodity_newly_added_top form:nth-child(1) .el-form-item .el-input {
    width: 60%;
}

._commodity_newly_added_top form:nth-child(1) .el-form-item:nth-child(2) .el-cascader,
._commodity_newly_added_top form:nth-child(1) .el-form-item:nth-child(5) .el-cascader {
    width: 30%;
}

._commodity_newly_added_top form:nth-child(1) .el-form-item:nth-last-child(2) {
  width: 100%;
}

._commodity_newly_added_top form:nth-child(1) .el-form-item:nth-last-child(2) .el-input {
    width: 16%;
    margin: 0 2% 30px 0;
}

.item_bock {
  display: flex;
  align-items: center;
  flex-direction: column;
  /* justify-content: space-between; */
  height: 94px;
  width: 300px;
  padding: 0px 24px 0px 38px;
  background: #fff;
  margin-top: 10%;
}

.head_p {
    height: 132px;
}

.head_img {
    height: 90px;
}

.head_img img {
    width: 90px;
    height: 90px;
    border-radius: 50px
}

.setting_right {
    display: flex;
    height: 37px;
    justify-content: flex-end;
    align-items: center;
}

.hiddenInput {
    display: none;
}
.userPard{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.userPard .el-form-item{
  width: 50%!important;
}
.userPard /deep/ .el-form-item__content:nth-child(2) .el-input{
  width: 60%!important;
}
.caption {
  color: #8F8F8F;
  line-height: 35px;
  margin-top: 10px;
  cursor: pointer;
  border: 1px solid skyblue;
  padding: 0px 5px;
}

._commodity_newly_added_bottom form {
    display: flex;
    flex-wrap: wrap;
}

._commodity_newly_added_bottom form .el-input,
._commodity_newly_added_bottom form .el-select {
  width: 200px;
}

._commodity_newly_added_emergency_contact {
    text-align: center;
}

._commodity_newly_added_emergency_contact button {
    width: 10%;
}

/* ._address /deep/ .el-form-item__label {
    width: 8%!important;
} */
.userPard{
  margin-bottom: 22px;
}
._mechanism /deep/ .el-select{
  width: 60%;
}
._address /deep/ .el-form-item__content>.el-input {
  width: 40%!important;
}
._address /deep/ .el-form-item__content{
  margin-left: 0!important;
}
._commodity_newly_added_top form:nth-child(1) .el-form-item:nth-child(2) .el-form-item__content .el-select,._commodity_newly_added_top form:nth-child(1) .el-form-item:nth-child(3) .el-form-item__content .el-select{
  width: 60%;
}
.userPard /deep/ .el-form-item{
  margin-bottom: 0;
}
</style>