(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2357"],{"22ab":function(t,s,e){"use strict";e.r(s);var o=function(){var t=this,s=t._self._c;return s("div",{staticClass:"container py-5"},[s("NavTabs"),s("h1",{staticClass:"mt-5"},[t._v(" 美食達人 ")]),s("hr"),s("div",{staticClass:"row text-center"},t._l(t.users,(function(e){return s("div",{key:e.id,staticClass:"col-3"},[s("router-link",{attrs:{to:{name:"users",params:{id:e.id}}}},[s("img",{attrs:{src:"https://images.pexels.com/photos/10673160/pexels-photo-10673160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",width:"140px",height:"140px"}})]),s("h2",[t._v(t._s(e.name))]),s("span",{staticClass:"badge badge-secondary"},[t._v("追蹤人數："+t._s(e.followerCount))]),s("p",{staticClass:"mt-3"},[!0===e.isFollowed?s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.deleteFollowing(e.id)}}},[t._v(" 取消追蹤 ")]):s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.addFollowing(e.id)}}},[t._v(" 追蹤 ")])])],1)})),0)],1)},a=[],r=(e("d9e2"),e("4cce")),n=e("2fa3"),i=e("8bb1"),l={data(){return{users:[]}},components:{NavTabs:i["a"]},created(){this.fetchTopUsers()},methods:{async fetchTopUsers(){try{const{data:t}=await r["a"].getTopUsers();this.users=t.users.map(t=>({id:t.id,name:t.name,image:t.image,followerCount:t.FollowerCount,isFollowed:t.isFollowed}))}catch(t){console.log(t),n["a"].fire({icon:"error",title:"無法取得美食達人，請稍後再試"})}},async addFollowing(t){try{const{data:s}=await r["a"].addFollowing({userId:t});if("success"!==s.status)throw new Error(s.message);this.users=this.users.map(s=>s.id!==t?s:{...s,followerCount:s.followerCount+1,isFollowed:!0})}catch(s){n["a"].fire({icon:"error",title:"無法加入追蹤，請稍後再試"})}},async deleteFollowing(t){try{const{data:s}=await r["a"].deleteFollowing({userId:t});if("success"!==s.status)throw new Error(s.message);this.users=this.users.map(s=>s.id!==t?s:{...s,followerCount:s.followerCount-1,isFollowed:!1})}catch(s){n["a"].fire({icon:"error",title:"無法取消追蹤，請稍後再試"})}}}},c=l,u=e("2877"),d=Object(u["a"])(c,o,a,!1,null,null,null);s["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0b2357.12c82316.js.map