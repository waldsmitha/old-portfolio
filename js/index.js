const listItems =   
    document.querySelectorAll("li");
    photos = document.querySelectorAll("img");

listItems.forEach((li, i) => {
  li.addEventListener("mouseenter", () => {
    photos[i].classList.add("intro");
  });
  li.addEventListener("mouseleave", () => {
    photos[i].classList.remove("intro");
  });


  li.addEventListener("mousemove", (e) => {
    console.log(e)
    photos[i].style.left = - e.movementX * 1.5 + 'px';
    photos[i].style.top = - e.clientY * .5 + 'px';
  });
});

console.log(window.innerWidth)