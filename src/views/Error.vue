<template>
  <div>
    <div class="left">
      <h1 v-if="selected === 'English'">Page Not Found</h1>
      <h1 v-else-if="selected === 'French'">Page Non Trouvée</h1>
      <h1 v-else-if="selected === 'Traditional'">網頁未找到</h1>
      <h1 v-else-if="selected === 'Simplified'">网页未找到</h1>
      <h3 v-if="selected === 'English'">The link that you entered does not exist</h3>
      <h3 v-else-if="selected === 'French'">Le lien que vous avez entré n'existe pas</h3>
      <h3 v-else-if="selected === 'Traditional'">您輸入的鏈接不存在</h3>
      <h3 v-else-if="selected === 'Simplified'">您输入的链接不存在</h3>
    </div>
    <div class="right">
      <h1 v-if="selected === 'English'">Are You Lost?</h1>
      <h1 v-else-if="selected === 'French'">Es-tu perdu?</h1>
      <h1 v-else-if="selected === 'Traditional'">你迷路了嗎？</h1>
      <h1 v-else-if="selected === 'Simplified'">你迷路了吗？</h1>
      <h3 v-if="selected === 'English'">Use the bookmarks on the right to get redirected</h3>
      <h3 v-else-if="selected === 'French'">Utilisez les signets à droite pour être redirigé</h3>
      <h3 v-else-if="selected === 'Traditional'">使用右側的書籤重新定向</h3>
      <h3 v-else-if="selected === 'Simplified'">使用右侧的书签重新定向</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Error",
  props: {
    selected: {
      type: String,
      default: "English"
    }
  }
}
</script>