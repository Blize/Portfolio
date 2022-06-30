<template>
  <div class="curtain">
    <div class="curtain__wrapper">
      <input type="checkbox" checked />

      <div class="curtain__panel curtain__panel--left">
        <h1>Wel</h1>
      </div>

      <div class="curtain__content">
        <h2>Blize</h2>
      </div>

      <div class="curtain__panel curtain__panel--right">
        <h1>come</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
});
</script>

<style lang="scss">
.curtain {
  width: 100%;
  height: calc(100vh -61px -61px);
  overflow: hidden;

  &__wrapper {
    width: 100%;
    height: 100%;

    input[type="checkbox"] {
      position: absolute;
      cursor: pointer;
      width: 99.5%;
      height: 100%;
      z-index: 100;
      opacity: 0;
      top: 61px;
      bottom: 61px;

      &:checked {
        & ~ div.curtain__panel--left {
          transform: translateX(0);
        }

        & ~ div.curtain__panel--right {
          transform: translateX(0);
        }
      }
    }
  }

  &__panel {
    display: flex;
    align-items: center;
    background: rgb(242, 242, 242);
    color: rgb(0, 0, 0);
    float: left;
    position: relative;
    width: 50%;
    height: 100vh;
    transition: all 1s ease-out;
    z-index: 2;

    &--left {
      justify-content: flex-end;
      transform: translateX(-100%);
    }
    &--right {
      justify-content: flex-start;
      transform: translateX(100%);
    }
  }

  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh -61px -61px);
    padding: 1rem 0 0 0;
    position: absolute;
    text-align: center;
    z-index: 1;
    width: 100%;
  }
}
</style>
