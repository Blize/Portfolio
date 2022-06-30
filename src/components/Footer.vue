<template>
  <footer class="footer">
    <h5><router-link to="/imprint">Imprint</router-link></h5>
    <h5>Version 0.0</h5>
    <h5>@ 2022</h5>
  </footer>
</template>

<script>
export default {};
</script>

<style>
a {
  text-decoration: none;
  color: black;
}
.footer {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border-top: solid 1px black;
  height: 60px;
}
</style>
