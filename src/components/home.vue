<template lang="html">
    <div class="home-container">
        <el-row class="container">
            <el-col :span="24" class="header">
                <el-col :span="10" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">
                    <el-col :span="1">
                        <img src="../assets/logo.png" style="height:30px; margin-left:-10px;margin-top:18px" />
                    </el-col>
                    {{collapsed?'':sysName}}
                </el-col>
                <el-col :span="10">
                    <div class="tools" @click.prevent="collapseFun">
                        <i class="fa fa-align-justify"></i>
                    </div>
                </el-col>
                <el-col :span="4" class="userinfo">
                    <el-dropdown trigger="hover">
                        <span class="el-dropdown-link userinfo-inner">
                            <img src="../assets/user.png"/>
                            {{newData.Name}}
                            <i class="iconfont icon-down"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>我的消息</el-dropdown-item>
                            <el-dropdown-item>设置</el-dropdown-item>
                            <el-dropdown-item divided @click.native="logoutFun">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
            </el-col>
            <el-col :span="24" class="main">
                <div :class="$store.state.module.flag?'menu-collapsed_none':''">
                    <aside :class="collapsed?'menu-collapsed':'menu-expanded'">
                        <!--导航菜单-->
                        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" unique-opened router v-show="!collapsed" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                            <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
                                <el-submenu :index="index+''" v-if="!item.leaf">
                                    <template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
                                    <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}
                                    </el-menu-item>
                                </el-submenu>
                                <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}
                                </el-menu-item>
                            </template>
                        </el-menu>
                        <!--导航菜单-折叠后-->
                        <ul class="el-menu el-menu-vertical-demo collapsed" v-if="collapsed" ref="menuCollapsed">
                            <li  v-for="(item,index) in $router.options.routes" v-if="!item.hidden"class="el-submenu item">
                                <template v-if="!item.leaf">
                                    <div class="el-submenu__title" :id="index" style="padding-left: 20px;" @mouseover="showMenu(index,true,$event)" @mouseout="showMenu(index,false,$event)">
                                        <i :class="item.iconCls"></i>
                                    </div>
                                    <ul class="el-menu submenu" :class="'submenu-hook-'+index" @mouseover="showMenu(index,true,$event)" @mouseout="showMenu(index,false,$event)" :style="{top:setTop+'px',left:40+'px'}">
                                        <li v-for="child in item.children" v-if="!child.hidden" :key="child.path" class="el-menu-item" style="padding-left: 40px;height: 56px;line-height: 56px;" :class="$route.path==child.path?'is-active':''" @click="$router.push(child.path)">{{child.name}}
                                        </li>
                                    </ul>
                                </template>
                                <template v-else> 
                                    <li class="el-submenu">
                                    <div class="el-submenu__title el-menu-item" style="padding-left: 20px;height: 56px;line-height: 56px;padding: 0 20px;" :class="$route.path==item.children[0].path?'is-active':''" @click="$router.push(item.children[0].path)"><i :class="item.iconCls"></i></div>
                                </li>
                                </template>
                                
                            </li>    
                        </ul>
                    </aside>
                </div>
                <section class="content-container">
                    <div class="grid-content bg-purple-light">
                        <el-col :span="24" class="breadcrumb-container">
                            <strong class="title">{{$route.name}}</strong>
                            <!-- <el-breadcrumb separator="/" class="breadcrumb-inner">
                              <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">{{ item.name }}</el-breadcrumb-item>
                            </el-breadcrumb> -->
                        </el-col>
                        <el-col :span="24" class="content-wrapper">
                            <transition name="fade" mode="out-in">
                                <router-view></router-view>
                            </transition>
                        </el-col>
                    </div>
                </section>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import {
    mapState,
    mapMutations
} from 'vuex';
import axios from 'axios'
import md5 from 'js-md5'

export default {
    data() {
            return {
                sysName: '后台管理系统',
                sysUserName: '',
                collapsed: false,
                imgDataUrl: '',
                setTop: 0,
                Unicode: '',
                newData: {}
            }
        },
        computed: {
            // ...mapState({
            //     flag: state => state.module.flag
            // })
        },
        methods: {
            //折叠导航栏
            collapseFun() {
                this.collapsed = !this.collapsed;
            },
            showMenu(i, status, e) {
                var theEvent = window.event || e;
                // console.log(e)
                this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-' + i)[0].style.display = status ? 'block' : 'none';
                this.setTop = theEvent.currentTarget.offsetTop;
                if (window.innerHeight <= 860 && theEvent.currentTarget.id === '15') {
                    this.setTop = (theEvent.currentTarget.offsetTop) - 160;
                } else {
                    this.setTop = theEvent.currentTarget.offsetTop;
                }
            },
            //退出登录
            logoutFun() {
                var _this = this;
                this.$confirm('确认退出吗?', '提示', {
                    //type: 'warning'
                }).then(() => {
                    sessionStorage.removeItem('user');
                    _this.$router.push('/login');
                }).catch(() => {});
            },
            Interface() {
                var Obj = localStorage.getItem('Obj');
                // console.log(Obj)
                if (Obj) {
                    Obj = JSON.parse(Obj);
                    this.$api.user.getUserInfo(`/api/v1/userinfo/${Obj.Unicode}`).then(this.Biography)
                }
            },
            Biography(res) {
                // if (res.status == 200 && res.data && res.data.Obj &&  res.data.Code == 0) {
                //     this.newData = res.data
                //     var data = res.data.Obj;
                //     sessionStorage.setItem('role', JSON.stringify(data))
                // } 
                // console.log(res)
                if (res.status === 200) {
                    // console.log(res)
                    this.newData = res.data.Obj
                    // console.log(this.newData)
                } else {
                    this.newData = res.Obj
                }
                sessionStorage.setItem('role', JSON.stringify(this.newData))
            },

        },
        mounted() {
            this.Interface();

        }
}
</script>
<style scoped lang="less">
.grid-content[data-v-957c9522] {
    overflow-y: auto;
}

.el-menu-vertical-demo .el-menu {
    overflow: auto
}

.container {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    .header {
        height: 60px;
        line-height: 60px;
        background: #122241;
        color: #fff;
        .userinfo {
            text-align: right;
            padding-right: 35px;
            float: right;
            .userinfo-inner {
                cursor: pointer;
                color: #fff;
                img {
                    width: 40px;
                    height: 40px;
                    border-radius: 20px;
                    margin: 10px 10px -15px 10px;
                }
            }
        }
        .logo {
            height: 60px;
            font-size: 22px;
            padding-left: 20px;
            padding-right: 20px;
            text-align: center;
            border-color: rgba(238, 241, 146, 0.3);
            border-right-width: 1px;
            border-right-style: solid;
        }
        .logo-width {
            width: 230px;
        }
        .logo-collapse-width {
            width: 60px;
        }
        .tools {
            padding: 0 23px;
            width: 14px;
            height: 60px;
            line-height: 60px;
            cursor: pointer;
        }
    }
    .main {
        display: flex;
        position: absolute;
        top: 60px;
        bottom: 0;
        // overflow: hidden;
        aside {
            flex: 0 0 230px;
            width: 230px;
            .el-menu {
                height: 100%;
                overflow-y: auto;
                position: static;
            }
            .iconfont {
                padding-right: 10px;
            }
            .collapsed {
                width: 60px;
                // position: relative;
                .item {
                    position: static;
                }
                .submenu {
                    position: absolute;
                    top: 0;
                    left: 60px;
                    z-index: 99999;
                    height: auto;
                    display: none;
                }
            }
            .el-submenu .el-menu-item {
                min-width: 0px;
                color:#ffffff;
            }
            .el-dropdown-menu__item--divided:before,
            .el-menu,
            .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
            .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
            .el-menu--horizontal > .el-submenu .el-submenu__title:hover {
                background: #545c64;
            }
            .el-submenu__title:hover {
                background-color: #545c64;
            }
            .el-menu-item.is-active {
                color: #ffd04b;
            }
        }
        .el-menu-item:hover {
            background-color: #545c64;
        }
        .menu-collapsed {
            flex: 0 0 60px;
            width: 60px;
            height: 100%;
        }
        .menu-collapsed_none {
            display: none;
        }
        .menu-expanded {
            flex: 0 0 230px;
            width: 230px;
            height: 100%;
            .el-menu {
                width: 100% !important;
            }
        }
        .content-container {
            flex: 1;
            overflow-y: scroll;
            padding: 20px;
            .breadcrumb-container {
                .title {
                    width: 200px;
                    float: left;
                    color: #475669;
                }
                .breadcrumb-inner {
                    float: right;
                }
            }
            .content-wrapper {
                background-color: #fff;
                box-sizing: border-box;
            }
        }
    }
}

.grid-content {
    width: 100%;
}
</style>
