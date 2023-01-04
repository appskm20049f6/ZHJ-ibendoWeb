<template>
  <div class="addidesbg">
    <img src="../../../public/img/addidesbg.png" alt="" />
    <form action="" method="get">
      <label for="">姓名：<input type="text" /> </label>
      <label for="">手機號碼：<input type="text" /> </label>
      <label for="">E-mail：<input type="text" /> </label>
      <label for="">郵遞區號：<input type="text" /> </label>
      <label for="">寄送地址：<input type="text" /> </label>
      <label for="" class="years"
        >是否已滿18歲:
        <p>是</p>
        <input type="radio" name="18years" id="" value="Yes" checked />
        <p>否</p>
        <input type="radio" name="18years" id="" value="No" checked />
      </label>
      <button>確認/修改</button>
    </form>
  </div>
</template>

<script setup></script>
<style lang="scss" scoped>
.addidesbg {
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 55%;
    position: absolute;
    z-index: 1;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 70%;
  }
  form {
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 2;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 65%;
    align-items: flex-end;
    input {
      margin-bottom: 5%;
    }
    label {
      display: flex;
    }
    .years {
      width: 100%;
      p {
        margin-left: 10%;
      }
    }
  }
}
</style>
