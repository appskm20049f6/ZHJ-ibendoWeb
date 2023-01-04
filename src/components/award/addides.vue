<template>
  <div id="addides" class="addidesbg">
    <img src="../../../public/img/addidesbg.png" alt="" />
    <form method="post" autocomplete>
      <label for=""
        >姓名：<input type="text" name="name" required v-model="name" />
      </label>
      <label for=""
        >手機號碼：<input
          type="tel"
          pattern="[0-9]{10}"
          required
          name="phoneNumber"
          v-model="phoneNumber"
        />
      </label>
      <label for=""
        >E-mail：<input
          type="email"
          required
          name="email"
          placeholder="sophie@example.com"
          v-model="email"
        />
      </label>
      <label for=""
        >郵遞區號：<input
          type="text"
          required
          name="postalcode"
          v-model="postalcode"
        />
      </label>
      <label for=""
        >寄送地址：<input
          type="text"
          placeholder="請輸入完整地址"
          required
          name="addides"
          v-model="addides"
        />
      </label>
      <label for="" class="years"
        >是否已滿18歲:
        <p>是</p>
        <input type="radio" name="years" value="Yes" checked v-model="years" />
        <p>否</p>
        <input type="radio" name="years" value="No" checked v-model="years" />
      </label>
      <input type="submit" value="確認/修改" class="button" v-on:click="post" />
    </form>
  </div>
</template>

<script setup>
// const name = 333;
// const phoneNumber = 555;
// const email = "";
// const postalcode = "";
// const addides = "";
// const years = "";

// const post = {
//   data() {
//     return {
//       name: "",
//       phoneNumber: "",
//       email: "",
//       postalcode: "",
//       addides: "",
//       years: "",
//     };
//   },
//   mounted() {
//     axios({
//       method: "post",
//       url: "https://script.google.com/macros/s/AKfycbyrK-IUynAhdOtcFcJPzTlul3-lfbqG01q-adOYwwhDqrTVCX44-EUS3P7nX_GLdpcL/exec",
//       "Content-Type": "application/json",
//       data: "name=" + name,
//     })
//       .then((response) => console.log(response))
//       .catch((error) => console.log(error));
//   },

// };
let addides = "台南";

axios({
  method: "post",
  url: "https://script.google.com/macros/s/AKfycbyrK-IUynAhdOtcFcJPzTlul3-lfbqG01q-adOYwwhDqrTVCX44-EUS3P7nX_GLdpcL/exec",
  data: `name='Nelison&phoneNumber='0929193492&email='233@gmail.com&postalcode='708&addides='たか&years='yes`,
})
  .then((response) => {
    console.log(response);
  })
  .catch((error) => console.log(error));
</script>
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
    .button {
      margin: auto;
      width: 50%;
      margin-top: 5%;
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
