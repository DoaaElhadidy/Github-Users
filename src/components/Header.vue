<template>
    <div class="header text-center text-white">
      <div class="over-color">
          <div class="col-lg">
            <p>Feel Free To Use GitHub</p>
            <font-awesome-icon class="icon" icon="spinner" spin />
          </div>
        </div>
      </div>
</template>

<style lang="scss">
$secondColor:#2eb1bc;
$mainfont:35px;

@mixin prefixer($property,$value,$prefixes:())
{
    @each $prefix in prefixes{
        #{'-'+$prefix+'-'+$property}:$value;
    }
    #{$property}:$value;
}
.header{
background: url(../assets/header.png) no-repeat center center fixed;
@include prefixer(background-size,cover,webkit moz o);
min-height: 100vh;
min-width: 100% !important;
.over-color{   
    background: rgba(35,42,61,.6);
    min-height: 100vh;
    p{
        font-size:$mainfont;
        padding-top: 45vh;
    }   
    .icon{
        background:$secondColor;
        border-radius: 50%;
        color: #3d3f6d;
        font-size: 70px;
        padding: 20px;
        }
} 
}
</style>