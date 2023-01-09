<template>
  <div class="ibendologo">
    <img src="../../public/img/ibendo-logo.png" alt="" />
  </div>
  <div class="login">
    <div class="loginbg">
      <img src="../../public/img/login-backgrond.png" alt="" />
    </div>
    <div class="loginicon">
      <a href=""><img src="../../public/img/apple.png" alt="" /></a>
      <a href=""><img src="../../public/img/google.png" alt="" /></a>
      <a href=""><img src="../../public/img/facebook.png" alt="" /></a>
      <a v-on:click="changeDiv = 2"
        ><img src="../../public/img/GFlogo.png" alt=""
      /></a>
    </div>
  </div>
</template>

<script setup>
let changeDiv;
defineProps({
  changeDiv: {
    su: 1,
  },
});

console.log("log:" + changeDiv);
</script>
<style lang="scss" scoped>
.login {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ibendologo {
  display: flex;
  justify-content: center;
}
.loginicon {
  top: 30%;
  position: absolute;
  display: flex;
  gap: 1%;
}
</style>
