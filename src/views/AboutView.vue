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
        I am a 17 year old programmer and designer. I am at my second year at
        swisscom. I am an application developer, and have experienced many areas
        of computer science. Below here you can see my hoobys and more.
      </h4>
    </div>

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
    </div>

    <div class="projects-object-parent">
      <div class="project-text">
        <h1>Projects</h1>
        <h4>Here is a small overview from my projects</h4>
      </div>

      <div
        class="flip-card"
        v-for="project in projects"
        :key="project.projectTitle"
      >
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <h2>{{ project.projectTitle }}</h2>
            <h4>{{ project.projectInfo }}</h4>
          </div>
          <div class="flip-card-back">
            <h1>{{ project.projectTitle }}</h1>
            <p>{{ project.projectURL }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isNotActive: true,
      showIFrame: true,
      windowWidth: 10,
      projects: [
        {
          projectTitle: "Portfolio",
          projectInfo:
            "The Portfolio is a little webapplication built by myself. This webapplication has only a frontend.",
          projectURL: "https://blize.vercel.app",
        },
        {
          projectTitle: "FaceApp",
          projectInfo:
            "This is a little application where I use a AI to recognize the emotion of the person who is looking in the camera.",
          projectURL: "https://face-app-detector.vercel.app",
        },
        {
          projectTitle: "Reddit-Bot",
          projectInfo:
            "This is a small Bot build with Python in school with some friends. You can send messages directly via Reddit.",
          projectURL: "https://blize.vercel.app/src/code",
        },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      this.isNotActive = false;
    }, 250);
  },
  created() {
    this.windowWidth = window.innerWidth;
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  watch: {
    windowWidth(newWidth, oldWidth) {
      this.windowWidth = newWidth;
    },
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    testWindowWidth() {
      if (this.windowWidth < 768) {
        console.log("Your Window is to small to use this feature");
        alert(
          "Your current window-width(" +
            this.windowWidth +
            ") is to small to use this feature"
        );
      } else {
        this.showIFrame = false;
        setInterval(() => {
          this.showIFrame = true;
        }, 100000);
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>

<style>
.about {
  min-height: calc(100vh - 61px - 61px);
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
  transform: translateX(-400px) translateY(-200px);
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
  text-align: center;
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

.hobby-object-under-parent {
  margin: 1%;
}
.hobby-object-child h3 {
  height: 5rem;
  width: 10rem;
  margin: 1rem;
  padding: 0.75rem;
  border-radius: 6px;
  background-color: rgb(249, 249, 249);
  border: 0.65px solid rgb(218, 218, 218);
  text-align: center;
}
.projects-object-parent {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.project-text {
  text-align: center;
}
.flip-card {
  background-color: transparent;
  width: 300px;
  height: 325px;
  perspective: 1000px;
  margin-bottom: 4rem;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  border-radius: 6px;
  border: 0.65px solid rgb(218, 218, 218);
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0.75rem;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: rgb(249, 249, 249);
  color: black;
}

.flip-card-back {
  background-color: rgb(249, 249, 249);
  transform: rotateY(180deg);
}
@media screen and (max-width: 668px) {
  .hobby-object-child h3 {
    width: 7.75rem;
  }
  .projects-child {
    height: 300px;
    width: 250px;
  }
  .flip-card {
    width: 200px;
    height: 250px;
  }
}
</style>
