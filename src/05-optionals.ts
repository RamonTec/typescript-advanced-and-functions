export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number,
) => {
  return {
    id,
    isNew: isNew ?? true,
    stock: stock ?? 10,
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
 * Los parámetros opcionales son aquellos que podemos obviar su envío cuando mandamos datos en una función que requiere argumentos.

El nullish-coalescing nos permite evaluar si una variable está definida, pero si esta es null o undefined, retorna un segundo valor diferente.

Parámetros opcionales en TypeScript
Para denotar que un parámetro será opcional usamos el operador ? al lado. Siempre debemos colocar los parámetros opcionales al final.

const createProduct = (
	id: string | number, // Puede ser de tipo `string` o `number`.
	isNew: boolean,
	stock?: number, // PARÁMETRO OPCINAL.
) => {
	return { // Retornamos un objeto con los valores pasados como parámetros.
		id,
		stock,
		isNew
	}
}

console.log(
	createProduct(1, true)
) // { id: 1, stock: undefined, isNew: true }
Valores por defecto con el operador OR
Para evitar tener como retorno valores undefined podríamos emplear el operador lógico || (OR) para asignar un valor por defecto.

const createProduct = (
	id: string | number, // Puede ser de tipo `string` o `number`.
	isNew?: boolean,	// PARÁMETRO OPCINAL.
	stock?: number, // PARÁMETRO OPCINAL.
) => {
	return { // Retornamos un objeto con los valores pasados como parámetros.
		id,
		stock: stock || 10,
		isNew
	}
}

console.log(
	createProduct(1, true)
) // { id: 1, stock: undefined, isNew: true }
El problema de usar valores falsy en JavaScript
El operador || evalúa si el primer valor es falsy, de serlo retorna un segundo valor, si no es falsy retorna el primero. Los valores que son considerados falsy en JavaScript son:

String vacío “”
Número 0
El valor booleano false
Aquí surge un problema: si nosotros deseáramos mandar como argumento un valor que JavaScript considera falsy, entonces el operador || no tomará en cuenta nuestros valores y los cambiará por los de defecto:

const createProduct = (
	id: string | number, // Puede ser de tipo `string` o `number`.
	isNew?: boolean,	// PARÁMETRO OPCINAL.
	stock?: number, // PARÁMETRO OPCINAL.
) => {
	return { // Retornamos un objeto con los valores pasados como parámetros.
		id,
		stock: stock || 10,
		isNew: isNew || true
	}
}

console.log(
	createProduct(1, false, 0)
) // { id: 1, stock: 10, isNew: true }
// 👆 JavaScript retorna los valores por defecto de `isNew` y `stock`
//		y no los que mandamos en los argumentos.
Este problema podemos solucionarlo con el nullish-coalescing.

Nullish-coalescing para asignar valores por defecto
El nullish-coalescing se representa con el operador ??. Esto evalúa si el primer valor está definido, si no lo está, retorna el segundo:

const createProduct = (
	id: string | number, // Puede ser de tipo `string` o `number`.
	isNew?: boolean,	// PARÁMETRO OPCINAL.
	stock?: number, // PARÁMETRO OPCINAL.
) => {
	return { // Retornamos un objeto con los valores pasados como parámetros.
		id,
		stock: stock ?? 10,
		isNew: isNew ?? true
	}
}

console.log(
	createProduct(1, false, 0)
) // { id: 1, stock: 0, isNew: false }
 */