
// Begin 5

// let A = prompt("Введи число")

// if( isFinite(A)) {
//     console.log(A)
// }else{
//     console.log('Введено не число')
// }

// let calcVolume = () =>{ 
//     let V = A**3
//     console.log(V)
// }

// let calcSquare = () =>{ 
//     let S = (6*A)**2
//     console.log(S)
// }



// Begin 8

// let A = Number( prompt("Введи число A"))
// let B = Number(prompt("Введи число B"))

// let calcNumber = () =>{ 
//     let C = ( A + B )/2
//     console.log(C)
// }




// Begin 17

// let A = Number(prompt("Введи число A"))
// let B = Number(prompt("Введи число B"))
// let C = Number(prompt("Введи число C"))

// let arrAb = []

// let calcAb =() => {
//     let AB = A+B
// console.log(AB)
// arrAb.push(AB)
// console.log(arrAb)
// }
  
// let arrBc = []

// let calcBc =() => {
//     let BC = B+C
// console.log(BC)
// arrBc.push(BC)
// console.log(arrBc)
// }


// let calcAbBc =() => {
//     let AbBc = Number(arrBc )+Number(arrAb ) 
// console.log(AbBc)
// }




// Begin 26


// let arrX = []

// let addX =() => {
//     let x =Number( prompt("Задайте X"))
//     arrX.push(x)
//     console.log(arrX)
// }

// let calcY =() => {
//     let y = (4*(arrX-3)**6)-(7*(arrX-3)**3)+2
// console.log(y)
// }





// Begin 12

let A = Number(prompt("Введи число A"))
let B = Number(prompt("Введи число B"))

let arrC = []

let calcC =() => {
    let C = Math.sqrt((A**2)+(B**2))
console.log(C)
arrC.push(C)
}

let calcP =() => {
    let P = A+B+Number(arrC)
console.log(P)
}