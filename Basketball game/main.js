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
firstIncrement()

//TWO POINTS
function firstDoublePoints(){
    count+=2
    countEl.innerText = count
    console.log(count)
}
firstDoublePoints()
//FOUR POINTS 
function firstFourPoints(){
    count+=4
    countEl.innerText = count
    console.log(count)
}
firstFourPoints()
// SAVE 
function save(){
    let saveFunc = count + " - "
    saveEl.textContent += saveFunc
    console.log(count)
    count = 0
    countEl.innerText  = 0
}
save()

//SECOND BOX
function secondIncrement(){
    secondCount +=1
    secondCountEl.textContent = secondCount
    console.log(secondCount)
}
secondIncrement()
//SECOND DOUBLE POINTS
function secondDoublePoint(){
    secondCount+=2
    secondCountEl.textContent = secondCount
    console.log(secondCount)
}
secondDoublePoint()
//SECOND FOUR POINTS
function secondFourPoint() {
    secondCount+=4
    secondCountEl.textContent = secondCount
    console.log(secondCount)
}
secondFourPoint()
//SAVE 
function secondSave(){
    let secondSaveFunc = secondCount + " - "
    secondSaveEl.textContent += secondSaveFunc
    console.log(secondCount)
    secondCount = 0
    secondCountEl.innerText  = 0
}
secondSave()
