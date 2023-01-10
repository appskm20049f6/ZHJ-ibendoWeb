<template>
  <div class="logo"><logo></logo></div>

  <div class="login" v-if="Div == 1">
    <login></login>
  </div>
</template>

<script setup>
import logo from "./components/logo.vue";
import login from "./components/login.vue";
import award from "./components/award.vue";
import bones from "./components/award/bones.vue";
import addides from "./components/award/addides.vue";
import addidesIDcard from "./components/award/addidesIDcard.vue";
import boneslog from "./components/award/boneslog.vue";

import { ref } from "@vue/reactivity";
sessionStorage.setItem("GameID", 1);

const getItem = sessionStorage.getItem("GameID");

let Div = ref(getItem);
</script>

<style scoped lang="scss">
.logo {
  display: flex;
  justify-content: flex-end;
}

.login {
  display: flex;
  flex-direction: column;
}
.phonelogin {
  display: flex;
  justify-content: center;
  margin: auto;
  flex-direction: column;
  align-items: center;
}
.award {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.bones {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.addides {
  display: flex;
  flex-direction: row;
}
.addidesIDcard {
  display: flex;
}
.boneslog {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
