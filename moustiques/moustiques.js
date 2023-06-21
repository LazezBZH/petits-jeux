let reloadBtn = document.querySelector(".reload");
let home = document.querySelector(".home");
reloadBtn.addEventListener("click", reload);
home.addEventListener("click", back);
function reload() {
  window.location.reload();
}
function back() {
  document.location.href = "/";
}
