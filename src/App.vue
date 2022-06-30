<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Manrope:wght@300&display=swap"
    rel="stylesheet"
  />
  <div class="parent">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default defineComponent({
  data() {
    return {};
  },
  components: {
    Header,
    Footer,
  },
});
</script>
<style>
#app {
  font-family: "Manrope", sans-serif;
  width: 100vw;
  padding: 0;
  margin: 0;
}
body {
  margin: 0;
  padding: 0;
  width: 100vw;
}
</style>
