/*

IF ELSE

    IF -> SE
    Else -> Se não

*/

const temperature = 36

if(temperature === 36) {
    console.log("você está saudável")    
} else if (temperature > 36 && temperature <= 40) {
    console.log("Você está com febre")
} else {
    console.log("Você está com hipotermia")
}