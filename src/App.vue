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
