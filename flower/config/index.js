// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
const proxyJson = require('../src/http/proxy.json')
//获取代理
function getProxy(proxyJson){ //本地开发环境跨域代理配置，生产用nginx跨域
	const devServerProxy = {};
	proxyJson.forEach(function(item){
		let proxyUrl = '';
		proxyUrl = item.proxyUrl + '/';
		devServerProxy[proxyUrl] = {
			target: item.targetApi,
			ws:item.protocal === 'ws://' ? true : false,
		};
		if(!item.notPathRewrite){
			if(item.pathRewrite){
				devServerProxy[proxyUrl]['pathRewrite'] = {};
				devServerProxy[proxyUrl]['pathRewrite'][proxyUrl] = '';
			}
		}	
	});
	return devServerProxy;
}


module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    productionSourceMap: false,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {  //开发环境
    env: require('./dev.env'),
    port: 8081,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: getProxy(proxyJson),
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
