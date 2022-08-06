<template>
  <footer class="footer">
    <h5><router-link to="/imprint" class="imprint">Imprint</router-link></h5>
    <div class="popup" @mouseover="popUpFunction()" @mouseout="popUpFunction()">
      <h5>Version 0.0.2</h5>
      <span class="popuptext" id="myPopup">Last commit: {{ lastCommit }}</span>
    </div>
    <h5>@2022</h5>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      lastCommit: "0",
    };
  },
  methods: {
    popUpFunction() {
      var popup = document.getElementById("myPopup");
      popup.classList.toggle("show");
    },
  },
  mounted() {
    fetch("https://api.github.com/repos/Blize/Portfolio/commits/main", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => data.commit.committer.date)
      .then((data) => {
        const date = data.split("T", 1);
        this.lastCommit = date;
      });
  },
};
</script>

<style>
.footer {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border-top: solid 1px black;
  height: 60px;
}
/* Popup container - can be anything you want */
.popup {
  position: relative;
  display: inline-block;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* The actual popup */
.popup .popuptext {
  visibility: hidden;
  width: 160px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -80px;
}

/* Popup arrow */
.popup .popuptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

/* Toggle this class - hide and show the popup */
.popup .show {
  visibility: visible;
  -webkit-animation: fadeIn 1s;
  animation: fadeIn 1s;
  transition-duration: 1s;
  z-index: 10000;
}

/* Add animation (fade in the popup) */
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
