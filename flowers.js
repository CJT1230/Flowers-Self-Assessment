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

// function allows for the user to declare an array and add it to the flowers array along with a numerically unique id.
const addFlower = (flowerObject) => {
    const lastIndex = flowers.length - 1
    const currentLastFlower = flowers[lastIndex]
    const maxId = currentLastFlower.id
    const idForNewFlower = maxId + 1
    
    flowerObject.id = idForNewFlower
    flowers.push(flowerObject)
}

// Checks to see if the flowers prices are greater than 1, if so they are labeled as expensiveFlowers
const findExpensiveFlowers = () => {
    const expensiveFlowers = []  // Do not change this code
    for (const flower of flowers) {
        if (flower.price > 1) {
            expensiveFlowers.push(flower)
        }
    }

    return expensiveFlowers  // Do not change this code
}




// Do not touch this code
module.exports = {
    findExpensiveFlowers, addFlower
}

