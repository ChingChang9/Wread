<template>
  <div>
    <div class="left">
      <table>
        <tr v-if="showMetric">
          <td>Length</td>
          <td>10.5cm*</td>
        </tr>
        <tr v-else>
          <td>Length</td>
          <td>4.1"*</td>
        </tr>
        <tr v-if="showMetric">
          <td>Width</td>
          <td>5.0cm*</td>
        </tr>
        <tr v-else>
          <td>Width</td>
          <td>2.0"*</td>
        </tr>
        <tr v-if="showMetric">
          <td>Height</td>
          <td>1.7cm*</td>
        </tr>
        <tr v-else>
          <td>Height</td>
          <td>0.67"*</td>
        </tr>
        <tr v-if="showMetric">
          <td>Hole Diameter</td>
          <td>2.5cm*</td>
        </tr>
        <tr v-else>
          <td>Hole Diameter</td>
          <td>0.98"*</td>
        </tr>
        <tr>
          <td>Material</td>
          <td>Poplar Wood</td>
        </tr>
        <tr>
          <td>Colour</td>
          <td>Beige</td>
        </tr>
        <tr>
          <td>Edge Profile</td>
          <td>Round edge</td>
        </tr>
        <tr>
          <td>Finish</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>Moisture Resistant</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>Rot Resistant</td>
          <td>Yes</td>
        </tr>
      </table>
      <div>* measurements are approximate</div>
      <div v-if="showMetric" class="button" @click="showMetric = !showMetric">Show Imperial</div>
      <div v-else class="button" @click="showMetric = !showMetric">Show Metric</div>
    </div>
    <div class="right">
      Talk about the materials that we use and how they are good for both the customer and the environment
    </div>
  </div>
</template>

<script>
export default {
  name: "Info",
  data() {
    return {
      showMetric: true
    };
  }
}
</script>

<style lang="scss" scoped>
table {
  font-size: 19px;
  width: 100%;
  border-collapse: collapse;
  td {
    padding: 10px 5px;
    border: 2px solid black;
  }
}
.button {
  user-select: none;
  margin-top: 25px;
  display: inline-block;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid black;
  cursor: pointer;
}
img {
  width: 30%;
}
</style>