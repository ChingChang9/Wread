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
      <div v-else-if="selected === 'French'" class="big-text">Nous sommes passionnés par le changement que notre produit crée dans le monde.</div>
      <div v-else-if="selected === 'Traditional'" class="big-text">我們對我們的產品在世界上所創造的變化充滿熱情</div>
      <div v-else-if="selected === 'Simplified'" class="big-text">我们对我们的产品在世界上所创造的变化充满热情</div>
      <div v-if="selected === 'English'">
        Every product sold results in the plantation of two seeds, as we aim to increase awareness
        of environmental degradation to the world. We are running <strong>#trashtag</strong>
        through which we improve our environment by picking up trash on the street and sharing
        our action on social media to encourage others to follow in our footsteps.
      </div>
      <div v-else-if="selected === 'French'">
        Chaque produit vendu donne lieu à la plantation de deux semences, dans le but de
        sensibiliser davantage à la dégradation de l'environnement dans le monde. Nous organisons
        <strong>#trashtag</strong> pour améliorer notre environnement en ramassant les ordures dans
        la rue et en partageant notre action sur les réseaux sociaux pour encourager les autres à
        suivre notre exemple.
      </div>
      <div v-else-if="selected === 'Traditional'">
        每一個銷售的產品都會種植兩粒種子，因為我們的目標是提高對環境退化的認識。我們正在運行<strong>#trashtag</strong>，我們通過街道拾取垃圾來改善我們的環境，並在社交媒體上分享我們的行動，以鼓勵其他人跟隨我們的腳步。
      </div>
      <div v-else-if="selected === 'Simplified'">
        每一个销售的产品都会种植两粒种子，因为我们的目标是提高对环境退化的认识。我们正在运行<strong>#trashtag</strong>，通过街道拾取垃圾来改善我们的环境，并在社交媒体上分享我们的行动，以鼓励其他人跟随我们的脚步。
      </div>
      <img src="@/assets/photos/trashtag.jpg" />
      <div v-if="selected === 'English'">
        Not only do we believe that the environment must be protected, the wellness for every
        child is also a priority of ours. This is why we commit 12% of our revenue to support the
        Stollery Children’s Hospital
      </div>
      <div v-else-if="selected === 'French'">
        Non seulement nous pensons que l'environnement doit être protégé, mais l'éducation de chaque
        enfant est aussi une priorité pour nous. C’est pourquoi nous consacrons 12% de nos revenus
        au soutien de l’hôpital Stollery pour enfants
      </div>
      <div v-else-if="selected === 'Traditional'">
        我們不僅相信必須保護環境，而且每個孩子的教育也是我們的優先事項。這就是我們將12％的收入用於支持Stollery兒童醫院的原因
      </div>
      <div v-else-if="selected === 'Simplified'">
        我们不仅相信必须保护环境，而且每个孩子的教育也是我们的优先事项。这就是我们将12％的收入用于支持Stollery儿童医院的原因
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