<template>
  <nav>
    <router-link to="/" class="routerButton">Home</router-link>
    <router-link to="/about" class="routerButton">About</router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>

<style scoped>
nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  border-bottom: 1px black solid;
  height: 60px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
}
.routerButton {
  margin: 4px 4px;
  padding: 4px 12px;
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  border-radius: 6px;
  color: black;
  transition-duration: 0.5s;
}
.routerButton:hover {
  background-color: rgb(183, 183, 183);
  cursor: grab;
  transform: scale(1.05);
  transition-duration: 0.75s;
}
.routerButton:active {
  cursor: grabbing;
  transform: scale(0.95);
  transition-duration: 0.75s;
}
</style>
