const listItems = document.querySelectorAll("li");
photos = document.querySelectorAll(".project");

listItems.forEach((li, i) => {
  li.addEventListener("mouseenter", () => {
    photos[i].classList.add("intro");
  });
  li.addEventListener("mouseleave", () => {
    photos[i].classList.remove("intro");
  });

  li.addEventListener("mousemove", (e) => {
    console.log(e);
    photos[i].style.left = -e.movementX * 1.5 + "px";
    photos[i].style.top = -e.clientY * 0.5 + "px";
  });
});

console.log(window.innerWidth);

const nytText = document.querySelector("#nyt-text");
let tl = gsap.timeline({ repeat: -1 });

tl.to(nytText, {
  duration: 1.2,
  text: {
    type: "diff",
    value: "NYT API |",
    padSpace: true,
  },
});
