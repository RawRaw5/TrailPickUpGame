 var tenMinutes = 60 * 10;
  let timer = document.querySelector("#countdown");
    function countDown () {
    let minutes = parseInt(tenMinutes / 60, 10);
    let seconds = parseInt(tenMinutes % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    timer.textContent = minutes + ":" + seconds;
    if (--tenMinutes < 0) {
      tenMinutes = duration;
    }
  }
  var countTimer = setInterval(countDown, 1000)
let targetWords = [
  "TERMINAL",
  "ZOOM",
  "GITHUB",
  "COFFEE",
  "MILESTONE",
  "HTML",
  "JAVASCRIPT",
  "CSS",
  "SLACK",
  "KEYBOARD",
];
let currentLetters = [];
window.onload = function () {
  initializeGrid();
};
function initializeGrid() {
  const tableData = document.querySelectorAll("td");
  for (let node of tableData) {
    node.addEventListener("click", function () {
      // remove if already selected
      if (currentLetters.includes(node)) {
        let index = currentLetters.indexOf(node);
        currentLetters.splice(index, 1);
        node.style.backgroundColor = "white";
        node.id = "";
      }
      // select letter
      else {
        node.id = currentLetters.length;
        currentLetters.push(node);
        console.log(currentLetters);
        node.style.backgroundColor = "silver";
      }

      isTargetWord();
    });
    if (node.textContent != "") continue;
    let charCode = Math.round(65 + Math.random() * 25);
    node.textContent = String.fromCharCode(charCode);
  }
}
function isTargetWord() {
  //step 1 convert array to string
  let currentWord = "";
  for (let node of currentLetters) {
    currentWord += node.textContent;
  }
  document.getElementById("currentWord").innerText = currentWord;
  //step 2 check is string a target word
  if (targetWords.includes(currentWord)) {
    //step 3 if is target word remove it from target words
    let indexofTarget = targetWords.indexOf(currentWord);
    targetWords.splice(indexofTarget, 1);
    console.log(targetWords);

    for (let node of currentLetters) {
      node.id = "";
      node.style.backgroundColor = "gold";
    }
    currentLetters = [];
    if (targetWords.length == 0) {
        clearInterval(countTimer)
        alert ('Congrats You Won')
        // document.querySelector("#countdown").innerHTML = ''
    }
  }
}

// window.onload = function() {
//  startTimer();
//     const tableData = document.querySelectorAll("td")
//     for (let node of tableData) {

//         node.addEventListener('click',function() {
//             if (node.classList.contains('milestone')){
//                 node.style.backgroundColor = 'salmon'
//             }
//             else {
//                 node.style.backgroundColor = 'pink'
//             }
//            node.classList.toggle('selected')
//         })
//         node.addEventListener('click',function() {
//             if (node.classList.contains('terminal')){
//                 node.style.backgroundColor = 'salmon'
//             }
//            node.classList.toggle('selected')
//         })
//         node.addEventListener('click',function() {
//             if (node.classList.contains('zoom')){
//                 node.style.backgroundColor = 'salmon'
//             }
//            node.classList.toggle('selected')
//         })
//         node.addEventListener('click',function() {
//             if (node.classList.contains('coffee')){
//                 node.style.backgroundColor = 'salmon'
//             }
//            node.classList.toggle('selected')
//         })
//         node.addEventListener('click',function() {
//             if (node.classList.contains('github')){
//                 node.style.backgroundColor = 'salmon'
//             }
//            node.classList.toggle('selected')
//         })
//         node.addEventListener('click',function() {
//             if (node.classList.contains('html')){
//                 node.style.backgroundColor = 'salmon'
//             }
//            node.classList.toggle('selected')
//         })
//         node.addEventListener('click',function() {
//             if (node.classList.contains('javascript')){
//                 node.style.backgroundColor = 'salmon'
//             }
//            node.classList.toggle('selected')
//         })
//         node.addEventListener('click',function() {
//             if (node.classList.contains('css')){
//                 node.style.backgroundColor = 'salmon'
//             }
//            node.classList.toggle('selected')
//         })
//         node.addEventListener('click',function() {
//             if (node.classList.contains('slack')){
//                 node.style.backgroundColor = 'salmon'
//             }
//            node.classList.toggle('selected')
//         })
//         node.addEventListener('click',function() {
//             if (node.classList.contains('keyboard')){
//                 node.style.backgroundColor = 'salmon'
//             }
//            node.classList.toggle('selected')
//         })

//         if (node.textContent != "") continue;
//         let charCode = Math.round(65 + Math.random() * 25)
//         node.textContent = String.fromCharCode(charCode)
//     }
// }
