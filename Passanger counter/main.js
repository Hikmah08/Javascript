
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0
function increment() {
    count+= 1
    countEl.innerText = count
}
increment()

function save(){
    let saveFunc = count + " - "
    saveEl.textContent += saveFunc
    console.log(saveFunc)
    countEl.innerHTML = 0
    count = 0
}
save()
