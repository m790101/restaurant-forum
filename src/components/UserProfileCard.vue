<template>
             <div class="card mb-3">
  <div class="row no-gutters">
    <div class="col-md-4">
        <img :src="userProfile.image" width="300px" height="300px">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{userProfile.name}}</h5>
        <p class="card-text">
         {{userProfile.email}}
        </p>
        <ul class="list-unstyled list-inline">
          <li><strong>{{userProfile.Comments.length}}</strong> 已評論餐廳</li>
          <li><strong>{{userProfile.FavoritedRestaurants.length}}</strong> 收藏的餐廳</li>
          <li><strong>{{userProfile.Followers.length}}</strong> followings (追蹤者)</li>
          <li><strong>{{userProfile.Followings.length}}</strong> followers (追隨者)</li>
        </ul>
        <p>
            <a href="/users/2/edit"><button type="submit" class="btn btn-primary">edit</button></a>
        </p>
      </div>
    </div>
  </div>
</div>
</template>


<script>
export default {
    props: {
        userProfile:{
            type: Object,
            required: true
        }
    }
}
</script>