<template>
    <div class="contact-us">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-12">
                <p class="heading">Github-Users</p>
                <p>This website is coded by <br>
                    <a href="https://www.facebook.com/doaa.elhadidy.98"> Doaa Elhadidy</a>
                    , Front-end Developer</p>
                </div>
                <div class="col-md-2 col-sm-6">
                    <p class="heading">ABOUT</p>
                    <p>OUR Mission</p>
                    <p>Company</p>
                    <p>Jobs</p>
                    <p>Blog</p>
                </div>
                <div class="col-md-2 col-sm-6">
                    <p class="heading">SUPPORT</p>
                    <p>FAQ</p> 
                    <p>Help Center</p>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                </div>
                <div class="col-md-2 col-sm-6">
                    <p class="heading">PRODUCT</p>
                    <p>Web Development</p>
                    <p>Graphics</p>
                    <p>Marketing</p>
                </div>
                <div class="col-md-2 col-sm-6">
                <p class="heading">CONTACT</p>
                <p>Email US</p>
                <p>Live Chat</p>
                </div>
            </div>
        </div>
        </div>
</template>

<style lang="scss">
$secondColor:#2eb1bc;

.contact-us{
    background: #EEE;
    color: #333;
    padding-top:70px;
    padding-bottom:70px;
    width: 100%;
    .heading{
      font-weight: bold;
    }
    a{
        color: $secondColor;
        font-weight: bold;
        font-size: 16px;
    }  
    p{
      text-align: left;
    }
}
</style>