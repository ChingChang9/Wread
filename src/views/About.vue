<template>
  <div>
    <div class="left">
      <div class="title">Mission Statement</div>
      <div class="break"></div>
      <div class="paragraph">
        To care for our world together by creating a path for new opportunities, new smiles, and new
        pages
      </div>
      <img src="@/assets/group-photo.jpg" />
    </div>
    <div class="right">
      Talk about volunteering, donations, and a little more about our company
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