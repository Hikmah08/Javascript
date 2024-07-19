let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let secondCountEl = document.getElementById("second-count-el")
let secondSaveEl = document.getElementById("second-save-el")
let count = 0
let secondCount = 0
function firstIncrement(){
    count +=1
    countEl.innerText = count
    console.log(count)
}

//TWO POINTS
function firstDoublePoints(){
    count+=2
    countEl.innerText = count
    console.log(count)
}

//FOUR POINTS 
function firstFourPoints(){
    count+=4
    countEl.innerText = count
    console.log(count)
}

// SAVE 
function save() {
    let saveFunc = count + " - "
      saveEl.textContent += saveFunc
      count = 0
      countEl.innerText  = 0
      if (saveFunc == "") {
        saveFunc += count;
      } else {
        saveFunc += " - " + count;
      }
      console.log(count)
  }
  

//SECOND BOX
function secondIncrement(){
    secondCount +=1
    secondCountEl.innerText = secondCount
    console.log(secondCount)
}

//SECOND DOUBLE POINTS
function secondDoublePoint(){
    secondCount+=2
    secondCountEl.innerText = secondCount
    console.log(secondCount)
}

//SECOND FOUR POINTS
function secondFourPoint() {
    secondCount+=4
    secondCountEl.innerText = secondCount
    console.log(secondCount)
}

//SAVE 
function secondSave(){
    let secondSaveFunc = secondCount + " - "
    secondSaveEl.textContent += secondSaveFunc
    console.log(secondCount)
    secondCount = 0
    secondCountEl.innerText  = 0
    if (secondSaveFunc== "") {
        secondSaveFunc += count;
      } else {
        secondSaveFunc += " - " + count;
      }
}
