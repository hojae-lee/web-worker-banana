const useBtnElm = document.getElementById("btn_use_work");
const useResultElm = document.getElementById("work_result");

useBtnElm.addEventListener("click", (evt) => {
  // 워커 사용해서 멀티 스레드처럼 사용
  const worker = new Worker("./worker.js");
  worker.addEventListener("message", (e) => {
    const div = document.createElement("div");
    div.textContent = `난수: ${e.data}`; // 0.1238917491
    useResultElm.appendChild(div);
    worker.terminate();
  });
  worker.postMessage("일해라 워커!");
});
