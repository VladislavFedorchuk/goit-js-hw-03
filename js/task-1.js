function slugify(title) {
    const normalizedMessage = title.toLowerCase()
    const split = normalizedMessage.split(" ")
    return split.join("-")
}
console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));
console.log(slugify("I WAS mede for LoVing YOU BaBy"));
