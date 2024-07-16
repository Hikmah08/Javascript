
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0
function increment() {
    count = 0
    count+= 1
    countEl.innerText = count
}
increment()

function save(){
    let saveFunc = count + " - "
    saveEl.innerHTML += saveFunc
    console.log(saveFunc)
    countEl.innerHTML = 0
    count = 0
}
save()
