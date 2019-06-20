<template>
  <div class="col-9">
    <div class="content mt-3">
      <fieldset class="border-top">
        <legend class="w-auto p-2">
          <span>User Info</span>
        </legend>
        <img :src="user.avatar_url" alt="user-image">
        <table class="table">
            <tr>
              <td>ID</td>
              <td>{{user.id}}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>{{user.name}}</td>
            </tr>
            <tr v-if="user.email">
              <td>Email</td>
              <td>{{user.email}}</td>
            </tr>
            <tr v-if="user.bio">
              <td>BIO</td>
              <td>{{user.bio}}</td>
            </tr>
            <tr>
              <td>Created At</td>
              <td>{{user.created_at}}</td>
            </tr>
        </table>
      </fieldset>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: "",
      renderComponent: true
    };
  },
  props: ['userId'],
  created(){
    this.$http.get('https://api.github.com/users/' + this.userId).then(res=>{
      this.user = res.data;
    })
  }
};
</script>

<style lang="scss">
.border-top {
  border-top: 1px solid #000 !important;
}
fieldset{
  margin-top: 90px;
  legend {
    color: #CCC;
    font-size: 1.2rem;
    }
  img {
    width: 250px;
    border: 1px solid #000;
    margin: 20px 0 40px 0;
    }
  table{
      text-align: start;
  td{
      border-top: 1px solid #000 !important;
    }
  }
}
</style>