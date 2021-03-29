import axios from 'axios';
import router from '@/router';
import config from './config'


export default function $axios(options) {
	return new Promise((resove, reject) => {
		const instance = axios.create({
			baseUrl: config.baseURL,
			headers: config.headers,
			timeout: config.timeout,
			withCredentials: config.withCredentials	
		})
		
		//request拦截器
		instance.interceptors.request.use(
			config => {
				//let token = Cookies.get('token');//在请求头部里面添加token  配置登录token
				let token = '123456';
				//config.headers['token'] = token;
				if(!token){ //token不存在跳转到首页
					router.push('/login')
				}
				return config;
			},
			//当请求发生错区时候
			error => {
				console.log('request:', error)
				//1.判断请求超时
				if(error.code == 'ECONNABORTED' && error.message.indexOf('timeout') != -1){
					console.log('请求超时')	
				}
				//2.重定向到错误页面
				const erronInfo = error.response
				if(erronInfo){
					console.log(erronInfo)
					errorMsg = erronInfo.data //页面那边catch的时候就能拿到详细的错误信息，看最下面的Promise.reject
					const errorStatus = errorInfo.status;//404 403 ...
					router.push({
						path: `/error/${errorStatus}`
					})
				}
				return Promise.reject(error)
			}
		)
		
		//response拦截器
		instance.interceptors.response.use(
			response => { //有报文返回
				let data;
				if(!response.data){
					data = JSON.parse(response.request.responseText)
				}else{
					data = response.data;//这里可以根据不同的返回值类型处理不同的情况，是项目具体情况而定
					if(data && data.header && data.header.code == '223'){
							///donging
					}
				}	
				return data;
			},
			//错误返回
			err => {
				if(err && err.response){
					switch (err.response.status) {
						case 400:
							err.message = '请求错误'
							break;
						case 400:
							err.message = '未授权，请登录'
							break;
						case 403:
							err.message = '拒绝访问'
							break;
						case 404:
							err.message = `请求地址错误:${err.response.config.url}`
							break;
						case 408:
							err.message = '请求超时'
							break;
						default:
							break;	
					}				
				}
				
				return Promise.reject(err)
			}
		)
		
		//请求处理
		instance(options).then(res => {
			resolve(res)
			return false
			}).catch(error => {
				reject(error)
			})
		
	})
}