const firstInput=document.querySelector(".first-input")
const secondInput=document.querySelector(".second-input")
let btnPluse=document.querySelector(".plus")
let btnMinuse=document.querySelector(".minuse")
let btnZarb=document.querySelector(".zarb")
let btnTaghsim=document.querySelector(".taghsim")
let modal=document.querySelector(".modal")

btnPluse.addEventListener("click",()=>{
    let inputValueFirst=firstInput.value
    let inputValueSecond=secondInput.value
    let sum=inputValueFirst+inputValueSecond
    console.log(sum)
})
btnMinuse.addEventListener("click",()=>{
    let inputValueFirst=firstInput.value
    let inputValueSecond=secondInput.value
    let minused=inputValueFirst-inputValueSecond
    console.log(minused)
   })
btnZarb.addEventListener("click",()=>{
    let inputValueFirst=firstInput.value
    let inputValueSecond=secondInput.value
    let zarb=inputValueFirst*inputValueSecond
    console.log(zarb)
   })
btnTaghsim.addEventListener("click",()=>{
    let inputValueFirst=firstInput.value
    let inputValueSecond=secondInput.value
    let taghsimed=inputValueFirst/inputValueSecond
    console.log(taghsimed)
            })