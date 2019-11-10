<template>
  <div>
    <div class="left">
      <div v-if="selected === 'English'" class="title">Contact Us</div>
      <div v-else-if="selected === 'French'" class="title">Contactez</div>
      <div v-else-if="selected === 'Traditional'" class="title">聯絡我們</div>
      <div v-else-if="selected === 'Simplified'" class="title">联络我们</div>
      <div class="break"></div>
      <div v-if="selected === 'English'">Please feel free to contact us.</div>
      <div v-else-if="selected === 'French'">N'hésitez pas à nous contacter.</div>
      <div v-else-if="selected === 'Traditional'">請隨時與我們聯繫。</div>
      <div v-else-if="selected === 'Simplified'">请随时与我们联系。</div>
    </div>
    <div class="right">
      <form id="gform" method="post" action="https://script.google.com/macros/s/AKfycbzWpIiAJ9APKSxFUFc8M1b2zr6Kuhu4QLXCNTfp4neVZfqFcz8/exec">
        <div class="row">
          <input v-if="selected === 'English'" type="text" name="Name" placeholder="Name" required />
          <input v-else-if="selected === 'French'" type="text" name="Name" placeholder="Nom" required />
          <input v-else-if="selected === 'Traditional'" type="text" name="Name" placeholder="姓名" required />
          <input v-else-if="selected === 'Simplified'" type="text" name="Name" placeholder="姓名" required />
          <input type="text" name="Email" placeholder="Email" required />
        </div>
        <textarea v-if="selected === 'English'" type="text" name="Message" placeholder="Message" autocomplete="off" required />
        <textarea v-else-if="selected === 'French'" type="text" name="Message" placeholder="Message" autocomplete="off" required />
        <textarea v-else-if="selected === 'Traditional'" type="text" name="Message" placeholder="信息" autocomplete="off" required />
        <textarea v-else-if="selected === 'Simplified'" type="text" name="Message" placeholder="信息" autocomplete="off" required />
        <input class="button" type="submit" value="Send" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  props: {
    selected: {
      type: String,
      default: "English"
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  width: 100%;
  input, textarea {
    font-size: 24px;
    padding: 10px;
    border: 3px #444444 solid;
    border-radius: 5px;
    margin-bottom: 25px;
    transition-duration: 0.3s;
    outline-width: 0px;
    &:focus {
      border-color: $secondary-colour;
    }
  }
  .row {
    display: flex;
    justify-content: space-between;
    input {
      min-width: 174px;
      max-width: 374px;
      width: 40%;
    }
  }
  textarea {
    resize: none;
    width: calc(100% - 26px);
    height: 250px;
  }
  .button {
    border: none;
    float: right;
    width: 120px;
    height: 50px;
    background-color: $primary-colour;
    box-shadow: 1px 1px 5px black;
    transition-duration: 0s;
    cursor: pointer;
    &:hover {
      filter: brightness(90%);
    }
    &:active {
      transform: translate(1px, 1px);
      box-shadow: 0px 0px 5px black;
    }
  }
}
</style>