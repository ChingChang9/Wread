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
        <li>Hand sanded poplar wood, carefully inspected smooth surface</li>
        <li>Light, small, easy to carry</li>
        <li>Aesthetic design, protects the spine of the book</li>
        <li>Sustainable materials, 100% recycled materials for packaging</li>
        <li>Low VOC polish</li>
      </ul>
      <div id="price">
        <span style="float: left;"><span style="font-family: Montserrat; font-weight: 800; text-decoration: underline;">$5.00</span> per glider</span>-or-<span style="float: right;">Buy 4 get 1 free</span>
      </div>
      <div class="button">
        <a href="https://forms.gle/JqbwNo6fNtKcqA1S6" target="_blank">Buy Now</a>
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
      focusedImageUrl: "close-up",
      imageUrls: ["close-up", "rose", "book-weight", "rose-top-view", "top-view", "book-shelf"]
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
  .button {
    text-align: center;
    margin-top: 45px;
    margin-bottom: 45px;
    display: inline-block;
    &:hover {
      transform: scale(1.05);
    }
    a {
      background-color: $orange;
      padding: 10px;
      border-radius: 10px;
      font-family: Montserrat;
      font-weight: 500;
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
  #price {
    text-align: center;
  }
  .description {
    font-size: 16px;
    text-align: center;
    color: lighten(black, 20%);
  }
}
</style>