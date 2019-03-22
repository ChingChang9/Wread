<template>
  <div id="main-div">
    <img id="book-glider" src="@/assets/product.png" />
    <div id="radial-progress">
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
    <div>Our goal this year is to sell 800 units</div>
  </div>
</template>

<script>
export default {
  name: "Goal",
  data() {
    return {
      sold: 107,
      percentage: 0,
      acceleration: 0.1,
      intervalID: 0,
      timeoutID: 0
    };
  },
  mounted() {
    this.timeoutID = setTimeout(function() {
      this.intervalID = setInterval(function() {
        if (this.percentage < this.sold / 800 * 100) {
          this.percentage += this.acceleration;
          this.acceleration *= 1.015;
        } else {
          this.percentage = this.sold / 800 * 100;
          clearInterval(this.intervalID);
        }
        this.fill();
      }.bind(this), 10);
    }.bind(this), 500);
  },
  beforeDestroy() {
    clearTimeout(this.timeoutID);
    clearInterval(this.intervalID);
  },
  methods: {
    fill() {
      document.querySelector(".fill").style.transform = `rotate(${ this.percentage * 1.8 }deg)`;
      document.querySelectorAll(".fill")[1].style.transform = `rotate(${ this.percentage * 1.8 }deg)`;
      document.querySelector(".mask").style.transform = `rotate(${ this.percentage * 1.8 }deg)`;
      document.querySelector("#fix").style.transform = `rotate(${ this.percentage * 1.8 * 2 }deg)`;
    }
  }
}
</script>

<style lang="scss" scoped>
$circle-size: 22.5vw;

#main-div {
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  font-size: calc(18px + 2vw);
  #book-glider {
    width: 90vw;
    height: 40vw;
    position: absolute;
    left: 5vw;
    top: 100px;
    z-index: -1;
    filter: drop-shadow(0px 5px 10px black);
    transform: rotateZ(0deg) rotateX(0deg);
  }
  #radial-progress {
    display: flex;
    margin-top: calc(80px + 1vw);
    margin-bottom: 15vw;
    background-color: #92600b;
    border-radius: 50%;
    width: $circle-size;
    height: $circle-size;
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
      background-color: lighten($primary-colour, 20%);
      box-shadow: -5px -5px 10px rgba(black, 0.4) inset;
      border-radius: 50%;
      #percentage {
        color: black;
        font-size: 7vw;
        font-weight: 800;
        width: $circle-size / 8 * 7;
        text-align: center;
        line-height: 1;
        overflow: hidden;
        margin-top: $circle-size / 4;
        margin-left: $circle-size / 16;
      }
    }
  }
}

@media (max-width: 700px) {
  #radial-progress {
    margin-top: calc(45px + 1vw) !important;
    margin-bottom: 14vw !important;
  }
}
</style>