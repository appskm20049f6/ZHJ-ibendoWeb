<template>
  <div class="awardbotton">
    <a @click="changeibendo(1)"
      ><img class="line" src="../../public/img/bones.png" alt=""
    /></a>
    <img class="line" src="../../public/img/line.png" alt="" />
    <a @click="changeibendo(2)"
      ><img class="line" src="../../public/img/addides.png" alt=""
    /></a>
    <img class="line" src="../../public/img/line.png" alt="" />
    <a @click="changeibendo(3)"
      ><img class="line" src="../../public/img/log.png" alt=""
    /></a>
  </div>
</template>

<script setup>
const changeibendo = (e) => {
  console.log(`測試按鈕${e}`);
};
</script>
<style lang="scss" scoped>
.line {
  margin-right: -1%;
  margin-left: -1%;
}
.awardbotton {
  display: flex;
  width: 45%;
  a {
    width: 100%;
    img {
      width: 100%;
    }
  }
}
</style>
