(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{148:function(t,e,n){var content=n(154);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(5).default)("5b29c6b5",content,!0,{sourceMap:!1})},149:function(t,e,n){var content=n(156);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(5).default)("19d189d6",content,!0,{sourceMap:!1})},150:function(t,e,n){var content=n(158);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(5).default)("25699821",content,!0,{sourceMap:!1})},151:function(t,e,n){var content=n(160);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(5).default)("60eb48e1",content,!0,{sourceMap:!1})},152:function(t,e,n){var content=n(167);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(5).default)("2f7f768c",content,!0,{sourceMap:!1})},153:function(t,e,n){"use strict";var o=n(148);n.n(o).a},154:function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".carbon_ad{background-color:#fff;font-size:13px;overflow:hidden;margin-bottom:15px;height:106px}@media (min-width:625px){.carbon_ad{float:right;width:125px;margin-left:25px;height:auto}}@media (min-width:1280px){.carbon_ad{position:fixed;bottom:30px;right:30px;margin-bottom:0}}.carbon_ad .vuejobs{display:block;width:130px;height:100px;background-image:url(/vuejobs.png)}.carbon_ad .carbon-img{display:inline-block;float:left;margin-right:10px}@media (min-width:625px){.carbon_ad .carbon-img{float:none;margin-right:0}}.carbon_ad .carbon-text{color:#34495e;text-decoration:none}.carbon_ad .carbon-text:hover{text-decoration:none}@media (min-width:625px){.carbon_ad .carbon-text{display:inline-block;margin-top:5px}}@media (min-width:625px){.carbon_ad .carbon-wrap{display:inline-block;margin-bottom:5px;line-height:normal}}.carbon_ad .carbon-poweredby{color:#7f8c8d;display:block}",""])},155:function(t,e,n){"use strict";var o=n(149);n.n(o).a},156:function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".ad_blocked,.cf_ad{background-color:#fff;overflow:hidden;padding-bottom:15px;height:140px}@media (min-width:625px){.ad_blocked,.cf_ad{float:right;width:150px;padding-left:25px;height:auto}}@media (min-width:1280px){.ad_blocked,.cf_ad{position:fixed;bottom:30px;right:30px;padding-bottom:0;height:auto}}.ad_blocked #cf,.ad_blocked #cf .cf-wrapper,.cf_ad #cf,.cf_ad #cf .cf-wrapper{width:auto!important}.ad_blocked #cf .cf-text,.cf_ad #cf .cf-text{font-size:13px!important}.ad_blocked #cf .cf-img-wrapper,.ad_blocked .img-wrapper,.cf_ad #cf .cf-img-wrapper,.cf_ad .img-wrapper{float:left;margin-right:10px}@media (min-width:625px){.ad_blocked #cf .cf-img-wrapper,.ad_blocked .img-wrapper,.cf_ad #cf .cf-img-wrapper,.cf_ad .img-wrapper{float:none;margin-right:0}}.ad_blocked .text-wrapper,.cf_ad .text-wrapper{font-size:13px}",""])},157:function(t,e,n){"use strict";var o=n(150);n.n(o).a},158:function(t,e,n){(t.exports=n(4)(!1)).push([t.i,'.bsa-cpc{font-size:1em;background-color:#f8f8f8}.bsa-cpc a._default_{text-align:left;display:block;padding:10px 15px 12px;margin-top:20px;color:#666;font-weight:400;line-height:18px}.bsa-cpc a._default_:hover{text-decoration:none}.bsa-cpc a._default_ .default-description,.bsa-cpc a._default_ .default-image,.bsa-cpc a._default_ .default-title{display:inline;vertical-align:middle;margin-right:6px}.bsa-cpc a._default_ .default-image img{height:20px;border-radius:3px;vertical-align:middle;position:relative;top:-1px}.bsa-cpc a._default_ .default-title{font-weight:600}.bsa-cpc a._default_ .default-description:after{font-size:.85em;content:"Sponsored";color:#1c90f3;border:1px solid #1c90f3;border-radius:3px;padding:0 4px 1px;margin-left:6px}.bsa-cpc .default-ad{display:none}',""])},159:function(t,e,n){"use strict";var o=n(151);n.n(o).a},160:function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".contribute[data-v-0253eebc]{margin-top:30px;border-top:1px solid #e5e5e5}.contribute p[data-v-0253eebc]{color:#7f8c8d;padding-top:15px;padding-bottom:0;margin:0;font-size:14px}",""])},161:function(t,e,n){"use strict";var o={mounted(){if(-1!==["en","fr"].indexOf(this.$store.state.locale)&&this.$refs.carbonads){var script=document.createElement("script");script.setAttribute("type","text/javascript"),script.setAttribute("src","//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=nuxtjsorg"),script.setAttribute("id","_carbonads_js"),this.$refs.carbonads.appendChild(script)}}},r=(n(153),n(3)),c={data:()=>({displayCarbon:!1}),mounted(){if(-1!==["en","fr"].indexOf(this.$store.state.locale)&&this.$refs.codefundads){window.addEventListener("codefund",this.cardbonFallback);var script=document.createElement("script");script.setAttribute("type","text/javascript"),script.setAttribute("src","//codefund.io/scripts/7a55aa99-7866-418d-9720-8b1342303656/embed.js?template=vertical"),script.setAttribute("id","_codefund_ad_js");try{this.$refs.codefundads.appendChild(script)}catch(t){console.error(t)}}},beforeDestroy(){window.removeEventListener("codefund",this.cardbonFallback)},methods:{cardbonFallback(t){t&&t.detail&&"ok"!==t.detail.status&&(this.displayCarbon=!0)}},components:{CarbonAds:Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"carbonads",staticClass:"carbon_ad"})}),[],!1,null,null,null).exports,Blocked:()=>n.e(25).then(n.bind(null,240))}},d=(n(155),Object(r.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return this.$store.state.adBlocked?e("div",{staticClass:"ad_blocked"},[e("div",{staticClass:"img-wrapper"},[e("Blocked",{attrs:{alt:"Support Nuxt.js",width:"125",height:"125"}})],1),this._v(" "),this._m(0)]):this.displayCarbon?e("carbon-ads"):e("div",{ref:"codefundads",staticClass:"cf_ad",attrs:{id:"codefund_ad"}})}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"text-wrapper"},[e("strong",[this._v("Nuxt.js needs you 💚")]),e("br"),this._v("By whitelisting nuxtjs.org on your Ad-Blocker, you support our work and help us financially.")])}],!1,null,null,null));e.a=d.exports},162:function(t,e,n){"use strict";var o={mounted(){"en"===this.$store.state.locale&&this.$refs.carbonadsText&&this.loadScript()},methods:{loadScript(){var script=document.createElement("script");script.setAttribute("type","text/javascript"),this.$refs.carbonadsText.appendChild(script),script.onload=this.scriptLoaded,script.setAttribute("src","//m.servedby-buysellads.com/monetization.js")},scriptLoaded(){if("undefined"==typeof _bsa)return console.warn("Could not load Carbon Ads Text");window._bsa.init("default","CKYD62QW","placement:nuxtjsorg",{target:".bsa-cpc",align:"horizontal",disable_css:"true"})}}},r=(n(157),n(3)),c={props:["docLink"],components:{CarbonAdsText:Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"carbonadsText"},[e("div",{staticClass:"bsa-cpc"})])}),[],!1,null,null,null).exports}},d=(n(159),Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contribute"},[n("carbon-ads-text"),t._v(" "),n("p",[t._v(t._s(t.$store.state.lang.guide.contribute)+" "),n("a",{attrs:{href:t.docLink,target:"_blank",rel:"noopener"}},[t._v(t._s(t.$store.state.lang.guide.edit_on_github))])])],1)}),[],!1,null,"0253eebc",null));e.a=d.exports},163:function(t,e,n){"use strict";var o={props:["content"],mounted(){this.$nextTick(this.addListeners)},beforeDestroy(){this.removeListeners()},watch:{content:"contentUpdated"},methods:{navigate(t){for(var e=t.target,i=0;i<5&&!(e instanceof HTMLAnchorElement)&&e.parentNode;)e=e.parentNode,i++;if(e instanceof HTMLAnchorElement){var n=e.getAttribute("href");n&&"/"===n[0]?(t.preventDefault(),this.$router.push(n)):this.$ga&&this.$ga("send","event","Outbound Link","click",e.href)}},contentUpdated(){this.removeListeners(),this.$nextTick(()=>{this.addListeners()})},addListeners(){this._links=this.$el.getElementsByTagName("a");for(var i=0;i<this._links.length;i++)this._links[i].addEventListener("click",this.navigate,!1)},removeListeners(){for(var i=0;i<this._links.length;i++)this._links[i].removeEventListener("click",this.navigate,!1);this._links=[]}}},r=n(3),component=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{domProps:{innerHTML:this._s(this.content)}})}),[],!1,null,null,null);e.a=component.exports},164:function(t,e,n){"use strict";e.a={data:()=>({isIntersecting:!1}),mounted(){if(!window.IntersectionObserver)return console.warn("IntersectionObserver polyfill is required.");this.__observer=new window.IntersectionObserver(t=>{t.forEach(t=>{var{intersectionRatio:e,target:n}=t;e>0&&(this.isIntersecting=!0,this.__observer.disconnect())})}),this.__observer.observe(this.$el)},beforeDestroy(){this.__observer&&(this.__observer.disconnect(),delete this.__observer)}}},166:function(t,e,n){"use strict";var o=n(152);n.n(o).a},167:function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".responsiveVideo[data-v-2d87bd0c]{width:100%;height:0;padding-bottom:56.25%;overflow:hidden;position:relative;margin:30px 0;background:#000}.responsiveVideo embed[data-v-2d87bd0c],.responsiveVideo iframe[data-v-2d87bd0c],.responsiveVideo object[data-v-2d87bd0c]{width:100%;height:100%;position:absolute;top:0;left:0}.responsiveVideo span[data-v-2d87bd0c]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:30px;text-align:center;line-height:40px;color:#fff}",""])},168:function(t,e,n){"use strict";var o={mixins:[n(164).a],props:{src:{type:String,required:!0}}},r=(n(166),n(3)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"responsiveVideo"},[this.isIntersecting&&this.src?e("iframe",{attrs:{src:this.src,frameborder:"0",allowfullscreen:"",webkitallowfullscreen:"",mozallowfullscreen:"",title:"Responsive video"}}):e("span",[this._v("Loading video...")])])}),[],!1,null,"2d87bd0c",null);e.a=component.exports},231:function(t,e,n){"use strict";n.r(e);var o=n(2),r=n(168),c=n(161),d=n(163),l=n(162),f={asyncData:t=>Object(o.a)((function*(){var e,{$docs:n,route:o,store:r,error:c}=t,data={attrs:{},body:"",docLink:""},d=o.params.slug||"index",path="/".concat(r.state.lang.iso,"/3399/").concat(d);try{e=yield n.get(path)}catch(t){return 404!==t.response.status?c({statusCode:500,message:r.state.lang.text.an_error_occurred}):c({statusCode:404,message:r.state.lang.text.api_page_not_found})}return data.attrs=e.attrs,data.body=e.body,data.docLink="https://github.com/nuxt/docs/blob/master".concat(path,".md"),"ru"===r.state.lang.iso?data.docLink="https://github.com/translation-gang/ru.docs.nuxtjs/blob/translation-ru".concat(path,".md"):"cn"===r.state.lang.iso&&(data.docLink="https://github.com/o2team/i18n-cn-nuxtjs-docs/blob/dev".concat(path,".md")),data.attrs.title||console.error("[/".concat(path,"] ").concat(r.state.lang.text.please_define_title,".")),data.attrs.description||console.error("[/".concat(path,"] ").concat(r.state.lang.text.please_define_description,".")),data}))(),scrollToTop:!0,head(){return{title:this.attrs.title,titleTemplate:"%s - Nuxt.js",meta:[{hid:"description",name:"description",content:this.attrs.description}]}},components:{ResponsiveVideo:r.a,CodeFundAds:c.a,HtmlParser:d.a,Contribute:l.a}},h=n(3),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(t._s(t.attrs.title))]),t._v(" "),t.attrs.youtube?n("responsive-video",{attrs:{src:t.attrs.youtube}}):t._e(),t._v(" "),n("html-parser",{attrs:{content:t.body}}),t._v(" "),n("contribute",{attrs:{"doc-link":t.docLink}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);