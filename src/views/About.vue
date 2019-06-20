<template>
<div>
  <div class="about">
         <div class="container text-center">
             <h4 class="title"> Know About Us</h4>
             <div class="row">
                <div class="col-sm">
                    <font-awesome-icon class="icon1" icon="glasses"  />
                    <h5>Vission</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor unde ab laudantium molestiae voluptates rem necessitatibus nisi adipisci, quam distinctio reiciendis architecto? Magni iusto quia esse? Repudiandae dolore tempora debitis?</p>
                    <button type="button" class="btn btn-link">Learn More ></button>
                </div>
                  <div class="col-sm"> 
                    <font-awesome-icon class="icon2" icon="box-open"  />
                    <h5>Mission</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In autem laudantium facilis, quasi itaque provident est cupiditate nulla culpa! Enim, ex porro amet nulla iusto accusantium culpa voluptatem corporis harum!</p>
                    <button type="button" class="btn btn-link">Learn More ></button>               
                  </div>
                  <div class="col-sm">
                    <font-awesome-icon class="icon3" icon="book" size="lg"  />
                    <h5>Strategy</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus atque maiores natus cum doloremque. Aliquid molestiae omnis numquam incidunt laboriosam debitis quaerat eos cum illo est. Laboriosam est corporis fuga!</p>
                    <button type="button" class="btn btn-link">Learn More ></button>
                </div>
             </div>
         </div>
  </div>
  <Footer />
</div>
</template>
<script>
  import Footer from '../components/Footer';
export default {
  components: {
    Footer
  }
}
</script>

<style lang="scss">
@mixin circle{
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.about{
    font-family:Arial, Helvetica, sans-serif;
    margin: 150px 0 50px 0;
    h4{
        font-weight: bold;
    }
    .icon1,.icon2,.icon3{
        font-size: 100px;
        padding: 30px;
        @include circle;
        margin-top: 50px;
    }
    .icon1{
        background: #2eb1bc;
        
    }
    .icon2{
        background: #8692da;
    }
    .icon3{
        background: #f47393;
    }
    h5{
        margin: 20px 0;
        font-weight: bold;
    }
    p{
      text-align: justify;
      padding: 0px 20px;
    }
}
</style>