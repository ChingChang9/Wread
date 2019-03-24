<template>
  <div>
    <div class="left">
      <div class="title">Mission Statement</div>
      <div class="break"></div>
      <div class="paragraph">
        To care for our world together by creating a path for new opportunities, new smiles, and new
        pages
      </div>
      <img src="@/assets/groupPhoto.jpg" />
    </div>
    <div class="right">
      <div>
        Wread, A JA Company creates the book glider through the hard work of many hands, so that you
        can read with one! Our product is made of locally sourced recycled wood, durable, with a
        professional polish finishing. With our product we strive to promote literacy for all ages,
        and support the message of spreading knowledge, communication, and creativity to our world
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style lang="scss" scoped>
.left {
  img {
    margin-top: 30px;
    width: 100%;
    border: 2px solid black;
    transform: rotateY(180deg);
  }
}
</style>