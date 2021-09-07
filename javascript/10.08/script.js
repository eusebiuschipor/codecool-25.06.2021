// let nrStudents = 0;
// nrStudents = nrStudents + 1;
// nrStudents += 1;
// nrStudents++;
// ++nrStudents;
// nrStudents--;
// console.log(nrStudents);

// console.log(0);
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// for (let i = 0; i <= 200; i++) {
//     console.log(i);
// }

// for (let j = 5; j <= 30; j += 5) {
//     console.log(j);
// }

// let nrStudents = 0;
// for (let i = 0; i < 10; i++) {
//     nrStudents++;
// }
// console.log(nrStudents);

let students = ['Ana', 'Andrei', 'Alex', 'Diana', 'Florina', 'Gigel', 'Ionel'];

// console.log(`Hello ${students[0]}`);
// console.log(`Hello ${students[1]}`);
// console.log(`Hello ${students[2]}`);
// console.log(`Hello ${students[3]}`);
// console.log(`Hello ${students[4]}`);

for (let i = 0; i < students.length; i++) {
    console.log(`Hello ${students[i]}`);
}

console.log('--------------------------');

for (let j = 0; j < 4; j++) {
    console.log(`Hello ${students[j]}`);
}

console.log('--------------------------');

let index = 0;
for (let student of students) {
    console.log(`Hello ${index++} - ${student}`);
}

console.log('--------------------------');

let numberOfTimesRun = 0;
students.forEach(function(student, index) {
    console.log(`Hello ${index} - ${student}`);
    numberOfTimesRun++;
});

console.log(numberOfTimesRun);

for (let i = 0; i < students.length; i++) {
    console.log(students[i].toUpperCase());
}

let sum = 0;
while (sum < 20) {
    sum++;
}

console.log(`sum: ${sum}`);

sum = 0;

if (sum < 20) {
    sum++;
}

console.log(sum);

sum = 0;
while(sum < 20) {
    sum = sum + 2;
}

console.log('--------------------------');

while (students.length > 0) {
    let student = students.shift();
    console.log(student);
}

// Infinite loop
// nrStudents = 11;
// while (nrStudents > 10) {
//     nrStudents++;
//     console.log(nrStudents);
// }

// while (true) {
//     console.log('true');
// }

console.log('--------------------------');


nrStudents = 0;
do {
    console.log(nrStudents++);
} while (nrStudents < 0)