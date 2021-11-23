const flowers = [
    whiteRose = {
        color: "White",
        species: "Rose",
        price: 0.90,
        id: 1
    },
    redTulip = {
        color: "Red",
        species: "Tulip",
        price: 1.10,
        id: 2
    }
]

const addFlower = (flowerObject) => {
    const lastIndex = flowers.length - 1
    const currentLastFlower = flowers[lastIndex]
    const maxId = currentLastFlower.id
    const idForNewFlower = maxId + 1
    
    flowerObject.id = idForNewFlower
    flowers.push(flowerObject)
}
const yellowTulip = {
    color: "Yellow",
    species: "Tulip",
    price: 1.10
}

const orangeRose = {
    color: "Orange",
    species: "Rose",
    price: 0.90
}

const blueOrchid = {
    color: "Blue",
    species: "Orchid",
    price: 1.05
}

addFlower(yellowTulip)
addFlower(orangeRose)
addFlower(blueOrchid)

const findExpensiveFlowers = () => {
    const expensiveFlowers = []  // Do not change this code


    /*
        Write a for..of loop that iterate the array
        of flowers, and if the price of a flower is
        greater than or equal to 1.00, it should be
        added to the `expensiveFlowers` array.
    */




    return expensiveFlowers  // Do not change this code
}




// Do not touch this code
module.exports = {
    findExpensiveFlowers, addFlower
}

