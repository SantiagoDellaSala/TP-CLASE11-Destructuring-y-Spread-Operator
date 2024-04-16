const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [primerNumero, , segundoNumero, , tercerNumero, ...restoNumeros] = numeros;

const nuevoArray = [...restoNumeros];

const mascota = {
  nombre: 'Santiago',
  tipo: 'Perrito',
  color: 'Verde',
  raza: 'Callejero'
};

const { nombre, tipo, color, raza } = mascota;

console.log(`Hola, les presento a mi mascota. Su nombre es ${nombre}, es un hermoso ${tipo}, de color ${color} y su raza es ${raza}.`);