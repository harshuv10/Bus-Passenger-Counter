//document.getElementById("count-el").innerText=5
// let count=0
// console.log(count)
// let myAge=21
// let dogratio=7
// let mydogAge= myAge*dogratio
// console.log(mydogAge)
let countEl=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")
let count=0
function increment(){
    count=count+1
    countEl.textContent=count
}
function save(){
    let countStr=count + " - "
    saveEl.textContent+=countStr
    countEl.textContent=0
    count=0
}