const daysOfTheWeek = [
    'Luni',
    'Marti',
    'Miercuri',
    'Joi',
    'Vineri',
    'Sambata',
    'Duminica'
];

console.log(daysOfTheWeek);
console.log(daysOfTheWeek[5]);
console.log(daysOfTheWeek.length);
console.log(daysOfTheWeek.join());
console.log(daysOfTheWeek.join(' | '));
console.log(daysOfTheWeek.join('***'));
console.log(daysOfTheWeek.join('-ARRAY-'));

const courses = [
    { teacher: 'Teacher 1', course: 'Course 1'},
    { teacher: 'Teacher 2', course: 'Course 2'}
];
console.log(courses);

courses.push({ teacher: 'Teacher 3', course: 'Course 3'});
console.log(courses);

daysOfTheWeek.push('Alta zi');
console.log(daysOfTheWeek);

courses[1] = { teacher: 'Teacher 20', course: 'Course 20'};
console.log(courses);

const student = {
    name: 'Vasile',
    city: 'Bucharest'
}

console.log(student);
console.log(student.name);

console.log(courses[1].teacher);
console.log(courses[1].teacher.toUpperCase());