import axios from '../axios'

export const queryUserList = data => {
	return axios({
		url:'../../dataMock/userData.json',
		method:'get',
		data:{
			
		}
	})
}

export const add = data => {
	return axios({
		url:'../../dataMock/userData.json',
		method:'post',
		data:{
			paramsome:'',
			paramstwo:'',
		}
	})
}