let message: string = "Hello World";

message = "Chanchito feliz";

message = "Chau mundo";

console.log(message);

/**
 * tipos de datos JS:
 * string
 * number
 * boolean
 * null
 * undefined
 * object
 * function
 *
 * tipos de datos TS:
 * any
 * unknown
 * never
 * arrays
 * tuples
 * enums
 *
 * tipos inferidos:
 * Los tipos de datos se infieren en TS
 * son los que se asignan automaticamente
 * al declarar una variable y asignarle un valor.
 */

let extincionDinosaurios = 76_000_000;
let dinosaurioFavorito = "Velociraptor";
let extintos = true;

function chanchoFeliz(config: any) {
  return config;
}

let animales: string[] = ["🐷", "🐮", "🐔"];
let nums: number[] = [1, 2, 3, 4, 5];
let checks: boolean[] = [];
let nums2: Array<number> = [];
let nums3: number[] = [];

//animales.map((x) => x.); // el autocompletado sugiere los metodos del tipo de dato
/**
 * Las tuplas son arreglos con un numero fijo de elementos.
 */
let tupla: [number, string, boolean] = [1, "hola", true];
//tupla.push(1); // el compilador no detecta el error

const chica = "s";
const mediana = "m";
const grande = "l";
const extragrande = "xl";

// PascaleCase
/**
 * Los enums son un conjunto de constantes con nombre.
 *
 * IFEE (Immediately Invoked Function Expression)
 * significa que la funcion se ejecuta inmediatamente
 * despues de ser definida y solo se ejecuta una vez.
 */
enum Talla {
  Chica = "s",
  Mediana = "m",
  Grande = "l",
  ExtraGrande = "xl",
}
const var1 = Talla.Grande;
console.log(var1);

const enum LoadingState {
  Idle,
  Loading,
  Success,
  Error,
}

const estado = LoadingState.Success;

/**
 * Los objetos son un conjunto de propiedades
 * que tienen un nombre y un valor.
 * Las propiedades pueden ser de cualquier tipo.
 */
type Direccion = {
  numero: number;
  calle: string;
  pais: string;
};

/**
 * type es una palabra reservada de TS
 * para definir un tipo de dato personalizado.
 */
type Persona = {
  readonly id: number;
  nombre: string;
  talla: Talla;
  direccion: Direccion;
};

const objeto: Persona = {
  id: 1,
  nombre: "",
  talla: Talla.Mediana,
  direccion: {
    numero: 831,
    calle: "Lincoln",
    pais: "Argentina",
  },
};

const arr: Persona[] = [];

/**
 * Para tipar el retorno de una arrow function
 * se hace de la siguiente manera:
 * const fn: (a: number) => string
 */
const fn: (a: number) => string = (edad: number) => {
  if (edad > 17) return "puedes ingresar";
  return "no puedes ingresar";
};

/**
 * Para tipar el retorno de una funcion
 * se hace de la siguiente manera:
 * function fn(a: number): string
 */
function validaEdad(edad: number, msg: string = "Chancho feliz"): string {
  if (edad > 17) return `puedes ingresar ${msg}`;
  return "no puedes ingresar";
}

validaEdad(18);

/**
 * never es un tipo de dato que se usa para funciones
 * que lanzan excepciones o nunca retornan un valor.
 */
function ErrorUsuario(): never {
  throw new Error("Error de usuario");
}

/**
 * Que son los union types?
 * Es un tipo de dato que puede ser de varios tipos.
 * Se usa el simbolo de pipe (|) para unir los tipos.
 * Ejemplo: number | string
 */
let puntaje: number | string = 98;

puntaje = "Hello World";

type Animal = {
  id: number;
  estado: string;
};

type User = {
  id: number;
  name: string;
};

let animal: User | Animal = { id: 1, estado: "", name: "" };

/**
 * Que son los type guards?
 * Son funciones que permiten saber si una variable
 * es de un tipo determinado.
 */
function sumaDos(n: number | string): number {
  if (typeof n === "number") return n + 2;
  return parseInt(n) + 2;
}

/**
 * Que son los intersection types?
 * Son tipos de datos que pueden ser de varios tipos.
 * Se usa el simbolo de ampersand (&) para unir los tipos.
 * Ejemplo: type A & B
 */
type Audit = {
  created_at: string;
  updated_at: string;
};

type Product = {
  name: string;
};

const producto: Product & Audit = {
  name: "Chanchito feliz",
  created_at: "hoy",
  updated_at: "hoy",
};

/**
 * Que son los type literals?
 * Son tipos de datos que pueden ser de un valor especifico.
 */
type Fibo = 0 | 1 | 2 | 3 | 5;
const nDeFibonacci: Fibo = 3;

/**
 * Nullable chaining es una forma de acceder a propiedades
 * de un objeto que puede ser null o undefined.
 */
function toNumber(s: string | null | undefined) {
  if (!s) return 0;
  return parseInt(s);
}

const n = toNumber(undefined);

/**
 * Optional chaining es una forma de acceder a propiedades
 * de un objeto que puede ser null o undefined.
 * Se usa el simbolo de interrogacion (?) para acceder a las propiedades.
 * Ejemplo: user?.created_at
 */
function getUser(id: number) {
  if (id < 0) return null;
  return { id: 1, name: "Felipe", created_at: new Date() };
}

const user = getUser(2);

console.log("usuario ", user?.created_at);

const arr1 = null;

console.log(arr1?.[0]);

const fn5: any = null;

console.log(fn5?.());

/**
 * Nullish coalescing es una forma de asignar un valor por defecto
 * a una variable si esta es null o undefined.
 * Se usa el simbolo de doble interrogacion (??) para asignar el valor.
 * Ejemplo: const name = user.name ?? "Chanchito feliz";
 */

const difficulty: number | null = null;

const user2 = {
  username: "chanchito feliz",
  difficulty: difficulty ?? 0,
};

console.log(user2);

/**
 * Type assertion es una forma de decirle al compilador
 * que una variable es de un tipo de dato especifico.
 * Se usa "as" para hacer la conversion.
 * Ejemplo: const elem1 = elem as number;
 * Tambien se puede usar <> para hacer la conversion.
 * Ejemplo: const input = <HTMLInputElement>document.getElementById("input");
 *
 * Solamente podemos hacer uso de type assertion
 * cuando estamos seguros del tipo de dato que estamos recibiendo.
 */
const elem: any = null;

const elem1 = elem as number;

const input = <HTMLInputElement>document.getElementById("input");

/**
 * Type narrowing en TS es cuando puedes tomar un tipo general
 * o una unión de tipos y determinar su tipo específico dentro
 * de un bloque de código, permitiéndote escribir código más
 * seguro y específico basado en esa determinación.
 */

function Lala(x: string | number) {
  if (typeof x === "number") return x.valueOf();
  if (typeof x === "string") return x.charCodeAt(0);
  return 0;
}

/**
 * Type unknown es un tipo seguro que representa un valor que
 * puede ser de cualquier tipo, similar al tipo any, pero con
 * una diferencia crucial: unknown es mucho más seguro porque
 * debes hacer un type narrowing antes de poder realizar
 * cualquier operación sobre él.
 */

function procesa(algo: unknown) {
  if (typeof algo === "string") {
    return algo.toUpperCase();
  }
  if (typeof algo === "number") {
    return algo.toString();
  }

  // preguntar si es la instancia de un objeto o una clase que hayamos definido
  // if (algo instanceof OBJETO) {
  // }
  return null;
}
