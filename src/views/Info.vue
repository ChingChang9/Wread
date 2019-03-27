<template>
  <div>
    <div class="left">
      <table>
        <tr v-if="showMetric">
          <td>Length (±0.5cm)</td>
          <td>10.5cm</td>
        </tr>
        <tr v-else>
          <td>Length (±0.2")</td>
          <td>4.1"</td>
        </tr>
        <tr v-if="showMetric">
          <td>Width (±0.5cm)</td>
          <td>5.0cm</td>
        </tr>
        <tr v-else>
          <td>Width (±0.2")</td>
          <td>2.0"</td>
        </tr>
        <tr v-if="showMetric">
          <td>Height (±0.5cm)</td>
          <td>1.7cm</td>
        </tr>
        <tr v-else>
          <td>Height (±0.2")</td>
          <td>0.67"</td>
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
      <div class="button-wrap">
        <div v-if="showMetric" class="button" @click="showMetric = !showMetric">Show Imperial</div>
        <div v-else class="button" @click="showMetric = !showMetric">Show Metric</div>
      </div>
    </div>
    <div class="right">
      To be completed by the VP of Marketing and the VP of Health & Safety
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
  width: 100%;
  border-collapse: collapse;
  td {
    padding: 10px 5px;
    border: 2px solid black;
  }
}
.button-wrap {
  text-align: center;
  .button {
    user-select: none;
    margin-top: 25px;
    display: inline-block;
    text-align: center;
    padding: 10px;
    border-radius: 10px;
    font-size: calc(12px + 1vw);
    border: 2px solid black;
    cursor: pointer;
  }
}
</style>