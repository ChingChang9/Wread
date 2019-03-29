<template>
  <div>
    <div class="left">
      <img id="logo" src="@/assets/icons/logo.svg" />
      <img id="name" src="@/assets/company-name.png" />
    </div>
    <div class="right">
      <div>
        Through the hard work of many hands, we give you the joy to read with just one
      </div>
      <div class="break"></div>
      <a href="https://www.youtube.com/watch?v=qLNh0edxeeY" target="_blank">
        <video src="@/assets/videos/clip1.mp4" autoplay muted loop />
      </a>
      <div class="break"></div>
      <div>
        We strive to promote literacy for all ages, and support the message of spreading knowledge,
        communication, and creativity to our world
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style lang="scss" scoped>
.left {
  text-align: center;
  #logo {
    width: 60%;
    margin-bottom: 60px;
  }
  #name {
    width: 75%;
  }
}
.right {
  video {
    width: 100%;
  }
}
</style>