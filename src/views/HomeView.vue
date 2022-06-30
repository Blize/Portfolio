<template>
  <div class="home">
    <h1>Home</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
});
</script>

<style>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 61px - 61px);
}
</style>
