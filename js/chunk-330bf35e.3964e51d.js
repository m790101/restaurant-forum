(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-330bf35e"],{be6c:function(t,e,a){"use strict";var s=a("2fa3");e["a"]={category:{get(){return s["b"].get("/admin/categories")},delete({categoryId:t}){return s["b"].delete("/admin/categories/"+t)},create({name:t}){return s["b"].post("/admin/categories",{name:t})},update({categoryId:t,name:e}){return s["b"].put("/admin/categories/"+t,{name:e})}},restaurants:{create({formData:t}){return s["b"].post("/admin/restaurants",t)},get(){return s["b"].get("/admin/restaurants")},delete({restaurantId:t}){return s["b"].delete("/admin/restaurants/"+t)},getDetail({restaurantId:t}){return s["b"].get("/admin/restaurants/"+t)},update({restaurantId:t,formData:e}){return s["b"].put("/admin/restaurants/"+t,e)}},getAdminUsers(){return s["b"].get("/admin/users")},setAdmin({userId:t,isAdmin:e}){return s["b"].put("/admin/users/"+t,{isAdmin:e})}}},f91c:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container py-5"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("h1",[t._v(t._s(t.restaurant.name))]),e("span",{staticClass:"badge badge-secondary mt-1 mb-3"},[t._v(" "+t._s(t.restaurant.categoryName)+" ")])]),e("div",{staticClass:"col-md-4"},[e("img",{staticClass:"img-responsive center-block",staticStyle:{width:"250px","margin-bottom":"25px"},attrs:{src:t._f("emptyImage")(t.restaurant.image)}}),e("div",{staticClass:"well"},[e("ul",{staticClass:"list-unstyled"},[e("li",[e("strong",[t._v("Opening Hour:")]),t._v(" "+t._s(t.restaurant.openingHours)+" ")]),e("li",[e("strong",[t._v("Tel:")]),t._v(" "+t._s(t.restaurant.tel)+" ")]),e("li",[e("strong",[t._v("Address:")]),t._v(" "+t._s(t.restaurant.address)+" ")])])])]),e("div",{staticClass:"col-md-8"},[e("p",[t._v(t._s(t.restaurant.description))])])]),e("hr"),e("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(e){return t.$router.back()}}},[t._v("回上一頁")])])},r=[],n=a("2708"),i=a("be6c"),u=a("2fa3"),o={name:"AdminRestaurant",mixins:[n["a"]],data(){return{restaurant:{id:-1,name:"",categoryName:"",image:"",openingHours:"",tel:"",address:"",description:""}}},mounted(){const{id:t}=this.$route.params;this.fetchRestaurant(t)},methods:{async fetchRestaurant(t){try{const{data:e}=await i["a"].restaurants.getDetail({restaurantId:t});console.log(e);const{restaurant:a}=e;this.restaurant={...this.restaurant,id:a.id,name:a.name,categoryName:a.Category.name,image:a.image,openingHours:a.opening_hours,tel:a.tel,address:a.address,description:a.description}}catch(e){console.log(e),u["a"].fire({icon:"error",title:"無法刪除餐廳，請稍後再試"})}}},beforeRouteUpdate(t,e,a){const{id:s}=t.params;this.fetchRestaurant(s),a()}},d=o,c=a("2877"),m=Object(c["a"])(d,s,r,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-330bf35e.3964e51d.js.map