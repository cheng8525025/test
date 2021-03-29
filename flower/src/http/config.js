export default {
	method: 'get',
	baseUrl: '/vascloud-ui',//访问的公共url
	header:{
		'Content-Type': 'application/json;chartset=UTF-8'
	},
	data:{},
	timeout:10000,//超时
	withCredentials: true,//携带凭证
	responseType:'json'//返回值数据类型
	
}