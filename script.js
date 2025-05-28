console.log("got file")

let clicks = 0;
let container = document.getElementById("container");
let tasks = document.getElementsByClassName("container-task");
let detail = document.getElementById("details");
let count = document.getElementsByClassName("counter");

//Set random threshold to go "crazy"
let threshold = getRandomInt(2, tasks.length);
console.log(threshold);

container.addEventListener('click', showTasks);

function countClicks () {
    clicks += 1;
    console.log(clicks);
    showTasks()
}

function showTasks() {

    details.style.visibility = "visible";
    tasks[clicks].style.visibility = "visible";

    clicks += 1;

    for (let i = 0; i < count.length; i++) {
        count[i].innerHTML = clicks;
    }

    //when clicks hit threshold go to crazy
    if (clicks == threshold) {
        console.log("match");
    }
}

function getRandomInt(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

