let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let secondCountEl = Number(document.getElementById("second-count-el").innerText);
let count = 0;
function firstIncrement() {
  count += 1;
  countEl.innerText = count;
  console.log(count);
}

function firstDoublePoints() {
  count += 2;
  countEl.innerText = count;
  console.log(count);
}

function firstFourPoints() {
  count += 4;
  countEl.innerText = count;
}

function save() {
  let saveFunc = count + " - "
    saveEl.textContent += saveFunc
    console.log(count)
    count = 0
    countEl.innerText  = 0
    if (saveFunc == "") {
      saveFunc += count;
    } else {
      saveFunc += " - " + count;
    }
}

/* second player */

function secondIncrement() {
  count = count + 1;
  document.getElementById("second-count-el").innerText = count2;
}

function secondDoublePoints() {
  count = count + 2;
  document.getElementById("second-count-el").innerText = count2;
}

function secondFourPoints() {
  count = count + 4;
  document.getElementById("second-count-el").innerText = count2;
}

function secondSave() {
  if (document.getElementById("second-count-el").innerText == "") {
    document.getElementById("second-save-el").innerText += count2;
  } else {
    document.getElementById("second-save-el").innerText += " - " + count2;
  }
}
