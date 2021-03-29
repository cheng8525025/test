import axios from '../axios'

//查询企业列表
export const queryList = data => {
	return axios({
		url:'/valcloud/query',
		method:'post',
		data:{
			
		}
	})
}