function parseString(input: string | string[]): string | string[] {

  if (Array.isArray(input)) {
    return input.join('');
  } else {
    return input.split('');
  }

}

const rtaArray = parseString('Elias');
console.log('rtaArray:', rtaArray);
rtaArray.reverse();
if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}

const string = parseString(['e', 'l', 'i', 'a', 's']);
console.log('string:', string);
string.toLowerCase();
if (typeof string === 'string') {
  string.toLowerCase()
}

/**
 * Con la sobrecarga de funciones definimos diferentes firmas de una función en la que cada firma puede manejar cierto tipado de entrada y salida. TypeScript decidirá de manera automática qué firma es la correcta para usar basándose en los argumentos enviados y el tipo de datos de estos.

Un problema que puede resolver la sobrecarga de funciones
Imaginemos que deseamos implementar una función que devuelva un string en el caso de que le envíes un array o que devuelva un array en caso de que le mandes un string como argumento:

// 1️⃣Si le enviamos un array, nos debe unir cada elemento del array y devolver un string.
// 2️⃣Si le enviamos un string, nos debe separar cada caracter y formar un array como respuesta.
// [N,i,c,o] => 'Nico' ... string[] => string 1️⃣
//  'Nico' => [N,i,c,o] ... string => string[] 2️⃣


function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else {
    return input.split(''); // string[]
  }
}

// Llamando a la función...
const rptaArray = parseStr('Nico'); // Entrada: string - Salida: Array
console.log('rptaArray', 'Nico =>' ,rptaArray);

const rptaStr = parseStr(['N','i','c','o']); // Entrada: array - Salida: string
console.log('rptaStr', "['N','i','c','o'] =>",rptaStr); 
Definimos la función con un parámetro que puede ser del tipo string o string[] (un array que contiene valores de tipo string) y un retorno que puede ser de igual manera string o string[].

Cuando invocamos la función para enviar los argumentos que deseamos probar, TypeScript no sabe inicialmente qué tipo de dato le estás mandando de manera específica en el código. Por tanto, no podemos acceder en la siguiente línea de código a ningún método propio de un string o un array:

const rptaArray = parseStr('Nico'); // Entrada: string - Salida: Array
// La salida y por tanto el valor que es asignado a `rptaArray` será un Array.
// Si intentamos aplicar un método propio de los Arrays:
rptaArray.reverse(); // ⛔ ...Nos marcará error 👀

const rptaStr = parseStr(['N','i','c','o']); // Entrada: array - Salida: string
// La salida y por tanto el valor que es asignado a `rptaStr` será un string.
// Si intentamos aplicar un método propio de los strings:
rptaStr.toLowerCase(); // ⛔ ...Nos marcará error 👀
Solución con validación de tipos
Una posible solución es realizar una pequeña validación de tipos previo a querer ejecutar algún método propio del tipo de dato correspondiente:

const rptaArray = parseStr('Nico');
// rtaArray.reverse(); ⛔ NO directamente
if (Array.isArray(rtaArray)) { //✅ Validación de tipos previamente...
  rtaArray.reverse(); // 👍 Ahora sí nos permite utilizar este método de los arrays.
}
console.log('rtaArray', 'Nico =>' ,rtaArray); // Vemos en consola


const rtaStr = parseStr(['N','i','c','o']);
// rtaStr.toLowerCase(); ⛔ NO directamente
if (typeof rtaStr === 'string') { //✅ Validación de tipos previamente...
  rtaStr.toLowerCase(); // 👍 Ahora sí nos permite utilizar este método de los strings.
}
console.log('rtaStr', "['N','i','c','o'] =>",rtaStr); // Vemos en consola
Solución con sobrecarga de funciones
Para resolver este problema con sobrecarga de funciones debemos declarar 2 firmas adicionales con el mismo nombre de la función: una firma manejará el tipado de entrada/salida como string/string[] y la otra forma de manera viceversa, es decir string[]/string. El parámetro de la función que tendrá la lógica puede manejar el tipado unknown, pues ya estamos dejando declarado previamente los tipados de entrada y salida que manejará la función:

// SOBRECARGAS:
function parseStr(input: string): string[]; // Entrada: string - Salida: string[]
function parseStr(input: string[]): string; // Entrada: string[] - Salida: string

// Función principal con las instrucciones deseadas y a la que se le aplicarán las sobrecargas:
function parseStr(input: unknown): unknown {
}
Ahora en la función principal haremos una validación de tipos y según ello retornaremos las respuestas respectivas a lo que se busca como output:

// SOBRECARGAS:
function parseStr(input: string): string[]; // Entrada: string - Salida: string[]
function parseStr(input: string[]): string; // Entrada: string[] - Salida: string

// Función principal y a la que se le aplicarán las sobrecargas:
function parseStr(input: unknown): unknown {
    if (Array.isArray(input)) {
        return input.join(''); // string
    } else {
        return input.split(''); // string[]
    }
}
Finalmente, ya podríamos utilizar los métodos según el tipo de dato de la respuesta obtenida de la función:

// SOBRECARGAS:
function parseStr(input: string): string[]; // Entrada: string - Salida: string[]
function parseStr(input: string[]): string; // Entrada: string[] - Salida: string

// Función principal y a la que se le aplicarán las sobrecargas:
function parseStr(input: unknown): unknown {
    if (Array.isArray(input)) {
        return input.join(''); // string
    } else {
        return input.split(''); // string[]
    }
}

const rtaArray = parseStr('Nico'); // Salida: array
rtaArray.reverse(); // ✅ Ya podemos acceder a los métodos de un array 
console.log('rtaArray', 'Nico =>' ,rtaArray);

const rtaStr = parseStr(['N','i','c','o']); // Salida: string
rtaStr.toLowerCase(); // ✅ Ya podemos acceder a los métodos de un string 
console.log('rtaStr', "['N','i','c','o'] =>",rtaStr);

Les comparto mis apuntes. :D

Problema con el retorno de funciones
Cuando tenemos una función que retorna más de un solo tipo de dato y a ese resultado lo queremos utilizar en otra parte de nuestro programa, no vamos a poder usarlo como tal, ya que TypeScript no sabe que tipo de dato se retornó realmente.

TypeScript al no saber el tipo de dato que se retornó en una función que puede retornar más de un tipo de dato, somos nosotros los responsables en decirle el tipo de dato resultante de la función para así poder operar con el resultado de forma normal.

Uso de la sobrecarga de funciones
Se suele emplear mucho en librerías, pero depende mucho de tu proyecto y de las ventajas que te puede llegar a dar.

La sobre carga de funciones únicamente suelen darse con las funciones declarativas con la palabra reservada function.
 */