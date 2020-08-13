const firstBook = document.querySelector(".firstBook");

const secondBook = document.querySelector(".secondBook");

const firstPrevBtn = document.querySelector(".firstPrevBtn");

const firstNextBtn = document.querySelector(".firstNextBtn");

const secondNextBtn = document.querySelector(".secondNextBtn");

let reset = 1;
let demonCounter = 1129;
let pinchedCounter = 1059;

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

// this is first version of next button(works)
// firstNextBtn.addEventListener("click", turnPage);
// // should try putting the function within the eventListerner
// let reset = 1;
// let counter = 1129;

// function turnPage() {
//   let animateTurning = setInterval(function () {
//     //if i put counter here it breaks the code
//     //try putting counter in the eventListener
//     counter++;
//     reset++;
//     console.log(counter);
//     firstBook.style.backgroundImage = `url('bookWebIMG/demon/IMG_${counter}.jpg')`;

//     if (reset === 5) {
//       console.log("buns");
//       clearInterval(animateTurning);
//     }
//   }, 150);
//   reset = 0;
// }
