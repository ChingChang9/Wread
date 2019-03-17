<template>
  <div id="app">
    <div class="pages">
      <div class="left-page" @click="previousPage">
        <router-view />
      </div>
      <div class="right-page" @click="nextPage">
        <router-view />
      </div>
    </div>

    <div id="bookmark">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'About' }">About Us</router-link>
      <router-link :to="{ name: 'AddToCart' }">Add To Cart</router-link>
      <router-link :to="{ name: 'FAQ' }">FAQ</router-link>
      <router-link :to="{ name: 'Contact' }">Contact Us</router-link>
    </div>
    <img id="book-glider" src="@/assets/product.png" />

    <footer>
      <div id="copyright" class="column">
        <router-link :to="{ name: 'Home' }"><img src="@/assets/logo.svg" /></router-link>
        <div>Wread &copy; 2019 Creative Commons - All Rights Reserved</div>
      </div>
      <div class="column">
        <div class="title">Social Links</div>
        <a href="mailto:wreadja@gmail.com" class="text">Email</a>
        <a href="https://www.facebook.com/wreadjacompany/?__tn__=%2Cd%2CP-R&eid=ARBPFmfiS-1T2RSFIYa8v0IRt6eObnBxy4UFHb_DtorebZyurXGpYQJ3r9FsH_r1Vpb1JlYhUBxXL1lG" target="_blank" class="text">Facebook</a>
        <a href="https://www.instagram.com/wread_ja/" target="_blank" class="text">Instagram</a>
        <a href="#" target="_blank" class="text">Twitter</a>
      </div>
      <div class="column">
        <div class="title">Sponsors</div>
        <a href="https://www.fountaintire.com/" target="_blank" class="text">Fountain Tire</a>
        <a href="https://www.homedepot.ca/en/home.html" target="_blank" class="text">Home Depot</a>
        <a href="https://janorthalberta.org/company-program-students/company-program/" target="_blank" class="text">Junior Achievement</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      leftPageIndex: 1,
      rightPageIndex: 1
    };
  },
  methods: {
    nextPage() {
      document.querySelector(".right-page").classList.add("flipped");
      document.querySelector("#book-glider").classList.add("flipping");
      this.rightPageIndex += 1;
      document.querySelector(".right-page").style.zIndex = this.rightPageIndex;
      setTimeout(function() {
        document.querySelector("#book-glider").classList.remove("flipping");
      }, 1000);
    },
    previousPage() {
      document.querySelector(".left-page").classList.add("flipped");
      document.querySelector("#book-glider").classList.add("flipping");
      this.leftPageIndex += 1;
      document.querySelector(".left-page").style.zIndex = this.leftPageIndex;
      setTimeout(function() {
        document.querySelector("#book-glider").classList.remove("flipping");
      }, 1000);
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0px;
  background-color: rgba(263, 196, 50, 0.6);
  font-family: optima;
}
a {
  color: black;
  &:hover {
    color: $secondary-colour;
  }
}

.pages {
  display: flex;
  margin-top: 15px;
  margin-left: calc(15vw - 70px);
  font-size: calc(18px + 1vw);
  &#home {
    position: relative;
  }
  .left-page, .right-page {
    width: calc(35vw - 4px);
    height: 70vh;
    padding: 45px 35px;
    border: 2px solid black;
    background-color: #ffffdd;
    transition-duration: 1s;
    transition-timing-function: cubic-bezier(0.5, 0, 1, 0.7);
    z-index: 1;
    cursor: pointer;
  }
  .left-page {
    transform-origin: right;
    border-radius: 20px 0px 0px 20px;
    box-shadow: -10px 20px 50px black;
    transform: skewY(4deg) rotateX(30deg);
    &.flipped {
      transform: skewY(-4deg) rotateX(30deg) rotateY(180deg);
    }
    .right {
      display: none;
    }
  }
  .right-page {
    transform-origin: left;
    border-radius: 0px 20px 20px 0px;
    box-shadow: 10px 20px 50px black;
    transform: skewY(-4deg) rotateX(30deg);
    &.flipped {
      transform: skewY(4deg) rotateX(30deg) rotateY(180deg);
    }
    .left {
      display: none;
    }
  }
}
#book-glider {
  width: 420px;
  position: absolute;
  left: calc(50vw - 210px);
  top: calc(60vh + 15px);
  transform: scale(1) rotateZ(180deg) rotateX(-60deg) translateY(0px);
  z-index: 9999;
  filter: drop-shadow(0px 10px 20px black);
  transition-duration: 1s;
  &.flipping {
    transform: scale(1.4) rotateZ(180deg) rotateX(30deg) translateY(-60px);
  }
}
#bookmark {
  position: absolute;
  top: 60px;
  left: 87%;
  text-align: right;
  z-index: 0;
  transform: skewY(-6deg) rotateX(30deg);
  a {
    display: block;
    color: black;
    text-decoration: none;
    background-color: $tertiary-colour;
    padding: 10px 5px 10px 60px;
    border-radius: 5px;
    margin-bottom: 25px;
    font-weight: 600;
    cursor: pointer;
    opacity: 0.5;
    transform: scale(1);
    transition-duration: 0.3s;
    &:hover {
      opacity: 1;
      transform: scale(1.3);
    }
  }
}

footer {
  display: flex;
  padding: 20px 60px;
  background-color: #ffebf7;
  #copyright {
    text-align: center;
    width: calc(3.5vw + 100px);
    cursor: default;
    font-size: 13px;
    div {
      width: 65%;
    }
    img {
      width: 55%;
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
      color: transparent;
      background-color: black;
      background-clip: text;
      text-shadow: -1px -1px 1px $primary-colour;
      text-align: center;
      cursor: default;
      font-size: calc(18px + 1vw);
      font-weight: 700;
      margin-bottom: 13px;
    }
    .text {
      text-align: center;
      text-decoration: none;
      font-size: calc(16px + 0.2vw);
      padding-bottom: 4px;
      text-decoration: underline;
    }
  }
}
</style>