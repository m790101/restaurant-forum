<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>
    <hr>
    <RestaurantTopCard
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      :restaurant-top-card="restaurant"
    />
  </div>
</template>



<script>
const dummyData = {
    "restaurants": [
        {
            "id": 50,
            "name": "Hermina Kessler",
            "tel": "1-054-006-6017",
            "address": "2210 Della Shore",
            "opening_hours": "08:00",
            "description": "Exercitationem quaerat rem adipisci molestiae repe",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=39.034387464306874",
            "viewCounts": 0,
            "createdAt": "2022-07-24T03:39:34.000Z",
            "updatedAt": "2022-07-24T03:39:34.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 49,
            "name": "Robyn Lowe II",
            "tel": "(484) 132-1579 x8046",
            "address": "94476 Breitenberg Locks",
            "opening_hours": "08:00",
            "description": "Aliquid illum repudiandae necessitatibus sint tota",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=97.03436614024446",
            "viewCounts": 0,
            "createdAt": "2022-07-24T03:39:34.000Z",
            "updatedAt": "2022-07-24T03:39:34.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 48,
            "name": "Alexandrea Gerhold",
            "tel": "1-436-105-1595",
            "address": "0009 Smith Islands",
            "opening_hours": "08:00",
            "description": "Veniam eaque aut. Vero perferendis eos nemo. Dolor",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=86.22438709809114",
            "viewCounts": 0,
            "createdAt": "2022-07-24T03:39:34.000Z",
            "updatedAt": "2022-07-24T03:39:34.000Z",
            "CategoryId": 4,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 47,
            "name": "Emilie Brown",
            "tel": "1-456-117-0346 x163",
            "address": "148 Bernhard Motorway",
            "opening_hours": "08:00",
            "description": "Deserunt pariatur facilis aut fugit quia. Consequa",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=17.142380323217843",
            "viewCounts": 0,
            "createdAt": "2022-07-24T03:39:34.000Z",
            "updatedAt": "2022-07-24T03:39:34.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 46,
            "name": "Lorna Osinski",
            "tel": "(708) 017-4205 x00654",
            "address": "340 Jedediah Rapids",
            "opening_hours": "08:00",
            "description": "harum aliquid dignissimos",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=75.58119324888226",
            "viewCounts": 0,
            "createdAt": "2022-07-24T03:39:34.000Z",
            "updatedAt": "2022-07-24T03:39:34.000Z",
            "CategoryId": 5,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 45,
            "name": "Royal Mayer",
            "tel": "791-447-8619 x672",
            "address": "9017 Grayson Tunnel",
            "opening_hours": "08:00",
            "description": "illum minima possimus",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=98.37544457312413",
            "viewCounts": 0,
            "createdAt": "2022-07-24T03:39:34.000Z",
            "updatedAt": "2022-07-24T03:39:34.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 44,
            "name": "Miss Shirley Kuhlman",
            "tel": "(165) 089-2956 x033",
            "address": "378 Gislason Circles",
            "opening_hours": "08:00",
            "description": "Harum tempore ipsa suscipit minus voluptatum.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=80.24586003757067",
            "viewCounts": 0,
            "createdAt": "2022-07-24T03:39:34.000Z",
            "updatedAt": "2022-07-24T03:39:34.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 43,
            "name": "Van Gusikowski III",
            "tel": "183-448-1469 x97787",
            "address": "21113 Vicente Crossroad",
            "opening_hours": "08:00",
            "description": "sunt",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=88.2770454362505",
            "viewCounts": 0,
            "createdAt": "2022-07-24T03:39:34.000Z",
            "updatedAt": "2022-07-24T03:39:34.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 42,
            "name": "Antwan Larkin Sr.",
            "tel": "420.529.4499",
            "address": "479 Okey Mountains",
            "opening_hours": "08:00",
            "description": "Omnis nesciunt dolorem. Enim repellat et consequat",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=67.63022583813394",
            "viewCounts": 0,
            "createdAt": "2022-07-24T03:39:34.000Z",
            "updatedAt": "2022-07-24T03:39:34.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 41,
            "name": "Judge Beatty",
            "tel": "093.081.9787 x157",
            "address": "14716 Ida Dale",
            "opening_hours": "08:00",
            "description": "Soluta occaecati aspernatur quos corrupti eius vol",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=55.243984530291755",
            "viewCounts": 0,
            "createdAt": "2022-07-24T03:39:34.000Z",
            "updatedAt": "2022-07-24T03:39:34.000Z",
            "CategoryId": 4,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        }
    ]
}

import NavTabs from './../components/NavTabs'
import RestaurantTopCard from './../components/RestaurantTopCard.vue'
export default {
  data(){
    return {
      restaurants: []
    }
  },
  components: {
    NavTabs,
    RestaurantTopCard
  },
  methods: {
    fetchdata(){
       this.restaurants = dummyData.restaurants
    }
  },
  created(){
    this.fetchdata()
  }
}
</script>