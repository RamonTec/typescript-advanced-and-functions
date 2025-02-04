
export function parseString(input: string): string[];
export function parseString(input: string[]): string;

export function parseString(input: string | string[]): string | string[] {

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
 * Cuando el tipado del retorno de una función puede ser más de un tipo de dato (por ejemplo, que el retorno pueda ser string, number o boolean), TypeScript en primera instancia no permite utilizar los métodos propios de un tipo de dato específico a menos que se realice una validación de tipos previamente.
 * 
 * Retorno de funciones con más de un tipo de dato
Supongamos que tenemos una función que puede recibir como parámetro un valor de tipo string o string[] (un array con elementos de tipo string) y retorne lo inverso, osea un string[] si se envía un string o un string si manda un string[]:

Como podemos notar a rptaStr se le es asignado un valor de tipo string el cual es el tipado del retorno de la función en este caso. Sin embargo, si intentamos aplicar un método propio de los string como por ejemplo toLowerCase (convierte a minúscula los caracteres), TypeScript nos marcará error:

Validación de tipos
Ante el problema mostrado anteriormente, podríamos validar el tipo de dato del retorno de la función antes de utilizar el método correspondiente a dicho tipo:

Sobrecarga de funciones en TypeScript
La sobrecarga de funciones nos permite definir varias declaraciones de una función con el mismo nombre que puedan recibir diferentes parámetros y/o con diferente tipado. A estas declaraciones se les suelen llamar firmas y la última firma en declarar es la que tendrá la implementación de la función, mientras las otras se quedarán solo declaradas sin código dentro.

Sobrecarga de funciones en vez de la validación de tipos
Podemos usar esta característica presente en TypeScript para ahorrarnos la validación de tipos, como por ejemplo en el problema que hemos visto más arriba con la función parseStr:

Puesto que en las firmas adicionales (sobrecargas) de la función parseStr ya manejamos los tipos de datos string y string[], el tipado tanto de los parámetros y como del retorno de la firma que contiene la lógica de la función puede ser del tipo unknown o any.
 */