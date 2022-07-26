<template>
    <div class="card" >
      <div class="card-header" >
        <strong>{{userProfile.Followings.length}}</strong> followings (追蹤者)
      </div>
      <div class="card-body" >
          <a href="/users/1"  v-for="following in userProfile.Followings" :key="following.id">
              <img :src="following.image" width="60" height="60" class="avatar me-2">
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