<template>
  <div class="award">
    <div class="awardbotton" v-if="serverPage == 0">
      <div class="serverselect">
        <img src="../assets/ibendo-logo.png" alt="" />
        <img src="../assets/phone-login.png" alt="" />
        <div class="serverselect1">
          <p>請選擇伺服器：</p>
          <select v-model="server_id" @change="changeServer">
            <option disabled value="">請選擇</option>
            <option value="10001">1.排雲破浪</option>
            <option value="10002">2.花羽幻蝶</option>
          </select>
        </div>

        <div class="role_name">
          <p>請確認角色名稱：</p>
          <p>{{ GameID }}</p>
        </div>
        <button @click="rolenameCheck">確認無誤進行登入</button>
      </div>
    </div>
    <div class="awardbotton" v-if="serverPage == 1">
      <a @click="changeibendo(1)"
        ><img class="line" src="../../public/img/bones.png" alt=""
      /></a>
      <img class="lineb" src="../../public/img/line.png" alt="" />
      <a @click="changeibendo(2)"
        ><img class="line" src="../../public/img/addides.png" alt=""
      /></a>
      <img class="lineb" src="../../public/img/line.png" alt="" />
      <a @click="changeibendo(3)"
        ><img class="line" src="../../public/img/log.png" alt=""
      /></a>
    </div>

    <div class="reward-bones" v-if="bonesPage == 1">
      <div class="integral">
        <img src="../assets/integral-bg.png" alt="" />
        <p>{{ GetTotalPoints }}</p>
      </div>

      <div class="bonesbg">
        <div class="bones-card-row" v-html="bonesCard"></div>
      </div>
    </div>
    <div id="addides" class="addidesbg" v-if="bonesPage == 2">
      <label for=""
        ><p>姓名：</p>
        <input type="text" v-model="name" />
      </label>
      <label for=""
        ><p>手機號碼：</p>
        <input type="tel" v-model="phoneNumber" />
      </label>
      <label for=""
        ><p>E-mail:</p>
        <input type="email" v-model="email" placeholder="sophie@example.com" />
      </label>
      <label for=""
        ><p>郵遞區號：</p>
        <input type="text" v-model="postalcode" />
      </label>
      <label for=""
        ><p>寄送地址：</p>
        <input type="text" placeholder="請輸入完整地址" v-model="addides" />
      </label>
      <label for="" class="years">
        <p>是否已滿18歲:</p>
        <p>是</p>
        <input type="radio" v-model="years" value="是" />
        <p>否</p>
        <input type="radio" v-model="years" value="否" />
      </label>
      <button class="button" @click="changeibendo(4)">點擊確認/修改資料</button>
    </div>
    <div class="bonesLog" v-if="bonesPage == 3">
      <table>
        <tr>
          <th>時間</th>
          <th>狀況</th>
          <th>兌換獎勵</th>
          <th>積分變動</th>
          <th>變動後積分</th>
          <th>虛寶序號</th>
        </tr>
        <div class="bonesloglog" v-html="bonesLog"></div>
      </table>
    </div>
    <div class="addidesbg2" v-if="bonesPage == 4">
      <div class="idcarduploaddiv">
        <label for="idcardon">
          <input
            type="file"
            accept="image/*"
            class="idcardfile"
            name="idcardon"
            id="idcardon"
            @change="upload" />
          <div
            class="idcardupload"
            id="idcarduploadon"
            v-show="idcardopen == 1"
          >
            上傳身分證正面
          </div>
          <div class="idcardpre" id="idcardpreon" v-show="idcardopen == 2">
            <img :src="demo" /></div
        ></label>
        <label for="idcardclose">
          <input
            type="file"
            accept="image/*"
            class="idcardfile"
            name="idcardclose"
            id="idcardclose"
            @change="upload2" />
          <div
            class="idcardupload"
            id="idcarduploadon"
            v-show="idcardclose == 1"
          >
            上傳身分證反面
          </div>
          <div class="idcardpre" id="idcardpreon" v-show="idcardclose == 2">
            <img :src="demo2" /></div
        ></label>
      </div>
      <button @click="changeibendo(5)">確認</button>
    </div>
    <div class="addidesbg3" v-if="bonesPage == 5">
      <div class="checkpre">
        <div class="pre">
          <p>姓名:</p>
          <span>{{ name }}</span>
        </div>
        <div class="pre">
          <p>手機號碼:</p>
          <span>{{ phoneNumber }}</span>
        </div>
        <div class="pre">
          <p>E-mail:</p>
          <span>{{ email }}</span>
        </div>
        <div class="pre">
          <p>郵遞區號:</p>
          <span>{{ postalcode }}</span>
        </div>
        <div class="pre">
          <p>寄送地址:</p>
          <span>{{ addides }}</span>
        </div>
      </div>
      <div class="idcarduploaddiv">
        <div class="idcardupload" id="idcarduploadon"><img :src="demo" /></div>
        <div class="idcardupload" id="idcarduploadoff">
          <img :src="demo2" />
        </div>
      </div>
      <button @click="addCreate(up)">確認無誤進行上傳</button>
    </div>
    <div class="addidesbg3" v-if="bonesPage == 6">
      <div class="checkpre">
        <div class="pre">
          <p>姓名:</p>
          <span>{{ name }}</span>
        </div>
        <div class="pre">
          <p>手機號碼:</p>
          <span>{{ phoneNumber }}</span>
        </div>
        <div class="pre">
          <p>E-mail:</p>
          <span>{{ email }}</span>
        </div>
        <div class="pre">
          <p>郵遞區號:</p>
          <span>{{ postalcode }}</span>
        </div>
        <div class="pre">
          <p>寄送地址:</p>
          <span>{{ addides }}</span>
        </div>
      </div>
      <div class="idcarduploaddiv">
        <div class="idcardupload" id="idcarduploadon"><img :src="demo" /></div>
        <div class="idcardupload" id="idcarduploadoff">
          <img :src="demo2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
let server_id = ref("");
let GameID = ref("此伺服器您尚未持有任何角色");
let serverPage = ref(0);
let bonesPage = ref(0);
let bonesCard = ref("");
let GetTotalPoints = ref("");
let bonesLog = ref("");
let zhjgamdID = {
  gameid: sessionStorage.getItem("gameId"),
  serverid: sessionStorage.getItem("server_id"),
  token: sessionStorage.getItem("token"),
};

const name = ref("");
const phoneNumber = ref("");
const email = ref("");
const postalcode = ref("");
const addides = ref("");
const years = ref("是");

let changeServer = () => {
  axios({
    method: "POST",
    baseURL: "http://localhost:3000/QueryUserRole",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    data: zhjgamdID,
  })
    .then((res) => {
      GameID.value = "此伺服器您尚未持有任何角色";
      sessionStorage.removeItem("role_id");
      sessionStorage.removeItem("server_id");
      sessionStorage.removeItem("role_name");

      if (server_id.value == res.data.Data.model[0].server_id) {
        GameID.value = res.data.Data.model[0].role_name;
        sessionStorage.setItem("role_id", res.data.Data.model[0].role_id);
        sessionStorage.setItem("server_id", res.data.Data.model[0].server_id);
        sessionStorage.setItem("role_name", res.data.Data.model[0].role_name);
      }

      if (server_id.value == res.data.Data.model[1].server_id) {
        GameID.value = res.data.Data.model[1].role_name;
        sessionStorage.setItem("role_id", res.data.Data.model[1].role_id);
        sessionStorage.setItem("server_id", res.data.Data.model[1].server_id);
        sessionStorage.setItem("role_name", res.data.Data.model[1].role_name);
      }
    })
    .catch((error) => {
      axios({
        method: "POST",
        baseURL:
          "https://zhj.gameflier.com/service/BonusReward/api/QueryUserRole",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        data: zhjgamdID,
      }).then((res) => {
        GameID.value = "此伺服器您尚未持有任何角色";
        sessionStorage.removeItem("role_id");
        sessionStorage.removeItem("server_id");
        sessionStorage.removeItem("role_name");

        if (server_id.value == res.data.Data.model[0].server_id) {
          GameID.value = res.data.Data.model[0].role_name;
          sessionStorage.setItem("role_id", res.data.Data.model[0].role_id);
          sessionStorage.setItem("server_id", res.data.Data.model[0].server_id);
          sessionStorage.setItem("role_name", res.data.Data.model[0].role_name);
        }

        if (server_id.value == res.data.Data.model[1].server_id) {
          GameID.value = res.data.Data.model[1].role_name;
          sessionStorage.setItem("role_id", res.data.Data.model[1].role_id);
          sessionStorage.setItem("server_id", res.data.Data.model[1].server_id);
          sessionStorage.setItem("role_name", res.data.Data.model[1].role_name);
        }
      });
    });
};

if (sessionStorage.getItem("role_name") === null) {
  serverPage.value = 0;
} else {
  serverPage.value = 1;
  bonesPage.value = 1;
}

let rolenameCheck = () => {
  if (sessionStorage.getItem("role_name") === null) {
    serverPage.value = 0;
    alert("請選擇正確的伺服器並確認角色是否正確");
  } else {
    serverPage.value = 1;
    bonesPage.value = 1;
  }
};

let changeibendo = (e) => {
  if (e == 1) {
    bonesPage.value = e;
  }

  // if (e == 2) {
  //   axios({
  //     method: "POST",
  //     baseURL: "https://zhj.gameflier.com/service/BonusReward/api/CheckGameID",
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       "Content-Type": "application/json",
  //     },
  //     data: zhjgamdID,
  //   })
  //     .then((res) => {
  //       if (res.data.Data.exists == true) {
  //         //查詢資料庫記錄
  //         axios({
  //           method: "POST",
  //           baseURL:
  //             "https://zhj.gameflier.com/service/BonusReward/api/ShippingInfo",
  //           headers: {
  //             "Access-Control-Allow-Origin": "*",
  //             "Content-Type": "application/json",
  //           },
  //           data: zhjgamdID,
  //         })
  //           .then((res) => {
  //             name.value = res.data.Data.uname;
  //             phoneNumber.value = res.data.Data.phone;
  //             email.value = res.data.Data.email;
  //             postalcode.value = res.data.Data.zcode;
  //             addides.value = res.data.Data.address;
  //             demo.value = res.data.Data.IDCardRSBase64;
  //             demo2.value = res.data.Data.IDCardWSBase64;
  //           })
  //           .catch((error) => {});
  //         //轉到v-ifbones6查看紀錄的頁面
  //         bonesPage.value = 6;
  //       } else {
  //         bonesPage.value = e;
  //       }
  //     })
  //     .catch((error) => {
  //       axios({
  //         method: "POST",
  //         baseURL:
  //           "https://zhj.gameflier.com/service/BonusReward/api/CheckGameID",
  //         headers: {
  //           "Access-Control-Allow-Origin": "*",
  //           "Content-Type": "application/json",
  //         },
  //         data: zhjgamdID,
  //       })
  //         .then((res) => {
  //           if (res.data.Data.exists == true) {
  //             //查詢資料庫記錄
  //             axios({
  //               method: "POST",
  //               url: "https://zhj.gameflier.com/service/BonusReward/api/ShippingInfo",
  //               headers: {
  //                 "Access-Control-Allow-Origin": "*",
  //                 "Content-Type": "application/json",
  //               },
  //               data: zhjgamdID,
  //             })
  //               .then((res) => {
  //                 name.value = res.data.Data.uname;
  //                 phoneNumber.value = res.data.Data.phone;
  //                 email.value = res.data.Data.email;
  //                 postalcode.value = res.data.Data.zcode;
  //                 addides.value = res.data.Data.address;
  //                 demo.value = res.data.Data.IDCardRSBase64;
  //                 demo2.value = res.data.Data.IDCardWSBase64;
  //               })
  //               .catch((error) => {});
  //             //查詢資料庫記錄

  //             bonesPage.value = 6;
  //           } else {
  //             bonesPage.value = e;
  //           }
  //         })
  //         .catch((error) => {});
  //     });
  // }
  if (e == 2) {
    axios({
      method: "POST",
      baseURL: "https://zhj.gameflier.com/service/BonusReward/api/CheckGameID",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      data: zhjgamdID,
    })
      .then((res) => {
        if (res.data.Data.exists == true) {
          //查詢資料庫記錄
          axios({
            method: "POST",
            baseURL:
              "https://zhj.gameflier.com/service/BonusReward/api/ShippingInfo",
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
            data: zhjgamdID,
          })
            .then((res) => {
              name.value = res.data.Data.uname;
              phoneNumber.value = res.data.Data.phone;
              email.value = res.data.Data.email;
              postalcode.value = res.data.Data.zcode;
              addides.value = res.data.Data.address;
              demo.value = res.data.Data.IDCardRSBase64;
              demo2.value = res.data.Data.IDCardWSBase64;
            })
            .catch((error) => {});
          //轉到v-ifbones6查看紀錄的頁面
          bonesPage.value = 6;
        } else {
          bonesPage.value = e;
        }
      })
      .catch((error) => {
        axios({
          method: "POST",
          baseURL: "http://localhost:3000/CheckGameID",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
          data: zhjgamdID,
        })
          .then((res) => {
            if (res.data.Data.exists == true) {
              //查詢資料庫記錄
              axios({
                method: "POST",
                baseURL: "http://localhost:3000/ShippingInfo",
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  "Content-Type": "application/json",
                },
                data: zhjgamdID,
              })
                .then((res) => {
                  name.value = res.data.Data.uname;
                  phoneNumber.value = res.data.Data.phone;
                  email.value = res.data.Data.email;
                  postalcode.value = res.data.Data.zcode;
                  addides.value = res.data.Data.address;
                  demo.value = res.data.Data.IDCardRSBase64;
                  demo2.value = res.data.Data.IDCardWSBase64;
                })
                .catch((error) => {});
              //查詢資料庫記錄

              bonesPage.value = 6;
            } else {
              bonesPage.value = e;
            }
          })
          .catch((error) => {});
      });
  }

  if (e == 3) {
    bonesPage.value = e;
    let zhjgamdIDcheck = {
      gameid: localStorage.getItem("gameId"),
      exchangeid: 7,
    };

    //兌換紀錄查詢
    axios({
      method: "post",
      baseURL:
        "https://zhj.gameflier.com/service/BonusReward/api/GetExchangeLogs",
      data: zhjgamdID,
    })
      .then((res) => {
        console.log(res);
        bonesLog.value = "";
        for (let index = 0; index < res.data.Data.length; index++) {
          let itemname = res.data.Data[index].itemname;
          let logtime = res.data.Data[index].logtime;
          let points = res.data.Data[index].points;
          let remark = res.data.Data[index].remark;
          let status = res.data.Data[index].status;
          let sum = res.data.Data[index].sum;

          bonesLog.value += `<div class="bonesLogflex">
          <p>${logtime}</p>
          <p>${status}</p>
          <p>${itemname}</p>
          <p>${points}</p>
          <p>${sum}</p>
          <p>${remark}</p>
        </div>`;
        }
      })
      .catch((err) => {
        axios({
          method: "post",
          baseURL: "http://localhost:3000/GetExchangeLogs",
          data: zhjgamdID,
        })
          .then((res) => {
            console.log(res);
            bonesLog.value = "";
            for (let index = 0; index < res.data.Data.length; index++) {
              let itemname = res.data.Data[index].itemname;
              let logtime = res.data.Data[index].logtime;
              let points = res.data.Data[index].points;
              let remark = res.data.Data[index].remark;
              let status = res.data.Data[index].status;
              let sum = res.data.Data[index].sum;

              bonesLog.value += `<div class="bonesLogflex">
          <p>${logtime}</p>
          <p>${status}</p>
          <p>${itemname}</p>
          <p>${points}</p>
          <p>${sum}</p>
          <p>${remark}</p>
        </div>`;
            }
          })
          .catch((err) => {});
      });
  }

  if (e == 4) {
    bonesPage.value = e;
    sessionStorage.setItem("uname", name.value);
    sessionStorage.setItem("phone", phoneNumber.value);
    sessionStorage.setItem("email", email.value);
    sessionStorage.setItem("zcode", postalcode.value);
    sessionStorage.setItem("address", addides.value);
    sessionStorage.setItem("adult", years.value);
  }
  if (e == 5) {
    bonesPage.value = e;
  }
};

axios({
  method: "POST",
  baseURL: "https://zhj.gameflier.com/service/BonusReward/api/GetExchange",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
  data: zhjgamdID,
})
  .then((res) => {
    GetTotalPoints = res.data.Data.GetTotalPoints;
    bonesCard.value = "";
    for (let index = 0; index < res.data.Data.list.length; index++) {
      let itemname = res.data.Data.list[index].itemname;
      let points = res.data.Data.list[index].points;
      let nleft = res.data.Data.list[index].nleft;
      let exchangeid = res.data.Data.list[index].exchangeid;
      let content = res.data.Data.list[index].content;
      bonesCard.value += `
          <div class="bones-card" onclick="convert(${exchangeid})">
            <div class="bonescheck">
              <p>${itemname}</p>
              <p>${content}</p>
              <p>積分:${points}</p>
              <p>剩餘數量:${nleft}</p>
            </div></div>
            `;
    }
  })
  .catch((error) => {
    axios({
      method: "POST",
      baseURL: "http://localhost:3000/GetExchange",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      data: zhjgamdID,
    })
      .then((res) => {
        GetTotalPoints = res.data.Data.GetTotalPoints;
        bonesCard.value = "";
        for (let index = 0; index < res.data.Data.list.length; index++) {
          let itemname = res.data.Data.list[index].itemname;
          let points = res.data.Data.list[index].points;
          let nleft = res.data.Data.list[index].nleft;
          let exchangeid = res.data.Data.list[index].exchangeid;
          let content = res.data.Data.list[index].content;
          bonesCard.value += `
          <div class="bones-card" onclick="convert(${exchangeid})">
            <div class="bonescheck">
              <p>${itemname}</p>
              <p>${content}</p>
              <p>積分:${points}</p>
              <p>剩餘數量:${nleft}</p>
            </div></div>
            `;
        }
      })
      .catch((err) => {});
  });

//圖片上傳轉化base64正面
let idcardopen = ref(1);
let idcarduploadon = document.querySelector("#idcarduploadon");
let idcardpreon = document.querySelector("#idcardpreon");
let input = document.querySelector("#idcardon");
let demo = ref("");

let reader = new FileReader();
reader.onload = (e) => {
  demo.value = e.target.result;
  return demo.value;
};
let upload = (e) => {
  let uploadimg = e.target.files || e.dataTransfer.files;
  reader.readAsDataURL(uploadimg[0]);
  idcardopen = 2;
};

//圖片上傳轉化base64反面
let idcardclose = ref(1);
let idcarduploadclose = document.querySelector("#idcarduploadon");
let idcardpreclose = document.querySelector("#idcardpreon");
let input2 = document.querySelector("#idcardon");
let demo2 = ref("");

let reader2 = new FileReader();
reader2.onload = (e) => {
  demo2.value = e.target.result;
  return demo2.value;
};
let upload2 = (e) => {
  let uploadimg2 = e.target.files || e.dataTransfer.files;
  reader2.readAsDataURL(uploadimg2[0]);
  idcardclose = 2;
};

let addCreate = (e) => {
  let addID = {
    gameid: sessionStorage.getItem("gameId"),
    uname: sessionStorage.getItem("uname"),
    phone: sessionStorage.getItem("phone"),
    email: sessionStorage.getItem("email"),
    zcode: sessionStorage.getItem("zcode"),
    address: sessionStorage.getItem("address"),
    adult: sessionStorage.getItem("adult"),
    IDCardRS: demo.value,
    IDCardWS: demo2.value,
  };
};
</script>
<style lang="scss" scoped>
.serverselect {
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  img {
    width: 70%;
  }
  .serverselect1 {
    top: 65%;
    position: absolute;
    display: flex;
    color: rgb(253, 230, 99);
  }
  .role_name {
    top: 73%;
    position: absolute;
    display: flex;
    color: rgb(253, 230, 99);
  }
  button {
    top: 83%;
    position: absolute;
    display: flex;
  }
}
.bonesLog {
  width: 80%;
  display: flex;
  justify-content: center;
}

::v-deep .bonesLog {
  table {
    .bonesLogflex {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .bonesloglog {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      p {
        font-size: 1rem;
        width: 10vw;
        height: 3vw;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: url("../assets/logtitle.png");
        background-size: cover;
        background-position: left top;
        color: white;
      }
    }
    tr {
      display: flex;
      color: white;
      font-size: 1rem;
      justify-content: center;
      th {
        font-size: 1rem;
        width: 10vw;
        height: 3vw;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: url("../assets/logtitle.png");
        background-size: cover;
        background-position: left top;
      }
      td {
        font-size: 1rem;
        width: 10vw;
        height: 3vw;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: url("../assets/logtitle.png");
        background-size: cover;
        background-position: left top;
      }
    }
  }
}
.award {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-repeat: no-repeat;
}

.lineb {
  margin-right: -2%;
  margin-left: -2%;
  margin-top: 2%;
}
.awardbotton {
  display: flex;
  width: 33%;
  align-items: center;
  margin-top: 1%;
  a {
    width: 100%;
    img {
      width: 100%;
    }
  }
}
.integral {
  width: 20%;
  color: #f9f7f2;
  position: relative;
  display: flex;

  p {
    font-size: 1.7rem;
    transform: translate(-50%, -50%);
    top: 60%;
    left: 50%;
    position: absolute;
  }
  img {
    width: 100%;
  }
}
.bonesbg {
  flex-grow: 9;
  display: flex;
  width: 100%;
  flex-direction: column;
}
.bones-card-row {
  width: 60%;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
}
::v-deep .bones-card {
  width: 30%;
  color: #f9f7f2;
  margin-left: 1rem;
  margin-bottom: 1%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
  }

  .bonescheck {
    padding: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url("../assets/bones-cardbg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100%;

    p {
      display: flex;
      font-size: 1.1rem;
      height: 4vh;
      align-items: center;
    }
  }
}

.reward-bones {
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 2%;
}
.addidesbg {
  background-image: url("../assets/addidesbg.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  height: 60vh;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3%;

  img {
    width: 60%;
    position: absolute;
    z-index: 1;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 70%;
    @media (max-width: 1680px) {
      width: 70%;
    }
    @media (max-width: 1366px) {
      width: 70%;
    }
  }
  .years {
    width: 50%;
    display: flex;
    input {
      width: 5%;
    }
    p:first-child {
      width: 40%;
    }
    p {
      width: 10%;
    }
  }
  label {
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-bottom: 1%;
    width: 100%;
    justify-content: center;
    p {
      font-size: 1.5rem;
      width: 15%;
    }
    input {
      height: 2vh;
      width: 30%;
    }
  }
  .button {
    margin: auto;
    width: 20%;
    margin-top: 1%;
  }
}
.addidesid {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .idcard-p {
    position: absolute;
    z-index: 15;
  }
  .addIDcarddiv {
    margin-top: 10%;
    display: flex;
    gap: 5%;
  }
  .addIDcard {
    position: relative;
    display: flex;
    height: 7.15vw;
    width: 11vw;
    border: 4px dashed #dcb783;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
  }
  button {
    z-index: 5;
    margin-top: 3%;
  }
  .idcardfile {
    display: none;
  }
}

.addidesbg2 {
  background-image: url("../assets/addidesbg.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  height: 60vh;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1%;
  .idcarduploaddiv {
    margin-top: -15%;
    display: flex;
    margin-bottom: 3%;
  }
}
.idcardupload {
  display: flex;
  width: 10vw;
  height: 6.5vw;
  margin-right: 1%;
  align-items: center;
  justify-content: center;
  border: 4px dashed #dcb783;
  border-radius: 10px;
  img {
    width: 10vw;
    height: 6.5vw;
  }
}

.addidesbg3 {
  background-image: url("../assets/addidesbg.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  height: 60vh;
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 1%;
  .checkpre {
    .pre {
      display: flex;
      p {
        display: flex;
        width: 25%;
        justify-content: flex-end;
      }
      span {
        margin-left: 2%;
      }
    }
  }
  .idcarduploaddiv {
    display: flex;
    margin-bottom: 2%;
  }
  .checkpre {
    margin-top: 10%;
    width: 40%;
    p {
      margin-bottom: 1%;
    }
  }
}
.idcardfile {
  display: none;
}
.idcardpre {
  img {
    width: 10vw;
    height: 6vw;
  }
}
</style>
