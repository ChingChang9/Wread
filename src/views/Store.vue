<template>
  <div>
    <div class="left">
      <div id="image-list">
        <img v-for="url in imageUrls" :src="require(`@/assets/store/${ url }.jpg`)" :class="{ focused: focusedImageUrl == url }" @mouseover="focusedImageUrl = url" />
      </div>
      <div id="product">
        <img :src="require(`@/assets/store/${ focusedImageUrl }.jpg`)" />
      </div>
    </div>
    <div class="right">
      <div v-if="selected === 'English'" class="title">Book Glider</div>
      <div v-else-if="selected === 'French'" class="title">Livre Planeur</div>
      <div v-else-if="selected === 'Traditional'" class="title">書中的飛行者</div>
      <div v-else-if="selected === 'Simplified'" class="title">书中的飞行者</div>
      <ul>
        <li v-if="selected === 'English'">Light, small, easy to carry</li>
        <li v-else-if="selected === 'French'">Petit, facile de porter</li>
        <li v-else-if="selected === 'Traditional'">重量輕，小，方便攜帶</li>
        <li v-else-if="selected === 'Simplified'">重量轻，小，方便携带</li>
        <li v-if="selected === 'English'">Hand sanded poplar wood, carefully inspected smooth surface</li>
        <li v-else-if="selected === 'French'">Peuplier sablé à la main, surface lisse soigneusement inspectée</li>
        <li v-else-if="selected === 'Traditional'">手工磨的白楊木，小心地檢查過的光滑表面</li>
        <li v-else-if="selected === 'Simplified'">手工磨的白杨木，小心地检查过的光滑表面</li>
        <li v-if="selected === 'English'">Aesthetic design, protects the spine of the book</li>
        <li v-else-if="selected === 'French'">Design esthétique, protège la colonne vertébrale du livre</li>
        <li v-else-if="selected === 'Traditional'">充滿藝術的設計，保護書脊</li>
        <li v-else-if="selected === 'Simplified'">充满艺术的设计，保护书脊</li>
        <li v-if="selected === 'English'">Sustainable materials, 100% recycled materials for packaging</li>
        <li v-else-if="selected === 'French'">Matériaux durables, 100% de matériaux recyclés pour l'emballage</li>
        <li v-else-if="selected === 'Traditional'">環保的材料，包裝利用百分之百回收的材料</li>
        <li v-else-if="selected === 'Simplified'">环保的材料，包装利用百分之百回收的材料</li>
        <li v-if="selected === 'English'">Low VOC polish</li>
        <li v-else-if="selected === 'French'">Vernis à faible teneur en COV</li>
        <li v-else-if="selected === 'Traditional'">低揮發性有機化合物的臘</li>
        <li v-else-if="selected === 'Simplified'">低挥发性有机化合物的腊</li>
      </ul>
      <div id="price">
        <span v-if="selected === 'English'"><span style="font-weight: 700; text-decoration: underline;">$5.00</span> per glider</span>
        <span v-else-if="selected === 'French'"><span style="font-weight: 700; text-decoration: underline;">$5.00</span> par planeur</span>
        <span v-else-if="selected === 'Traditional'">一件 <span style="font-weight: 700; text-decoration: underline;">$5.00</span></span>
        <span v-else-if="selected === 'Simplified'">一件 <span style="font-weight: 700; text-decoration: underline;">$5.00</span></span>
        <span v-if="selected === 'English'">-or-</span>
        <span v-else-if="selected === 'French'">-ou-</span>
        <span v-else-if="selected === 'Traditional'">-或是-</span>
        <span v-else-if="selected === 'Simplified'">-或是-</span>
        <span v-if="selected === 'English'">5 for <span style="font-weight: 700; text-decoration: underline;">$20.00</span></span>
        <span v-else-if="selected === 'French'">5 pour <span style="font-weight: 700; text-decoration: underline;">$20.00</span></span>
        <span v-else-if="selected === 'Traditional'">5件 <span style="font-weight: 700; text-decoration: underline;">$20.00</span></span>
        <span v-else-if="selected === 'Simplified'">5件 <span style="font-weight: 700; text-decoration: underline;">$20.00</span></span>
      </div>
      <div class="button-wrap">
        <div class="button">
          <a v-if="selected === 'English'" href="https://forms.gle/JqbwNo6fNtKcqA1S6" target="_blank">Buy Now</a>
          <a v-else-if="selected === 'French'" href="https://forms.gle/JqbwNo6fNtKcqA1S6" target="_blank">Achetez maintenant</a>
          <a v-else-if="selected === 'Traditional'" href="https://forms.gle/JqbwNo6fNtKcqA1S6" target="_blank">立即購買</a>
          <a v-else-if="selected === 'Simplified'" href="https://forms.gle/JqbwNo6fNtKcqA1S6" target="_blank">立即购买</a>
        </div>
      </div>
      <div v-if="selected === 'English'" class="description">
        All of our materials are locally sourced in an environmentally responsible manner
      </div>
      <div v-else-if="selected === 'French'" class="description">
        Tous nos matériaux proviennent sources locales et respectueux de l'environnement
      </div>
      <div v-else-if="selected === 'Traditional'" class="description">
        我們的材料都是在照顧環境的情況下，在當地採取的
      </div>
      <div v-else-if="selected === 'Simplified'" class="description">
        我们的材料都是在照顾环境的情况下，在当地采取的
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Store",
  props: {
    selected: {
      type: String,
      default: "English"
    }
  },
  data() {
    return {
      focusedImageUrl: "mockingbird",
      imageUrls: ["mockingbird", "close-up", "book-weight", "rose", "divergent", "book-shelf"]
    };
  }
}
</script>

<style lang="scss" scoped>
.left {
  text-align: center;
  #image-list {
    display: flex;
    height: 100px;
    img {
      cursor: pointer;
      flex-grow: 1;
      width: 0px;
      margin-bottom: 15px;
      border: 2px solid $secondary-colour;
      &:hover, &.focused {
        box-shadow: 0px 0px 15px darken($secondary-colour, 20%), 0px 0px 5px black;
      }
    }
  }
  #product {
    img {
      max-height: 50vh;
      max-width: 100%;
      border-radius: 10px;
    }
  }
}
.right {
  line-height: 1.2;
  #price {
    text-align: center;
    display: flex;
    flex-grow: 1;
    justify-content: center;
    span {
      width: 200px;
    }
  }
  .button-wrap {
    text-align: center;
    .button {
      user-select: none;
      margin-top: 45px;
      margin-bottom: 45px;
      display: inline-block;
      text-align: center;
      &:hover {
        transform: scale(1.05);
      }
      a {
        background-color: $orange;
        padding: 10px;
        border-radius: 10px;
        font-size: calc(18px + 1vw);
        text-decoration: none;
        color: black;
        box-shadow: 1px 2px 5px black;
        text-shadow: 1px 1px 2px black;
        &:hover {
          background-color: darken($orange, 5%);
        }
      }
    }
  }
  .description {
    font-size: 16px;
    text-align: center;
    color: lighten(black, 20%);
  }
}
</style>