(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a39f458"],{"090c":function(e,t,c){"use strict";c("1cc5")},"107c":function(e,t,c){var r=c("d039");e.exports=r((function(){var e=RegExp("(?<a>b)","string".charAt(5));return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"14c3":function(e,t,c){var r=c("c6b6"),a=c("9263");e.exports=function(e,t){var c=e.exec;if("function"===typeof c){var o=c.call(e,t);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"1cc5":function(e,t,c){},2532:function(e,t,c){"use strict";var r=c("23e7"),a=c("5a34"),o=c("1d80"),n=c("ab13");r({target:"String",proto:!0,forced:!n("includes")},{includes:function(e){return!!~String(o(this)).indexOf(a(e),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(e,t,c){var r=c("861d"),a=c("c6b6"),o=c("b622"),n=o("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[n])?!!t:"RegExp"==a(e))}},"466d":function(e,t,c){"use strict";var r=c("d784"),a=c("825a"),o=c("50c4"),n=c("1d80"),i=c("8aa5"),s=c("14c3");r("match",(function(e,t,c){return[function(t){var c=n(this),r=void 0==t?void 0:t[e];return void 0!==r?r.call(t,c):new RegExp(t)[e](String(c))},function(e){var r=c(t,this,e);if(r.done)return r.value;var n=a(this),l=String(e);if(!n.global)return s(n,l);var d=n.unicode;n.lastIndex=0;var u,f=[],p=0;while(null!==(u=s(n,l))){var b=String(u[0]);f[p]=b,""===b&&(n.lastIndex=i(l,o(n.lastIndex),d)),p++}return 0===p?null:f}]}))},"4cdc":function(e,t,c){"use strict";c.r(t);c("caad"),c("2532");var r=c("7a23"),a=c("078c"),o=c.n(a),n={class:"container"},i=Object(r["createVNode"])("div",{class:"spinner-grow text-danger",role:"status"},[Object(r["createVNode"])("span",{class:"visually-hidden"},"Loading...")],-1),s=Object(r["createVNode"])("div",{class:"spinner-grow text-warning mx-3",role:"status"},[Object(r["createVNode"])("span",{class:"visually-hidden"},"Loading...")],-1),l=Object(r["createVNode"])("div",{class:"spinner-grow text-success",role:"status"},[Object(r["createVNode"])("span",{class:"visually-hidden"},"Loading...")],-1),d=Object(r["createVNode"])("h1",{class:"my-5 text-center"},[Object(r["createTextVNode"])(" 開幕期間，輸入twhot優惠碼，立即享"),Object(r["createVNode"])("span",{class:"text-danger"},"20%"),Object(r["createTextVNode"])("折扣 ")],-1),u={class:"row justify-content-center pt-2 pt-lg-5"},f={class:"col-10 col-md-8 col-lg-3"},p=Object(r["createVNode"])("h2",{class:"mb-4"},"分類",-1),b={class:"list-group pt-3"},g=Object(r["createVNode"])("i",{class:"fas fa-utensils me-2",style:{width:"20px"}},null,-1),v=Object(r["createTextVNode"])("所有產品"),h=Object(r["createVNode"])("i",{class:"fas fa-seedling me-2",style:{width:"20px"}},null,-1),x=Object(r["createTextVNode"])("輕食沙拉"),O=Object(r["createVNode"])("i",{class:"fas fa-glass-cheers me-2",style:{width:"20px"}},null,-1),j=Object(r["createTextVNode"])("果汁飲料 "),m=Object(r["createVNode"])("i",{class:"fas fa-lemon me-2",style:{width:"20px"}},null,-1),y=Object(r["createTextVNode"])("新鮮水果"),N={class:"col-lg-9 mt-3 mt-lg-0"},V={class:"row justify-content-center"},w={class:"col-10 col-md-8 col-lg-8"},k={class:"input-group mb-4"},C=Object(r["createVNode"])("button",{class:"btn btn-outline-primary ",type:"button",id:"button-addon2"},[Object(r["createVNode"])("i",{class:"fas fa-search"})],-1),S={class:"row"},T=Object(r["createVNode"])("img",{class:"productCardSale ",src:o.a,alt:"sale"},null,-1),I=Object(r["createVNode"])("i",{class:"fas fa-heart fs-4"},null,-1),B={class:"card position-relative"},E={class:"productCardWrap"},$={class:"card-body px-3"},M={class:"card-title fs-2 rwd-card-title"},R={class:"d-flex justify-content-between align-items-center flex-wrap"},F={class:"card-text text-decoration-line-through mb-0 me-2"},D={class:"card-text text-danger mb-0 fs-3"},L={class:"card-body px-2 px-lg-3 text-center"};function _(e,t,c,a,o,_){var P=this,A=Object(r["resolveComponent"])("ScrollTop"),H=Object(r["resolveComponent"])("Loading"),G=Object(r["resolveComponent"])("SwiperBar"),U=Object(r["resolveComponent"])("router-link");return Object(r["openBlock"])(),Object(r["createBlock"])("div",n,[Object(r["createVNode"])(A),Object(r["createVNode"])(H,{active:o.isLoading},{default:Object(r["withCtx"])((function(){return[i,s,l]})),_:1},8,["active"]),Object(r["createVNode"])(G),d,Object(r["createVNode"])("div",u,[Object(r["createVNode"])("div",f,[p,Object(r["createVNode"])("div",b,[Object(r["createVNode"])("a",{onClick:t[1]||(t[1]=Object(r["withModifiers"])((function(e){return P.selectCategory=""}),["prevent"])),href:"#",class:"list-group-item list-group-item-action list-group-item-primary","aria-current":"true"},[g,v]),Object(r["createVNode"])("a",{href:"#",onClick:t[2]||(t[2]=Object(r["withModifiers"])((function(e){return P.selectCategory="沙拉"}),["prevent"])),class:"\r\n                list-group-item list-group-item-action list-group-item-primary\r\n              "},[h,x]),Object(r["createVNode"])("a",{href:"#",onClick:t[3]||(t[3]=Object(r["withModifiers"])((function(e){return P.selectCategory="飲料"}),["prevent"])),class:"list-group-item list-group-item-action list-group-item-primary"},[O,j]),Object(r["createVNode"])("a",{onClick:t[4]||(t[4]=Object(r["withModifiers"])((function(e){return P.selectCategory="水果"}),["prevent"])),href:"#",class:"list-group-item list-group-item-action list-group-item-primary"},[m,y])])]),Object(r["createVNode"])("div",N,[Object(r["createVNode"])("div",V,[Object(r["createVNode"])("div",w,[Object(r["createVNode"])("div",k,[Object(r["withDirectives"])(Object(r["createVNode"])("input",{type:"text",class:"form-control",placeholder:"想找什麼商品?","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default","onUpdate:modelValue":t[5]||(t[5]=function(e){return o.seachProduct=e})},null,512),[[r["vModelText"],o.seachProduct]]),C])])]),Object(r["createVNode"])("div",S,[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(_.filterProducts,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])("div",{class:"col-6 col-lg-4 mb-3",key:e.id},[Object(r["createVNode"])(U,{to:"/ProductPage/".concat(e.id),class:"text-decoration-none d-block position-relative"},{default:Object(r["withCtx"])((function(){return[T,Object(r["createVNode"])("a",{class:["mb-3 btn-sm heartlocal",{"text-danger":o.myFavorite.includes(e.id)}],onClick:Object(r["withModifiers"])((function(t){return _.addmyFavorite(e)}),["prevent"])},[I],10,["onClick"]),Object(r["createVNode"])("div",B,[Object(r["createVNode"])("div",E,[Object(r["createVNode"])("div",{class:"productCard ",style:{"background-image":"url(".concat(e.imageUrl,")")}},null,4)]),Object(r["createVNode"])("div",$,[Object(r["createVNode"])("h5",M,Object(r["toDisplayString"])(e.title),1),Object(r["createVNode"])("div",R,[Object(r["createVNode"])("p",F," NT$"+Object(r["toDisplayString"])(e.origin_price),1),Object(r["createVNode"])("p",D,"NT$"+Object(r["toDisplayString"])(e.price),1)])]),Object(r["createVNode"])("div",L,[Object(r["createVNode"])("button",{class:" btn btn-primary mb-3 ",onClick:Object(r["withModifiers"])((function(t){return _.addCart(e.id)}),["prevent"])},"加入購物車",8,["onClick"])])])]})),_:2},1032,["to"])])})),128))])])])])}c("a434"),c("99af"),c("4de4"),c("ac1f"),c("466d");var P=c("e4f3"),A=c("7fd9"),H=c("53f7"),G={save:function(e){var t=JSON.stringify(e);localStorage.setItem("myFavorite",t)},get:function(){return JSON.parse(localStorage.getItem("myFavorite"))}},U={components:{ScrollTop:A["a"],SwiperBar:H["a"]},data:function(){return{products:[],isLoading:!1,pagination:{},seachProduct:"",selectCategory:"",homePage:"",myFavorite:G.get()||[]}},methods:{addmyFavorite:function(e){this.myFavorite.includes(e.id)?this.myFavorite.splice(this.myFavorite.indexOf(e.id),1):this.myFavorite.push(e.id),G.save(this.myFavorite),this.editMyFavorite()},getdata:function(){var e=this;this.isLoading=!0,this.$http.get("".concat("https://vue3-course-api.hexschool.io/","api/").concat("highdanny11-hexschool","/products/all")).then((function(t){t.data.success?(e.isLoading=!1,e.products=t.data.products):console.log(t)})).catch((function(e){console.log(e)}))},addCart:function(e){var t=this;this.isLoading=!0;var c={product_id:e,qty:1};this.$http.post("".concat("https://vue3-course-api.hexschool.io/","api/").concat("highdanny11-hexschool","/cart"),{data:c}).then((function(e){t.isLoading=!1,P["a"].emit("push-data")})).catch((function(e){console.log(e)}))},editMyFavorite:function(){P["a"].emit("editheart")}},computed:{filterProducts:function(){var e=this;return this.products.filter((function(t){return t.category.match(e.selectCategory)&&t.title.match(e.seachProduct)}))}},mounted:function(){var e=this;this.getdata(),P["a"].on("upfavorite",(function(){e.myFavorite=G.get()}));var t=this.$route.params.id;this.selectCategory="null"===t?"":t}};U.render=_;t["default"]=U},"4de4":function(e,t,c){"use strict";var r=c("23e7"),a=c("b727").filter,o=c("1dde"),n=o("filter");r({target:"Array",proto:!0,forced:!n},{filter:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},"53f7":function(e,t,c){"use strict";var r=c("7a23"),a=Object(r["withScopeId"])("data-v-271b8b48");Object(r["pushScopeId"])("data-v-271b8b48");var o={class:"container"},n={class:"row mb-4"},i={class:"img d-flex justify-content-center",style:{"background-image":"url(https://images.unsplash.com/photo-1615224572819-61e7e440a7e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60)"}},s=Object(r["createVNode"])("div",{class:"d-flex flex-column justify-content-center align-items-center h-100",style:{width:"40%"}},[Object(r["createVNode"])("div",{class:"h3 "},"共體時艱"),Object(r["createVNode"])("p",{class:"fs-3"},[Object(r["createTextVNode"])("外帶滿500送"),Object(r["createVNode"])("span",{class:"text-danger"},"雞蛋沙拉")])],-1),l={class:"img",style:{"background-image":"url(https://images.unsplash.com/photo-1561043433-aaf687c4cf04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)"}},d=Object(r["createVNode"])("div",{class:"d-flex flex-column justify-content-center align-items-center h-100",style:{width:"40%"}},[Object(r["createVNode"])("div",{class:"h3"},"開幕慶"),Object(r["createVNode"])("p",{class:"fs-3"},[Object(r["createTextVNode"])("結帳輸入twhot即享"),Object(r["createVNode"])("span",{class:"text-danger"},"20%")])],-1),u={class:"img d-flex flex-row-reverse",style:{"background-image":"url(https://images.unsplash.com/photo-1514995669114-6081e934b693?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)"}},f=Object(r["createVNode"])("div",{class:"d-flex flex-column justify-content-center align-items-center h-100",style:{width:"40%"}},[Object(r["createVNode"])("div",{class:"h3"},"開幕慶"),Object(r["createVNode"])("p",{class:"fs-3"},[Object(r["createTextVNode"])("打卡分享即送"),Object(r["createVNode"])("span",{class:"text-danger"},"莓果果昔"),Object(r["createTextVNode"])("一杯")])],-1);Object(r["popScopeId"])();var p=a((function(e,t,c,p,b,g){var v=Object(r["resolveComponent"])("ScrollLocal"),h=Object(r["resolveComponent"])("swiper-slide"),x=Object(r["resolveComponent"])("swiper");return Object(r["openBlock"])(),Object(r["createBlock"])("div",o,[Object(r["createVNode"])("div",n,[Object(r["createVNode"])(x,{autoplay:{delay:5e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},loop:!0,centeredSlides:!0,"slides-per-view":1},{default:a((function(){return[Object(r["createVNode"])(h,null,{default:a((function(){return[Object(r["createVNode"])("div",i,[Object(r["createVNode"])(v),s])]})),_:1}),Object(r["createVNode"])(h,null,{default:a((function(){return[Object(r["createVNode"])("div",l,[Object(r["createVNode"])(v),d])]})),_:1}),Object(r["createVNode"])(h,null,{default:a((function(){return[Object(r["createVNode"])("div",u,[Object(r["createVNode"])(v),f])]})),_:1})]})),_:1})])])})),b={href:"#",class:"a-top "},g=Object(r["createVNode"])("i",{class:"fas fa-angle-double-down fs-4"},null,-1);function v(e,t,c,a,o,n){return Object(r["openBlock"])(),Object(r["createBlock"])("a",b,[g])}var h={mounted:function(){$(".a-top").on("click",(function(e){e.preventDefault(),$("html, body").animate({scrollTop:500},500)})),$(window).on("scroll",(function(){var e=$(window).scrollTop();e>=50?$(".a-top").css("opacity","0"):$(".a-top").css("opacity","1")}))}};h.render=v;var x=h,O=c("90ea"),j=c("a16a"),m=(c("5f67"),c("6d3b")),y=c("d17a");m["a"].use([y["a"]]);var N={components:{Swiper:O["a"],SwiperSlide:j["a"],ScrollLocal:x}};c("090c");N.render=p,N.__scopeId="data-v-271b8b48";t["a"]=N},"58b4":function(e,t,c){"use strict";c("f6b5")},"5a34":function(e,t,c){var r=c("44e7");e.exports=function(e){if(r(e))throw TypeError("The method doesn't accept regular expressions");return e}},"7fd9":function(e,t,c){"use strict";var r=c("7a23"),a={href:"#",class:"c-top "},o=Object(r["createVNode"])("i",{class:"fas fa-lg fa-arrow-up"},null,-1);function n(e,t,c,n,i,s){return Object(r["openBlock"])(),Object(r["createBlock"])("a",a,[o])}var i={mounted:function(){$(".c-top").on("click",(function(e){e.preventDefault(),$("html, body").animate({scrollTop:0},500)})),$(window).on("scroll",(function(){var e=$(window).scrollTop(),t=$(window).height();e>t/4?$(".c-top").css("opacity","1"):$(".c-top").css("opacity","0")}))}};c("58b4");i.render=n;t["a"]=i},"8aa5":function(e,t,c){"use strict";var r=c("6547").charAt;e.exports=function(e,t,c){return t+(c?r(e,t).length:1)}},9263:function(e,t,c){"use strict";var r=c("ad6d"),a=c("9f7f"),o=c("5692"),n=c("7c73"),i=c("69f3").get,s=c("fce3"),l=c("107c"),d=RegExp.prototype.exec,u=o("native-string-replace",String.prototype.replace),f=d,p=function(){var e=/a/,t=/b*/g;return d.call(e,"a"),d.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),b=a.UNSUPPORTED_Y||a.BROKEN_CARET,g=void 0!==/()??/.exec("")[1],v=p||g||b||s||l;v&&(f=function(e){var t,c,a,o,s,l,v,h=this,x=i(h),O=x.raw;if(O)return O.lastIndex=h.lastIndex,t=f.call(O,e),h.lastIndex=O.lastIndex,t;var j=x.groups,m=b&&h.sticky,y=r.call(h),N=h.source,V=0,w=e;if(m&&(y=y.replace("y",""),-1===y.indexOf("g")&&(y+="g"),w=String(e).slice(h.lastIndex),h.lastIndex>0&&(!h.multiline||h.multiline&&"\n"!==e[h.lastIndex-1])&&(N="(?: "+N+")",w=" "+w,V++),c=new RegExp("^(?:"+N+")",y)),g&&(c=new RegExp("^"+N+"$(?!\\s)",y)),p&&(a=h.lastIndex),o=d.call(m?c:h,w),m?o?(o.input=o.input.slice(V),o[0]=o[0].slice(V),o.index=h.lastIndex,h.lastIndex+=o[0].length):h.lastIndex=0:p&&o&&(h.lastIndex=h.global?o.index+o[0].length:a),g&&o&&o.length>1&&u.call(o[0],c,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(o[s]=void 0)})),o&&j)for(o.groups=l=n(null),s=0;s<j.length;s++)v=j[s],l[v[0]]=o[v[1]];return o}),e.exports=f},"9f7f":function(e,t,c){var r=c("d039"),a=function(e,t){return RegExp(e,t)};t.UNSUPPORTED_Y=r((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ab13:function(e,t,c){var r=c("b622"),a=r("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(c){try{return t[a]=!1,"/./"[e](t)}catch(r){}}return!1}},ac1f:function(e,t,c){"use strict";var r=c("23e7"),a=c("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,t,c){"use strict";var r=c("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},caad:function(e,t,c){"use strict";var r=c("23e7"),a=c("4d64").includes,o=c("44d2");r({target:"Array",proto:!0},{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),o("includes")},d784:function(e,t,c){"use strict";c("ac1f");var r=c("6eeb"),a=c("9263"),o=c("d039"),n=c("b622"),i=c("9112"),s=n("species"),l=RegExp.prototype;e.exports=function(e,t,c,d){var u=n(e),f=!o((function(){var t={};return t[u]=function(){return 7},7!=""[e](t)})),p=f&&!o((function(){var t=!1,c=/a/;return"split"===e&&(c={},c.constructor={},c.constructor[s]=function(){return c},c.flags="",c[u]=/./[u]),c.exec=function(){return t=!0,null},c[u](""),!t}));if(!f||!p||c){var b=/./[u],g=t(u,""[e],(function(e,t,c,r,o){var n=t.exec;return n===a||n===l.exec?f&&!o?{done:!0,value:b.call(t,c,r)}:{done:!0,value:e.call(c,t,r)}:{done:!1}}));r(String.prototype,e,g[0]),r(l,u,g[1])}d&&i(l[u],"sham",!0)}},f6b5:function(e,t,c){},fce3:function(e,t,c){var r=c("d039");e.exports=r((function(){var e=RegExp(".","string".charAt(0));return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-0a39f458.ef1d2dac.js.map