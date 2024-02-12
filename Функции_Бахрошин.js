//1
let email = ["sdfgdwg@gmail.com", "fvfvsdd@gmail.com", "efgegefgsac@gmail.com"]
let blackList = ["sdfgdwg@gmail.com"]

function filter(email, blackList) {
    let trueEmail = [];
    for (let i = 0; i < blackList.length; i++) {
        for (let m = 0; m < email.length; m++) {
            if (email[m] != blackList[i]) {
                trueEmail.push(email[m])
            }
        }
    }
    return trueEmail
}
console.log(filter(email, blackList))


//2
let bucket = [100, 199]

function summ(bucket) {
    let sum = 0
    for (let i = 0; i < bucket.length; i++) {
        sum = sum + bucket[i]
    }
    return sum
}

function quantity(bucket) {
    return bucket.length
}
function calculate(sum, quantity, promocode = null) {
    if (promocode == "ДАРИМ300") {
        sum = sum - 300
        if (quantity >= 10) sum = sum - (sum / 100 * 5)          
            if (sum > 50000) sum = sum - (sum / 100 * 20)
                if (sum <= 0) sum = 0
            
    }
    else if (quantity >= 10) {
        sum = sum - (sum / 100 * 5)
        if (sum > 50000) sum = sum - (sum/100*20)
        
    }
    else if (promocode == "СКИДКА15") {
        if (sum >= 20000) {
            sum = sum - (sum/100*15)
        }
    }
    return [sum, quantity, promocode]
}

console.log(calculate(summ(bucket), quantity(bucket), "ДАРИМ300"))

