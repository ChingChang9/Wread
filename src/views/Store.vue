<template>
  <div>
    <div class="left">
      <div id="image-list">
        <img v-for="url in imageUrls" :src="require(`@/assets/product/${ url }.jpg`)" :class="{ focused: focusedImageUrl == url }" @mouseover="focusedImageUrl = url" />
      </div>
      <div id="product">
        <img :src="require(`@/assets/product/${ focusedImageUrl }.jpg`)" />
      </div>
    </div>
    <div class="right">
      <div class="title">Book Glider</div>
      <ul>
        <li>Light, small, easy to carry</li>
        <li>Hand sanded poplar wood, carefully inspected smooth surface</li>
        <li>Aesthetic design, protects the spine of the book</li>
        <li>Sustainable materials, 100% recycled materials for packaging</li>
        <li>Low VOC polish</li>
      </ul>
      <div id="price">
        <span><span style="font-weight: 700; text-decoration: underline;">$5.00</span> per glider</span>
        <span>-or-</span>
        <span>5 for <span style="font-weight: 700; text-decoration: underline;">$20.00</span></span>
      </div>
      <div class="button-wrap">
        <div class="button">
          <a href="https://forms.gle/JqbwNo6fNtKcqA1S6" target="_blank">Buy Now</a>
        </div>
      </div>
      <div class="description">
        All of our materials are locally sourced in an environmentally responsible manner
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Store",
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