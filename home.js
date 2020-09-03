const hamburgerIcon = document.querySelector(".hamburgerIcon");

hamburgerIcon.onclick = function () {
  sidebarNav.style.transform = "translateX(250px)";
  sidebarNav.style.transition = "ease, .75s";
};
const closeSideBar = document.querySelector(".closeSideBar");

closeSideBar.onclick = function () {
  sidebarNav.style.transition = "ease, .75s";
  sidebarNav.style.transform = "translateX(-250px)";
};
const sidebarNav = document.querySelector(".sidebar");

//function to close the sidebar menu when clicking on nav items, otherwise menu stays open when navigating back to homepage.

function closeSide() {
  sidebarNav.style.transition = "all, 1.5s";
  sidebarNav.style.transform = "translateX(-250px)";
}
const navOptions = document.querySelectorAll(".navOption");
navOptions.onclick = closeSide();

// begin book js //
const firstBook = document.querySelector(".firstBook");

const secondBook = document.querySelector(".secondBook");

const thirdBook = document.querySelector(".thirdBook");

const firstPrevBtn = document.querySelector(".firstPrevBtn");

const firstNextBtn = document.querySelector(".firstNextBtn");

const secondPrevBtn = document.querySelector(".secondPrevBtn");

const secondNextBtn = document.querySelector(".secondNextBtn");

const thirdPrevBtn = document.querySelector(".thirdPrevBtn");

const thirdNextBtn = document.querySelector(".thirdNextBtn");

let reset = 1;
let demonCounter = 1129;
let pinchedCounter = 1059;
let deathCounter = 988;

const nextBtns = document.querySelectorAll(".nextBtn");

const prevBtns = document.querySelectorAll(".prevBtn");
console.log(prevBtns);

prevBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    //this keyword works the same as e.currentTarget it seems...
    if (this.classList.contains("firstPrevBtn")) {
      function turnPage() {
        let animateTurning = setInterval(function () {
          demonCounter--;
          reset++;
          console.log(demonCounter);
          firstBook.style.backgroundImage = `url('bookWebIMG/demon/IMG_${demonCounter}.jpg')`;

          if (reset === 5) {
            console.log("buns");
            clearInterval(animateTurning);
          }
          if (demonCounter < 1129) {
            demonCounter = 1203;
          }
        }, 150);
        reset = 0;
      }
      turnPage();
    } else if (this.classList.contains("secondPrevBtn")) {
      function turnPage() {
        let animateTurning = setInterval(function () {
          pinchedCounter--;
          reset++;
          console.log(pinchedCounter);
          secondBook.style.backgroundImage = `url('bookWebIMG/pinched/IMG_${pinchedCounter}.jpg')`;

          if (reset === 5) {
            console.log("buns");
            clearInterval(animateTurning);
          }
          if (pinchedCounter < 1059) {
            pinchedCounter = 1128;
          }
        }, 150);
        reset = 0;
      }
      turnPage();
    } else if (this.classList.contains("thirdPrevBtn")) {
      function turnPage() {
        let animateTurning = setInterval(function () {
          deathCounter--;
          reset++;
          console.log(deathCounter);
          thirdBook.style.backgroundImage = `url('bookWebIMG/death/IMG_${deathCounter}.jpg')`;

          if (reset === 5) {
            console.log("buns");
            clearInterval(animateTurning);
          }
          if (deathCounter < 988) {
            deathCounter = 1057;
          }
        }, 150);

        reset = 0;
      }
      turnPage();
    }
  });
});

nextBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (this.classList.contains("firstNextBtn")) {
      function turnPage() {
        let animateTurning = setInterval(function () {
          demonCounter++;
          reset++;
          console.log(demonCounter);
          firstBook.style.backgroundImage = `url('bookWebIMG/demon/IMG_${demonCounter}.jpg')`;

          if (reset === 5) {
            console.log("buns");
            clearInterval(animateTurning);
          }
          if (demonCounter > 1203) {
            demonCounter = 1129;
          }
        }, 150);
        reset = 0;
      }
      turnPage();
    } else if (this.classList.contains("secondNextBtn")) {
      function turnPage() {
        let animateTurning = setInterval(function () {
          pinchedCounter++;
          reset++;
          console.log(pinchedCounter);
          secondBook.style.backgroundImage = `url('bookWebIMG/pinched/IMG_${pinchedCounter}.jpg')`;

          if (reset === 5) {
            console.log("buns");
            clearInterval(animateTurning);
          }
          if (pinchedCounter > 1128) {
            pinchedCounter = 1059;
          }
        }, 150);
        reset = 0;
      }
      turnPage();
    } else if (this.classList.contains("thirdNextBtn")) {
      function turnPage() {
        let animateTurning = setInterval(function () {
          deathCounter++;
          reset++;
          console.log(deathCounter);
          thirdBook.style.backgroundImage = `url('bookWebIMG/death/IMG_${deathCounter}.jpg')`;

          if (reset === 5) {
            console.log("buns");
            clearInterval(animateTurning);
          }
          if (deathCounter > 1057) {
            deathCounter = 988;
          }
        }, 150);

        reset = 0;
      }
      turnPage();
    }
  });
});

// Begin button page

// let canvas = document.getElementById("canvasOne");
// canvas.width = "300";
// canvas.height = "215";
// let c = canvas.getContext("2d");
// let x = 190;
// let radius = 5;
// let y = 102;
// let dx = 4;
// let randoArray = [0, 1, 2, 3, 4, -1, -2, -3, -4, -5];
// let rando = Math.floor(Math.random() * 10);
// let spray = Math.random() * randoArray[rando];
// function animate() {
//   requestAnimationFrame(animate);
//   c.clearRect(0, 0, innerWidth, innerHeight);
//   c.beginPath();
//   c.arc(x, y, radius, 0, 2 * Math.PI);
//   c.strokeStyle = "orange";
//   c.fillStyle = "black";
//   c.fill();
//   c.stroke();
//   y += spray;
//   x += dx;
//   if (x > 300 || x < 0) {
//     dx = -dx;
//   }
//   if (y > 215 || y < 20) {
//     spray = -spray;
//   }
// }

//testing html canvas
let smallBMbtn = document.querySelector(".button1");
let smallLaunchbtn = document.querySelector(".button2");

let canvas = document.getElementById("canvasOne");
let ctx = canvas.getContext("2d");
canvas.height = "215";
canvas.width = "300";

function loadSmallBM() {
  ctx.beginPath();
  ctx.arc(204, 100, 6, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fill();
}
smallBMbtn.addEventListener("click", loadSmallBM);
let x = 204;
let y = 100;
function launchSmallBM() {
  requestAnimationFrame(launchSmallBM);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  ctx.beginPath();
  ctx.arc(x, y, 6, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fill();
  x += 1;
  y += 1;
}
//launchSmallBM();

smallLaunchbtn.addEventListener("click", launchSmallBM);
