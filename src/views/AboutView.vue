<template>
  <div class="about">
    <div class="fly-in-text" :class="{ hidden: isNotActive }">
      <h1>A</h1>
      <h1>B</h1>
      <h1>O</h1>
      <h1>U</h1>
      <h1>T</h1>
    </div>

    <div class="info-text">
      <h4>
        I am a 17 year old programmer and designer. I am at my first year at
        swisscom. I am application developer, and have experienced many areas of
        computer science. Below here you can my hoobys and more.
      </h4>
    </div>
    <!--
    <div class="hobby">
      <div class="title-hobby">
        <h1>Hobbys</h1>
      </div>
      <div class="hobby-object-parent">
        <div class="hobby-object-under-parent">
          <span class="hobby-object-child">
            <h3>Downhill</h3>
          </span>
          <span class="hobby-object-child">
            <h3>Gaming</h3>
          </span>
        </div>
        <div class="hobby-object-under-parent">
          <span class="hobby-object-child">
            <h3>Programmer</h3>
          </span>
          <span class="hobby-object-child">
            <h3>Draw</h3>
          </span>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isNotActive: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isNotActive = false;
    }, 250);
  },
};
</script>

<style>
.about {
  min-height: calc(100vh - 60px - 60px);
}
.fly-in-text {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
.fly-in-text h1 {
  padding: 5px;
  opacity: 1;
  transition: all 1.3s ease;
}
.fly-in-text.hidden h1 {
  opacity: 0;
}
.fly-in-text.hidden h1:nth-child(1) {
  transform: translateX(-200px) translateY(-200px);
}
.fly-in-text.hidden h1:nth-child(2) {
  transform: translateX(20px) translateY(100px);
}
.fly-in-text.hidden h1:nth-child(3) {
  transform: translateX(-150px) translateY(-80px);
}
.fly-in-text.hidden h1:nth-child(4) {
  transform: translateX(10px) translateY(-200px);
}
.fly-in-text.hidden h1:nth-child(5) {
  transform: translateX(-300px) translateY(200px);
}
.fly-in-text.hidden h1:nth-child(6) {
  transform: translateX(20px) translateY(-20px);
}
.fly-in-text.hidden h1:nth-child(7) {
  transform: translateX(50px) translateY(250px);
}

.info-text {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5% 5px 5%;
}
.title-hobby {
  display: flex;
  align-items: center;
  justify-content: center;
}
.hobby-object-parent {
  display: flex;
  align-items: center;
  justify-content: center;
}
h3 {
  border: 1px solid rgb(239, 239, 239);
  background-color: rgb(239, 239, 239);
  border-radius: 6px;
  padding: 5px;
}
.hobby-object-under-parent {
  margin: 1%;
}
</style>
