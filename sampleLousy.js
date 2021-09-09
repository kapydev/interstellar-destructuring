//It impossible to optimise this!
//No it is necessary.

function sum(a,b,c,d,e,f,g) {
    return a+b+c+d+e+f+g
}

const numbers = [1,2,3,4,5,6,7]

console.log(sum(
    numbers[0],
    numbers[1],
    numbers[2],
    numbers[3],
    numbers[4],
    numbers[5],
    numbers[6],
))

console.log(deepCloneNumbers = [
    numbers[0],
    numbers[1],
    numbers[2],
    numbers[3],
    numbers[4],
    numbers[5],
    numbers[6],
])

const arr1 = ['🍇','🍈','🥑']
const arr2 = ['🍊','🍎','🍐']

const combinedArr = [
    arr1[0],
    arr1[1],
    arr1[2],
    arr2[0],
    arr2[1],
    arr2[2],
]

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
    name: details.name,
    age: details.age,
    gender: details.gender,
    school: details2.school,
    degree: details2.degree,
    job: details2.job
}

console.log(combinedDetails)