<template>
  <div class="container py-5">
      <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
      <RestaurantsNavPills 
      :categories ="categories"
      />
    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard 
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      :initial-restaurant="restaurant"
      />
    </div>
    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantPagination 
    v-if="totalPage.length > 1"
    :current-page="currentPage"
    :total-page="totalPage"
    :previous-page="previousPage"
    :next-page="nextPage"
    :category-id="categoryId"

    />
  </div>
</template>


<script>
import NavTabs from './../components/NavTabs'
import RestaurantCard from './../components/RestaurantCard.vue'
import RestaurantsNavPills from './../components/RestaurantsNavPills.vue'
import RestaurantPagination from './../components/RestraurantPagination.vue'

const DummyData = {
    "restaurants": [
        {
            "id": 1,
            "name": "Garry Hickle DVM",
            "tel": "1-416-040-8444 x5912",
            "address": "891 Dave Fields",
            "opening_hours": "08:00",
            "description": "Id ut ut tempore.\nQuod maxime et possimus eius qui",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=2.0611641918257373",
            "viewCounts": 0,
            "createdAt": "2022-07-24T03:39:34.000Z",
            "updatedAt": "2022-07-24T03:39:34.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-07-24T03:39:34.000Z",
                "updatedAt": "2022-07-24T03:39:34.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 2,
            "name": "Roberto Lebsack",
            "tel": "(592) 169-0901 x361",
            "address": "70113 Effertz Mill",
            "opening_hours": "08:00",
            "description": "Ut corrupti enim nemo et. Aliquam repellat totam r",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=37.45162930992514",
            "viewCounts": 0,
            "createdAt": "2022-07-24T03:39:34.000Z",
            "updatedAt": "2022-07-24T03:39:34.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-07-24T03:39:34.000Z",
                "updatedAt": "2022-07-24T03:39:34.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 3,
            "name": "Dr. Tommie Mayer",
            "tel": "166.790.2723 x2319",
            "address": "6963 Mohamed Light",
            "opening_hours": "08:00",
            "description": "Sed omnis voluptatem exercitationem consequatur mo",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=99.83185955894062",
            "viewCounts": 0,
            "createdAt": "2022-07-24T03:39:34.000Z",
            "updatedAt": "2022-07-24T03:39:34.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-07-24T03:39:34.000Z",
                "updatedAt": "2022-07-24T03:39:34.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 4,
            "name": "Krista Wolff MD",
            "tel": "(980) 545-0826 x8603",
            "address": "0145 Devante Centers",
            "opening_hours": "08:00",
            "description": "accusantium saepe ex",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=22.010897616130332",
            "viewCounts": 0,
            "createdAt": "2022-07-24T03:39:34.000Z",
            "updatedAt": "2022-07-24T03:39:34.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-07-24T03:39:34.000Z",
                "updatedAt": "2022-07-24T03:39:34.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 5,
            "name": "Donnie Stehr",
            "tel": "273.207.0146",
            "address": "91714 Jones Union",
            "opening_hours": "08:00",
            "description": "quos",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=96.63914680483177",
            "viewCounts": 0,
            "createdAt": "2022-07-24T03:39:34.000Z",
            "updatedAt": "2022-07-24T03:39:34.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-07-24T03:39:34.000Z",
                "updatedAt": "2022-07-24T03:39:34.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 6,
            "name": "Mikayla Schumm",
            "tel": "(349) 148-3394 x753",
            "address": "7983 Alberta Locks",
            "opening_hours": "08:00",
            "description": "Debitis adipisci perspiciatis vitae est. Quidem qu",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=45.47801841274514",
            "viewCounts": 0,
            "createdAt": "2022-07-24T03:39:34.000Z",
            "updatedAt": "2022-07-24T03:39:34.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-07-24T03:39:34.000Z",
                "updatedAt": "2022-07-24T03:39:34.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 7,
            "name": "Mr. Michaela Schoen",
            "tel": "1-666-534-3796",
            "address": "80536 Tromp Mountain",
            "opening_hours": "08:00",
            "description": "Occaecati delectus fugiat impedit maxime et rerum ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=3.5041814437113183",
            "viewCounts": 0,
            "createdAt": "2022-07-24T03:39:34.000Z",
            "updatedAt": "2022-07-24T03:39:34.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-07-24T03:39:34.000Z",
                "updatedAt": "2022-07-24T03:39:34.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 8,
            "name": "Marguerite Ledner",
            "tel": "022.566.1424",
            "address": "1987 Mittie Highway",
            "opening_hours": "08:00",
            "description": "Et et provident quasi eum nihil illum illo accusan",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=0.5223036809306691",
            "viewCounts": 0,
            "createdAt": "2022-07-24T03:39:34.000Z",
            "updatedAt": "2022-07-24T03:39:34.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-07-24T03:39:34.000Z",
                "updatedAt": "2022-07-24T03:39:34.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 9,
            "name": "Genoveva Jacobs",
            "tel": "(978) 074-9813",
            "address": "723 Angeline Walk",
            "opening_hours": "08:00",
            "description": "Tempore quibusdam excepturi. Maiores et aspernatur",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=43.84672923784243",
            "viewCounts": 0,
            "createdAt": "2022-07-24T03:39:34.000Z",
            "updatedAt": "2022-07-24T03:39:34.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-07-24T03:39:34.000Z",
                "updatedAt": "2022-07-24T03:39:34.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 10,
            "name": "Genoveva Gaylord",
            "tel": "961.632.3469 x59629",
            "address": "28212 Mertz Knoll",
            "opening_hours": "08:00",
            "description": "incidunt atque voluptates",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=8.813700180632168",
            "viewCounts": 0,
            "createdAt": "2022-07-24T03:39:34.000Z",
            "updatedAt": "2022-07-24T03:39:34.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-07-24T03:39:34.000Z",
                "updatedAt": "2022-07-24T03:39:34.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        }
    ],
    "categories": [
        {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2022-07-24T03:39:34.000Z",
            "updatedAt": "2022-07-24T03:39:34.000Z"
        },
        {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2022-07-24T03:39:34.000Z",
            "updatedAt": "2022-07-24T03:39:34.000Z"
        },
        {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2022-07-24T03:39:34.000Z",
            "updatedAt": "2022-07-24T03:39:34.000Z"
        },
        {
            "id": 4,
            "name": "墨西哥料理",
            "createdAt": "2022-07-24T03:39:34.000Z",
            "updatedAt": "2022-07-24T03:39:34.000Z"
        },
        {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2022-07-24T03:39:34.000Z",
            "updatedAt": "2022-07-24T03:39:34.000Z"
        },
        {
            "id": 6,
            "name": "美式料理",
            "createdAt": "2022-07-24T03:39:34.000Z",
            "updatedAt": "2022-07-24T03:39:34.000Z"
        },
        {
            "id": 7,
            "name": "複合式料理",
            "createdAt": "2022-07-24T03:39:34.000Z",
            "updatedAt": "2022-07-24T03:39:34.000Z"
        }
    ],
    "categoryId": "",
    "page": 1,
    "totalPage": [
        1,
        2,
        3,
        4,
        5
    ],
    "prev": 1,
    "next": 2
}


export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantPagination,
  },
  data(){
    return{
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage:[],
      previousPage: -1,
      nextPage: -1
    }
  },
  methods: {
    fetchRestaurants(){
      const {restaurants, categories, categoryId, page, totalPage} = DummyData
      this.restaurants = restaurants,
      this.categories = categories,
      this.categoryId = categoryId,
      this.currentPage = page,
      this.totalPage = totalPage
    }
  },
  created() {
    this.fetchRestaurants()
  }
}
</script>