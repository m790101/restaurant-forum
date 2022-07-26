<template>
     <div class="card">
      <div class="card-header">
        <strong>{{userProfile.Followers.length}}</strong> followers (追隨者)
      </div>
      <div class="card-body" >
          <a href="/users/1" v-for="follower in userProfile.Followers" :key="follower.id">
              <img :src="follower.image" width="60" height="60" class="avatar">
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