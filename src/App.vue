<template>
  <div
    :class="theme === 'light' ? 'light-theme' : 'dark-theme'"
    class="main-body"
  >
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Manrope:wght@300&display=swap"
      rel="stylesheet"
    />
    <Header @changeTheme="theme = theme === 'dark' ? 'light' : 'dark'" />
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
    return {
      theme: "light",
    };
  },
  components: {
    Header,
    Footer,
  },
  medthods: {},
  computed: {
    ChangeTheme() {
      this.theme = this.theme === "dark" ? "light" : "dark";
    },
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
.dark-theme {
  top: 0;
  background-color: #3d3d3d;
  color: rgb(167, 167, 167);
  border: rgb(0, 0, 0);
  transition-duration: 0.5s;
}
.dark-theme a {
  color: rgb(167, 167, 167);
  text-decoration: none;
}
.dark-theme span {
  color: rgb(167, 167, 167);
}
.dark-theme .projects-child {
  background-color: #686868;
}
.dark-theme .hobby-object-child h3 {
  background-color: #686868;
}
.light-theme {
  margin: 0;
  background-color: white;
  color: black;
  border: black;
  transition-duration: 0.5s;
}
.light-theme a {
  color: black;
  text-decoration: none;
}
</style>
