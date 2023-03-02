/**
 * @param {*} delay 기본값 3000, 동기 슬립 기능.
 */
function sleep(delay = 3000) {
  const start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}

this.addEventListener("message", function (e) {
  sleep(3000); // 3초가 걸림을 표현
  const coords = Math.random();
  this.postMessage(coords);
});
