function makeArray(firstAraay, secondArray, maxLength) {
    const result = firstAraay.concat(secondArray)
    if (result.length > maxLength) {
        return result.slice(0,maxLength)
    } else {
        return result
    }
}
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));
console.log(makeArray(["Acsel", "Hromi"], ["Peach", "Baltazar"], 3));
console.log(makeArray(["Have_nise_day", "Jupiter"], ["Neptune", "Uranus"], 1));
