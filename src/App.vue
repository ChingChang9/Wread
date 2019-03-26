<template>
  <div id="app">

    <div v-if="this.$route.name !== 'Goal'">
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
        <img id="book-glider" class="before-mount" src="@/assets/3d-product.png" />
      </div>
    </div>

    <div v-else>
      <router-view />
    </div>

    <footer>
      <div class="column">
        <div class="title">Sponsors</div>
        <a href="https://www.fountaintire.com/" target="_blank" class="text">Fountain Tire</a>
        <a href="https://www.homedepot.ca/en/home.html" target="_blank" class="text">Home Depot</a>
        <a href="https://janorthalberta.org/company-program-students/company-program/" target="_blank" class="text">Junior Achievement</a>
      </div>
      <div class="column">
        <div class="title">Social Links</div>
        <a href="mailto:wreadja@gmail.com" class="text">Email</a>
        <a href="https://www.facebook.com/wreadjacompany/?__tn__=%2Cd%2CP-R&eid=ARBPFmfiS-1T2RSFIYa8v0IRt6eObnBxy4UFHb_DtorebZyurXGpYQJ3r9FsH_r1Vpb1JlYhUBxXL1lG" target="_blank" class="text">Facebook</a>
        <a href="https://www.instagram.com/wread_ja/" target="_blank" class="text">Instagram</a>
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
    setTimeout(function() {
      document.querySelector("#book-glider").classList.remove("before-mount");
    }, 250);
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
    }
  }
}
</script>

<style lang="scss">
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
  background-color: lighten($primary-colour, 20%);
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
  -webkit-transform: translate3d(0, 0, 0);
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
      background-color: lighten($primary-colour, 35%);
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
    &.flipping, &.before-mount {
      transform: scale(1.4) rotateZ(180deg) rotateX(30deg) translateY(-60px);
    }
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
  background-color: lighten($secondary-colour, 20%);
  #copyright {
    text-align: center;
    cursor: default;
    font-size: 13px;
    div {
      width: 70%;
    }
    img {
      width: calc(50% + 50px);
      padding-bottom: 10px;
    }
  }
  .column {
    display: flex;
    flex-grow: 1;
    align-items: center;
    flex-direction: column;
    margin: 0px 5vw;
    width: calc(40px + 10vw);
    .title {
      text-align: center;
      font-family: Montserrat;
      font-weight: 700;
      color: black;
      cursor: default;
      font-size: calc(18px + 1vw);
      margin-bottom: 13px;
      letter-spacing: 5px;
    }
    .text {
      font-size: calc(16px + 0.2vw);
      padding-bottom: 4px;
      text-decoration: underline;
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
  #bookmarks {
    left: 78%;
  }
}
@media (max-width: 930px) {
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