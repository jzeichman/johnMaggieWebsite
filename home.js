const hamburgerIcon = document.querySelector(".hamburgerIcon");
console.log(hamburgerIcon);
hamburgerIcon.onclick = function () {
  sidebarNav.style.transform = "translateX(250px)";
};
const closeSideBar = document.querySelector(".closeSideBar");
closeSideBar.onclick = function () {
  sidebarNav.style.transform = "translateX(-250px)";
};
const sidebarNav = document.querySelector(".sidebar");
