// ? 1st Day of Review __________________________________________________________________

// TUPLE TYPE
type TupleType = [string, number, boolean];
const TupleArray: TupleType = ['STRING', 123, true];

// FUNCTION PARAMATER TYPE
type FuncType = (a: number, b: number) => number;
const func: FuncType = (a, b) => {
  return a + b;
};
export const result = func(10, 20);

export function LoginFunction(username: string, password: string): boolean {
  return password === '123456' ? true : false;
}

// UNION TYPES
type CombineType = string | number;
const name: CombineType = 'HELLO';

type CombineArrayType = (string | number | boolean)[];
const combinedArray: CombineArrayType = [2, 'ali', false];

// LITERAL TYPES
type ProductDeliverValue = 'PENDING' | 'SENT' | 'CANCELED' | 'DELIVERED';
// use this instead of enums ⬆
export function ReturnProductStatus(status: ProductDeliverValue) {
  switch (status) {
    case 'PENDING':
      console.info('%c PENDING', 'color:orange');
      break;
    case 'SENT':
      console.info('%c SENT', 'color:green');
      break;
    case 'CANCELED':
      console.info('%c CANCELED', 'color:red');
      break;
    case 'DELIVERED':
      console.info('%c DELIVERED', 'color:limegreen');
      break;
    default:
      console.info('%c UNKNOWN', 'color: hotpink');
      break;
  }
}

// CONST ASSERTION
const numbers = [10, 20] as const;
// numbers.push(30); //! will throw error because of 'as const'

const user = { name: 'ali' } as const;
// user.name = 'mamad'; //! will throw error because of 'as const'

const numbersArray = [2, 3] as const;
function sum(num1: number, num2: number): number {
  return num1 + num2;
}
sum(...numbersArray); //* only possible with 'as const'

// ? 2nd Day of Review __________________________________________________________________
// const linkElem = document.getElementById('LINK') as HTMLLinkElement;
// console.log(linkElem.href);

interface User {
  name: string,
}


// ? 3nd Day of review __________________________________________________________________
class Person {
  constructor(public name: string, public age: number) { }

  setAge(age: number) {
    this.age = age
  }
}

const AliPerson = new Person('ALI', 25)


class PersonExtended {
  constructor(private password: string, readonly username: string) { }
  get getPassword() { return this.password }
}
const newPerson = new PersonExtended('12345', 'PouryaSoleimani')

console.log(newPerson.getPassword);

interface UserInterface {
  infos: { name: string, age: number }
  age: number,
  skills: string[]
  logger(text: string): boolean
}

export const newUser2: UserInterface = {
  infos: { name: 'MAMAD', age: 32 },
  age: 32,
  skills: ['JS', 'TS'],
  logger: (text: string) => { return true }
}


interface ApiResponseInterface {
  materials: string[]
  grams: { id: number, title: string }[]
  materialID: number,
  title: string
}

export const _ApiResponse: ApiResponseInterface = {
  materialID: 1,
  materials: ['material1', 'material2'],
  grams: [{ id: 2, title: 'gram' }],
  title: 'Api RESPONSE'
}

class CarClass {
  constructor(public name: string,) { }
  drive() {
    console.info('RUN')
  }
}
export const newCar = new CarClass('BMW')

class CarClassExtended extends CarClass {
  static count: 0
  constructor(name: string, public power: number, private color: string) {
    super(name)
    CarClassExtended.count++
  }
  ColorSetter(newColor: string) { this.color = newColor }
  ColorGetter() { return this.color }
}
const newCarExtended = new CarClassExtended('BMW M5', 567, 'BLACK')
newCarExtended.drive()
newCarExtended.ColorSetter('MATTE BLACK')
newCarExtended.ColorGetter()

CarClassExtended.count

interface UserResponseInterface {
  userInfo: { id: number, name: string, age: number }
  userSkills: string[]
  userRate: number
}

export const newApiUser: UserResponseInterface = {
  userSkills: ['ts', 'react'],
  userInfo: { id: 3, name: 'USER', age: 32 },
  userRate: 3
}

newApiUser.userSkills.push('JS')

newApiUser.userInfo.name = 'MAMADREZA NAGHIPOUR'


interface CarInterface {
  basicInfo: { model: string, color: string, brand: string, vehicleType: 'SUV' | 'SEDAN' | 'SPORT' },
  powerInfos: { hp: number, type: 'RWD' | 'FWD' | 'AWD', cylinderCount: 4 | 6 | 8 }
  optionsInfos: { isCoupe: boolean, isConvertible: boolean, doorsCount: 2 | 4, }
}

export const newCar2: CarInterface = {
  basicInfo: { model: 'M3', brand: "BMW", color: "BLACK", vehicleType: "SEDAN", },
  optionsInfos: { isCoupe: false, isConvertible: false, doorsCount: 4 },
  powerInfos: { hp: 675, type: 'AWD', cylinderCount: 6 },
}

interface KeyboardInterface {
  basicInfos: { name: string, size: "MINI" | "MEDIUM" | "FULL-SIZE", color: "BLACK" | "WHITE", }
  additionalOptions: { hasRGB: boolean, isMechanical: boolean, switchColor: "RED" | "BLUE" | "BROWN" }
}
export const newKeyboard: KeyboardInterface = {
  basicInfos: { name: "RAZER", color: "BLACK", size: "MINI", },
  additionalOptions: { hasRGB: true, isMechanical: true, switchColor: 'RED' }
}

// INTERFACE vs TYPE
//? MODIFY
//? EXTENDS
//? MERGE
//* INTERFACES ARE BEST FOR PROPS IN REACT


