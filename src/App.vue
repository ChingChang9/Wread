<template>
  <div id="app">
    <div v-if="screenWidth >= 930 && !isSafari ">

      <div id="book" :class="{ blur: showGoal }">
        <div class="pages" style="margin-top: 45px;">
          <div class="left-page" style="margin-left: -10px; width: calc(35vw + 6px); box-shadow: 0px 20px 50px black; z-index: -1;" @click.self="previousPage"></div>
          <div class="right-page" style="width: calc(35vw + 8px); box-shadow: 0px 20px 50px black; z-index: -1;" @click.self="nextPage"></div>
        </div>
        <div class="pages" style="margin-top: 41px;">
          <div class="left-page" style="margin-left: -8px; width: calc(35vw + 4px); z-index: -1;" @click.self="previousPage"></div>
          <div class="right-page" style="width: calc(35vw + 6px); z-index: -1;" @click.self="nextPage"></div>
        </div>
        <div class="pages" style="margin-top: 37px;">
          <div class="left-page" style="margin-left: -6px; width: calc(35vw + 2px); z-index: -1;" @click.self="previousPage"></div>
          <div class="right-page" style="width: calc(35vw + 4px); z-index: -1;" @click.self="nextPage"></div>
        </div>
        <div class="pages" style="margin-top: 33px;">
          <div class="left-page" style="margin-left: -4px; width: 35vw;" @click.self="previousPage"></div>
          <div class="right-page" style="width: calc(35vw + 2px);" @click.self="nextPage"></div>
        </div>
        <div class="pages" style="margin-top: 29px;">
          <div class="left-page" style="margin-left: -2px; width: calc(35vw - 2px);" @click.self="previousPage"></div>
          <div class="right-page" style="width: 35vw;" @click.self="nextPage"></div>
        </div>
        <div id="background" class="pages">
          <div class="left-page">
            <router-view :selected="selected" />
          </div>
          <div class="right-page">
            <router-view :selected="selected" />
          </div>
        </div>
        <div id="top-page" class="pages">
          <div class="left-page" @click.self="previousPage">
            <transition name="left-page" mode="out-in">
              <router-view :selected="selected" />
            </transition>
          </div>
          <div class="right-page" @click.self="nextPage">
            <transition name="right-page" mode="out-in">
              <router-view :selected="selected" />
            </transition>
          </div>
        </div>
      </div>

      <div id="bookmarks" :class="{ blur: showGoal }">
        <router-link v-if="selected === 'English'" :to="{ name: 'Home' }">Home</router-link>
        <router-link v-else-if="selected === 'French'" :to="{ name: 'Home' }">Page D'accueil</router-link>
        <router-link v-else-if="selected === 'Traditional'" :to="{ name: 'Home' }">首頁</router-link>
        <router-link v-else-if="selected === 'Simplified'" :to="{ name: 'Home' }">首页</router-link>
        <router-link v-if="selected === 'English'" id="store" :to="{ name: 'Store' }">Store</router-link>
        <router-link v-else-if="selected === 'French'" id="store" :to="{ name: 'Store' }">Le Magasin</router-link>
        <router-link v-else-if="selected === 'Traditional'" id="store" :to="{ name: 'Store' }">商店</router-link>
        <router-link v-else-if="selected === 'Simplified'" id="store" :to="{ name: 'Store' }">商店</router-link>
        <router-link v-if="selected === 'English'" :to="{ name: 'Info' }">Info</router-link>
        <router-link v-else-if="selected === 'French'" :to="{ name: 'Info' }">Info</router-link>
        <router-link v-else-if="selected === 'Traditional'" :to="{ name: 'Info' }">商品資料</router-link>
        <router-link v-else-if="selected === 'Simplified'" :to="{ name: 'Info' }">商品资料</router-link>
        <router-link v-if="selected === 'English'" :to="{ name: 'About' }">About Us</router-link>
        <router-link v-else-if="selected === 'French'" :to="{ name: 'About' }">Nos Valeurs</router-link>
        <router-link v-else-if="selected === 'Traditional'" :to="{ name: 'About' }">關於我們</router-link>
        <router-link v-else-if="selected === 'Simplified'" :to="{ name: 'About' }">关于我们</router-link>
        <a v-if="selected === 'English'" href="mailto:chingtheprogrammer@gmail.com">Contact Us</a>
        <a v-else-if="selected === 'French'" href="mailto:chingtheprogrammer@gmail.com">Contactez</a>
        <a v-else-if="selected === 'Traditional'" href="mailto:chingtheprogrammer@gmail.com">聯絡我們</a>
        <a v-else-if="selected === 'Simplified'" href="mailto:chingtheprogrammer@gmail.com">联络我们</a>
      </div>

      <div id="book-glider-wrap">
        <img id="book-glider" :class="{ float: showGoal }" src="@/assets/product/2d-product.png" />
      </div>

      <div v-if="showPercentage" id="radial-progress">
        <div id="circle">
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
          <div v-else-if="percentage.toString()[2] === '.'" id="percentage">{{ percentage.toString().substring(0, 2) }}%</div>
          <div v-else id="percentage">{{ percentage.toString().substring(0, 3) }}%</div>
        </div>
      </div>
      <div v-if="showPercentage" id="goal-text-wrap">
        <div v-if="selected === 'English'" id="goal-text">Our goal this year is to sell 800 units</div>
        <div v-else-if="selected === 'French'" id="goal-text">Nous objectif est de vender 800 unités</div>
        <div v-else-if="selected === 'Traditional'" id="goal-text">我們的目標是要賣800件</div>
        <div v-else-if="selected === 'Simplified'" id="goal-text">我们的目标是要卖800件</div>
      </div>

      <div id="setting" :class="{ blur: showGoal }">
        <img src="@/assets/icons/setting.svg" />
        <div id="select-language">
          <div :class="{ 'selected-language': selected === 'English' }" @click="selected = 'English'">English</div>
          <div :class="{ 'selected-language': selected === 'French' }" @click="selected = 'French'">Français</div>
          <div :class="{ 'selected-language': selected === 'Traditional' }" @click="selected = 'Traditional'">繁體中文</div>
          <div :class="{ 'selected-language': selected === 'Simplified' }" @click="selected = 'Simplified'">简体中文</div>
        </div>
      </div>
      <div v-if="selected === 'English'" id="goal-button" :class="{ blur: showGoal }" @click="toggleShowGoal">Goal</div>
      <div v-else-if="selected === 'French'" id="goal-button" :class="{ blur: showGoal }" @click="toggleShowGoal">Objectif</div>
      <div v-else-if="selected === 'Traditional'" id="goal-button" :class="{ blur: showGoal }" @click="toggleShowGoal">目標</div>
      <div v-else-if="selected === 'Simplified'" id="goal-button" :class="{ blur: showGoal }" @click="toggleShowGoal">目标</div>
      <div v-show="showGoal" id="hide-goal" @click="toggleShowGoal"></div>
    </div>

    <div v-else id="mobile-view">
      <div id="header">
        <router-link :to="{ name: 'Home' }">
          <img src="@/assets/icons/logo.svg" />
          <img src="@/assets/company-name.png" />
        </router-link>
        <div class="button">
          <a href="https://forms.gle/JqbwNo6fNtKcqA1S6" target="_blank">Buy</a>
        </div>
      </div>
      <div id="main" class="section">
        <img id="company-name" src="@/assets/company-name.png" />
        <img id="product" src="@/assets/product/3d-product.jpg" />
        <div class="text">
          With a mission statement to care for our world together by creating a path for new opportunities,
          new smiles, and new pages, we strive to promote literacy for all ages, and support the
          message of spreading knowledge, communication, and creativity to our world.
        </div>
      </div>
      <div class="section">
        <div class="title">Design</div>
        <div class="subtitle">Provides comfort and ease with a modern shape.</div>
        <div class="text">
          Our Book Glider features an aesthetic design that not only serves the appeal of its visual
          representation, but is also tested to hold books of all sizes. The curves at the bottom
          are architected in a degree that protects the spines of your dearest books.
        </div>
        <img src="@/assets/store/mockingbird.jpg" />
      </div>
      <div id="materials" class="section">
        <div class="title">Materials</div>
        <div class="subtitle">Locally sourced with the best quality for you and the planet.</div>
        <div class="text">
          We package our product with 100% recycled wrapping paper, held together with acid-free
          glue. Our wood is precisely selected to deliver elegant texture, colour, and mass. With
          minimal volatile organic compounds (VOCs) in our polish, we utilize every opportunity to
          make the most eco-friendly decisions.
        </div>
        <img src="@/assets/photos/materials.jpg" />
      </div>
      <div id="production" class="section">
        <div class="title">Production</div>
        <div class="subtitle">Through the hard work of many hands, we give you the joy of reading with just one.</div>
        <div class="text">
          Our production steps are designed so that products of the utmost quality are created. We
          carefully inspect every unit to ensure it meets the quality we promise you. After cutting
          the poplar wood, we hand-sand the product with sandpapers with a range of roughness to
          create a spotless smooth surface. To match our fine workmanship, our packaging parallels
          our product as we create our handmade origami bags with care and precision.
        </div>
        <img src="@/assets/photos/production.jpg" />
      </div>
      <div id="about" class="section">
        <div class="title">What We Do</div>
        <div class="subtitle">We are passionate about the change our product creates in the world.</div>
        <div class="text">
          Every product sold results in the plantation of two seeds, as we aim to increase awareness
          of environmental degradation to the world. We are running <strong>#trashtag</strong>
          through which we improve our environment by picking up trash on the street and sharing
          our action on social media to encourage others to follow in our footsteps.
        </div>
        <img src="@/assets/photos/trashtag.jpg" />
        <div class="text">
          Not only do we believe that the environment must be protected, the wellness for every
          child is also a priority of ours. This is why we commit 12% of our revenue to support the
          Stollery Children’s Hospital.
        </div>
        <img src="@/assets/photos/group-photo.jpg" />
      </div>
    </div>

    <footer :class="{ blur: showGoal }">
      <div class="column">
        <div v-if="selected === 'English'" class="title">Sponsors</div>
        <div v-else-if="selected === 'French'" class="title">Sponsors</div>
        <div v-else-if="selected === 'Traditional'" class="title">贊助商</div>
        <div v-else-if="selected === 'Simplified'" class="title">赞助商</div>
        <!-- <a href="https://janorthalberta.org/company-program-students/company-program/" target="_blank">Junior Achievement</a>
        <a href="https://www.fountaintire.com/" target="_blank">Fountain Tire</a>
        <a href="https://emeraldfoundation.ca/" target="_blank">Alberta Emerald Foundation</a>
        <a href="https://www.homedepot.ca/en/home.html" target="_blank">Home Depot</a> -->
        <a href="https://www.noggin-clontith.com" target="_blank">Ching Chang, Founder of 🅱️🅱️C</a>
        <a href="https://www.noggin-clontith.com" target="_blank">Jason Liao, CEO of UR MOM</a>
        <a href="https://www.noggin-clontith.com" target="_blank">🅱️erktan Demiruz, Most Volunteer Hours (42069 hours)</a>
      </div>
      <div class="column">
        <div v-if="selected === 'English'" class="title">Social Links</div>
        <div v-else-if="selected === 'French'" class="title">Liens Sociaux</div>
        <div v-else-if="selected === 'Traditional'" class="title">社群連結</div>
        <div v-else-if="selected === 'Simplified'" class="title">社群连结</div>
        <a href="mailto:chingtheprogrammer@gmail.com">Email</a>
        <a href="https://www.facebook.com/wreadjacompany/?__tn__=%2Cd%2CP-R&eid=ARBPFmfiS-1T2RSFIYa8v0IRt6eObnBxy4UFHb_DtorebZyurXGpYQJ3r9FsH_r1Vpb1JlYhUBxXL1lG" target="_blank">Facebook</a>
        <a href="https://www.instagram.com/wread_ja/" target="_blank">Instagram</a>
      </div>
      <div id="copyright" class="column">
        <div>
          <router-link :to="{ name: 'Home' }"><img src="@/assets/icons/logo.svg" /></router-link>
        </div>
        <div v-if="selected === 'English'">Wread &copy; 2019 Creative Commons — All Rights Reserved</div>
        <div v-else-if="selected === 'French'">Wread &copy; 2019 Creative Commons — Tous Droits Réservés</div>
        <div v-else-if="selected === 'Traditional'">Wread &copy; 2019 知識共享 — 保留所有權利</div>
        <div v-else-if="selected === 'Simplified'">Wread &copy; 2019 知识共享 — 保留所有权利</div>
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
      sold: 885,
      percentage: 0,
      acceleration: 0.1,
      intervalID: 0,
      timeoutID: 0,
      screenWidth: 0,
      isSafari: false,
      selected: "English"
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
    if (navigator.userAgent.indexOf("Chrome") === -1 && navigator.userAgent.indexOf("Safari") !== -1) {
      this.isSafari = true;
    }
    this.scale();
    window.addEventListener("resize", this.scale);
    this.timeoutID = setTimeout(function() {
      this.showGoal = false;
    }.bind(this), 750);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.scale);
    clearTimeout(this.timeoutID);
    clearInterval(this.intervalID);
  },
  methods: {
    flipRight() {
      if (document.styleSheets[0].cssRules[0].style[0] === "font-family") {
        document.styleSheets[0].cssRules[2].style.transitionDelay = "950ms";
        document.styleSheets[0].cssRules[3].style.transitionDelay = "770ms";
      } else {
        document.styleSheets[1].cssRules[2].style.transitionDelay = "950ms";
        document.styleSheets[1].cssRules[3].style.transitionDelay = "770ms";
      }
      document.querySelector("#top-page .right-page").classList.add("flipped");
      document.querySelector("#book-glider").classList.add("flipping");
      document.querySelector("#top-page .right-page").style.zIndex = 2;
      document.querySelector("#top-page .left-page").style.zIndex = 1;
      setTimeout(function() {
        document.querySelector("#top-page .right-page").querySelector(".right").style.display = "none";
        document.querySelector("#top-page .right-page").querySelector(".left").style.display = "block";
        document.querySelector("#top-page .right-page").querySelector(".left").style.transform = "rotateY(180deg)";
      }, 810);
      setTimeout(function() {
        document.querySelector("#top-page .right-page").classList.remove("flipped");
        document.querySelector("#top-page .right-page").querySelector(".left").style.display = "none";
        document.querySelector("#top-page .right-page").querySelector(".right").style.display = "block";
        document.querySelector("#book-glider").classList.remove("flipping");
      }, 1000);
    },
    flipLeft() {
      if (document.styleSheets[0].cssRules[0].style[0] === "font-family") {
        document.styleSheets[0].cssRules[2].style.transitionDelay = "770ms";
        document.styleSheets[0].cssRules[3].style.transitionDelay = "950ms";
      } else {
        document.styleSheets[1].cssRules[2].style.transitionDelay = "770ms";
        document.styleSheets[1].cssRules[3].style.transitionDelay = "950ms";
      }
      document.querySelector("#top-page .left-page").classList.add("flipped");
      document.querySelector("#book-glider").classList.add("flipping");
      document.querySelector("#top-page .left-page").style.zIndex = 2;
      document.querySelector("#top-page .right-page").style.zIndex = 1;
      setTimeout(function() {
        document.querySelector("#top-page .left-page").querySelector(".left").style.display = "none";
        document.querySelector("#top-page .left-page").querySelector(".right").style.display = "block";
        document.querySelector("#top-page .left-page").querySelector(".right").style.transform = "rotateY(180deg)";
      }, 820);
      setTimeout(function() {
        document.querySelector("#top-page .left-page").classList.remove("flipped");
        document.querySelector("#top-page .left-page").querySelector(".right").style.display = "none";
        document.querySelector("#top-page .left-page").querySelector(".left").style.display = "block";
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
    toggleShowGoal() {
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
            if (this.percentage < 100) {
              document.querySelector(".fill").style.transform = `rotate(${ this.percentage * 1.8 }deg)`;
              document.querySelectorAll(".fill")[1].style.transform = `rotate(${ this.percentage * 1.8 }deg)`;
              document.querySelector(".mask").style.transform = `rotate(${ this.percentage * 1.8 }deg)`;
              document.querySelector("#fix").style.transform = `rotate(${ this.percentage * 1.8 * 2 }deg)`;
            } else {
              document.querySelector("#radial-progress").style.backgroundColor = "#92dd3c";
              document.querySelector(".fill").style.transform = `rotate(180deg)`;
              document.querySelectorAll(".fill")[1].style.transform = `rotate(${ -180 + (this.percentage - 100) * 1.8 * 2 }deg)`;
              document.querySelector(".mask").style.transform = `rotate(180deg)`;
              document.querySelector("#fix").style.transform = `rotate(360deg)`;
            }
          }.bind(this), 10);
          clearTimeout(this.timeoutID);
        }.bind(this), 1000);
      } else {
        clearTimeout(this.timeoutID);
      }
    },
    scale() {
      this.screenWidth = window.innerWidth;
    }
  },
}
</script>

<style lang="scss">
@font-face {
  font-family: IBM Plex Serif;
  src: url('assets/fonts/IBMPlexSerif-Regular.ttf');
  font-weight: normal;
}
@font-face {
  font-family: IBM Plex Serif;
  src: url('assets/fonts/IBMPlexSerif-Bold.ttf');
  font-weight: 700;
}

.left-page-enter-active, .left-page-leave-active {
  transition-delay: 950ms;
}
.right-page-enter-active, .right-page-leave-active {
  transition-delay: 770ms;
}
body {
  margin: 0px;
  background-color: #dddddd;
  font-family: IBM Plex Serif;
  overflow-x: hidden;
}
a {
  color: black;
  &:hover {
    color: darken($primary-colour, 20%);
  }
}
.blur {
  filter: blur(5px);
}

#book {
  height: calc(70vh + 130px);
  transition-duration: 1s;
  .pages {
    position: absolute;
    display: flex;
    margin-top: 25px;
    margin-left: calc(15vw - 70px);
    font-size: calc(10px + 0.8vw);
    &#background {
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
      background: url('assets/texture.jpg');
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
      border-left: 1px solid black;
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
      border-right: 1px solid black;
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
  drop-shadow(0px 5px 10px black);
  top: 55vh;
  left: calc((100vw - 20vw - 150px) / 2);
  z-index: 9998;
  #book-glider {
    width: calc(20vw + 150px);
    transform: scale(1) rotateZ(180deg) rotateX(-80deg) translateY(0px);
    transition-duration: 1s;
    &.flipping {
      transform: scale(1.4) rotateZ(180deg) rotateX(30deg) translateY(-60px);
    }
    &.float {
      transform: scale(2) rotateZ(0deg) rotateX(0deg) translateY(-15vh);
    }
  }
}
#bookmarks {
  position: absolute;
  top: 60px;
  left: 84%;
  text-align: right;
  z-index: 0;
  transform: skewY(-6deg) rotateX(30deg);
  transition-duration: 1s;
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
#radial-progress {
  $circle-size: calc(75px + 10vw);
  position: absolute;
  background-color: #a68f7b;
  border-radius: 50%;
  width: $circle-size;
  height: $circle-size;
  left: calc((100vw - #{$circle-size}) / 2);
  top: calc(60px + 15vh);
  z-index: 9998;
  #circle {
    .mask, .fill {
      position: absolute;
      border-radius: 50%;
      width: $circle-size;
      height: $circle-size;
    }
    .mask {
      clip: rect(0px, $circle-size, $circle-size, calc(#{$circle-size} / 2));
      .fill {
        clip: rect(0px, calc(#{$circle-size} / 2), $circle-size, 0px);
        background-color: black;
      }
    }
  }
  #shadow {
    width: $circle-size;
    height: $circle-size;
    position: absolute;
    border-radius: 50%;
    box-shadow: inset 6px 6px 10px rgba(black, 0.2);
  }
  #inset {
    width: calc(#{$circle-size} / 8 * 7);
    height: calc(#{$circle-size} / 8 * 7);
    position: absolute;
    margin-left: calc(#{$circle-size} / 16);
    margin-top: calc(#{$circle-size} / 16);
    background-color: #888888;
    box-shadow: inset -5px -5px 10px rgba(black, 0.4);
    border-radius: 50%;
    #percentage {
      color: black;
      font-size: 4.5vw;
      font-weight: 700;
      width: calc(#{$circle-size} / 8 * 7);
      text-align: center;
      line-height: 1;
      overflow: hidden;
      margin-top: calc(#{$circle-size} / 3.5);
      margin-left: calc(#{$circle-size} / 32);
    }
  }
}
#goal-text-wrap {
  position: absolute;
  text-align: center;
  width: 100vw;
  margin-top: -10vh;
  z-index: 2;
  #goal-text {
    font-size: calc(18px + 2vw);
    font-weight: 700;
    text-shadow: 0px 0px 5px white;
  }
}
#setting {
  position: absolute;
  margin-top: -115px;
  margin-left: 10px;
  display: flex;
  z-index: 5;
  img {
    width: 100px;
    height: 100px;
    cursor: pointer;
    filter: drop-shadow(2px 2px 5px black);
    transition-duration: 1s;
    &:hover {
      transform: rotateZ(90deg);
      ~ #select-language {
        visibility: visible;
      }
    }
  }
  #select-language {
    visibility: hidden;
    background-color: #aaaaaa;
    &:hover {
      visibility: visible;
    }
    div {
      padding: 5px 10px;
      cursor: pointer;
      &:hover, &.selected-language {
        background-color: $secondary-colour;
      }
    }
  }
}
#goal-button {
  position: absolute;
  background-color: $secondary-colour;
  text-align: center;
  font-weight: 700;
  font-size: 22px;
  width: 100px;
  padding: 35px 0px;
  border-radius: 50%;
  right: 15px;
  margin-top: -115px;
  cursor: pointer;
  box-shadow: 2px 2px 5px black;
  text-shadow: 1px 1px 10px black;
  &:hover {
    transform: translateX(1px) translateY(1px);
    box-shadow: 1px 1px 5px black;
  }
}
#hide-goal {
  z-index: 2;
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0px;
}

footer {
  display: flex;
  padding: 20px 60px;
  background-color: #444444;
  transition-duration: 1s;
  .column {
    display: flex;
    flex-grow: 1;
    align-items: center;
    flex-direction: column;
    margin: 0px 5vw;
    width: calc(40px + 10vw);
    color: white;
    opacity: 0.5;
    transition: 0.3s;
    &:hover {
      opacity: 1;
    }
    &#copyright {
      text-align: center;
      font-size: 13px;
      cursor: default;
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
      font-weight: 700;
      font-size: calc(18px + 1vw);
      margin-bottom: 13px;
      letter-spacing: 5px;
      cursor: default;
    }
    a {
      text-align: center;
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

#mobile-view {
  padding-left: 30px;
  padding-right: 30px;
  #header {
    background-color: #666666;
    width: calc(100vw - 40px);
    height: 35px;
    margin-left: -30px;
    position: fixed;
    padding: 15px 20px 10px 20px;
    justify-content: space-between;
    opacity: 0.8;
    img {
      height: 100%;
      width: auto;
      margin-top: 0px;
      margin-right: 15px;
    }
    .button {
      user-select: none;
      float: right;
      a {
        background-color: $orange;
        color: black;
        padding: 3px 10px;
        border-radius: 25px;
        font-size: 21px;
        text-decoration: none;
        box-shadow: 1px 2px 5px black;
        text-shadow: 1px 1px 2px black;
        &:hover {
          background-color: darken($orange, 10%);
        }
      }
    }
  }
  #main {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    #company-name {
      width: 75%;
      max-width: 800px;
      margin-top: 100px;
    }
    #product {
      width: 90%;
      margin-top: 40px;
    }
    .text {
      text-align: center;
    }
  }
  .section {
    .title {
      font-weight: 700;
      font-size: 52px;
      margin-bottom: 0.5em;
    }
    .subtitle {
      font-weight: 700;
      font-size: 26px;
      margin-bottom: 1em;
    }
    .text {
      font-size: 19px;
    }
    margin-bottom: 95px;
  }
  img {
    margin-top: 1em;
    width: 100%;
    max-width: 755px;
  }
}

@media (min-width: 930px) {
  #mobile-view {
    #main {
      .text {
        max-width: 90%;
      }
    }
    #materials, #production {
      .title {
        float: right;
      }
    }
    #about {
      text-align: center;
    }
    .section {
      .title {
        font-size: 160px;
      }
      .subtitle {
        max-width: 45%;
        float: left;
        margin: 0px 2.5%;
        font-size: 48px;
      }
      .text {
        max-width: 45%;
        float: right;
        margin: 0px 2.5%;
        font-size: 24px;
      }
      margin-bottom: 150px;
    }
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
    $circle-size: calc(75px + 10vw);
    left: calc((90vw - #{$circle-size}) / 2);
  }
  #goal-text-wrap {
    width: 90vw;
  }
  #bookmarks {
    left: 79.5%;
  }
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
@media (max-height: 700px) {
  #book {
    .pages {
      font-size: calc(10px + 0.6vw);
    }
  }
}
</style>