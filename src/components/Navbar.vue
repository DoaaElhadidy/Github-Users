<template>
    <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#"><img src="../assets/a.jpg" class="logo"/> Github Users</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto">
          <router-link to="/">Home</router-link> |
          <router-link to="/users">Users</router-link> |
          <router-link to="/about">About</router-link>
        </div>
      </div>
    </nav>
</template>

<style lang="scss">
$mainColor: #CCC ;
$secondColor:#2eb1bc;
$mainfont:35px;

#nav {
  border-bottom: 1px solid $mainColor;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 1;
  .logo{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 5px;
  }
  a {
    font-weight: bold;
    font-size: 18px;
    color: #2c3e50;
    margin: 0 25px;
    &.router-link-exact-active {
      color: $secondColor;
    }
  }
}
</style>
