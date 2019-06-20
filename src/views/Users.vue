<template>
  <div class="container-fluid">
    <div class="row">
      <SideBar />
      <Content :userId = 1 />
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import Content from "@/components/Content.vue";

export default {
  name: "users",
  components: {
    Content, SideBar
  }
};
</script>