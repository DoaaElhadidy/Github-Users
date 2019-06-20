<template>
    <div class="products">
        <div class="container text-center">
            <h4>Products</h4>
                <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat praesentium et laudantium sequi, amet maiores. Corrupti accusantium possimus nihil illum atque asperiores.</p>
            <div class="row">
                <div class="product col-lg">
                    <img src="../assets/c.jpg" class="img-responsive">
                </div>
                <div class="product col-lg">
                    <img src="../assets/a.jpg" class="img-responsive">
                </div>
                <div class="product col-lg">
                    <img src="../assets/b.jpg" class="img-responsive">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.products{
    padding: 70px 0 20px 0;
    h4{
        margin-bottom: 20px;
        font-size: 35px;
    }
    img{
        margin: 50px 0 50px 0;
        width: 320px;
        height: 280px;
    }
    p{
      padding: 0 20%;
    }
}
</style>
