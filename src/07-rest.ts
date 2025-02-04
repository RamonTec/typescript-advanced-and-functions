import { ROLES, User } from "./01-enum"

const currentUser: User = {
  userName: 'ereq',
  role: ROLES.SELLER
}

export const checkAdminRole = (): boolean => {
  if (currentUser.role === ROLES.ADMIN) {
    return true
  } else {
    return false;
  }
}

//-----------------------------------------------------------
const hasPermision = checkAdminRole();
console.log('hasPermision:', hasPermision);

export const checkRole = (): boolean => {
  if (currentUser.role === ROLES.ADMIN) {
    return true
  } 

  if (currentUser.role === ROLES.CUSTOMER) {
    return true
  } 

  if (currentUser.role === ROLES.SELLER) {
    return true
  } 

  return false
}

const hasRole = checkRole();
console.log('hasRole:', hasRole);

//-----------------------------------------------------------
export const checkRoleV2 = (roles: string[]): boolean => {
  if (roles.includes(currentUser.role)) {
    return true
  } 

  return false
}

const hasRoleV2 = checkRoleV2([ROLES.ADMIN, ROLES.CUSTOMER, ROLES.SELLER]);
console.log('hasRoleV2:', hasRoleV2);

//-----------------------------------------------------------
export const checkRoleV3 = (...roles: string[]): boolean => {
  if (roles.includes(currentUser.role)) {
    return true
  } 

  return false
}

const hasRoleV3 = checkRoleV3(ROLES.ADMIN, ROLES.CUSTOMER, ROLES.SELLER);
console.log('hasRoleV3:', hasRoleV3);

/**
 * 
 * En JavaScript, los parámetros rest nos permiten enviar la cantidad de parámetros que queramos a una función. Se denotan con ... seguido del nombre con el cual identificaremos a estos parámetros:

// JavaScript
function sum(...args){ // `...args` -> Parámetros rest
  const suma = args.reduce((acumulador, num) => acumulador + num, 0)
  return suma
}

console.log(sum(1,2)) // 5
console.log(sum(1,2,3,4,5)) // 15
console.log(sum(1,2,3,4,5,6,7,8,9,10)) // 55
Parámetros rest en TypeScript
En TypeScript, lo único que cambia es el tipado de los parámetros.

// TypeScript
function sum(...args: number[]){ // `...args` -> Parámetros rest
  const suma = args.reduce((acumulador, num) => acumulador + num, 0)
  return suma
}

console.log(sum(1,2)) // 5
console.log(sum(1,2,3,4,5)) // 15
console.log(sum(1,2,3,4,5,6,7,8,9,10)) // 55
El nombre de los parámetros rest pueden ser el que queramos: ...args, ...params, ...props, etc.
 */

