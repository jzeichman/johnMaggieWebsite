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
canvas.height = "213";
canvas.width = "298";



let ballArr = [];

const Ball = function (x, y, radius, dx, spray, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.dx = dx;
  this.spray = spray;
  this.color = color;
  this.strokeStyle = strobe.value; 
};

//creating an object "strobe" in order to change it with setInterval, changing the strokeStyle of balls

let strobe = {value: "green"};

function changeColor(){
  let colorArray = ["red", "orange", "blue", "purple", "pink"]
       strobe.value = colorArray[Math.floor(Math.random() * colorArray.length)];
      //  console.log(strobe.value)
     }
     // need to stop this loop for changing color array!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  ballArr.forEach(function (ball) {

    ctx.beginPath();

    ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
    ctx.strokeStyle = strobe.value;
  
    ctx.fillStyle = ball.color;
    ctx.fill();
    ctx.stroke();

    ball.y += ball.spray;
    ball.x += ball.dx;
    
    if (ball.x > 298 || ball.x < 0) {
      ball.dx = -ball.dx;
    }
    if (ball.y > 213 || ball.y < 0) {
      ball.spray = -ball.spray;
    }
    ctx.closePath();
  });
}


// addEventListener("click", function () {
  





animate();


//launch button moves x and y of balls in the ball array
let poopCounter= 0;
let launchBallBtn = document.querySelector('.button1')
launchBallBtn.addEventListener('click', function(){

setInterval(changeColor, 50);
  let color = ["#dfa7a7", "#dfc0a7", "#adb5be"];
  
   ballArr.push(
    new Ball(210, 127, 10, 0, 0, color[Math.floor(Math.random() * 4)])
  );
  

  let randoArray = [0, 1, 2, 3, 4, -1, -2, -3, -4];
  let rando = Math.floor(Math.random() * 10);
  let spray = Math.random() * randoArray[rando];
  
  ballArr[poopCounter].spray = Math.random() * randoArray[rando];
  ballArr[poopCounter].dx = 2;
  poopCounter++;

})




 let btnTwo = document.querySelector(".button2");

 btnTwo.addEventListener("click", function(){
 ballArr.forEach(function (ball) {
    
  function gravityPull(){
     if (ball.y > 209){
      ball.y = 213;
      ball.spray = 0;
      console.log(ball.y)
    }
  }
    ball.dx = 0;
    let gravity = setInterval(gravityPull, 50);
    //timer

    setTimeout(function(){
      clearInterval(gravity);}, 8000);
    }
  
   
 );
 });







