<template>
  <div>
    <div class="left">
      <table>
        <tr v-if="showMetric">
          <td v-if="selected === 'English'">Length</td>
          <td v-else-if="selected === 'French'">長度</td>
          <td v-else-if="selected === 'Traditional'">長度</td>
          <td v-else-if="selected === 'Simplified'">长度</td>
          <td>10.5cm*</td>
        </tr>
        <tr v-else>
          <td v-if="selected === 'English'">Length</td>
          <td v-else-if="selected === 'French'">長度</td>
          <td v-else-if="selected === 'Traditional'">長度</td>
          <td v-else-if="selected === 'Simplified'">长度</td>
          <td>4.1"*</td>
        </tr>
        <tr v-if="showMetric">
          <td v-if="selected === 'English'">Width</td>
          <td v-else-if="selected === 'French'">寬度</td>
          <td v-else-if="selected === 'Traditional'">寬度</td>
          <td v-else-if="selected === 'Simplified'">宽度</td>
          <td>5.0cm*</td>
        </tr>
        <tr v-else>
          <td v-if="selected === 'English'">Width</td>
          <td v-else-if="selected === 'French'">寬度</td>
          <td v-else-if="selected === 'Traditional'">寬度</td>
          <td v-else-if="selected === 'Simplified'">宽度</td>
          <td>2.0"*</td>
        </tr>
        <tr v-if="showMetric">
          <td v-if="selected === 'English'">Height</td>
          <td v-else-if="selected === 'French'">高度</td>
          <td v-else-if="selected === 'Traditional'">高度</td>
          <td v-else-if="selected === 'Simplified'">高度</td>
          <td>1.7cm*</td>
        </tr>
        <tr v-else>
          <td v-if="selected === 'English'">Height</td>
          <td v-else-if="selected === 'French'">高度</td>
          <td v-else-if="selected === 'Traditional'">高度</td>
          <td v-else-if="selected === 'Simplified'">高度</td>
          <td>0.67"*</td>
        </tr>
        <tr v-if="showMetric">
          <td v-if="selected === 'English'">Hole Diameter</td>
          <td v-else-if="selected === 'French'">洞的直徑</td>
          <td v-else-if="selected === 'Traditional'">洞的直徑</td>
          <td v-else-if="selected === 'Simplified'">洞的直径</td>
          <td>2.5cm*</td>
        </tr>
        <tr v-else>
          <td v-if="selected === 'English'">Hole Diameter</td>
          <td v-else-if="selected === 'French'">洞的直徑</td>
          <td v-else-if="selected === 'Traditional'">洞的直徑</td>
          <td v-else-if="selected === 'Simplified'">洞的直径</td>
          <td>0.98"*</td>
        </tr>
        <tr>
          <td v-if="selected === 'English'">Material</td>
          <td v-else-if="selected === 'French'">材料</td>
          <td v-else-if="selected === 'Traditional'">材料</td>
          <td v-else-if="selected === 'Simplified'">材料</td>
          <td v-if="selected === 'English'">Poplar Wood</td>
          <td v-else-if="selected === 'French'">白楊木</td>
          <td v-else-if="selected === 'Traditional'">白楊木</td>
          <td v-else-if="selected === 'Simplified'">白杨木</td>
        </tr>
        <tr>
          <td v-if="selected === 'English'">Colour</td>
          <td v-else-if="selected === 'French'">顏色</td>
          <td v-else-if="selected === 'Traditional'">顏色</td>
          <td v-else-if="selected === 'Simplified'">颜色</td>
          <td v-if="selected === 'English'">Beige</td>
          <td v-else-if="selected === 'French'">米色</td>
          <td v-else-if="selected === 'Traditional'">米色</td>
          <td v-else-if="selected === 'Simplified'">米色</td>
        </tr>
        <tr>
          <td v-if="selected === 'English'">Edge Profile</td>
          <td v-else-if="selected === 'French'">角落的外貌</td>
          <td v-else-if="selected === 'Traditional'">角落的外貌</td>
          <td v-else-if="selected === 'Simplified'">角落的外貌</td>
          <td v-if="selected === 'English'">Round edge</td>
          <td v-else-if="selected === 'French'">圓邊</td>
          <td v-else-if="selected === 'Traditional'">圓邊</td>
          <td v-else-if="selected === 'Simplified'">圆边</td>
        </tr>
        <tr>
          <td v-if="selected === 'English'">Finish</td>
          <td v-else-if="selected === 'French'">上蠟</td>
          <td v-else-if="selected === 'Traditional'">上蠟</td>
          <td v-else-if="selected === 'Simplified'">上蜡</td>
          <td v-if="selected === 'English'">Yes</td>
          <td v-else-if="selected === 'French'">有</td>
          <td v-else-if="selected === 'Traditional'">有</td>
          <td v-else-if="selected === 'Simplified'">有</td>
        </tr>
        <tr>
          <td v-if="selected === 'English'">Moisture Resistant</td>
          <td v-else-if="selected === 'French'">耐潮濕</td>
          <td v-else-if="selected === 'Traditional'">耐潮濕</td>
          <td v-else-if="selected === 'Simplified'">耐潮湿</td>
          <td v-if="selected === 'English'">Yes</td>
          <td v-else-if="selected === 'French'">有</td>
          <td v-else-if="selected === 'Traditional'">有</td>
          <td v-else-if="selected === 'Simplified'">有</td>
        </tr>
        <tr>
          <td v-if="selected === 'English'">Rot Resistant</td>
          <td v-else-if="selected === 'French'">耐腐爛</td>
          <td v-else-if="selected === 'Traditional'">耐腐爛</td>
          <td v-else-if="selected === 'Simplified'">耐腐烂</td>
          <td v-if="selected === 'English'">Yes</td>
          <td v-else-if="selected === 'French'">有</td>
          <td v-else-if="selected === 'Traditional'">有</td>
          <td v-else-if="selected === 'Simplified'">有</td>
        </tr>
      </table>
      <div v-if="selected === 'English'">* measurements are approximate</div>
      <div v-else-if="selected === 'French'">* 大概的尺寸</div>
      <div v-else-if="selected === 'Traditional'">* 大概的尺寸</div>
      <div v-else-if="selected === 'Simplified'">* 大概的尺寸</div>
      <div v-if="showMetric && selected === 'English'" class="button" @click="showMetric = !showMetric">Show Imperial</div>
      <div v-else-if="selected === 'English'" class="button" @click="showMetric = !showMetric">Show Metric</div>
      <div v-if="showMetric && selected === 'French'" class="button" @click="showMetric = !showMetric">Show Imperial</div>
      <div v-else-if="selected === 'French'" class="button" @click="showMetric = !showMetric">Show Metric</div>
      <div v-if="showMetric && selected === 'Traditional'" class="button" @click="showMetric = !showMetric">展示英寸</div>
      <div v-else-if="selected === 'Traditional'" class="button" @click="showMetric = !showMetric">展示公分</div>
      <div v-if="showMetric && selected === 'Simplified'" class="button" @click="showMetric = !showMetric">展示英寸</div>
      <div v-else-if="selected === 'Simplified'" class="button" @click="showMetric = !showMetric">展示公分</div>
    </div>
    <div class="right">
      Talk about the materials that we use and how they are good for both the customer and the environment
    </div>
  </div>
</template>

<script>
export default {
  name: "Info",
  props: {
    selected: {
      type: String,
      default: "English"
    }
  },
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