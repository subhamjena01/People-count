let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let totalSaveEl = document.getElementById("total-save-el") 
let count = 0
let totalCount= 0;

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    
    totalCount += count
    totalSaveEl.textContent = " " + totalCount
    
    countEl.textContent = 0
    count = 0
}
