<template>
  <div class="logo">
    <a href="https://zhj.gameflier.com/"
      ><img src="../../public/img/logo.png" alt="" /></a
    ><a href=""><img src="../../public/img/setsume.png" alt="" /></a>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
</script>
<style lang="scss" scoped>
.logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    img {
      width: 100%;
    }
  }
}
</style>
