<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail 
    :initial-restaurant="restaurant"
    />
    <hr>
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments 
    :restaurant-comments="restaurantComments"
    @after-delete-comment="afterDeleteComment"
    />
    <!-- 新增評論 CreateComment -->
    <CreateComment 
    :restaurant-id="restaurant.id"
    @after-create-comment="afterCreateComment"
    />
  </div>
</template>

<script>
const dummyData = {
    "restaurant": {
        "id": 1,
        "name": "Garry Hickle DVM",
        "tel": "1-416-040-8444 x5912",
        "address": "891 Dave Fields",
        "opening_hours": "08:00",
        "description": "Id ut ut tempore.\nQuod maxime et possimus eius qui.\nPorro et voluptates.\nVoluptatibus quia architecto omnis necessitatibus vitae nihil.\nLaborum nostrum numquam a voluptatum dolores cum aut.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=2.0611641918257373",
        "viewCounts": 1,
        "createdAt": "2022-07-24T03:39:34.000Z",
        "updatedAt": "2022-07-25T05:50:38.941Z",
        "CategoryId": 1,
        "Category": {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2022-07-24T03:39:34.000Z",
            "updatedAt": "2022-07-24T03:39:34.000Z"
        },
        "FavoritedUsers": [],
        "LikedUsers": [],
        "Comments": [
            {
                "id": 101,
                "text": "Excepturi esse recusandae vitae fuga aut.",
                "UserId": 2,
                "RestaurantId": 1,
                "createdAt": "2022-07-24T03:39:34.000Z",
                "updatedAt": "2022-07-24T03:39:34.000Z",
                "User": {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$hjEEtJTIUExEjUhhAH2yfeYcJhgmqdAyltjlC4kSF9fHc7PrQxNmK",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-07-24T03:39:34.000Z",
                    "updatedAt": "2022-07-24T03:39:34.000Z"
                }
            },
            {
                "id": 51,
                "text": "Ipsam dolorum rerum et a ut.",
                "UserId": 2,
                "RestaurantId": 1,
                "createdAt": "2022-07-24T03:39:34.000Z",
                "updatedAt": "2022-07-24T03:39:34.000Z",
                "User": {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$hjEEtJTIUExEjUhhAH2yfeYcJhgmqdAyltjlC4kSF9fHc7PrQxNmK",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-07-24T03:39:34.000Z",
                    "updatedAt": "2022-07-24T03:39:34.000Z"
                }
            },
            {
                "id": 1,
                "text": "Et ut alias sint molestiae pariatur labore minus perspiciatis repudiandae.",
                "UserId": 2,
                "RestaurantId": 1,
                "createdAt": "2022-07-24T03:39:34.000Z",
                "updatedAt": "2022-07-24T03:39:34.000Z",
                "User": {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$hjEEtJTIUExEjUhhAH2yfeYcJhgmqdAyltjlC4kSF9fHc7PrQxNmK",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-07-24T03:39:34.000Z",
                    "updatedAt": "2022-07-24T03:39:34.000Z"
                }
            }
        ]
    },
    "isFavorited": false,
    "isLiked": false
}

import RestaurantDetail from './../components/RestaurantDetail.vue'
import RestaurantComments from './../components/RestaurantComments.vue'
import CreateComment from './../components/CreateComment.vue'

const dummyUser = {
    currentUser: {
    "id": 1,
    "name": "root",
    "email": "root@example.com",
    "image": null,
    "isAdmin": true
}
}

export default {
    data(){
        return{
            restaurant:{
                id: -1,
                name: '',
                categoryName: '',
                image: '',
                openingHours: '',
                tel: '',
                address: '',
                description: '',
                isFavorited: false,
                isLiked: false
            },
             restaurantComments: [],
             currentUser: dummyUser.currentUser
        }
    },
    components:{
        RestaurantDetail,
        RestaurantComments,
        CreateComment
    },
    methods: {
        fetchRestaurant(restaurantId){
            console.log(restaurantId)
            this.restaurant = {
                id: dummyData.restaurant.id,
                name: dummyData.restaurant.name,
                categoryName: dummyData.restaurant.Category.name,
                image: dummyData.restaurant.image,
                openingHours: dummyData.restaurant.opening_hours,
                tel: dummyData.restaurant.tel,
                address: dummyData.restaurant.address,
                description: dummyData.restaurant.description,
                isFavorited: dummyData.isFavorited,
                isLiked: dummyData.isLiked,
            }
            this.restaurantComments = dummyData.restaurant.Comments
        },
        afterDeleteComment(commentId){
            this.restaurantComments = this.restaurantComments.filter(comment => comment.id !== commentId) 
        },
        afterCreateComment(payload){
            const {commentId, restaurantId, text} = payload
            this.restaurantComments.push({
                id: commentId,
                text,
                RestaurantId: restaurantId,
                createdAt: new Date(),
                User: {
                    id: this.currentUser.id,
                    name: this.currentUser.name
                    }
            })
        }
    },
    created(){
        console.log(this.$route.params)
        const {id: restaurantId} = this.$route.params
        this.fetchRestaurant(restaurantId)

    }
}
</script>