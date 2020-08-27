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

const nextBtns = document.querySelectorAll(".nextBtn");

nextBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    //this keyword works the same as e.currentTarget it seems...
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

// nextBtns.addEventListener("click", function () {
//   if (this.classList.contains(".thirdNextBtn")) {
//     console.log("balls");
//   }
// });

// marvis suggestions

// 1. get the common class for all btns which is bbbutton
// 2. bbbutton.addeventlistener(){
//   3. if (class has nxt) {
//     then do next click functio
//     if (class has first - nxt) {
//       then do first - next() click functio
//       if (class has second - nxt) {
//         then do second - next() click functio
//       }
//       4. if (class has prev) {
//         then do prev click functio
//         if (class has first - prev) {
//           then do first - prev() click functio
//           if (class has second - prev) {
//             then do second - prev() click functio
//           }
//         }
//Remember to grab all the classes from that particular div, using "this".
//https://stackoverflow.com/questions/9279368/how-to-get-all-css-classes-of-an-element

//check if class exist in all classes https://www.w3schools.com/jsref/jsref_includes_array.asp
