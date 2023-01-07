<template>
  <div class="logo"><logo /></div>
  <div class="login"><login /></div>
  <div class="phonelogin"><phonelogin /></div>
  <div class="award"><award /></div>
  <div class="bones"><bones /></div>
  <div class="addides"><addides /></div>
  <div class="addidesIDcard"><addidesIDcard /></div>
  <div class="boneslog"><boneslog /></div>
</template>

<script setup>
import logo from "./components/logo.vue";
import login from "./components/login.vue";
import phonelogin from "./components/phonelogin.vue";
import award from "./components/award.vue";
import bones from "./components/award/bones.vue";
import addides from "./components/award/addides.vue";
import addidesIDcard from "./components/award/addidesIDcard.vue";
import boneslog from "./components/award/boneslog.vue";
</script>

<style scoped lang="scss">
.logo {
  display: flex;
  justify-content: flex-end;
}

.login {
  display: none;
  flex-direction: column;
}
.phonelogin {
  display: none;
  justify-content: center;
  margin: auto;
  flex-direction: column;
  align-items: center;
}
.award {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bones {
  display: none;
  justify-content: center;
  align-items: flex-start;
}
.addides {
  display: none;
  flex-direction: row;
}
.addidesIDcard {
  display: none;
}
.boneslog {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
