<template>
  <div class="logo"><logo /></div>
  <div class="login"><login /></div>
  <div class="phonelogin"><phonelogin /></div>
  <div class="award"><award /></div>
  <div class="bones"><bones /></div>
</template>

<script setup>
import logo from "./components/logo.vue";
import login from "./components/login.vue";
import phonelogin from "./components/phonelogin.vue";
import award from "./components/award.vue";
import bones from "./components/award/bones.vue";
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
  display: flex;
  justify-content: center;
  align-items: center;
}
.bones {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
</style>
