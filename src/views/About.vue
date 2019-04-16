<template>
  <div>
    <div class="left">
      <div v-if="selected === 'English'" class="title">Mission Statement</div>
      <div v-else-if="selected === 'French'" class="title" style="font-size: calc(16px + 2vw);">Déclaration de Mission</div>
      <div v-else-if="selected === 'Traditional'" class="title">使命宣言</div>
      <div v-else-if="selected === 'Simplified'" class="title">使命宣言</div>
      <div class="break"></div>
      <div v-if="selected === 'English'" class="paragraph">
        To care for our world together by creating a path for new opportunities, new smiles, and new
        pages
      </div>
      <div v-else-if="selected === 'French'" class="paragraph">
        Pour les nouvelles opportunités, les nouveaux sourires et les nouveaux pages. Nous pouvons
        prendre soin du monde ensemble
      </div>
      <div v-else-if="selected === 'Traditional'" class="paragraph">
        為新的微笑，新的機會，和新的書頁創造道路。通過這個道路來共同關心我們的世界
      </div>
      <div v-else-if="selected === 'Simplified'" class="paragraph">
        为新的微笑，新的机会，和新的书页创造道路。通过这个道路来共同关心我们的世界
      </div>
      <img src="@/assets/photos/group-photo.jpg" />
    </div>
    <div class="right">
      <div v-if="selected === 'English'" class="big-text">We are passionate about the change our product creates in the world.</div>
      <div v-else-if="selected === 'French'" class="big-text">We are passionate about the change our product creates in the world.</div>
      <div v-else-if="selected === 'Traditional'" class="big-text">We are passionate about the change our product creates in the world.</div>
      <div v-else-if="selected === 'Simplified'" class="big-text">We are passionate about the change our product creates in the world.</div>
      <div v-if="selected === 'English'">
        Every product sold results in the plantation of two seeds, as we aim to increase awareness
        of environmental degradation to the world. We are running <strong>#trashtag</strong>
        through which we ameliorate our environment by picking up trash by the street, and sharing
        our action on social medias to encourage others to follow our footsteps.
      </div>
      <div v-else-if="selected === 'French'">
        Every product sold results in the plantation of two seeds, as we aim to increase awareness
        of environmental degradation to the world. We are running <strong>#trashtag</strong>
        through which we ameliorate our environment by picking up trash by the street, and sharing
        our action on social medias to encourage others to follow our footsteps.
      </div>
      <div v-else-if="selected === 'Traditional'">
        Every product sold results in the plantation of two seeds, as we aim to increase awareness
        of environmental degradation to the world. We are running <strong>#trashtag</strong>
        through which we ameliorate our environment by picking up trash by the street, and sharing
        our action on social medias to encourage others to follow our footsteps.
      </div>
      <div v-else-if="selected === 'Simplified'">
        Every product sold results in the plantation of two seeds, as we aim to increase awareness
        of environmental degradation to the world. We are running <strong>#trashtag</strong>
        through which we ameliorate our environment by picking up trash by the street, and sharing
        our action on social medias to encourage others to follow our footsteps.
      </div>
      <img src="@/assets/photos/trashtag.jpg" />
      <div v-if="selected === 'English'">
        Not only do we believe that the environment must be protected, the education for every
        child is also a priority of ours. This is why we commit 12% of our revenue to support the
        Stollery Children’s Hospital
      </div>
      <div v-else-if="selected === 'French'">
        Not only do we believe that the environment must be protected, the education for every
        child is also a priority of ours. This is why we commit 12% of our revenue to support the
        Stollery Children’s Hospital
      </div>
      <div v-else-if="selected === 'Traditional'">
        Not only do we believe that the environment must be protected, the education for every
        child is also a priority of ours. This is why we commit 12% of our revenue to support the
        Stollery Children’s Hospital
      </div>
      <div v-else-if="selected === 'Simplified'">
        Not only do we believe that the environment must be protected, the education for every
        child is also a priority of ours. This is why we commit 12% of our revenue to support the
        Stollery Children’s Hospital
      </div>
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
.right {
  .big-text {
    font-weight: 700;
    margin-bottom: 0.5em;
  }
  img {
    width: 42.5%;
    display: block;
    float: left;
    margin-top: 0.5em;
    margin-right: 0.5em;
  }
}
</style>