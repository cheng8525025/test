<template>
	<div class="echartsDemo">
		<div class="flexbox">
			<div id="myChart1"  class="flexone"></div>
			<div id="myChart2"  class="flexone"></div>
			<div id="myChart3"  class="flexone"></div>
			<div id="myChart4"  class="flexone"></div>
			
		</div>
	</div>
</template>

<script>
export default {
  name: 'echartsDemo',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    this.drawLine1('myChart1');
	this.drawLine2('myChart2');
	this.drawLine3('myChart3');
	this.drawLine4('myChart4');
  },
  methods: {
	  
    drawLine1(inid){ //柱状图
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById(inid))
        // 绘制图表
        myChart.setOption({
           // title: { text: '柱状图' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    },
	drawLine2(inid){ //折线图图
	    // 基于准备好的dom，初始化echarts实例
	    let myChart = this.$echarts.init(document.getElementById(inid))
	    // 绘制图表
	    myChart.setOption({
			title: {
				//text: '折线图'
			},
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			toolbox: {
				feature: {
					//saveAsImage: {}
				}
			},
			xAxis: {
				type: 'category',
				boundaryGap: false,
				data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
			},
			yAxis: {
				type: 'value'
			},
			series: [
				{
					name: '邮件营销',
					type: 'line',
					stack: '总量',
					data: [120, 132, 101, 134, 90, 230, 210]
				},
				{
					name: '联盟广告',
					type: 'line',
					stack: '总量',
					data: [220, 182, 191, 234, 290, 330, 310]
				},
				{
					name: '视频广告',
					type: 'line',
					stack: '总量',
					data: [150, 232, 201, 154, 190, 330, 410]
				},
				{
					name: '直接访问',
					type: 'line',
					stack: '总量',
					data: [320, 332, 301, 334, 390, 330, 320]
				},
				{
					name: '搜索引擎',
					type: 'line',
					stack: '总量',
					data: [820, 932, 901, 934, 1290, 1330, 1320]
				}
			]
});

	},
	    drawLine3(inid){ //饼状图
	    // 基于准备好的dom，初始化echarts实例
	    let myChart = this.$echarts.init(document.getElementById(inid))
	    // 绘制图表
	    myChart.setOption( {
			tooltip: {
				trigger: 'item',
				formatter: '{a} <br/>{b}: {c} ({d}%)'
			},
			legend: {
				orient: 'vertical',
				left: 10,
				data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
			},
			series: [
				{
					name: '访问来源',
					type: 'pie',
					radius: ['50%', '70%'],
					avoidLabelOverlap: false,
					label: {
						normal: {
							show: false,
							position: 'center'
						},
						emphasis: {
							show: true,
							textStyle: {
								fontSize: '30',
								fontWeight: 'bold'
							}
						}
					},
					labelLine: {
						normal: {
							show: false
						}
					},
					data: [
						{value: 335, name: '直接访问'},
						{value: 310, name: '邮件营销'},
						{value: 234, name: '联盟广告'},
						{value: 135, name: '视频广告'},
						{value: 1548, name: '搜索引擎'}
					]
				}
			]
		});
	},
	    drawLine4(inid){  //雷达图
	    // 基于准备好的dom，初始化echarts实例
	    let myChart = this.$echarts.init(document.getElementById(inid))
	    // 绘制图表
	    myChart.setOption({
			title: {
				text: '自定义雷达图'
			},
			legend: {
				data: ['图一','图二', '张三', '李四']
			},
			radar: [
				{
					indicator: [
						{ text: '指标一' },
						{ text: '指标二' },
						{ text: '指标三' },
						{ text: '指标四' },
						{ text: '指标五' }
					],
					center: ['25%', '50%'],
					radius: 120,
					startAngle: 90,
					splitNumber: 4,
					shape: 'circle',
					name: {
						formatter: '【{value}】',
						textStyle: {
							color: '#72ACD1'
						}
					},
					splitArea: {
						areaStyle: {
							color: ['rgba(114, 172, 209, 0.2)',
								'rgba(114, 172, 209, 0.4)', 'rgba(114, 172, 209, 0.6)',
								'rgba(114, 172, 209, 0.8)', 'rgba(114, 172, 209, 1)'],
							shadowColor: 'rgba(0, 0, 0, 0.3)',
							shadowBlur: 10
						}
					},
					axisLine: {
						lineStyle: {
							color: 'rgba(255, 255, 255, 0.5)'
						}
					},
					splitLine: {
						lineStyle: {
							color: 'rgba(255, 255, 255, 0.5)'
						}
					}
				},
				{
					indicator: [
						{ text: '语文', max: 150 },
						{ text: '数学', max: 150 },
						{ text: '英语', max: 150 },
						{ text: '物理', max: 120 },
						{ text: '化学', max: 108 },
						{ text: '生物', max: 72 }
					],
					center: ['75%', '50%'],
					radius: 120
				}
			],
			series: [
				{
					name: '雷达图',
					type: 'radar',
					emphasis: {
						lineStyle: {
							width: 4
						}
					},
					data: [
						{
							value: [100, 8, 0.40, -80, 2000],
							name: '图一',
							symbol: 'rect',
							symbolSize: 5,
							lineStyle: {
								type: 'dashed'
							}
						},
						{
							value: [60, 5, 0.30, -100, 1500],
							name: '图二',
							areaStyle: {
								color: 'rgba(255, 255, 255, 0.5)'
							}
						}
					]
				},
				{
					name: '成绩单',
					type: 'radar',
					radarIndex: 1,
					data: [
						{
							value: [120, 118, 130, 100, 99, 70],
							name: '张三',
							label: {
								show: true,
								formatter: function(params) {
									return params.value;
								}
							}
						},
						{
							value: [90, 113, 140, 30, 70, 60],
							name: '李四',
							areaStyle: {
								opacity: 0.9
							}
						}
					]
				}
			]
		});
	}
  }
}
</script>
<style lang="less" scoped>
	.echartsDemo{
		.flexbox{
			padding-left:20px;
			padding-right:20px;
			display: flex;
			flex-wrap: wrap;
			.flexone{
				width: 50%;
				height: 400px;
				margin-top: 30px;
			}
			
		}
		
		
		
	}
	
</style>
