<template>
  <div id="app">
    <button @click="fill">Show Goal</button>
    <div id="book">
      <div id="background" class="pages">
        <div class="left-page">
          <router-view />
        </div>
        <div class="right-page">
          <router-view />
        </div>
      </div>
      <div class="pages">
        <div class="left-page" @click.self="previousPage">
          <transition name="left-page" mode="out-in">
            <router-view />
          </transition>
        </div>
        <div class="right-page" @click.self="nextPage">
          <transition name="right-page" mode="out-in">
            <router-view />
          </transition>
        </div>
      </div>
    </div>

    <div id="bookmarks">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link id="store" :to="{ name: 'Store' }">Store</router-link>
      <router-link :to="{ name: 'Info' }">Info</router-link>
      <router-link :to="{ name: 'About' }">About Us</router-link>
      <a href="mailto:wreadja@gmail.com">Contact Us</a>
    </div>

    <div id="book-glider-wrap">
      <img id="book-glider" :class="{ hover: showGoal }" src="@/assets/3d-product.png" />
    </div>
    <div v-if="showPercentage" id="radial-progress">
      <div id="circle" @click="fill">
        <div class="mask">
          <div class="fill"></div>
        </div>
        <div class="mask">
          <div class="fill"></div>
          <div id="fix" class="fill"></div>
        </div>
        <div id="shadow"></div>
      </div>
      <div id="inset">
        <div v-if="percentage.toString()[1] === '.'" id="percentage">{{ percentage.toString().substring(0, 1) }}%</div>
        <div v-else id="percentage">{{ percentage.toString().substring(0, 2) }}%</div>
      </div>
    </div>
    <div v-if="showPercentage" id="goal-text-wrap">
      <div id="goal-text">Our goal this year is to sell 800 units</div>
    </div>

    <footer>
      <div class="column">
        <div class="title">Sponsors</div>
        <a href="https://www.fountaintire.com/" target="_blank">Fountain Tire</a>
        <a href="https://www.homedepot.ca/en/home.html" target="_blank">Home Depot</a>
        <a href="https://janorthalberta.org/company-program-students/company-program/" target="_blank">Junior Achievement</a>
      </div>
      <div class="column">
        <div class="title">Social Links</div>
        <a href="mailto:wreadja@gmail.com">Email</a>
        <a href="https://www.facebook.com/wreadjacompany/?__tn__=%2Cd%2CP-R&eid=ARBPFmfiS-1T2RSFIYa8v0IRt6eObnBxy4UFHb_DtorebZyurXGpYQJ3r9FsH_r1Vpb1JlYhUBxXL1lG" target="_blank">Facebook</a>
        <a href="https://www.instagram.com/wread_ja/" target="_blank">Instagram</a>
      </div>
      <div id="copyright" class="column">
        <div>
          <router-link :to="{ name: 'Home' }"><img src="@/assets/icons/logo.svg" /></router-link>
        </div>
        <div>Wread &copy; 2019 Creative Commons - All Rights Reserved</div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      showGoal: true,
      showPercentage: false,
      sold: 119,
      percentage: 0,
      acceleration: 0.1,
      intervalID: 0,
      timeoutID: 0
    };
  },
  watch: {
    $route(to, from) {
      if (to.name === "Home" ||
      to.name === "Store" && from.name !== "Home" ||
      to.name === "Info" && from.name === "About") {
        this.flipLeft();
      } else {
        this.flipRight();
      }
    }
  },
  mounted() {
    this.timeoutID = setTimeout(function() {
      this.showGoal = false;
    }.bind(this), 750);
  },
  beforeDestroy() {
    clearTimeout(this.timeoutID);
    clearInterval(this.intervalID);
  },
  methods: {
    flipRight() {
      if (document.styleSheets[0].cssRules[0].style[0] === "font-family") {
        document.styleSheets[0].cssRules[4].style.transitionDelay = "950ms";
        document.styleSheets[0].cssRules[5].style.transitionDelay = "770ms";
      } else {
        document.styleSheets[1].cssRules[4].style.transitionDelay = "950ms";
        document.styleSheets[1].cssRules[5].style.transitionDelay = "770ms";
      }
      document.querySelectorAll(".right-page")[1].classList.add("flipped");
      document.querySelector("#book-glider").classList.add("flipping");
      document.querySelectorAll(".right-page")[1].style.zIndex = 2;
      document.querySelectorAll(".left-page")[1].style.zIndex = 1;
      setTimeout(function() {
        document.querySelectorAll(".right-page")[1].querySelector(".right").style.display = "none";
        document.querySelectorAll(".right-page")[1].querySelector(".left").style.display = "block";
        document.querySelectorAll(".right-page")[1].querySelector(".left").style.transform = "rotateY(180deg)";
      }, 810);
      setTimeout(function() {
        document.querySelectorAll(".right-page")[1].classList.remove("flipped");
        document.querySelectorAll(".right-page")[1].querySelector(".left").style.display = "none";
        document.querySelectorAll(".right-page")[1].querySelector(".right").style.display = "block";
        document.querySelector("#book-glider").classList.remove("flipping");
      }, 1000);
    },
    flipLeft() {
      if (document.styleSheets[0].cssRules[0].style[0] === "font-family") {
        document.styleSheets[0].cssRules[4].style.transitionDelay = "770ms";
        document.styleSheets[0].cssRules[5].style.transitionDelay = "950ms";
      } else {
        document.styleSheets[1].cssRules[4].style.transitionDelay = "770ms";
        document.styleSheets[1].cssRules[5].style.transitionDelay = "950ms";
      }
      document.querySelectorAll(".left-page")[1].classList.add("flipped");
      document.querySelector("#book-glider").classList.add("flipping");
      document.querySelectorAll(".left-page")[1].style.zIndex = 2;
      document.querySelectorAll(".right-page")[1].style.zIndex = 1;
      setTimeout(function() {
        document.querySelectorAll(".left-page")[1].querySelector(".left").style.display = "none";
        document.querySelectorAll(".left-page")[1].querySelector(".right").style.display = "block";
        document.querySelectorAll(".left-page")[1].querySelector(".right").style.transform = "rotateY(180deg)";
      }, 820);
      setTimeout(function() {
        document.querySelectorAll(".left-page")[1].classList.remove("flipped");
        document.querySelectorAll(".left-page")[1].querySelector(".right").style.display = "none";
        document.querySelectorAll(".left-page")[1].querySelector(".left").style.display = "block";
        document.querySelector("#book-glider").classList.remove("flipping");
      }, 1000);
    },
    nextPage() {
      switch (this.$route.name) {
        case "Home": this.$router.push({ name: 'Store' }); break;
        case "Store": this.$router.push({ name: 'Info' }); break;
        case "Info": this.$router.push({ name: 'About' }); break;
      }
    },
    previousPage() {
      switch (this.$route.name) {
        case "About": this.$router.push({ name: 'Info' }); break;
        case "Info": this.$router.push({ name: 'Store' }); break;
        case "Store": this.$router.push({ name: 'Home' }); break;
      }
    },
    fill() {
      this.showGoal = !this.showGoal;
      this.percentage = 0;
      this.acceleration = 0.1;
      this.showPercentage = false;
      if (this.showGoal) {
        this.timeoutID = setTimeout(function() {
          this.showPercentage = true;
          this.intervalID = setInterval(function() {
            if (this.percentage < this.sold / 800 * 100) {
              this.percentage += this.acceleration;
              this.acceleration *= 1.02;
            } else {
              this.percentage = this.sold / 800 * 100;
              clearInterval(this.intervalID);
            }
            document.querySelector(".fill").style.transform = `rotate(${ this.percentage * 1.8 }deg)`;
            document.querySelectorAll(".fill")[1].style.transform = `rotate(${ this.percentage * 1.8 }deg)`;
            document.querySelector(".mask").style.transform = `rotate(${ this.percentage * 1.8 }deg)`;
            document.querySelector("#fix").style.transform = `rotate(${ this.percentage * 1.8 * 2 }deg)`;
          }.bind(this), 10);
          clearTimeout(this.timeoutID);
        }.bind(this), 1000);
      }
    }
  },
}
</script>

<style lang="scss">
$circle-size: 15vw;

@font-face {
  font-family: Varela Round;
  src: url('assets/fonts/VarelaRound.ttf');
}
@font-face {
  font-family: Montserrat;
  src: url('assets/fonts/Montserrat-Medium.ttf');
  font-weight: 500;
}
@font-face {
  font-family: Montserrat;
  src: url('assets/fonts/Montserrat-Bold.ttf');
  font-weight: 700;
}
@font-face {
  font-family: Montserrat;
  src: url('assets/fonts/Montserrat-ExtraBold.ttf');
  font-weight: 800;
}

.left-page-enter-active, .left-page-leave-active {
  transition-delay: 950ms;
}
.right-page-enter-active, .right-page-leave-active {
  transition-delay: 770ms;
}
body {
  margin: 0px;
  background-color: #888888;
  font-family: Varela Round;
  overflow-x: hidden;
}
a {
  color: black;
  &:hover {
    color: darken($primary-colour, 20%);
  }
}

#book {
  height: calc(70vh + 105px);
  .pages {
    position: absolute;
    display: flex;
    margin-top: 25px;
    margin-left: calc(15vw - 70px);
    font-size: calc(10px + 0.8vw);
    &#background {
      .left-page, .right-page {
        box-shadow: 0px 20px 50px black;
      }
      .left-page {
        .left {
          display: block !important;
        }
        .right {
          display: none !important;
        }
      }
      .right-page {
        .right {
          display: block !important;
        }
        .left {
          display: none !important;
        }
      }
    }
    .left-page, .right-page {
      width: calc(35vw - 4px);
      height: 70vh;
      padding: 45px 35px;
      border: 2px solid black;
      background-color: white;
      transition-timing-function: cubic-bezier(0.5, 0, 1, 0.7);
      z-index: 1;
      overflow: hidden;
      .title {
        font-size: calc(22px + 2vw);
      }
      .break {
        height: 1px;
        background-color: black;
        border-radius: 1px;
        margin: 0.5em 0em;
      }
    }
    .left-page {
      cursor: url('assets/cursors/alias-left.png'), auto;
      transform-origin: right;
      border-radius: 20px 0px 0px 20px;
      transform: skewY(4deg) rotateX(30deg);
      &.flipped {
        transform: skewY(-4deg) rotateX(30deg) rotateY(180deg);
        transition-duration: 1s;
      }
      .left {
        cursor: auto;
      }
      .right {
        display: none;
      }
    }
    .right-page {
      cursor: url('assets/cursors/alias-right.png'), auto;
      transform-origin: left;
      border-radius: 0px 20px 20px 0px;
      transform: skewY(-4deg) rotateX(30deg);
      &.flipped {
        transform: skewY(4deg) rotateX(30deg) rotateY(-180deg);
        transition-duration: 1s;
      }
      .left {
        display: none;
      }
      .right {
        cursor: auto;
      }
    }
  }
}
#book-glider-wrap {
  position: absolute;
  filter:
  drop-shadow(0px 1px 0px #bdaa84)
  drop-shadow(0px 2px 0px #bdaa84)
  drop-shadow(0px 3px 0px #bdaa84)
  drop-shadow(0px 4px 0px #bdaa84)
  drop-shadow(0px 5px 0px #bdaa84)
  drop-shadow(0px 6px 0px #bdaa84)
  drop-shadow(0px 7px 0px #bdaa84)
  drop-shadow(0px 8px 0px #bdaa84)
  drop-shadow(0px -5px 10px black);
  top: calc(52.5vh + 25px);
  left: calc((100vw - 20vw - 150px) / 2);
  z-index: 9999;
  #book-glider {
    width: calc(20vw + 150px);
    transform: scale(1) rotateZ(180deg) rotateX(-80deg) translateY(0px);
    transition-duration: 1s;
    &.flipping {
      transform: scale(1.4) rotateZ(180deg) rotateX(30deg) translateY(-60px);
    }
    &.hover {
      transform: scale(2) rotateZ(0deg) rotateX(0deg) translateY(-15vh);
    }
  }
}
#radial-progress {
  position: absolute;
  background-color: #a68f7b;
  border-radius: 50%;
  width: $circle-size;
  height: $circle-size;
  left: calc((100vw - #{$circle-size}) / 2);
  top: 23vh;
  z-index: 9999;
  #circle {
    .mask, .fill {
      position: absolute;
      border-radius: 50%;
      width: $circle-size;
      height: $circle-size;
    }
    .mask {
      clip: rect(0px, $circle-size, $circle-size, $circle-size / 2);
      .fill {
        clip: rect(0px, $circle-size / 2, $circle-size, 0px);
        background-color: black;
      }
    }
  }
  #shadow {
    width: $circle-size;
    height: $circle-size;
    position: absolute;
    border-radius: 50%;
    box-shadow: 6px 6px 10px rgba(black, 0.2) inset;
  }
  #inset {
    width: $circle-size / 8 * 7;
    height: $circle-size / 8 * 7;
    position: absolute;
    margin-left: $circle-size / 16;
    margin-top: $circle-size / 16;
    background-color: #888888;
    box-shadow: -5px -5px 10px rgba(black, 0.4) inset;
    border-radius: 50%;
    #percentage {
      color: black;
      font-size: 4.5vw;
      font-weight: 800;
      width: $circle-size / 8 * 7;
      text-align: center;
      line-height: 1;
      overflow: hidden;
      margin-top: $circle-size / 3.5;
      margin-left: $circle-size / 32;
    }
  }
}
#goal-text-wrap {
  position: absolute;
  text-align: center;
  width: 100vw;
  margin-top: -13vh;
  z-index: 2;
  #goal-text {
    font-size: calc(18px + 2vw);
    text-shadow: 0px 0px 5px white;
  }
}
#bookmarks {
  position: absolute;
  top: 60px;
  left: 83.5%;
  font-family: Montserrat;
  text-align: right;
  z-index: 0;
  transform: skewY(-6deg) rotateX(30deg);
  a {
    display: block;
    color: black;
    text-decoration: none;
    background-color: darken($secondary-colour, 10%);
    padding: 10px 5px 10px 100px;
    border-radius: 5px;
    margin-bottom: 25px;
    font-weight: 700;
    font-size: calc(10px + 0.4vw);
    transform: scale(1);
    transition-duration: 0.3s;
    &#store {
      background-color: $orange;
      clip-path: polygon(0% 0%, 100% 0%, 92.5% 50%, 100% 100%, 0% 100%);
      padding-right: calc(7.5% + 5px);
    }
    &:hover, &.router-link-exact-active {
      transform: scale(1.2);
    }
  }
}

footer {
  display: flex;
  padding: 20px 60px;
  background-color: #444444;
  .column {
    display: flex;
    flex-grow: 1;
    align-items: center;
    flex-direction: column;
    margin: 0px 5vw;
    width: calc(40px + 10vw);
    color: white;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
    &#copyright {
      text-align: center;
      font-size: 13px;
      div {
        width: 70%;
      }
      img {
        width: calc(50% + 50px);
        padding-bottom: 10px;
      }
    }
    .title {
      text-align: center;
      font-family: Montserrat;
      font-weight: 700;
      font-size: calc(18px + 1vw);
      margin-bottom: 13px;
      letter-spacing: 5px;
    }
    a {
      color: white;
      font-size: calc(16px + 0.2vw);
      padding-bottom: 4px;
      &:hover {
        color: $primary-colour;
      }
    }
  }
  img {
    width: 30px;
  }
}

@media (max-width: 1285px) {
  #book {
    .pages {
      margin-left: calc(10vw - 70px);
    }
  }
  #book-glider-wrap {
    left: calc((90vw - 20vw - 150px) / 2);
  }
  #radial-progress {
    left: calc((90vw - #{$circle-size}) / 2);
  }
  #goal-text-wrap {
    width: 90vw;
  }
  #bookmarks {
    left: 78%;
  }
}
@media (max-width: 930px) {
  // optimize for mobile
}
@media (max-width: 815px) {
  footer {
    align-items: center;
    flex-direction: column;
    #copyright {
      width: 50vw;
      img {
        width: calc(30% + 50px);
      }
    }
    .column {
      margin-bottom: 20px;
      width: 50vw;
      .title {
        margin-bottom: 0px;
      }
    }
  }
}
</style>