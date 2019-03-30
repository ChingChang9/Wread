<template>
  <div>
    <div class="left">
      <div v-if="selected === 'English'" class="title">Mission Statement</div>
      <div v-else-if="selected === 'French'" class="title">Déclaration de Mission</div>
      <div v-else-if="selected === 'Traditional'" class="title">使命宣言</div>
      <div v-else-if="selected === 'Simplified'" class="title">使命宣言</div>
      <div class="break"></div>
      <div v-if="selected === 'English'" class="paragraph">
        To care for our world together by creating a path for new opportunities, new smiles, and new
        pages
      </div>
      <div v-else-if="selected === 'French'" class="paragraph">
        Pour les nouvelles opportunités, les nouveaux sourires et les nouveaux pages. Nous pouvons prendre soin du monde ensemble
      </div>
      <div v-else-if="selected === 'Traditional'" class="paragraph">
        為新的微笑，新的機會，和新的書頁創造道路。通過這個道路來共同關心我們的世界
      </div>
      <div v-else-if="selected === 'Simplified'" class="paragraph">
        为新的微笑，新的机会，和新的书页创造道路。通过这个道路来共同关心我们的世界
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
  name: "About",
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
  img {
    margin-top: 30px;
    width: 100%;
    border: 2px solid black;
    transform: rotateY(180deg);
  }
}
</style>