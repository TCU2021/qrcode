const app = document.getElementById("app");
function getHeight() {
  if (app) {
    app.style.height = "" + Number(window.innerHeight) + "px";
  }
}
getHeight();
window.onresize = getHeight;
