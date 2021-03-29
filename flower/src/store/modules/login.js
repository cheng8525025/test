	
const state = {  //值域
	count : 0,
	logining:false //当前是否为登录状态
}

const mutations  = { //函数域，同步函数直接提交；异步函数用action提交
	add (state , n){ //前一个为本state状态，n为传入的值
		state.count = state.count + n;
	},
	setLogining(state, flag){
		state.logining = flag;
	}
}

const actions  = {  //如果add为异步函数，我们需要调用，则需要通过action来使用
	add({commit}){
		commit('add')	
	}
}

const getters  = { // 计算属性，filter 迭代过滤器 将每个item的值 item.done == true 挑出来， 返回的是一个数组
					// filter 迭代过滤器 将每个item的值 item.done == true 挑出来， 返回的是一个数组
	// toDo(state){
	// 	return state.todos.filter(item => item.done === true)	
	// }
}

export default {
	state,
	mutations,
	actions,
	getters
}

