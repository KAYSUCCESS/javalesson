// convert fahr to celcius
// convert fahr to celcius




function convertFahrToCelsius(oF) {
    let oC = ((5 / 9) * (parseInt(oF) - 32)).toFixed(4);
    if (typeof oF === "number" || typeof oF === "string") {
        return '${oC} deg C';
    }
    if (oF instanceof Array) {
        return ('${JSON.stringify(oF)} is not a valid number but an array');

    } else {
        return ('${JSON.stringify(oF)} is not a valid number but a/an ${typeof oF}');

    }
}



console.log(convertFahrToCelsius(true));


// function checkYuGiOh(oF) {
//     let checkYuGiOh = ((10 === 5, 2, 1), (20 === 5, 4, 2), (15 === 5, 3, 1));
//     if (typeof oF === "number" || typeof oF === "string")
//         return '$'
// }