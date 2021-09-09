//Its impossible to optimise this!
//No. It is necessary

function sum(...vals) {
    let ans = 0
    vals.forEach(val => ans += val)
    return ans
}

const numbers = [1,2,3,4,5,6,7]

console.log(sum(...numbers))

const deepCloneNumbers = [...numbers]

console.log(deepCloneNumbers)

const arr1 = ['🍇','🍈','🥑']
const arr2 = ['🍊','🍎','🍐']

const combinedArr = [...arr1,...arr2]

console.log(combinedArr)

const details = {
    name: "Robert",
    age: 33,
    gender: "Male"
}

const details2 = {
    school: "UC Sunnydale",
    degree: "Asian Failure",
    job: "Programming Failure 😭"
}

const combinedDetails = {
    ...details,
    ...details2,
    job:"Programming Success 😎"
}

console.log(combinedDetails)