<template>
    <div class="col-3">
<router-link
:to="{name: 'users', params:{id: user.id}}" 
>
    <img
    src="https://images.pexels.com/photos/10673160/pexels-photo-10673160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    width="140px"
    height="140px"
    >
</router-link>
<h2>{{user.name}}</h2>
<span class="badge badge-secondary bg-dark">追蹤人數：{{user.FollowerCount}}</span>
<p class="mt-3">
    <button
    @click.stop.prevent="removeFollow"
    type="button"
    class="btn btn-danger"
    v-if="user.isFollowed === true"
    >
    取消追蹤
    </button>
    <button
    @click.stop.prevent="addFollow"
    type="button"
    class="btn btn-primary"
    v-else
    >
    追蹤
    </button>
</p>
</div>
</template>

<script>
export default {
    props:{
        userInitial:{
            type: Object,
            required: true
        }
    },
    data(){
        return {
            user: this.userInitial
        }
    },
    methods:{
        addFollow(){
            this.user = {
                ...this.user,
                isFollowed: true
            }
        },
        removeFollow(){
            this.user = {
                ...this.user,
                isFollowed: false
            }
        }
    }
}
</script>

