<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <div class="row text-center">
      <UserCard
      v-for="user in users"
      :key="user.id"
      :user-initial ="user"
      />
    </div>
  </div>
</template>

<script>
const DummyData ={
    "users": [
        {
            "id": 1,
            "name": "root",
            "email": "root@example.com",
            "password": "$2a$10$P1MruOEGdDKTr.1PGIoP9OXAKsZa9hG8oZscOh1SoSZDki.WA0EJG",
            "isAdmin": true,
            "image": null,
            "createdAt": "2022-07-24T03:39:33.000Z",
            "updatedAt": "2022-07-24T03:39:33.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 2,
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$hjEEtJTIUExEjUhhAH2yfeYcJhgmqdAyltjlC4kSF9fHc7PrQxNmK",
            "isAdmin": false,
            "image": null,
            "createdAt": "2022-07-24T03:39:34.000Z",
            "updatedAt": "2022-07-24T03:39:34.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 3,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$aEl4KjuD24yirpB5aozekOwbHmUuun9wjF9zorsMjktUj6hDelDxS",
            "isAdmin": false,
            "image": null,
            "createdAt": "2022-07-24T03:39:34.000Z",
            "updatedAt": "2022-07-24T03:39:34.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        }
    ]
}
import NavTabs from './../components/NavTabs'
import UserCard from './../components/UserCard.vue'


export default {
  data(){
    return{
      users: DummyData.users
    }
  },
  components: {
    NavTabs,
    UserCard
  }
}
</script>