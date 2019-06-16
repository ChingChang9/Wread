<template>
  <div>
    <div class="left">
      <img id="logo" src="@/assets/icons/logo.svg" />
      <img id="company-name" src="@/assets/company-name.png" />
    </div>
    <div class="right">
      <div v-if="selected === 'English'">
        Through the hard work of many hands, we give you the joy to read with just one
      </div>
      <div v-else-if="selected === 'French'">
        À travers de travail ardu de nombreuses mains, nous vous donnons la joie de lire avec un
        seul
      </div>
      <div v-else-if="selected === 'Traditional'">
        通過許多手的努力，我們給你帶來只需用一隻閱讀的愉快
      </div>
      <div v-else-if="selected === 'Simplified'">
        通过许多手的努力，我们给你带来只需用一只阅读的愉快
      </div>
      <div class="break"></div>
      <a href="https://www.youtube.com/watch?v=qLNh0edxeeY" target="_blank">
        <video src="@/assets/videos/commercial-clip.mp4" autoplay muted loop />
      </a>
      <div class="break"></div>
      <div v-if="selected === 'English'">
        We strive to promote literacy for all ages, and support the message of spreading knowledge,
        communication, and creativity to our world
      </div>
      <div v-else-if="selected === 'French'">
        Nous nous efforçons de promouvoir l’alphabétisation pour tous les âges et soutenons le
        message de la diffusion des connaissances, de communication et de la créativité pour notre
        monde
      </div>
      <div v-else-if="selected === 'Traditional'">
        我們努力促進所有年齡段的識字，並支持傳播知識，溝通，和創造我們的世界的信息
      </div>
      <div v-else-if="selected === 'Simplified'">
        我们努力促进所有年龄段的识字，并支持传播知识，沟通，和创造我们的世界的信息
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    selected: {
      type: String,
      default: "English"
    }
  }
}
</script>

<style lang="scss" scoped>
.left {
  text-align: center;
  #logo {
    width: 60%;
    margin-bottom: 8vh;
  }
  #company-name {
    width: 75%;
  }
}
.right {
  video {
    width: 100%;
  }
}

@media (max-height: 700px) {
  .right {
    text-align: center;
  }
}
</style>