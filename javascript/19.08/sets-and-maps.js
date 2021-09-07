// Set
const ids = new Set([1, 2, 3, 'Hello']);
console.log(ids);
console.log(ids.has(1));

ids.add(2);
console.log(ids);

for (const id of ids.values()) {
    console.log(id);
}

ids.delete(3);
console.log(ids);

// const note = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// console.log(note[0]);
// Map
const person1 = {name: 'Ion'};
const person2 = {name: 'Vasile'};

const personData = new Map([['ion', [1, 2, 3]], ['vasile', [4, 5, 6]]]);
console.log(personData);
console.log(personData.get('ion'));
console.log(personData.get('vasile'));

for (const student of personData.entries()) {
    console.log(student);
}

for (const [key, value] of personData.entries()) {
    console.log(key, '--', value);
}

for (const key of personData.keys()) {
    console.log(key);
}

// WeakSet
let person = {name: 'Ion'};
const persons = new WeakSet();
persons.add(person);

// WeakMap
const persData = new WeakMap();
persData.set(person, 'some info');
