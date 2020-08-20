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

firstNextBtn.addEventListener("click", function () {
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
    }, 150);
    reset = 0;
  }
  turnPage();
});

firstPrevBtn.addEventListener("click", function () {
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
    }, 150);
    reset = 0;
  }
  turnPage();
});

secondNextBtn.addEventListener("click", function () {
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
    }, 150);
    reset = 0;
  }
  turnPage();
});

thirdNextBtn.addEventListener("click", function () {
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
    }, 150);
    reset = 0;
  }
  turnPage();
});
