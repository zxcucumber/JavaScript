//Задание 2
let email = "abvbbvbcvbabc@gmail.com"
let num = email.slice(0, email.indexOf("@")).length
let repeatPart = email.slice(num/2, num).length
console.log(email.slice(0, num/2) + "*".repeat(repeatPart) + email.slice(email.indexOf("@"), email.length))

//Задание 3
function maxLength(a) {
    let maxlength = 34
    if (a.length > maxlength) {
        a = a.slice(0, (maxlength - 3)) + ".".repeat(a.slice((maxlength - 3), maxlength).length)
    }
    return a
}
console.log(maxLength("всего одна капля этого средства и ваш огород превратится в плантацию"))