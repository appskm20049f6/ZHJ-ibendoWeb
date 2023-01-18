//全域JS事件
let convert = (e) => {
  let datadata = {
    gameid: sessionStorage.getItem("gameId"),
    serverid: sessionStorage.getItem("server_id"),
    token: sessionStorage.getItem("token"),
    exchangeid: e,
  };

  axios({
    method: "POST",
    baseURL: "http://localhost:3000/Exchange",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    data: datadata,
  })
    .then((res) => {
      alert(res.data.Message);
    })
    .catch((err) => {
      axios({
        method: "POST",
        baseURL: "https://zhj.gameflier.com/service/BonusReward/api/Exchange",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        data: datadata,
      })
        .then((res) => {
          alert(res.data.Message);
        })
        .catch((err) => {
          console.log(err);
        });
    });
};
