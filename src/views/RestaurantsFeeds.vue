<template>
  <div class="container py-5">
    <NavTabs />

    <h1 class="mt-5">
      最新動態
    </h1>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants :restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewestComments :comments="comments" />
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import NewestRestaurants from './../components/NewestRestaurants.vue'
import NewestComments from './../components/NewestComments.vue'
const dummyData = {
    "restaurants": [
        {
            "id": 1,
            "name": "Garry Hickle DVM",
            "tel": "1-416-040-8444 x5912",
            "address": "891 Dave Fields",
            "opening_hours": "08:00",
            "description": "Id ut ut tempore.\nQuod maxime et possimus eius qui.\nPorro et voluptates.\nVoluptatibus quia architecto omnis necessitatibus vitae nihil.\nLaborum nostrum numquam a voluptatum dolores cum aut.",
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
            }
        },
        {
            "id": 2,
            "name": "Roberto Lebsack",
            "tel": "(592) 169-0901 x361",
            "address": "70113 Effertz Mill",
            "opening_hours": "08:00",
            "description": "Ut corrupti enim nemo et. Aliquam repellat totam ratione libero iure ut nihil perferendis culpa. Velit non facilis reprehenderit eum architecto sit suscipit. Voluptate perferendis sit deserunt cupiditate. Voluptatem in placeat quo ad. Voluptas nobis aut facere similique esse quidem porro soluta officia.",
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
            }
        },
        {
            "id": 3,
            "name": "Dr. Tommie Mayer",
            "tel": "166.790.2723 x2319",
            "address": "6963 Mohamed Light",
            "opening_hours": "08:00",
            "description": "Sed omnis voluptatem exercitationem consequatur molestiae. Aliquam consequatur quam. Debitis est quaerat ullam voluptatem. Ea facilis debitis numquam est dolorem molestias. Tempora et aspernatur in adipisci eos. Accusantium sit ab dolore maxime vel.\n \rDoloribus odio et dignissimos molestias aut nihil saepe. Ex qui quae iusto sit non suscipit eius numquam rerum. Itaque voluptates quod numquam ut assumenda delectus. Beatae quo maxime dolor hic et perferendis ad libero. Perspiciatis perspiciatis sunt. Dolorem est voluptas architecto voluptatem.\n \rVoluptatem tempora et assumenda dicta quo repudiandae consequatur veniam. Cum occaecati praesentium aut qui voluptatem maiores ab. Ut ipsum quibusdam non quae repellendus rerum et voluptatem. Aut in vero dolores doloremque possimus porro saepe occaecati nulla.",
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
            }
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
            }
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
            }
        },
        {
            "id": 6,
            "name": "Mikayla Schumm",
            "tel": "(349) 148-3394 x753",
            "address": "7983 Alberta Locks",
            "opening_hours": "08:00",
            "description": "Debitis adipisci perspiciatis vitae est. Quidem quae fugit dolores nesciunt officia corporis. Consectetur totam eaque sit minima exercitationem ut non necessitatibus. Ipsa qui eligendi hic enim aut voluptas.",
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
            }
        },
        {
            "id": 7,
            "name": "Mr. Michaela Schoen",
            "tel": "1-666-534-3796",
            "address": "80536 Tromp Mountain",
            "opening_hours": "08:00",
            "description": "Occaecati delectus fugiat impedit maxime et rerum molestiae. Esse maxime atque enim. Tempora laudantium dolore odit. Tempora voluptas aut velit ab quae est eius necessitatibus non.",
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
            }
        },
        {
            "id": 8,
            "name": "Marguerite Ledner",
            "tel": "022.566.1424",
            "address": "1987 Mittie Highway",
            "opening_hours": "08:00",
            "description": "Et et provident quasi eum nihil illum illo accusantium quibusdam. Aperiam asperiores magni. Blanditiis maxime iure culpa blanditiis rem vitae quam. Ipsam velit eaque modi neque dolore ut.\n \rIllo sit est fugit eligendi consectetur ea. Vitae totam aut qui fugit perferendis qui rerum dolorem eos. Voluptatem tempora at recusandae sunt unde. Sapiente omnis sint facilis alias ab assumenda. Vero odit placeat iure dicta repellat sunt quo. Ab sed sit aut atque.\n \rUllam quo nemo occaecati. At voluptatem odio veritatis in fugit impedit dolor. Ut optio beatae aliquid aut harum nobis qui ipsam non.",
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
            }
        },
        {
            "id": 9,
            "name": "Genoveva Jacobs",
            "tel": "(978) 074-9813",
            "address": "723 Angeline Walk",
            "opening_hours": "08:00",
            "description": "Tempore quibusdam excepturi. Maiores et aspernatur minus aliquam quis vitae. Eaque velit accusantium officia dolorem omnis eius. Ad vel et qui delectus.",
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
            }
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
            }
        }
    ],
    "comments": [
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
            },
            "Restaurant": {
                "id": 1,
                "name": "Garry Hickle DVM",
                "tel": "1-416-040-8444 x5912",
                "address": "891 Dave Fields",
                "opening_hours": "08:00",
                "description": "Id ut ut tempore.\nQuod maxime et possimus eius qui.\nPorro et voluptates.\nVoluptatibus quia architecto omnis necessitatibus vitae nihil.\nLaborum nostrum numquam a voluptatum dolores cum aut.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=2.0611641918257373",
                "viewCounts": 0,
                "createdAt": "2022-07-24T03:39:34.000Z",
                "updatedAt": "2022-07-24T03:39:34.000Z",
                "CategoryId": 1
            }
        },
        {
            "id": 2,
            "text": "Nobis aut harum.",
            "UserId": 1,
            "RestaurantId": 2,
            "createdAt": "2022-07-24T03:39:34.000Z",
            "updatedAt": "2022-07-24T03:39:34.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$P1MruOEGdDKTr.1PGIoP9OXAKsZa9hG8oZscOh1SoSZDki.WA0EJG",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-07-24T03:39:33.000Z",
                "updatedAt": "2022-07-24T03:39:33.000Z"
            },
            "Restaurant": {
                "id": 2,
                "name": "Roberto Lebsack",
                "tel": "(592) 169-0901 x361",
                "address": "70113 Effertz Mill",
                "opening_hours": "08:00",
                "description": "Ut corrupti enim nemo et. Aliquam repellat totam ratione libero iure ut nihil perferendis culpa. Velit non facilis reprehenderit eum architecto sit suscipit. Voluptate perferendis sit deserunt cupiditate. Voluptatem in placeat quo ad. Voluptas nobis aut facere similique esse quidem porro soluta officia.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=37.45162930992514",
                "viewCounts": 0,
                "createdAt": "2022-07-24T03:39:34.000Z",
                "updatedAt": "2022-07-24T03:39:34.000Z",
                "CategoryId": 5
            }
        },
        {
            "id": 3,
            "text": "Placeat voluptatem ipsam ea ab.",
            "UserId": 3,
            "RestaurantId": 3,
            "createdAt": "2022-07-24T03:39:34.000Z",
            "updatedAt": "2022-07-24T03:39:34.000Z",
            "User": {
                "id": 3,
                "name": "user2",
                "email": "user2@example.com",
                "password": "$2a$10$aEl4KjuD24yirpB5aozekOwbHmUuun9wjF9zorsMjktUj6hDelDxS",
                "isAdmin": false,
                "image": null,
                "createdAt": "2022-07-24T03:39:34.000Z",
                "updatedAt": "2022-07-24T03:39:34.000Z"
            },
            "Restaurant": {
                "id": 3,
                "name": "Dr. Tommie Mayer",
                "tel": "166.790.2723 x2319",
                "address": "6963 Mohamed Light",
                "opening_hours": "08:00",
                "description": "Sed omnis voluptatem exercitationem consequatur molestiae. Aliquam consequatur quam. Debitis est quaerat ullam voluptatem. Ea facilis debitis numquam est dolorem molestias. Tempora et aspernatur in adipisci eos. Accusantium sit ab dolore maxime vel.\n \rDoloribus odio et dignissimos molestias aut nihil saepe. Ex qui quae iusto sit non suscipit eius numquam rerum. Itaque voluptates quod numquam ut assumenda delectus. Beatae quo maxime dolor hic et perferendis ad libero. Perspiciatis perspiciatis sunt. Dolorem est voluptas architecto voluptatem.\n \rVoluptatem tempora et assumenda dicta quo repudiandae consequatur veniam. Cum occaecati praesentium aut qui voluptatem maiores ab. Ut ipsum quibusdam non quae repellendus rerum et voluptatem. Aut in vero dolores doloremque possimus porro saepe occaecati nulla.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=99.83185955894062",
                "viewCounts": 0,
                "createdAt": "2022-07-24T03:39:34.000Z",
                "updatedAt": "2022-07-24T03:39:34.000Z",
                "CategoryId": 1
            }
        },
        {
            "id": 4,
            "text": "Repellat maiores quasi aspernatur magnam qui eos.",
            "UserId": 2,
            "RestaurantId": 4,
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
            },
            "Restaurant": {
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
                "CategoryId": 5
            }
        },
        {
            "id": 5,
            "text": "Inventore consequatur illo quia doloremque porro.",
            "UserId": 2,
            "RestaurantId": 5,
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
            },
            "Restaurant": {
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
                "CategoryId": 2
            }
        },
        {
            "id": 6,
            "text": "Sunt et nemo voluptas nemo.",
            "UserId": 2,
            "RestaurantId": 6,
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
            },
            "Restaurant": {
                "id": 6,
                "name": "Mikayla Schumm",
                "tel": "(349) 148-3394 x753",
                "address": "7983 Alberta Locks",
                "opening_hours": "08:00",
                "description": "Debitis adipisci perspiciatis vitae est. Quidem quae fugit dolores nesciunt officia corporis. Consectetur totam eaque sit minima exercitationem ut non necessitatibus. Ipsa qui eligendi hic enim aut voluptas.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=45.47801841274514",
                "viewCounts": 0,
                "createdAt": "2022-07-24T03:39:34.000Z",
                "updatedAt": "2022-07-24T03:39:34.000Z",
                "CategoryId": 3
            }
        },
        {
            "id": 7,
            "text": "Minima neque officiis non at ut quia exercitationem deleniti.",
            "UserId": 2,
            "RestaurantId": 7,
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
            },
            "Restaurant": {
                "id": 7,
                "name": "Mr. Michaela Schoen",
                "tel": "1-666-534-3796",
                "address": "80536 Tromp Mountain",
                "opening_hours": "08:00",
                "description": "Occaecati delectus fugiat impedit maxime et rerum molestiae. Esse maxime atque enim. Tempora laudantium dolore odit. Tempora voluptas aut velit ab quae est eius necessitatibus non.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=3.5041814437113183",
                "viewCounts": 0,
                "createdAt": "2022-07-24T03:39:34.000Z",
                "updatedAt": "2022-07-24T03:39:34.000Z",
                "CategoryId": 1
            }
        },
        {
            "id": 8,
            "text": "Libero sed ab eaque nesciunt nostrum aspernatur.",
            "UserId": 2,
            "RestaurantId": 8,
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
            },
            "Restaurant": {
                "id": 8,
                "name": "Marguerite Ledner",
                "tel": "022.566.1424",
                "address": "1987 Mittie Highway",
                "opening_hours": "08:00",
                "description": "Et et provident quasi eum nihil illum illo accusantium quibusdam. Aperiam asperiores magni. Blanditiis maxime iure culpa blanditiis rem vitae quam. Ipsam velit eaque modi neque dolore ut.\n \rIllo sit est fugit eligendi consectetur ea. Vitae totam aut qui fugit perferendis qui rerum dolorem eos. Voluptatem tempora at recusandae sunt unde. Sapiente omnis sint facilis alias ab assumenda. Vero odit placeat iure dicta repellat sunt quo. Ab sed sit aut atque.\n \rUllam quo nemo occaecati. At voluptatem odio veritatis in fugit impedit dolor. Ut optio beatae aliquid aut harum nobis qui ipsam non.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=0.5223036809306691",
                "viewCounts": 0,
                "createdAt": "2022-07-24T03:39:34.000Z",
                "updatedAt": "2022-07-24T03:39:34.000Z",
                "CategoryId": 2
            }
        },
        {
            "id": 9,
            "text": "Occaecati qui voluptas dolorum sit laborum ipsa corrupti.",
            "UserId": 2,
            "RestaurantId": 9,
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
            },
            "Restaurant": {
                "id": 9,
                "name": "Genoveva Jacobs",
                "tel": "(978) 074-9813",
                "address": "723 Angeline Walk",
                "opening_hours": "08:00",
                "description": "Tempore quibusdam excepturi. Maiores et aspernatur minus aliquam quis vitae. Eaque velit accusantium officia dolorem omnis eius. Ad vel et qui delectus.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=43.84672923784243",
                "viewCounts": 0,
                "createdAt": "2022-07-24T03:39:34.000Z",
                "updatedAt": "2022-07-24T03:39:34.000Z",
                "CategoryId": 4
            }
        },
        {
            "id": 10,
            "text": "Officia et sunt.",
            "UserId": 3,
            "RestaurantId": 10,
            "createdAt": "2022-07-24T03:39:34.000Z",
            "updatedAt": "2022-07-24T03:39:34.000Z",
            "User": {
                "id": 3,
                "name": "user2",
                "email": "user2@example.com",
                "password": "$2a$10$aEl4KjuD24yirpB5aozekOwbHmUuun9wjF9zorsMjktUj6hDelDxS",
                "isAdmin": false,
                "image": null,
                "createdAt": "2022-07-24T03:39:34.000Z",
                "updatedAt": "2022-07-24T03:39:34.000Z"
            },
            "Restaurant": {
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
                "CategoryId": 5
            }
        }
    ]
}

export default {
  data(){
    return {
      restaurants: [],
      comments: []
    }
  },
  methods:{
    fetchFeeds() {
      this.restaurants = dummyData.restaurants
      this.comments = dummyData.comments
    }
  },
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments
  },
  created() {
    this.fetchFeeds()
  }
}
</script>