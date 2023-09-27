// Exercitiul no.2

const ZiuaSaptamanii = 'Luni';

switch (ZiuaSaptamanii) {
    case 'Luni':
        console.log('Astazi este luni!');
        break;
    case 'Marti':
        console.log('Astazi este marti!');
        break;
    case 'Miercuri':
        console.log('Astazi este miercuri!');
        break;
    case 'Joi':
        console.log('Astazi este joi!');
        break;
    case 'Vineri':
        console.log('Astazi este vineri!');
        break;
    case 'Sambata':
        console.log('Astazi este sambata!');
        break;
    case 'Duminica':
        console.log('Astazi este duminica!');
        break;
    default:
        console.log('Am incercat toate zile ale saptamanii');
}

// Exercitiul no.3

let str = "28";

let lungimeaStr;

switch (true) {
    case str > 10:
        lungimeaStr = 'lungimea str este mai mare de 10';
        break;
    case str < 10:
        lungimeaStr = 'lungimea str este mai mica de 10';
        break;
    default:
        console.log('nu este difinit');
}

console.log(lungimeaStr)

// Exercitiul no.4

let variabila = "TeXt tO LoWEr cASE"
console.log(variabila.toLocaleLowerCase())

let variabila = "TeXt tO uPPEr cASE"
console.log(variabila.toUpperCase())

// Exercitiul no.5

var variabila = 'Text asignat din cinci cuvinte'
console.log(variabila.slice(12, -14))

var variabila = 'Text asignat din cinci cuvinte';
console.log(variabila.substring(13, 17))

var variabila = 'Text asignat din cinci cuvinte';
console.log(variabila.slice(13, 17))





