
// let count = 0
// console.log(count)

// let myAge = 24
// let humanDogRatio = myAge * 7

// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)



// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints =  bonusPoints + 100
// console.log(bonusPoints)

// bonusPoints -= 25
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 70
// console.log(bonusPoints)


//initialise the count as o
//listen for clicks on the increment btn
//increment count variable when the btn is clicked
//change the count-el in the HTML



//camelCase
// document.getElementById("count").innerText = 5

//grab count-el element, store it in a countEl variable
 let countEl = document.getElementById("count-el") //pass in arguments

 console.log(countEl)

let count = 0

function increment() {
    count += 1
    console.log(count)
    //set countEl's innertext to the count
    countEl.innerText = count
}



// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph

    let countdash = count + " - "
    saveEl.textContent += countdash
    countEl.textContent = 0
    count = 0

}







