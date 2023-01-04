<template>
  <div class="integral">
    <img src="../../../public/img/integral-bg.png" alt="" />
    <p>33688</p>
  </div>
  <div class="bonesbg">
    <img src="../../../public/img/bones-bg.png" alt="" />
    <div class="bones-card-row">
      <div class="bones-card">
        <img src="../../../public/img/bones-cardbg.png" alt="" />
        <div class="bonescheck">
          <p>獎項名稱獎項名稱獎項名稱</p>
          <p>積分:XXXX</p>
          <p>剩餘數量:XXXX</p>
        </div>
      </div>
      <div class="bones-card">
        <img src="../../../public/img/bones-cardbg.png" alt="" />
        <div class="bonescheck">
          <p>獎項名稱獎項名稱獎項名稱</p>
          <p>積分:XXXX</p>
          <p>剩餘數量:XXXX</p>
        </div>
      </div>
      <div class="bones-card">
        <img src="../../../public/img/bones-cardbg.png" alt="" />
        <div class="bonescheck">
          <p>獎項名稱獎項名稱獎項名稱</p>
          <p>積分:XXXX</p>
          <p>剩餘數量:XXXX</p>
        </div>
      </div>
      <div class="bones-card">
        <img src="../../../public/img/bones-cardbg.png" alt="" />
        <div class="bonescheck">
          <p>獎項名稱獎項名稱獎項名稱</p>
          <p>積分:XXXX</p>
          <p>剩餘數量:XXXX</p>
        </div>
      </div>
      <div class="bones-card">
        <img src="../../../public/img/bones-cardbg.png" alt="" />
        <div class="bonescheck">
          <p>獎項名稱獎項名稱獎項名稱</p>
          <p>積分:XXXX</p>
          <p>剩餘數量:XXXX</p>
        </div>
      </div>
      <div class="bones-card">
        <img src="../../../public/img/bones-cardbg.png" alt="" />
        <div class="bonescheck">
          <p>獎項名稱獎項名稱獎項名稱</p>
          <p>積分:XXXX</p>
          <p>剩餘數量:XXXX</p>
        </div>
      </div>
      <div class="bones-card">
        <img src="../../../public/img/bones-cardbg.png" alt="" />
        <div class="bonescheck">
          <p>獎項名稱獎項名稱獎項名稱</p>
          <p>積分:XXXX</p>
          <p>剩餘數量:XXXX</p>
        </div>
      </div>
      <div class="bones-card">
        <img src="../../../public/img/bones-cardbg.png" alt="" />
        <div class="bonescheck">
          <p>獎項名稱獎項名稱獎項名稱</p>
          <p>積分:XXXX</p>
          <p>剩餘數量:XXXX</p>
        </div>
      </div>
      <div class="bones-card">
        <img src="../../../public/img/bones-cardbg.png" alt="" />
        <div class="bonescheck">
          <p>獎項名稱獎項名稱獎項名稱</p>
          <p>積分:XXXX</p>
          <p>剩餘數量:XXXX</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
<style lang="scss" scoped>
.integral {
  color: #f9f7f2;
  position: relative;
  margin-top: -3%;
  width: 20%;
  display: flex;
  p {
    top: 50%;
    left: 40%;
    position: absolute;
  }
}
.bonesbg {
  display: flex;
  width: 60%;
  flex-direction: column;
}
.bones-card-row {
  position: absolute;
  display: flex;
  flex-wrap: wrap;
}
.bones-card {
  color: #f9f7f2;
  margin-left: 3rem;
  margin-bottom: 1%;
  position: relative;
  display: flex;
  flex-direction: column;
  .bonescheck {
    padding: 5%;
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: center;
    p {
      margin-bottom: 13%;
    }
  }
}
</style>
