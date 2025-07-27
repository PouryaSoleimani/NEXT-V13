// ? 1st Day of Review ===============================================================================

import axios from 'axios';
import { url } from 'inspector';
import { Type } from 'lucide-react';

// TUPLE TYPE
type TupleType = [string, number, boolean];
const TupleArray: TupleType = ['STRING', 123, true];

// FUNCTION PARAMATER TYPE ===============================================================================
type FuncType = (a: number, b: number) => number;
const func: FuncType = (a, b) => {
  return a + b;
};
export const result = func(10, 20);

export function LoginFunction(username: string, password: string): boolean {
  return password === '123456' ? true : false;
}

// UNION TYPES ===============================================================================
type CombineType = string | number;
const name: CombineType = 'HELLO';

type CombineArrayType = (string | number | boolean)[];
const combinedArray: CombineArrayType = [2, 'ali', false];

// LITERAL TYPES ===============================================================================
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

// CONST ASSERTION ===============================================================================
const numbers = [10, 20] as const;
// numbers.push(30); //! will throw error because of 'as const'

const user = { name: 'ali' } as const;
// user.name = 'mamad'; //! will throw error because of 'as const'

const numbersArray = [2, 3] as const;
function sum(num1: number, num2: number): number {
  return num1 + num2;
}
sum(...numbersArray); //* only possible with 'as const'

// ? 2nd Day of Review ===============================================================================
// const linkElem = document.getElementById('LINK') as HTMLLinkElement;
// console.log(linkElem.href);

interface User {
  name: string;
}

// ? 3nd Day of review ===============================================================================
class Person {
  constructor(public name: string, public age: number) {}

  setAge(age: number) {
    this.age = age;
  }
}

const AliPerson = new Person('ALI', 25);

class PersonExtended {
  constructor(private password: string, readonly username: string) {}
  get getPassword() {
    return this.password;
  }
}
const newPerson = new PersonExtended('12345', 'PouryaSoleimani');

console.log(newPerson.getPassword);

interface UserInterface {
  infos: { name: string; age: number };
  age: number;
  skills: string[];
  logger(text: string): boolean;
}

export const newUser2: UserInterface = {
  infos: { name: 'MAMAD', age: 32 },
  age: 32,
  skills: ['JS', 'TS'],
  logger: (text: string) => {
    return true;
  },
};

interface ApiResponseInterface {
  materials: string[];
  grams: { id: number; title: string }[];
  materialID: number;
  title: string;
}

export const _ApiResponse: ApiResponseInterface = {
  materialID: 1,
  materials: ['material1', 'material2'],
  grams: [{ id: 2, title: 'gram' }],
  title: 'Api RESPONSE',
};

class CarClass {
  constructor(public name: string) {}
  drive() {
    console.info('RUN');
  }
}
export const newCar = new CarClass('BMW');

class CarClassExtended extends CarClass {
  static count: 0;
  constructor(name: string, public power: number, private color: string) {
    super(name);
    CarClassExtended.count++;
  }
  ColorSetter(newColor: string) {
    this.color = newColor;
  }
  ColorGetter() {
    return this.color;
  }
}
const newCarExtended = new CarClassExtended('BMW M5', 567, 'BLACK');
newCarExtended.drive();
newCarExtended.ColorSetter('MATTE BLACK');
newCarExtended.ColorGetter();

CarClassExtended.count;

interface UserResponseInterface {
  userInfo: { id: number; name: string; age: number };
  userSkills: string[];
  userRate: number;
}

export const newApiUser: UserResponseInterface = {
  userSkills: ['ts', 'react'],
  userInfo: { id: 3, name: 'USER', age: 32 },
  userRate: 3,
};

newApiUser.userSkills.push('JS');

newApiUser.userInfo.name = 'MAMADREZA NAGHIPOUR';

//INTEFACES ===============================================================================
interface SimpleCarInterface {
  company: string;
  model: string;
  type: string;
  color: string;
  passengers: number;
}
interface CarInterface {
  basicInfo: { model: string; color: string; brand: string; vehicleType: 'SUV' | 'SEDAN' | 'SPORT' };
  powerInfos: { hp: number; type: 'RWD' | 'FWD' | 'AWD'; cylinderCount: 4 | 6 | 8 };
  optionsInfos: { isCoupe: boolean; isConvertible: boolean; doorsCount: 2 | 4 };
}

export const newCar2: CarInterface = {
  basicInfo: { model: 'M3', brand: 'BMW', color: 'BLACK', vehicleType: 'SEDAN' },
  optionsInfos: { isCoupe: false, isConvertible: false, doorsCount: 4 },
  powerInfos: { hp: 675, type: 'AWD', cylinderCount: 6 },
};

interface KeyboardInterface {
  basicInfos: { name: string; size: 'MINI' | 'MEDIUM' | 'FULL-SIZE'; color: 'BLACK' | 'WHITE' };
  additionalOptions: { hasRGB: boolean; isMechanical: boolean; switchColor: 'RED' | 'BLUE' | 'BROWN' };
}
export const newKeyboard: KeyboardInterface = {
  basicInfos: { name: 'RAZER', color: 'BLACK', size: 'MINI' },
  additionalOptions: { hasRGB: true, isMechanical: true, switchColor: 'RED' },
};

// INTERFACE vs TYPE ===============================================================================
//? MODIFY
//? EXTENDS
//? MERGE
//* INTERFACES ARE BEST FOR PROPS IN REACT

// INTERFACES --> IMPLEMENTS ===============================================================================
class CarClass2 implements SimpleCarInterface {
  constructor(public company: string, public model: string, public type: string, public color: string, public passengers: number) {}
}

export const newSimpleCar = new CarClass2('BENZ', 'C350', 'SEDAN', 'BLACK', 4);

// INTERSECTION TYPE ( & ) ===============================================================================
type Admin = { name: string; course: string };
type Teacher = { startDate: string; age: number };

const firstTeacher: Admin & Teacher = {
  name: 'ali',
  course: 'math',
  startDate: 'today',
  age: 32,
};

// INDEX TYPES ===============================================================================
type FormValidationType = {
  [input: string]: string;
};

const FormInfos: FormValidationType = {
  name: 'ALI',
  age: '32',
  email: 'ali@gmail.com',
  job: 'developer',
};

// NAMESPACES  =======================================================================================
export namespace Saipa {
  car: 'PRIDE';
  address: 'TEHRAN';
}
export namespace IranKhodro {
  car: 'SAMAND';
  address: 'KARAJ';
}

/// TRIPLE SLASH DIRECTIVES ===============================================================================
/// <refrence path="app.js"   />

// GENERICS =============================================================================================================
function echo<T>(param: T): T {
  return param;
}
echo('STRING');
echo(13123);

function objectMerge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const object1 = { name: 'pourya' };
const object2 = { job: 'developer' };
const mergedOBJ = objectMerge(object1, object2);

function ArrayMaker<T, U>(param1: T, param2: U) {
  return [param1, param2];
}
export const myArray = ArrayMaker('param1', 'PArAM2');

// EXTENDS
function StringConcater<T extends string, U extends string>(str1: string, str2: string) {
  return str1.concat(str2);
}

export const concated = StringConcater('I LOVE', ' DEMON');

// EXAMPLE
interface Type {
  length: number;
}

function describe<T extends Type>(param: T): [string, T] {
  let text = `IT HAS 0 ITEMS`;

  if (param.length) {
    text = `IT HAS ${param.length} ITEMS`;
  }

  return [text, param];
}

export const describeResult = describe('HELLO');

// GENERICS IN INTERFACES
interface ResultInterface<T> {
  data: T | null;
  error: string | null;
}

interface CourseData {
  title: string;
  duration: string | number;
  price: string | number;
}
interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
}

async function fetchData<T>(url: string) {
  const req = await fetch(url);
  const res = await req.json();
  return res;
}

export const fetchResult: UserData = await fetchData<UserData>('https://jsonplaceholder.typicode.com/users/1');

// GENERICS vs UNION TYPES
class List<T extends number | string> {
  public Items: T[] = [];
  constructor(public name: string, public age: number) {}
  setItems(newItem: T) {
    this.Items.push(newItem);
  }
  showItems() {
    return this.Items;
  }
}

const ListExample = new List('hello', 32);

export const listResult = ListExample.showItems();

ListExample.setItems('32');
ListExample.setItems('HELLO');

// TYPE MAPPING
interface UserMapInterface {
  username: string;
  email: string;
}
type OptionaUserInterface<T> = {
  [key in keyof T]?: T[key];
};

// UTILITY TYPES ==============================================================
type UserType = { name: string; age: number };

type UserRequired = Required<UserType>;
type UserReadonly = Readonly<UserType>;
type UserPartial = Partial<UserType>;
type UserPick = Pick<UserType, 'name'>;

type NullableType = string | null;
type NotNullableType = NonNullable<NullableType>;

type FullType = number | string | boolean | object;
type ExcludeType = Exclude<FullType, number>;

// DECORATORS ==================================================================
