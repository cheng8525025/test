webpackJsonp([1,2],{110:function(t,e,n){n(161);var o=n(8)(n(113),n(164),null,null);t.exports=o.exports},113:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{src:"",loading:null}},methods:{resetSrc:function(t){this.src=t,this.load()},load:function(){this.loading=this.$loading({lock:!0,text:"loading...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.5)",target:document.querySelector("#main-container ")})},onloaded:function(){this.loading&&this.loading.close()}},mounted:function(){this.resetSrc(this.$store.state.iframe.iframeUrl)},watch:{$route:{handler:function(t,e){this.resetSrc(this.$store.state.iframe.iframeUrl)}}}}},152:function(t,e,n){e=t.exports=n(40)(),e.push([t.id,".iframe-container{position:absolute;top:0;left:0;right:0;bottom:0}.iframe-container .frame{width:100%;height:100%}",""])},161:function(t,e,n){var o=n(152);"string"==typeof o&&(o=[[t.id,o,""]]);n(42)(o,{});o.locals&&(t.exports=o.locals)},164:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"iframe-container"},[n("iframe",{staticClass:"frame",attrs:{src:t.src,scrolling:"auto",frameborder:"0",onload:t.onloaded()}})])},staticRenderFns:[]}}});