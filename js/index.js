const listItems = document.querySelectorAll("li");
const photos = document.querySelectorAll(".project");

listItems.forEach((li, i) => {
  li.addEventListener("mouseenter", () => {
    photos[i].classList.add("intro");
  });
  li.addEventListener("mouseleave", () => {
    photos[i].classList.remove("intro");
  });

  li.addEventListener("mousemove", (e) => {
    // console.log(e);
    photos[i].style.left = -e.movementX * 1.5 + "px";
    photos[i].style.top = -e.clientY * 0.5 + "px";
  });
});

console.log(window.innerWidth);

const nytText = document.querySelector("#nyt-text");
const nav = document.querySelector("nav");
const cta = document.querySelector(".cta");
const gallery = document.querySelector(".images");

let tl = gsap.timeline({ repeat: -1 });

tl.to(nytText, {
  duration: 1.2,
  text: {
    type: "diff",
    value: "NYT API |",
    padSpace: true,
  },
});

document.addEventListener(
  "DOMContentLoaded",
  function () {
    gsap.fromTo(
      nav,
      { y: "-100%", opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.25 }
    );
    gsap.to(gallery, { opacity: 1, duration: 1, delay: 0.5 });
    gsap.to(cta, { opacity: 1, duration: 1, delay: 0.75 });
  },
  false
);
