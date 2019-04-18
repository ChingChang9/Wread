<template>
  <div>
    <div class="left">
      <table>
        <tr v-if="showMetric">
          <td v-if="selected === 'English'">Length</td>
          <td v-else-if="selected === 'French'">Longueur</td>
          <td v-else-if="selected === 'Traditional'">長度</td>
          <td v-else-if="selected === 'Simplified'">长度</td>
          <td>10.5cm*</td>
        </tr>
        <tr v-else>
          <td v-if="selected === 'English'">Length</td>
          <td v-else-if="selected === 'French'">Longueur</td>
          <td v-else-if="selected === 'Traditional'">長度</td>
          <td v-else-if="selected === 'Simplified'">长度</td>
          <td>4.1"*</td>
        </tr>
        <tr v-if="showMetric">
          <td v-if="selected === 'English'">Width</td>
          <td v-else-if="selected === 'French'">Largeur</td>
          <td v-else-if="selected === 'Traditional'">寬度</td>
          <td v-else-if="selected === 'Simplified'">宽度</td>
          <td>5.0cm*</td>
        </tr>
        <tr v-else>
          <td v-if="selected === 'English'">Width</td>
          <td v-else-if="selected === 'French'">Largeur</td>
          <td v-else-if="selected === 'Traditional'">寬度</td>
          <td v-else-if="selected === 'Simplified'">宽度</td>
          <td>2.0"*</td>
        </tr>
        <tr v-if="showMetric">
          <td v-if="selected === 'English'">Height</td>
          <td v-else-if="selected === 'French'">La Taille</td>
          <td v-else-if="selected === 'Traditional'">高度</td>
          <td v-else-if="selected === 'Simplified'">高度</td>
          <td>1.7cm*</td>
        </tr>
        <tr v-else>
          <td v-if="selected === 'English'">Height</td>
          <td v-else-if="selected === 'French'">La Taille</td>
          <td v-else-if="selected === 'Traditional'">高度</td>
          <td v-else-if="selected === 'Simplified'">高度</td>
          <td>0.67"*</td>
        </tr>
        <tr v-if="showMetric">
          <td v-if="selected === 'English'">Hole Diameter</td>
          <td v-else-if="selected === 'French'">Diamètre du Trou</td>
          <td v-else-if="selected === 'Traditional'">洞的直徑</td>
          <td v-else-if="selected === 'Simplified'">洞的直径</td>
          <td>2.5cm*</td>
        </tr>
        <tr v-else>
          <td v-if="selected === 'English'">Hole Diameter</td>
          <td v-else-if="selected === 'French'">Diamètre du Trou</td>
          <td v-else-if="selected === 'Traditional'">洞的直徑</td>
          <td v-else-if="selected === 'Simplified'">洞的直径</td>
          <td>0.98"*</td>
        </tr>
        <tr>
          <td v-if="selected === 'English'">Material</td>
          <td v-else-if="selected === 'French'">Matériel</td>
          <td v-else-if="selected === 'Traditional'">材料</td>
          <td v-else-if="selected === 'Simplified'">材料</td>
          <td v-if="selected === 'English'">Poplar Wood</td>
          <td v-else-if="selected === 'French'">Bois de Peuplier</td>
          <td v-else-if="selected === 'Traditional'">白楊木</td>
          <td v-else-if="selected === 'Simplified'">白杨木</td>
        </tr>
        <tr>
          <td v-if="selected === 'English'">Colour</td>
          <td v-else-if="selected === 'French'">Couleur</td>
          <td v-else-if="selected === 'Traditional'">顏色</td>
          <td v-else-if="selected === 'Simplified'">颜色</td>
          <td v-if="selected === 'English'">Beige</td>
          <td v-else-if="selected === 'French'">Beige</td>
          <td v-else-if="selected === 'Traditional'">米色</td>
          <td v-else-if="selected === 'Simplified'">米色</td>
        </tr>
        <tr>
          <td v-if="selected === 'English'">Edge Profile</td>
          <td v-else-if="selected === 'French'">Profil de Bord</td>
          <td v-else-if="selected === 'Traditional'">角落的外貌</td>
          <td v-else-if="selected === 'Simplified'">角落的外貌</td>
          <td v-if="selected === 'English'">Round edge</td>
          <td v-else-if="selected === 'French'">Bord arrondi</td>
          <td v-else-if="selected === 'Traditional'">圓邊</td>
          <td v-else-if="selected === 'Simplified'">圆边</td>
        </tr>
        <tr>
          <td v-if="selected === 'English'">Finish</td>
          <td v-else-if="selected === 'French'">Bois Poli</td>
          <td v-else-if="selected === 'Traditional'">上蠟</td>
          <td v-else-if="selected === 'Simplified'">上蜡</td>
          <td v-if="selected === 'English'">Yes</td>
          <td v-else-if="selected === 'French'">Oui</td>
          <td v-else-if="selected === 'Traditional'">有</td>
          <td v-else-if="selected === 'Simplified'">有</td>
        </tr>
        <tr>
          <td v-if="selected === 'English'">Moisture Resistant</td>
          <td v-else-if="selected === 'French'">Résistant à L'humidité</td>
          <td v-else-if="selected === 'Traditional'">耐潮濕</td>
          <td v-else-if="selected === 'Simplified'">耐潮湿</td>
          <td v-if="selected === 'English'">Yes</td>
          <td v-else-if="selected === 'French'">Oui</td>
          <td v-else-if="selected === 'Traditional'">有</td>
          <td v-else-if="selected === 'Simplified'">有</td>
        </tr>
        <tr>
          <td v-if="selected === 'English'">Rot Resistant</td>
          <td v-else-if="selected === 'French'">Imputrescible</td>
          <td v-else-if="selected === 'Traditional'">耐腐爛</td>
          <td v-else-if="selected === 'Simplified'">耐腐烂</td>
          <td v-if="selected === 'English'">Yes</td>
          <td v-else-if="selected === 'French'">Oui</td>
          <td v-else-if="selected === 'Traditional'">有</td>
          <td v-else-if="selected === 'Simplified'">有</td>
        </tr>
      </table>
      <div v-if="selected === 'English'">* measurements are approximate</div>
      <div v-else-if="selected === 'French'">* les mesures sont approximatives</div>
      <div v-else-if="selected === 'Traditional'">* 大概的尺寸</div>
      <div v-else-if="selected === 'Simplified'">* 大概的尺寸</div>
      <div v-if="showMetric && selected === 'English'" class="button" @click="showMetric = !showMetric">Show Imperial</div>
      <div v-else-if="selected === 'English'" class="button" @click="showMetric = !showMetric">Show Metric</div>
      <div v-if="showMetric && selected === 'French'" class="button" @click="showMetric = !showMetric">Montrer Impérial</div>
      <div v-else-if="selected === 'French'" class="button" @click="showMetric = !showMetric">Montrer Métrique</div>
      <div v-if="showMetric && selected === 'Traditional'" class="button" @click="showMetric = !showMetric">展示英寸</div>
      <div v-else-if="selected === 'Traditional'" class="button" @click="showMetric = !showMetric">展示公分</div>
      <div v-if="showMetric && selected === 'Simplified'" class="button" @click="showMetric = !showMetric">展示英寸</div>
      <div v-else-if="selected === 'Simplified'" class="button" @click="showMetric = !showMetric">展示公分</div>
    </div>
    <div class="right">
      <div v-if="selected === 'English'" class="big-text">Our materials are locally sourced with the best quality for you and the environment.</div>
      <div v-else-if="selected === 'French'" class="big-text">Nos matériaux sont d'origine locale avec la meilleure qualité pour vous et pour l'environnement.</div>
      <div v-else-if="selected === 'Traditional'" class="big-text">我們的材料採用當地採購，為您和環境提供最優質的產品</div>
      <div v-else-if="selected === 'Simplified'" class="big-text">我们的材料采用当地采购，为您和环境提供最优质的产品</div>
      <img src="@/assets/photos/materials.jpg" />
      <div v-if="selected === 'English'">
        We package our product with 100% recycled wrapping paper, held together with acid-free glue.
        Our wood is precisely selected to deliver elegant texture, colour, and mass. With minimal
        volatile organic compounds (VOCs) in our polish, we utilize every opportunity to make the
        most eco-friendly decisions
      </div>
      <div v-else-if="selected === 'French'">
        Nous emballons notre produit avec du papier d’emballage recyclé à 100%, collé avec de la
        colle sans acide. Notre bois est sélectionné avec précision pour offrir une texture, une
        couleur et une masse élégantes. Avec un minimum de composés organiques volatils (COV) dans
        notre vernis, nous saisissons toutes les occasions possibles pour prendre les décisions les
        plus écologiques.
      </div>
      <div v-else-if="selected === 'Traditional'">
        我們的產品採用100％再生包裝紙包裝，並與無酸膠粘在一起。我們精心挑選的木材可以提供優雅的質地，顏色和質量。我們的拋光劑中含有極少量的揮發性有機化合物，我們利用一切機會做出最環保的決定
      </div>
      <div v-else-if="selected === 'Simplified'">
        我们的产品采用100％再生包装纸包装，并与无酸胶粘在一起。我们精心挑选的木材可以提供优雅的质地，颜色和质量。我们的抛光剂中含有极少量的挥发性有机化合物，我们利用一切机会做出最环保的决定
      </div>
      <img src="@/assets/photos/production.jpg" style="float: right;" />
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

@media (max-height: 700px) {
  table {
    td {
      padding: 5px;
    }
  }
}
</style>