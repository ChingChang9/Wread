<template>
  <div>
    <div class="left">
      <img id="logo" src="@/assets/logo.svg" />
      <img id="name" src="@/assets/companyName.jpg" />
    </div>
    <div class="right">
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
</style>