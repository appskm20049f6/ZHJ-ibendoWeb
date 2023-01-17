<template>
  <div class="logoindex"><logo></logo></div>

  <div class="loginindex" v-if="Div == 1">
    <login></login>
  </div>

  <div class="awardDiv" v-if="Div == 2"><award></award></div>
</template>

<script setup>
import logo from "./components/logo.vue";
import login from "./components/login.vue";
import award from "./components/award.vue";
import { ref } from "@vue/reactivity";

let Div = ref(1);

if (sessionStorage.getItem("gameId") === null) {
  Div.value = 1;
} else {
  if (sessionStorage.getItem("gameId").length > 4) {
    Div.value = 2;
  }
}

let url = window.location.href;
sessionStorage.setItem("url", url);

if (url.indexOf("?") != -1) {
  let ary1 = url.split("?");
  let ary2 = ary1[1].split("&");
  let ary3 = ary2[0].split("=");
  sessionStorage.setItem("gameId", ary3[1]);
  sessionStorage.setItem("url", ary1[0]);
  document.location.href = sessionStorage.getItem("url");
}
</script>

<style scoped lang="scss">
.logoindex {
  display: flex;
  justify-content: flex-end;
}

.loginindex {
  display: flex;
  flex-direction: column;
}
</style>
