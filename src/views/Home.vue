<template>
  <div>
    <div class="left">
      <img id="logo" src="@/assets/logo.svg" />
      <img id="name" src="@/assets/companyName.png" />
    </div>
    <div class="right">
      <div>Mission Statement</div>
      <div class="break"></div>
      <div>
        To care for our world together by creating a path for new opportunities, new smiles, and new
        pages
      </div>
      <img src="@/assets/groupPhoto.jpg" />
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
  font-size: 30px;
  img {
    margin-top: 30px;
    width: 100%;
    border: 2px solid black;
  }
}
</style>