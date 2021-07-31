const prieteni = [];
prieteni[0] = prompt('Nume prieten 1: ');
prieteni[1] = prompt('Nume prieten 2: ');
prieteni[2] = prompt('Nume prieten 3: ');

const varste = [];
varste[0] = Number(prompt('Varsta prieten 1: '));
varste[1] = Number(prompt('Varsta prieten 2: '));
varste[2] = Number(prompt('Varsta prieten 3: '));

varste[0] = varste[0] + 10;
varste[1] = varste[1] + 10;
varste[2] = varste[2] + 10;

alert(`Peste 10 ani, ${prieteni[0]}, ${prieteni[1]}, ${prieteni[2]} o sa aiba varstele: ${varste[0]}, ${varste[1]}, ${varste[2]}`);

