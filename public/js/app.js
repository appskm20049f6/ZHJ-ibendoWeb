//全域JS事件
let convert = (e) => {
  console.log(e + "被點了");
  let datadata = {
    gameid: localStorage.getItem("gameId"),
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
      console.log(res);
      alert(res.data.Message);
    })
    .catch((err) => {
      console.log(err);
    });
};
