<template>
  <div>
    <div class="left">
      <div class="person">
        <div class="name">Teressa Yu</div>
        <a href="mailto:teressa.yu@gmail.com">teressa.yu@gmail.com</a>
        <div class="job-title">President</div>
      </div>
      <div class="person">
        <div class="name">Ching Chang</div>
        <a href="mailto:chingtheprogrammer@icloud.com">chingtheprogrammer@icloud.com</a>
        <div class="job-title">
          <div>VP of Production</div>
          <div>Web Developer</div>
        </div>
      </div>
      <div class="person">
        <div class="name">Manraj Singh</div>
        <a href="mailto:m.singh38@share.epsb.ca">m.singh38@share.epsb.ca</a>
        <div class="job-title">
          <div>VP of IT</div>
          <div>Production Assistant</div>
        </div>
      </div>
      <div class="person">
        <div class="name">Sukhi Saggu</div>
        <a href="mailto:sukhmani.k.saggu@gmail.com">sukhmani.k.saggu@gmail.com</a>
        <div class="job-title">VP of Health & Safety</div>
      </div>
      <div class="person">
        <div class="name">Jessica Nie</div>
        <a href="mailto:jessica172116@gmail.com">jessica172116@gmail.com</a>
        <div class="job-title">VP of Finance</div>
      </div>
      <div class="person">
        <div class="name">Ferry Fu</div>
        <a href="mailto:jerryfu6158@gmail.com">jerryfu6158@gmail.com</a>
        <div class="job-title">VP of HR</div>
      </div>
      <div class="person">
        <div class="name">Gabriel Taranger</div>
        <a href="mailto:taranger1011@outlook.com">taranger1011@outlook.com</a>
        <div class="job-title">VP of Marketing</div>
      </div>
    </div>
    <div class="right">
      <div class="person">
        <div class="name">Ryaad Asif</div>
        <a href="mailto:asif.fabian@gmail.com">asif.fabian@gmail.com</a>
        <div class="job-title">Social Media Manager</div>
      </div>
      <div class="person">
        <div class="name">Marcus Taranger</div>
        <a href="mailto:taranger1019@outlook.com">taranger1019@outlook.com</a>
        <div class="job-title">Inventory Manager</div>
      </div>
      <div class="person">
        <div class="name">Jeneya Ko</div>
        <a href="mailto:jeneyako@gmail.com">jeneyako@gmail.com</a>
        <div class="job-title">Employee</div>
      </div>
      <div class="person">
        <div class="name">Jason Liao</div>
        <a href="mailto:jasonliaoca@gmail.com">jasonliaoca@gmail.com</a>
        <div class="job-title">Employee</div>
      </div>
      <div class="person">
        <div class="name">Caide Sundal</div>
        <a href="mailto:hands@thesundals.ca">hands@thesundals.ca</a>
        <div class="job-title">Employee</div>
      </div>
      <div class="person">
        <div class="name">Carsen Sundal</div>
        <a href="mailto:csundal@telus.net">csundal@telus.net</a>
        <div class="job-title">Employee</div>
      </div>
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
.person {
  margin-bottom: 20px;
  .name {
    font-size: calc(14px + 0.6vw);
  }
  .job-title {
    float: right;
    text-align: right;
    font-size: calc(12px + 0.3vw);
    margin-bottom: 20px;
  }
  a {
    font-size: calc(12px + 0.3vw);
    color: darken($secondary-colour, 20%);
    z-index: 9999;
    &:hover {
      color: lighten($secondary-colour, 10%);
    }
  }
}
</style>