export type Sizes = 'S' | 'M' | 'L' | 'XL';
export type Product = {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size: Sizes;
}

const products: Product[] = [];

products.push({
  createdAt: new Date(),
  id: 1,
  size: 'L',
  stock: 10,
  title: 'Shirts'
});

/**
 * 
 * Las interfaces nos permiten crear moldes de objetos con sus respectivas propiedades y tipado. Para generar interfaces usamos la palabra reservada interface
 * 
 * 
interface Product {
	id: number | string;
	title: string;
	price: number;
	stock: number;
}

type Product = {
  id: number | string;
  title: string;
  price: number;
  stock: number;
}

Interfaces vs. Type
Veamos la diferencia entre usar interface y type:
Utilizamos type para definir principalmente tipos primitivos o directos (declaraciones cortas y puntuales), mientras que con una interface definimos una estructura llave-valor de propiedades que describan lo que debe tener un objeto.

Los interface se pueden fácilmente extender (realizar herencia), mientras que con los type no. Esto los hace más escalables.
 */
