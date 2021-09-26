// unknown => qualquer valor, porém te forca a fazer a checagem do valor

let x: unknown;
x = 100;
x = 'Ronald';
x = 12;

const y = 800;

if (typeof x === 'number') console.log(x * y);
