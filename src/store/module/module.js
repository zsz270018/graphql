// import { localReconciliation } from '@/api/api'
let state = {
  flag : false
}
let mutations = {
  updateProvinces(state,payload) {
    console.log(payload)
    state.flag = !state.flag
    // state.provinces = payload.data;
  }
}
// export default {
//   state : {
//     localReconciliationList : ''
//   },
//   mutations : {
//     setannualReport(state,result){
//       state.localReconciliationList = result
//     }
//   },
//   actions : {
//     async annualReport ({commit},{})
//   }
// }
export default {
  namespaced: true,
  state,
  mutations
}