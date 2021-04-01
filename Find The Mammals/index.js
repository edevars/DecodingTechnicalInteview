// Given an array containing a list of animal objects, return a new array containing only the animals which are mammals. 
// Each animal object contains an animal name (i.e. dog or snake) and a value, mammal, which is a boolean indicating whether 
// the animal is a mammal.

animals = [
    {
        type: 'Dog',
        mammal: true,
    },
    {
        type: 'Snake',
        mammal: false,
    },
    {
        type: 'Cheetah',
        mammal: true,
    },
]

const isMammal = (animals) => animals.filter(({ mammal }) => mammal === true)

console.log(isMammal(animals))