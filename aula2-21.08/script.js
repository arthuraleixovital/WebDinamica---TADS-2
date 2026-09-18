// for (let i = 10; i >= 1; i--) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(i, "x", j, ": " + i * j);
//     }
// } control ; para deixar tudo em anotação

function ehPar(n){
    if (n%2==0){
        console.log("É par.")
    } else {
        console.log("Não é par.")
    }
}
ehPar(4)

const ehpar2 = function (n){
    if (n%2==0){
        console.log("É par.")
    } else {
        console.log("Não é par.")
    }
}
ehpar2(3)

const ehpar3 = (n) => (n%2==0 ? console.log("É par.") : console.log("Não é par."))
ehpar3(3)