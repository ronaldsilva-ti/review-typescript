// undefined => algo não foi definido

let x; // valor undfined
console.log(x);

export function createPerson(
  firstName: string,
  lastName: string,
): {
  firstName: string;
  lastName?: string; //pode ser string ou undefined
} {
  return {
    firstName,
    lastName,
  };
}

export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf('2');

if (squareOfTwoNumber === null) {
  console.log('Conta invalida');
} else {
  console.log(squareOfTwoNumber * 2);
}
