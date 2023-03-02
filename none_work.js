// 워커 사용안하고 동기 sleep 사용
const noneBtnElm = document.getElementById("btn_none_work");
const noneUseResultElm = document.getElementById("none_work_result");

/**
 * @param {*} delay 기본값 3000, 동기 슬립 기능.
 */
function sleep(delay = 3000) {
  const start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}

noneBtnElm.addEventListener("click", (evt) => {
  console.log("버튼 클릭 이벤트 발생", evt);
  sleep(3000); // 3초가 걸림을 표현

  const div = document.createElement("div");

  div.textContent = `난수: ${Math.random()}`;
  noneUseResultElm.appendChild(div);
});
