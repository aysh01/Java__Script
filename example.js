const categories = {
    // Normal: ['A', 'B', 'C'],
    // Exclusive: ['D', 'E'],
    // Club: ['F', 'G', 'H'],
    // VIP: ['I', 'J'],
    Normal: [
        { value: 'A', number: 8 },
        { value: 'B', number: 6 },
        { value: 'C', number: 6 },
    ],
    Exclusive: [
        { value: 'D', number: 8 },
        { value: 'E', number: 6 },
    ],
    Club: [
        { value: 'F', number: 6 },
        { value: 'G', number: 6 },
        { value: 'H', number: 7 },
    ],
    VIP: [
        { value: 'I', number: 7 },
        { value: 'J', number: 7 },
    ],
};

function getRandomValue(i) {
    const values = categories[i];
    if (values) {
        const randomIndex = Math.floor(Math.random() * values.length);
        return values[randomIndex];
    }
    return null;
}


const a = 'Normal';
const randomValue = getRandomValue(a);

if (randomValue) {
    console.log(randomValue);
    console.log(`Value:${randomValue.value}`);
    console.log(`Number:${randomValue.number}`);
} else {
    console.log('Invalid');
}
