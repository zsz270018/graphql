// 一级路由
import Section from '../components/Section';
import Register from '../components/register'
//二级路由
import HomePage from '../components/HomePage'
import Understand from '../components/understand'
import Appointment from '../components/appointment'
import StarTeam from '../components/StarTeam'
import Evaluate from '../components/evaluate'
import TrainingEnrollment from '../components/TrainingEnrollment'
import HomeHealth from '../components/HomeHealth'
import ShoppingMall from '../components/ShoppingMall'
import Personal from '../components/personal'
import Enterprise from '../components/enterprise'
import InformationDetails from '../components/Appointment/InformationDetails'
import FillInAnOrder from '../components/Appointment/fillInAnOrder'
import OrderInformation from '../components/Appointment/orderInformation'
import SuccessfulPayment from '../components/Appointment/successfulPayment'
import PersonalCenter from '../components/personalCenter/personalCenter'
import OrderEvaluate from '../components/personalCenter/orderEvaluate'
import CommentSuccess from '../components/personalCenter/commentSuccess'
import EnterprisePersonalCenter from '../components/personalCenter/enterprisePersonalCenter'
// 三级路由
import Survey from '../components/understand/understandSurvey'
import Core from '../components/understand/Understandcore'
import InformationModification from '../components/personalCenter/informationModification'
import OrderFulfillment from '../components/personalCenter/orderFulfillment'
import UnfulfilledOrder from '../components/personalCenter/unfulfilledOrder'
import EnterpriseInformationModification from '../components/personalCenter/enterpriseInformationModification'
import ServicePersonnelModification from '../components/personalCenter/servicePersonnelModification'
import PersonalCenterTrainingEnrollment from '../components/personalCenter/TrainingEnrollment'

export default {
    routes: [{
        path: '/index',
        component: Section,
        children: [{
          path: "/index/content1",
          component: HomePage
        }, {
          path: "/index/content2",
          component: Understand,
          children : [{
            path: "/index/content2/survey",
            component: Survey
          },{
            path: "/index/content2/core",
            component: Core
          }]
        }, {
          path: "/index/content3",
          component: Appointment
        }, {
          path: "/index/content4",
          component: StarTeam
        }, {
          path: "/index/content5",
          component: Evaluate
        },{
          path: "/index/content6",
          component: TrainingEnrollment
        },{
          path: "/index/content7",
          component: HomeHealth
        },{
          path: "/index/content8",
          component: ShoppingMall
        },{
          path : "/index/informationDetails",
          component : InformationDetails
        },{
          path : "/index/fillInAnOrder",
          component : FillInAnOrder
        },{
          path : "/index/orderInformation",
          component : OrderInformation
        },{
          path : "/index/successfulPayment",
          component : SuccessfulPayment
        },{
          path : "/index/personalCenter",
          component : PersonalCenter,
          children : [{
            path: "/index/personalCenter/InformationModification",
            component: InformationModification
          },{
            path: "/index/personalCenter/orderFulfillment",
            component: OrderFulfillment
          },{
            path: "/index/personalCenter/unfulfilledOrder",
            component: UnfulfilledOrder
          }]
        },{
          path : "/index/orderEvaluate",
          component : OrderEvaluate
        },{
          path : "/index/commentSuccess",
          component : CommentSuccess
        },{
          path : "/index/enterprisePersonalCenter",
          component : EnterprisePersonalCenter,
          children : [{
            path : "/index/enterprisePersonalCenter/enterpriseInformationModification",
            component : EnterpriseInformationModification
          },{
            path : "/index/enterprisePersonalCenter/servicePersonnelModification",
            component : ServicePersonnelModification
          },{
            path : "/index/enterprisePersonalCenter/personalCenterTrainingEnrollment",
            component : PersonalCenterTrainingEnrollment
          }]
        }]
    },{
        path : '/register',
        component : Register,
        children : [{
          path: "/register/personal",
          component: Personal
        },{
          path: "/register/enterprise",
          component: Enterprise
        }]
    }]
}