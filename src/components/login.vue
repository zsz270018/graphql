<template>
    <div class="_login">
        <div class="_login_name">
            <img src="../assets/资源 1.png"/>
            <h3>嘉合百善</h3>
        </div>
        <div class="_login_content">
            <h1>中关村大健康服务平台</h1>
            <div class="_login_shadow">
                <div class="login-page-container">
                    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px"
                             class="demo-ruleForm login-container">
                        <h3 class="title">系统登录</h3>
                        <el-form-item prop="account">
                            <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号">
                                <i slot="prefix" class="iconfont icon-wode"></i>
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="checkPass">
                            <el-input type="password" v-model="ruleForm2.pwd" auto-complete="off" placeholder="密码">
                                <i slot="prefix" class="iconfont icon-mima"></i>
                            </el-input>
                        </el-form-item>
                        <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
                        <el-form-item style="width:100%;">
                            <el-button type="primary" style="width:100%;" @click="handleSubmit2" :loading="logining">
                                登录
                            </el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';
    import axios from 'axios';

    export default {
        props: {},
        data() {
            return {
                logining: false,
                ruleForm2: {
                    account: 'zhangsz',
                    pwd: 'zsz123'
                },
                rules2: {
                    account: [{
                        // required: true,
                        message: '请输入账号',
                        trigger: 'blur'
                    },
                        //{ validator: validaePass }
                    ],
                    checkPass: [{
                        // required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    },
                        //{ validator: validaePass2 }
                    ]
                },
                checked: true
            };
        },
        methods: {
            handleSubmit2() {
                let _this = this;
                let data = {};
                if (this.ruleForm2.account === '' || this.ruleForm2.pwd === '') {
                    alert('请输入用户名或密码')
                } else {
                    // let data = {
                    //     account: this.ruleForm2.account,
                    //     pwd: this.ruleForm2.pwd,
                    //     loginType: 1
                    // }
                    // let params = Object.assign({}, data)
                    // this.$api.login.userLogin(params).then(function (res) {
                    //     console.log(res)
                    //     _this.loginRef(res.data)
                    // })

                    this.$http.get('http://210.76.124.110:86/api/v1/login', {
                        account: this.ruleForm2.account,
                        pwd: this.ruleForm2.pwd,
                        loginType: 1
                    } ).then(function (res) {
                        _this.loginRef(res.data)
                    })
                }
            },
            loginRef(data) {
                sessionStorage.setItem('user', JSON.stringify(this.ruleForm2))
                localStorage.setItem('Obj', JSON.stringify(data.Obj))
                this.$router.push({path: '/index'});
                // console.log(data)
                // if(data.Code === 0){
                //   console.log(data)
                //   sessionStorage.setItem('user',JSON.stringify(this.ruleForm2))
                //   localStorage.setItem('Obj',JSON.stringify(data.Obj))
                //   this.$router.push({path: '/index'});
                // }else if(data.status === 200){
                //   sessionStorage.setItem('user',JSON.stringify(this.ruleForm2))
                //   localStorage.setItem('Obj',JSON.stringify(data.data))
                //   this.$router.push({path: '/index'});
                // }
            }
        },
        computed: {
            // ...mapState({
            //   getannualReportList: state=>state.login.getannualReportList
            // }),
        },
        mounted() {
            // this.loginRef()
        }
    }
</script>

<style scoped>
    ._login {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: url('../assets/2cd08f2b841b54bd98d754a19b1f23ff31ec949c26f8ff-5ZfnoP.png') no-repeat;
    }

    ._login ._login_name {
        display: flex;
        margin: 2.3% 0 0 2.9%;
    }

    ._login ._login_name img {
        width: 34.3px;
        height: 36px;
    }

    ._login ._login_name h3 {
        line-height: 36px;
        font-size: 20px;
        color: #fff;
        margin-left: 13px;
    }

    ._login_content {
        margin-top: 10%;
    }

    ._login_content h1 {
        text-align: center;
        color: #fff;
        margin-bottom: 50px;
    }

    ._login_shadow {
        width: 442px;
        background: rgba(4, 74, 121, 0.20);
        box-shadow: 0 3px 10px 0 rgba(28, 49, 61, 0.26);
        border-radius: 16px;
        margin-left: 50%;
        padding: 10px 0;
        transform: translate(-50%, 0);
    }

    .login-container {
        -webkit-border-radius: 5px;
        border-radius: 5px;
        -moz-border-radius: 5px;
        background-clip: padding-box;
        margin: 0 auto;
        width: 350px;
        padding: 35px 35px 15px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }

    .login-container .title {
        margin: 0 auto 40px auto;
        text-align: center;
        color: #505458;
    }

    label.el-checkbox.remember {
        margin: 0px 0px 35px 0px;
    }
</style>
