<template>
  <div>
    <table class="left">
      <tr>
        <td>
          <div>Teressa Yu</div>
          <div class="title">President</div>
        </td>
        <td><a href="mailto:teressa.yu@gmail.com">teressa.yu@gmail.com</a></td>
      </tr>
      <tr>
        <td>
          <div>Ching Chang</div>
          <div class="title" style="margin-bottom: 0px;">VP of Production</div>
          <div class="title">Coding Genius</div>
        </td>
        <td><a href="mailto:chingtheprogrammer@icloud.com">chingtheprogrammer@icloud.com</a></td>
      </tr>
      <tr>
        <td>
          <div>Manraj Singh</div>
          <div class="title" style="margin-bottom: 0px;">VP of IT</div>
          <div class="title">Production Assistant</div>
        </td>
        <td><a href="mailto:m.singh38@share.epsb.ca">m.singh38@school.epsb.ca</a></td>
      </tr>
      <tr>
        <td>
          <div>Sukhi Saggu</div>
          <div class="title">VP of Health & Safety</div>
        </td>
        <td><a href="mailto:sukhmani.k.saggu@gmail.com">sukhmani.k.saggu@gmail.com</a></td>
      </tr>
      <tr>
        <td>
          <div>Jessica Nie</div>
          <div class="title">VP of Finance</div>
        </td>
        <td><a href="mailto:jessica172116@gmail.com">jessica172116@gmail.com</a></td>
      </tr>
      <tr>
        <td>
          <div>Jerry Fu</div>
          <div class="title">VP of HR</div>
        </td>
        <td><a href="mailto:jerryfu6158@gmail.com">jerryfu6158@gmail.com</a></td>
      </tr>
      <tr>
        <td>
          <div>Gabriel Taranger</div>
          <div class="title">VP of Marketing</div>
        </td>
        <td><a href="mailto:taranger1011@outlook.com">taranger1011@outlook.com</a></td>
      </tr>
    </table>
    <table class="right">
      <tr>
        <td>
          <div>Ryaad Asif</div>
          <div class="title">Social Media Manager</div>
        </td>
        <td><a href="mailto:asif.fabian@gmail.com">asif.fabian@gmail.com</a></td>
      </tr>
      <tr>
        <td>
          <div>Marcus Taranger</div>
          <div class="title">Inventory Manager</div>
        </td>
        <td><a href="mailto:taranger1019@outlook.com">taranger1019@outlook.com</a></td>
      </tr>
      <tr>
        <td>
          <div>Jeneya Ko</div>
          <div class="title">Employee</div>
        </td>
        <td><a href="mailto:jeneyako@gmail.com">jeneyako@gmail.com</a></td>
      </tr>
      <tr>
        <td>
          <div>Jason Liao</div>
          <div class="title">Employee</div>
        </td>
        <td><a href="mailto:jasonliaoca@gmail.com">jasonliaoca@gmail.com</a></td>
      </tr>
      <tr>
        <td>
          <div>Caide Sundal</div>
          <div class="title">Employee</div>
        </td>
        <td><a href="mailto:hands@thesundals.ca">hands@thesundals.ca</a></td>
      </tr>
      <tr>
        <td>
          <div>Carsen Sundal</div>
          <div class="title">Employee</div>
        </td>
        <td><a href="mailto:csundal@telus.net">csundal@telus.net</a></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style lang="scss" scoped>
table {
  font-size: 21px;
  th {
    font-family: Montserrat;
    font-weight: 800;
  }
  td {
    padding-right: 14px;
    text-align: center;
    .title {
      font-size: 14px;
      margin-bottom: 20px;
    }
    a {
      font-size: 16px;
      color: darken($secondary-colour, 20%);
      &:hover {
        color: lighten($secondary-colour, 10%);
      }
    }
  }
}
</style>