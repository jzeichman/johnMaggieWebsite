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

let canvas = document.getElementById("canvasOne");
let ctx = canvas.getContext("2d");
canvas.height = "215";
canvas.width = "300";

let ballArr = [];

const Ball = function (x, y, radius, dx, spray, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.dx = dx;
  this.spray = spray;
  this.color = color;
};


function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  ballArr.forEach(function (ball) {
    ctx.beginPath();

    ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
    ctx.strokeStyle = "orange";
    ctx.fillStyle = ball.color;
    ctx.fill();
    ctx.stroke();

    ball.y += ball.spray;
    ball.x += ball.dx;

    if (ball.x > 300 || ball.x < 0) {
      ball.dx = -ball.dx;
    }
    if (ball.y > 300 || ball.y < 20) {
      ball.spray = -ball.spray;
    }
    ctx.closePath();
  });
}

let randoArray = [0, 1, 2, 3, 4, -1, -2, -3, -4, -5];
let rando = Math.floor(Math.random() * 10);
let spray = Math.random() * randoArray[rando];

let smallLaunchbtn = document.querySelector(".button2");
smallLaunchbtn.addEventListener("click", function () {
  let randoArray = [0, 1, 2, 3, 4, -1, -2, -3, -4];
  let rando = Math.floor(Math.random() * 10);
  let spray = Math.random() * randoArray[rando];

  let color = ["#992104", "#aa7d02", "#1f0e00"];

  ballArr.push(
    new Ball(208, 125, 10, 2, spray, color[Math.floor(Math.random() * 4)])
  );
  console.log(Math.floor(Math.random() * 3));
  console.log(color[Math.floor(Math.random() * 3)]);
});
animate();
