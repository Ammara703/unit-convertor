/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let inputEL = document.getElementById("input-el")
let btnEL = document.getElementById("btn-el")
let txtEL1 = document.getElementById("txtfeild1")
let txtEL2 = document.getElementById("txtfeild2")
let txtEL3 = document.getElementById("txtfeild3")
btnEL.addEventListener("click", function() {
    let x = inputEL.value
    let meter = 3.281 * x
    let feet = x / 3.281
    txtEL1.textContent = `${x} meters = ${meter.toFixed(3)} feet | ${x} feet = ${feet.toFixed(3)} meters`
    let liter = 0.264 * x
    let gallon = x / 0.264
    txtEL2.textContent = `${x} liter = ${liter.toFixed(3)} gallon | ${x} gallon = ${gallon.toFixed(3)} liter`
    let kilogram = x * 2.204
    let pound = x / 2.204
    txtEL3.textContent = `${x} kilogram = ${kilogram.toFixed(3)} pound | ${x} pound = ${pound.toFixed(3)} kilogram`

})