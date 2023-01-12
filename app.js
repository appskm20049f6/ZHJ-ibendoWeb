//全域JS事件
let convert = (e) => {
  let datadata = {
    gameid: localStorage.getItem("gameId"),
    exchangeid: e,
  };
  console.log(e);
  console.log(localStorage.getItem("gameId"));

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
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
