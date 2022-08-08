(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04d27740"],{5652:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container py-5"},[e("AdminNav"),e("form",{staticClass:"my-4"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-auto"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newCategoryName,expression:"newCategoryName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"新增餐廳類別..."},domProps:{value:t.newCategoryName},on:{input:function(e){e.target.composing||(t.newCategoryName=e.target.value)}}})]),e("div",{staticClass:"col-auto"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:t.isProcessing},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.createCategory.apply(null,arguments)}}},[t._v(" 新增 ")])])])]),e("table",{staticClass:"table"},[t._m(0),e("tbody",t._l(t.categories,(function(a){return e("tr",{key:a.id},[e("th",{attrs:{scope:"row"}},[t._v(" "+t._s(a.id)+" ")]),e("td",{staticClass:"position-relative"},[e("div",{directives:[{name:"show",rawName:"v-show",value:!a.isEditing,expression:"!category.isEditing"}],staticClass:"category-name"},[t._v(" "+t._s(a.name)+" ")]),e("input",{directives:[{name:"show",rawName:"v-show",value:a.isEditing,expression:"category.isEditing"},{name:"model",rawName:"v-model",value:a.name,expression:"category.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:a.name},on:{input:function(e){e.target.composing||t.$set(a,"name",e.target.value)}}}),e("span",{directives:[{name:"show",rawName:"v-show",value:a.isEditing,expression:"category.isEditing"}],staticClass:"cancel",on:{click:function(e){return t.handleCancel(a.id)}}},[t._v(" ✕ ")])]),e("td",{staticClass:"d-flex justify-content-between"},[e("button",{directives:[{name:"show",rawName:"v-show",value:!a.isEditing,expression:"!category.isEditing"}],staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toggleIsEditing(a.id)}}},[t._v(" Edit ")]),e("button",{directives:[{name:"show",rawName:"v-show",value:a.isEditing,expression:"category.isEditing"}],staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.updateCategory({categoryId:a.id,name:a.name})}}},[t._v(" Save ")]),e("button",{staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteCategory(a.id)}}},[t._v(" Delete ")])])])})),0)])],1)},i=[function(){var t=this,e=t._self._c;return e("thead",{staticClass:"thead-dark"},[e("tr",[e("th",{attrs:{scope:"col",width:"60"}},[t._v("#")]),e("th",{attrs:{scope:"col"}},[t._v("Category Name")]),e("th",{attrs:{scope:"col",width:"210"}},[t._v("Action")])])])}],r=(a("d9e2"),a("be6c")),n=a("f9db"),o=a("2fa3"),c={components:{AdminNav:n["a"]},data(){return{categories:[],newCategoryName:"",isProcessing:!1}},created(){this.fetchCategories()},methods:{async fetchCategories(){try{const{data:t}=await r["a"].category.get();this.categories=t.categories,this.categories=this.categories.map(t=>({...t,isEditing:!1}))}catch(t){console.log(t),o["a"].fire({icon:"error",title:"無法取得餐廳類別，請稍後再試"})}},async createCategory(){try{this.isProcessing=!0;const{data:t}=await r["a"].category.create({name:this.newCategoryName});if("success"!==t.status)throw new Error(t.status);this.categories.push({id:t.categoryId,name:this.newCategoryName,isEditing:!1}),this.isProcessing=!1}catch(t){this.isProcessing=!1,console.log(t),o["a"].fire({icon:"error",title:"無法新增餐廳類別，請稍後再試"})}this.newCategoryName=""},async deleteCategory(t){try{const{data:e}=await r["a"].category.delete({categoryId:t});if("success"!==e.status)throw new Error(e.message);this.categories=this.categories.filter(e=>e.id!==t)}catch(e){console.log(e)}},toggleIsEditing(t){this.categories=this.categories.map(e=>e.id===t?{...e,isEditing:!e.isEditing,nameCached:e.name}:e)},async updateCategory({categoryId:t,name:e}){try{const{data:a}=await r["a"].category.update({categoryId:t,name:e});if("success"!==a.status)throw new Error(a.message);this.toggleIsEditing(t)}catch(a){console.log(a),o["a"].fire({icon:"error",title:"無法更新餐廳類別，請稍後再試"})}},handleCancel(t){this.categories=this.categories.map(e=>e.id===t?{...e,name:e.nameCached}:e),this.toggleIsEditing(t)}}},d=c,u=(a("c0af"),a("2877")),g=Object(u["a"])(d,s,i,!1,null,"116f0fea",null);e["default"]=g.exports},6161:function(t,e,a){},be6c:function(t,e,a){"use strict";var s=a("2fa3");e["a"]={category:{get(){return s["b"].get("/admin/categories")},delete({categoryId:t}){return s["b"].delete("/admin/categories/"+t)},create({name:t}){return s["b"].post("/admin/categories",{name:t})},update({categoryId:t,name:e}){return s["b"].put("/admin/categories/"+t,{name:e})}},restaurants:{create({formData:t}){return s["b"].post("/admin/restaurants",t)},get(){return s["b"].get("/admin/restaurants")},delete({restaurantId:t}){return s["b"].delete("/admin/restaurants/"+t)},getDetail({restaurantId:t}){return s["b"].get("/admin/restaurants/"+t)},update({restaurantId:t,formData:e}){return s["b"].put("/admin/restaurants/"+t,e)}},getAdminUsers(){return s["b"].get("/admin/users")},setAdmin({userId:t,isAdmin:e}){return s["b"].put("/admin/users/"+t,{isAdmin:e})}}},c0af:function(t,e,a){"use strict";a("6161")},f9db:function(t,e,a){"use strict";var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-3"},[e("h1",[t._v("餐廳後台")]),e("router-link",{attrs:{to:"/admin/restaurants"}},[t._v("Restaurants")]),t._v(" | "),e("router-link",{attrs:{to:"/admin/categories"}},[t._v("Categories")]),t._v(" | "),e("router-link",{attrs:{to:"/admin/users"}},[t._v("Users")])],1)},i=[],r=a("2877"),n={},o=Object(r["a"])(n,s,i,!1,null,null,null);e["a"]=o.exports}}]);
//# sourceMappingURL=chunk-04d27740.f944f82b.js.map