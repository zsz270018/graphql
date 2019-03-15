import Vue from 'vue'
import Router from 'vue-router'

// 引入组件
import login from '../components/login.vue'
import home from '../components/home.vue'
import notFound from '../components/404.vue'
import index from '../components/index/index.vue'
import organization from '../components/organization/organization.vue'
import nursing from '../components/nursing/nursing.vue'
import member from '../components/system/member.vue'
import order from '../components/order/order.vue'
import recruitment from '../components/recruitment/recruitment.vue'
import evaluate from '../components/evaluate/evaluate.vue'
import content from '../components/system/content.vue'
import authority from '../components/system/authority.vue'
import my from '../components/my/my.vue'
import commodity from '../components/commodity/commodity.vue'
import activity from '../components/activity/activity.vue'
import integral from '../components/integral/integral.vue'
import exchange from '../components/exchange/exchange.vue'
import integration from '../components/integration/integration.vue'
import role from '../components/role/role.vue'
import Management from '../components/Management/Management.vue'
import discount from '../components/discount/discount.vue'
import newly from '../components/newly.vue'
import commodityNewlyAdded from '../components/commodity/commodityNewlyAdded.vue'
import deviceManagement from '../components/commodity/deviceManagement.vue'
import MedicalRecords from '../components/commodity/MedicalRecords.vue'
import ConsultationManagement from '../components/commodity/ConsultationManagement.vue'
import SafetyMonitoring from '../components/commodity/SafetyMonitoring.vue'
import HealthAgreement from '../components/commodity/HealthAgreement.vue'
import ServiceOrder from '../components/Service/ServiceOrder.vue'
import ServicePublishing from '../components/Service/ServicePublishing.vue'
import ServiceEvaluation from '../components/Service/ServiceEvaluation.vue'
import ServiceProcess from '../components/Service/ServiceProcess.vue'
// import HealthService from '../components/Service/HealthService.vue'
import RemoteMonitoring from '../components/RemoteMonitoring/RemoteMonitoring.vue'
import HealthSurveillance from '../components/RemoteMonitoring/HealthSurveillance.vue'
import SafetyMonitoringRemote from '../components/RemoteMonitoring/SafetyMonitoring.vue'
import SleepMonitoring from '../components/RemoteMonitoring/SleepMonitoring.vue'
import PostManagement from '../components/PostManagement/PostManagement.vue'
import Constant from '../components/constant/constant.vue'
import Create from '../components/Create/Create.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/login',
            component: login,
            name: '',
            hidden: true
        },
        {
            path: '/404',
            component: notFound,
            name: '',
            hidden: true
        },
        {
            path: '/newly',
            component: newly,
            name: '',
            hidden: true
        },
        {
            path: '/',
            component: home,
            name: '',
            iconCls: 'icon iconfont icon-manage2',
            leaf: true,
            children: [{
                path: '/index',
                component: index,
                name: '首页管理'
            }]
        },
        {
            path: '/',
            component: home,
            name: '',
            hidden: true,
            children: [{
                path: '/commodityNewlyAdded',
                component: commodityNewlyAdded,
                name: '用户管理',
            }]
        },
        {
            path: '/',
            component: home,
            name: '机构管理',
            iconCls: 'icon iconfont icon-jigouguanli',
            leaf: true,
            children: [{
                path: '/organization',
                component: organization,
                name: '机构管理'
            }]
        },
        {
            path: '/',
            component: home,
            name: '驿站管理',
            iconCls: 'icon iconfont icon-jigouguanli',
            leaf: true,
            children: [{
                path: '/PostManagement',
                component: PostManagement,
                name: '驿站管理'
            }]
        },
        {
            path: '/',
            component: home,
            name: '人员管理',
            iconCls: 'icon iconfont icon-guanjiaguanli',
            children: [{
                path: '/commodity/integration',
                component: commodity,
                name: '用户管理',
                children : [{
                    path : '/commodity/integration',
                    component: integration,
                },{
                    path : '/commodity/ConsultationManagement',
                    component: ConsultationManagement,
                },{
                    path : '/commodity/HealthAgreement',
                    component: HealthAgreement,
                },{
                    path : '/commodity/MedicalRecords',
                    component: ConsultationManagement,
                },{
                    path : '/commodity/deviceManagement',
                    component: deviceManagement,
                },{
                    path : '/commodity/SafetyMonitoring',
                    component: SafetyMonitoring,
                },,{
                    path : '/commodityn',
                    component: MedicalRecords,
                }]
            }, {
                path: '/integral',
                component: integral,
                name: '店员管理'
            }]
        },
        {
            path: '/',
            component: home,
            name: '服务管理',
            iconCls: 'icon iconfont icon-guanjiaguanli',
            children: [{
                path: '/ServiceOrder',
                component: ServiceOrder,
                name: '服务订单'
            }, {
                path: '/ServicePublishing',
                component: ServicePublishing,
                name: '服务产品'
            }, {
                path: '/Management',
                component: Management,
                name: '服务类型'
            },{
                path:'/Create',
                component: Create,
                name: '创建服务单位'
            }, {
                path: '/RemoteMonitoring',
                component: RemoteMonitoring,
                name: '服务过程'
            }]
        },
        {
            path: '/',
            component: home,
            name: '商城管理',
            iconCls: 'icon iconfont icon-shangpinguanli',
            children: [{
                path: '/my',
                component: my,
                name: '商品订单',
            }, {
                path: '/order',
                component: order,
                name: '商品管理'
            },
                {
                    path: '/discount',
                    component: discount,
                    name: '商品类型'
                }],
        },
        {
            path: '/',
            component: home,
            name: '活动管理',
            iconCls: 'icon iconfont icon-ziyuan',
            children: [{
                path: '/activity',
                component: activity,
                name: '活动发布'
            }, {
                path: '/HealthSurveillance',
                component: HealthSurveillance,
                name: '活动报名'
            }, {
                path: '/SafetyMonitoringRemote',
                component: SafetyMonitoringRemote,
                name: '活动类型'
            }, {
                path: '/SleepMonitoring',
                component: SleepMonitoring,
                name: '活动老师'
            }, {
                path: '/ServiceProcess',
                component: ServiceProcess,
                name: '活动统计'
            }]
        },
        {
            path: '/',
            component: home,
            name: '内容管理',
            iconCls: 'icon iconfont icon-jiankangguanli',
            children: [{
                path: '/recruitment',
                component: recruitment,
                name: '资讯管理'
            }]
        },
        {
            path: '/',
            component: home,
            name: '',
            iconCls: 'icon iconfont icon-jiaoliuguanli',
            leaf: true,
            children: [{
                path: '/exchange',
                component: exchange,
                name: '健闻管理'
            }]
        },
        {
            path: '/',
            component: home,
            name: '远程监护',
            iconCls: 'icon iconfont icon-jiaoseguanli',
            children: [{
                path: '/member',
                component: member,
                name: '健康监护'
            }, {
                path: '/nursing',
                component: nursing,
                name: '安全监护'
            }, {
                path: '/HealthAgreement',
                component: HealthAgreement,
                name: '睡眠监护'
            }]
        },
        {
            path: '/',
            component: home,
            name: '系统管理',
            iconCls: 'icon iconfont icon-xitongguanli',
            children: [{
                path: '/role',
                component: role,
                name: '角色管理'
            }, {
                path: '/authority',
                component: authority,
                name: '权限管理'
            },{
                path: '/constant',
                component: Constant,
                name: '常量管理'
            }, {
                path: '/content',
                component: content,
                name: '短信管理'
            }, {
                path: '/ServiceEvaluation',
                component: ServiceEvaluation,
                name: '微信管理'
            }, {
                path: '/evaluate',
                component: evaluate,
                name: '支付管理'
            }]

        }, {
            path: '*',
            redirect: '/404',
            hidden: true
        }
    ]
})
