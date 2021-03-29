//主题修改
//从缓存获取colorIndex，没有就默认第一个
var indexDefault = localStorage.getItem('colorIndex')
const state = {  
	colorArr:["blue", "orange", "red", "blue", "orange", "red"],//主题色图片
	colorTheme:['#409EFF',"#FF8C00","#FF4500",'#409EFF',"#FF8C00","#FF4500"],////主题色
    colorIndex:indexDefault ? indexDefault : 0,  //主题index
    layout:0    //目前布局有3个   ["left", "right", "top"],
}
const mutations  = { 
    setLayout(state,data){
        state.layout = data
	},
	setColorIndex(state,data){
		localStorage.setItem('colorIndex',data) //保存当前选中的主题色
        state.colorIndex = data
    }
    
}
const getters  = { 
    getColorArr: state => state.colorArr,
	getColorIndex:state => state.colorIndex,
	getTheme:state => state.colorArr[state.colorIndex],
	getColorTheme:state => state.colorTheme[state.colorIndex],
    getLayout:state=>state.layout
}
const actions  = {  

 
}
export default {
	state,
	mutations,
	actions,
	getters
}
