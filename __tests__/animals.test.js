const fs = require('fs');
const {filterByQuery,findById,createNewAnimal,validateAnimal} = require('../lib/animals');
const {animals} = require('../data/animals.json');
jest.mock('fs');

test('creates an animal object', ()=>{
    const animal = createNewAnimal(
        {name: "Darlene", id:"ellemenopee"},animals
    );

    expect(animal.name).toBe("Darlene");
    expect(animal.id).toBe("ellemenopee");
});

test('filters by query', ()=>{
    const startingAnimals = [
        {
            id: "3",
            name: "Erica",
            species: "Gorilla",
            diet: "omnivore",
            personalityTraits: ['quirky','rash']
        },
        {
            id: "4",
            name: "Noel",
            species: "bear",
            diet: "carnivore",
            personalityTraits: ['impish', 'sassy', 'brave']
        }
    ]
const updatedAnimals = filterByQuery({species: "Gorilla"}, startingAnimals);

expect(updatedAnimals.length).toEqual(1);
});

test('finds by id', ()=>{
    const startingAnimals = [
        {
            id: "3",
            name: "Erica",
            species: "Gorilla",
            diet: "omnivore",
            personalityTraits: ['quirky','rash']
        },
        {
            id: "4",
            name: "Noel",
            species: "bear",
            diet: "carnivore",
            personalityTraits: ['impish', 'sassy', 'brave']
        }
    ];

    const result = findById("3", startingAnimals);

    expect(result.name).toBe("Erica");
});

test('validates personality traits',()=>{
    const animal = {
        id: "3",
        name: "Erica",
        species: "gorilla",
        diet: "omnivore",
        personalityTraits: ["quirky", "rash"],
    };
    
    const invalidAnimal = {
        id: "3",
        name: "Erica",
        species: "gorilla",
        diet: "omnivore",
    };

    const result = validateAnimal(animal);
    const result2 = validateAnimal(invalidAnimal);

    expect(result).toBe(true);
    expect(result2).toBe(false);

});