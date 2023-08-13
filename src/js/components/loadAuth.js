const loadAuth = document.querySelector("#loadAuth");

window.addEventListener("load", fadeOut(loadAuth));

function fadeOut(element) {
  try {
    setTimeout(() => {
      if (!element.getAttribute("class", "fadeOut")) {
        element.style.animation = "fadeOut .6s ease-in-out forwards";
      }
    }, 2500);
  } catch (error) {
    // 재접속 요청 화면
  }
}
