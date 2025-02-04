let anyVar: any;
anyVar = true
anyVar = false
anyVar = []
anyVar = undefined
anyVar = {}

let myVar: boolean = anyVar;

anyVar.doSomething();
anyVar.parseInt();

let unkvar: unknown;
unkvar = true
unkvar = false
unkvar = []
unkvar = undefined
unkvar = {}

// al ser de tipo unknow, no entra en el sub de algun tipado, por eso typescript da la alerta y con any como es de cualquier tipo no da error
//unkvar.doSomething();

if (typeof unkvar === 'string') {
  unkvar.toLowerCase();
}

if (typeof unkvar === 'boolean') {
  let insNewv2: boolean = unkvar;
}

const parse = (str: string): unknown => {
  return JSON.parse(str);
}