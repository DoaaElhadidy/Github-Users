<template>
  <div class="container-fluid">
    <div class="row">
      <Header />
    </div>
    <Products />
    <div class="row">
      <Git />
    </div>
    <div class="row">
      <ContactUs />
    </div>
    <div class="row">
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header';
import Products from '../components/Products';
import Git from '../components/Git';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';

export default {
  components: {
    Header, Products, Git, ContactUs, Footer
  }
}
</script>
<style>

</style>
