//Creating Responsive Navbar

const toggleButtonIcons = document.querySelector(".toggle-icon");
const toggleButtonBars = document.querySelector(".bars");
const toggleButtonTimes = document.querySelector(".times");

const linksContainer = document.querySelector(".links-container");
const navContainer = document.querySelector(".nav-links");

//getBoundaryClientRect();

function toggleIcons() {
  const linksContainerHeight = linksContainer.getBoundingClientRect().height;
  const navContainerHeight = navContainer.getBoundingClientRect().height;

  if (linksContainerHeight === 0) {
    linksContainer.style.height = `${navContainerHeight}px`;
    toggleButtonTimes.style.display = "block";
    toggleButtonBars.style.display = "none";
  } else if (linksContainerHeight === navContainerHeight) {
    linksContainer.style.height = 0;
    toggleButtonTimes.style.display = "none";
    toggleButtonBars.style.display = "block";
  }
}
toggleButtonIcons.addEventListener("click", toggleIcons);

const linkEl = document.querySelectorAll(".link");

linkEl.forEach(function (linkItem) {
  linkItem.addEventListener("click", function (item) {
    linksContainer.style.height = 0;
    toggleButtonBars.style.display = "block";
    toggleButtonTimes.style.display = "none";
  });
});