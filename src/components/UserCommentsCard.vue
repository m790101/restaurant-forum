<template>
        <div class="card">
      <div class="card-header">
        <strong>{{userProfile.Comments.length}}</strong> 已評論餐廳
      </div>
      <div class="card-body">
          <a href="/restaurants/1" v-for="comment in userProfile.Comments" :key="comment.id">
            <img :src="comment.Restaurant.image" width="60" height="60" class="avatar">
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