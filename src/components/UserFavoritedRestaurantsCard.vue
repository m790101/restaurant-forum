<template>
  <div class="card">
    <div class="card-header"><strong>{{userProfile.FavoritedRestaurants.length}}</strong> 收藏的餐廳</div>
    <div class="card-body">
      <a href="/restaurants/13" v-for="favoritedRestaurant in userProfile.FavoritedRestaurants" :key="favoritedRestaurant.id">
        <img
          :src="favoritedRestaurant.image"
          width="60"
          height="60"
          class="avatar"
        />
      </a>
    </div>
  </div>
</template>


<script>
export default {
    props: {
        userProfile: {
            type: Object,
            required:true
        }
    }
}
</script>