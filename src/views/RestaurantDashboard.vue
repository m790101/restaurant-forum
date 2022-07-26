<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr>

    <ul>
      <li>評論數： {{ restaurant.commentsLength }} </li>
      <li>瀏覽次數： {{ restaurant.viewCounts }} </li>
    </ul>

    <button
      type="button"
      class="btn btn-link"
      @click="$router.back()"
    >
      回上一頁
    </button>
  </div>
</template>

<script>
const dummyData= {
    "restaurant": {
        "id": 1,
        "name": "Garry Hickle DVM",
        "tel": "1-416-040-8444 x5912",
        "address": "891 Dave Fields",
        "opening_hours": "08:00",
        "description": "Id ut ut tempore.\nQuod maxime et possimus eius qui.\nPorro et voluptates.\nVoluptatibus quia architecto omnis necessitatibus vitae nihil.\nLaborum nostrum numquam a voluptatum dolores cum aut.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=2.0611641918257373",
        "viewCounts": 2,
        "createdAt": "2022-07-24T03:39:34.000Z",
        "updatedAt": "2022-07-25T16:01:19.000Z",
        "CategoryId": 1,
        "Category": {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2022-07-24T03:39:34.000Z",
            "updatedAt": "2022-07-24T03:39:34.000Z"
        },
        "Comments": [
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
            }
        ]
    }
}

export default {
  data(){
    return{
      restaurant: {
        ...dummyData.restaurant,
        commentsLength: dummyData.restaurant.Comments.length
      }
    }
  }
}

</script>