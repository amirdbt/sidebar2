const hamburger = document.querySelector(".hamburger");
const wrapper = document.querySelector(".wrapper");

hamburger.addEventListener("click", () => {
  wrapper.classList.toggle("collapse");
});
