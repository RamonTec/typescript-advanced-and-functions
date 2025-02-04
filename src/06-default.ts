export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10,
) => {
  return {
    id,
    isNew,
    stock,
  }
};

/**
 * Javascript
 * 0 === false
 * '' --- false
 * false === false
 */

const product1 = createProduct(1, false, 0);
const product2 = createProduct(1, false);
const product3 = createProduct(3);

console.log(' product1:', product1);
console.log(' product2:', product2);
console.log(' product3:', product3);

/**
 * 
Los parámetros por defecto se usan para predefinir valores a los parámetros de una función en caso de no especificar un valor al invocarla.

Parámetros por defecto en TypeScript
En TypeScript, usamos el signo = para definir el valor por defecto que cierto parámetro tendrá. Veamos un ejemplo:

// Definición de función
const createProduct = (
	id: string | number,
	isNew: boolean = true, // 👀
	stock: number = 10, // 👀
) => {
	return { // Retornamos un objeto con los valores pasados como parámetros.
		id,
		stock,
		isNew
	}
}

// Impresión en consola
console.log(
	createProduct(1)
) // { id: 1, stock: 10, isNew: true } `stock` y `isNew` por defecto

console.log(
	createProduct(2, false)
) // { id: 1, stock: 10, isNew: false } `stock` por defecto

console.log(
	createProduct(3, false, 50)
) // { id: 1, stock: 50, isNew: false }
Podemos usar esto como alternativa al nullish-coalescing.
 */