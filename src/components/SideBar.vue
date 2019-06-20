<template>
<div class="col-3">
  <div class="bg-light border-right" id="sidebar-wrapper">
    <div class="sidebar-heading">User List</div>
      <div class="list-group list-group-flush"  
        v-for="userIndex in usersToShow" v-if="userIndex < users.length" :key="userIndex">
        <router-link  class="list-group-item list-group-item-action bg-light" 
        v-for="user in users" :key="user.id" :value="user"
        v-bind:to="'/users/' + user.id">
            {{user.login}}
        </router-link>
      </div> 
      <button @click="usersToShow += 1"> Load More</button>
    </div>
    </div>
</template>

<script>
export default{
  data(){
    return{
      users: [],
      usersToShow: 1
    }
  },
  created(){
    this.$http.get('https://api.github.com/users').then(response => {
        this.users = [...response.data].splice(0,10);
      });
  }
}
</script>

<style lang="scss">
#sidebar-wrapper {
  margin-left: -15px;
  margin-top: 78px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
  .sidebar-heading{
    padding: 20px 15px;
    justify-content: flex-start;
  }
  a.list-group-item{
    padding-left: 50px;
    @media screen and (max-width: 650px) {
      padding-left: 2px;
      font-size: 12px
    }
    border-bottom: 1px solid #EEE;
  }
  button{
    width: 50%;
    margin: 20px auto;
    font-weight: bold;
    padding: 10px 0px;
    border-radius: 5px;
    background-color: #2c3e50;
    color: #EEE;
    outline: 0;
    border: 0;
  }
}
</style>