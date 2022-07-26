<template>
        <div
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
    >
      <div class="row no-gutters" >
        <div class="col-md-4">
          <a href="#">
            <img
              class="card-img"
              :src="restaurant.image"
            >
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{restaurant.name}}
            </h5>
            <span class="badge badge-secondary bg-dark">收藏數：{{restaurant.FavoriteCount}}</span>
            <p class="card-text">
              {{restaurant.description}}
            </p>
            <a
              href="#"
              class="btn btn-primary mr-2"
            >Show</a>

            <button
              type="button"
              class="btn btn-danger mr-2"
              v-if="restaurant.isFavorited"
              @click="removeFavorite()"
            >
              移除最愛
            </button>
            <button
              type="button"
              class="btn btn-primary"
              v-else
              @click="addFavorite()"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            restaurant: this.restaurantTopCard
        }
    },
    props: {
        restaurantTopCard: {
            type: Object,
            required: true
        }
    },
    methods: {
        addFavorite(){
            this.restaurant = {
                ...this.restaurant,
                isFavorited: true
            }
        },
         removeFavorite(){
            this.restaurant = {
                ...this.restaurant,
                isFavorited: false
            }
        }
    }
}
</script>