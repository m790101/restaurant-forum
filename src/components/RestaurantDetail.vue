<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>Judy Runte</h1>
      <p class="badge badge-secondary mt-1 mb-3 bg-dark">
        義大利料理
      </p>
    </div>
    <div class="col-lg-4">
      <img
        class="img-responsive center-block" 
    src="https://loremflickr.com/320/240/food,dessert,restaurant/"
        style="width: 250px;margin-bottom: 25px;"
      >
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            08:00
          </li>
          <li>
            <strong>Tel:</strong>
            (918) 827-1962
          </li>
          <li>
            <strong>Address:</strong>
            98138 Elisa Road
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <p>{{restaurant.description}}</p>
      <router-link
        class="btn btn-primary btn-border ms-2"
        :to="{name: 'restaurant-dashbaord', params:{id:restaurant.id}}"
      >Dashboard</router-link>

      <button
        type="button"
        class="btn btn-danger btn-border mx-2"
        v-if="restaurant.isFavorited === true"
        @click.stop.prevent="removeFavorite"
      >
        移除最愛
      </button>
      <button
        type="button"
        class="btn btn-primary btn-border mx-2"
        v-else
        @click.stop.prevent="addFavorite"
      >
        加到最愛
      </button>
      <button
        type="button"
        class="btn btn-danger like mx-2"
        v-if="restaurant.isLiked === true"
        @click.stop.prevent="removeLike"
      >
        Unlike
      </button>
      <button
        type="button"
        class="btn btn-primary like mx-2"
        @click.stop.prevent="addLike"
        v-else
      >
        Like
      </button>
    </div>
  </div>
</template>


<script>
export default {
    props: {
        initialRestaurant:{
            type:Object,
            required: true
        }
    },
    data(){
        return {
            restaurant: this.initialRestaurant
        }
    },
    methods: {
        addFavorite() {
            this.restaurant = {
                ...this.restaurant,
                isFavorited: true
            }
        },
        removeFavorite() {
            this.restaurant = {
                ...this.restaurant,
                isFavorited: false
            }
        },
        addLike() {
            this.restaurant = {
                ...this.restaurant,
                isLiked: true
            }
        },
        removeLike() {
            this.restaurant = {
                ...this.restaurant,
                isLiked: false
            }
        }
    }
}
</script>