import axios from '../axios'
import menuTree from '@/dataMock/menuTree.json'


/* 
 * 菜单管理模块
 */

 // 保存
export const save = (data) => {
    return axios({
        url: '/menu/save',
        method: 'post',
        data
    })
}
// 删除
export const batchDelete = (data) => {
    return axios({
        url: '/menu/delete',
        method: 'post',
        data
    })
}
// 查找导航菜单树
export const findNavTree = (params) => {   //查询左侧菜单
/*    return axios({
        url: '/menu/findNavTree',
        method: 'get',
        params
    }) */
	//这里没有接口  先写死
	 let tree = new Promise(function(resolve, reject){
		//做一些异步操作
	   resolve(menuTree);
	});
	
	return tree;
	
	
	
	
	
}
// 查找导航菜单树
export const findMenuTree = () => {
    return axios({
        url: '/menu/findMenuTree',
        method: 'get'
    })
}