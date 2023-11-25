console.log("hello");
const bannerCloseEl = document.querySelector("#banner-close");

bannerCloseEl.addEventListener("click", (e) => {
  document.querySelector("#close-el").style.display = "none";
});
