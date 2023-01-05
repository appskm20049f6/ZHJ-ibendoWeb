<template>
  <div id="addides" class="addidesbg">
    <img src="../../../public/img/addidesbg.png" alt="" />
    <form method="post" autocomplete>
      <div class="idcard">
        <label class="idcard-1" for="idcard-1">
          <input
            type="file"
            name=""
            id="idcard-1"
            style="display: none"
            accept="image/*"
          />
          <span>身份證正面</span>
        </label>

        <label class="idcard-1" for="idcard-2">
          <input
            type="file"
            style="display: none"
            name=""
            id="idcard-2"
            accept="image/*"
          />
          <span>身份證反面</span>
        </label>
      </div>
      <input type="submit" value="確定上傳" class="button" />
    </form>
  </div>
</template>

<script setup>
// axios({
//   method: "post",
//   url: "https://script.google.com/macros/s/AKfycbyrK-IUynAhdOtcFcJPzTlul3-lfbqG01q-adOYwwhDqrTVCX44-EUS3P7nX_GLdpcL/exec",
//   data: `name='Nelison&phoneNumber='0929193492&email='233@gmail.com&postalcode='708&addides='たか&years='yes`,
// })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => console.log(error));
</script>
<style lang="scss" scoped>
.idcard {
  width: 100%;
  display: flex;
  gap: 3%;
  .idcard-1 {
    width: 20vh;
    height: 20vh;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
  }
}
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
    width: 20%;
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

    .button {
      margin: auto;
      width: 100%;
      margin-top: 5%;
    }
  }
}
</style>
