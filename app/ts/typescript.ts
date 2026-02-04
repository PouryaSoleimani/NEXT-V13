import { Type } from "lucide-react";

//^ TUPLE TYPE ____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________=
type TupleType = [string, number, boolean];
const TupleArray: TupleType = ["STRING", 123, true];
console.info(TupleArray);
const Tuple2: TupleType = ["ALI", 234, false];
console.info(Tuple2);

//^ FUNCTION PARAMATER TYPE ____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________=
type FuncType = (a: number, b: number) => number;
const func: FuncType = (a, b) => {
  return a + b;
};
export const result = func(10, 20);

export function LoginFunction(password: string): boolean {
  return password == "123456" ? true : false;
}
const LoginHandler = (prop: number): boolean => {
  return prop % 2 == 0 ? true : false;
};

console.info("LOGIN RESULT =>", LoginHandler(2));

//^ UNION TYPES ____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________=
type CombineType = string | number;
const name: CombineType = "HELLO";
console.info(name);

type CombineArrayType = (string | number | boolean)[];
const combinedArray: CombineArrayType = [2, "ali", false];
console.info(combinedArray);

//^ LITERAL TYPES ____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________=
type ProductDeliverValue = "PENDING" | "SENT" | "CANCELED" | "DELIVERED";
// use this instead of enums ⬆
export function ReturnProductStatus(status: ProductDeliverValue) {
  switch (status) {
    case "PENDING":
      console.info("%c PENDING", "color:orange");
      break;
    case "SENT":
      console.info("%c SENT", "color:green");
      break;
    case "CANCELED":
      console.info("%c CANCELED", "color:red");
      break;
    case "DELIVERED":
      console.info("%c DELIVERED", "color:limegreen");
      break;
    default:
      console.info("%c UNKNOWN", "color: hotpink");
      break;
  }
}

//^ CONST ASSERTION | AS CONST ____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________=
const numbers = [10, 20] as const;
// numbers.push(30); //! will throw error because of 'as const'

const user = { name: "ali" } as const;
// user.name = 'mamad'; //! will throw error because of 'as const'

const numbersArray = [2, 3] as const;
function sum(num1: number, num2: number): number {
  return num1 + num2;
}
sum(...numbersArray); //* only possible with 'as const'

//^ TYPE ASSERTION | AS ... ____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________=

const linkElem = document.getElementById("LINK") as HTMLLinkElement;
console.info("HREF", linkElem?.href);

//^ INTERFACES ____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________=
interface User {
  name: string;
}

//^ CLASSES ____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________=
class Person {
  constructor(
    public name: string,
    public age: number
  ) { }

  setAge(age: number) {
    this.age = age;
  }
}

const AliPerson = new Person("ALI", 25);

class PersonExtended {
  constructor(
    private password: string,
    readonly username: string
  ) { }
  get getPassword() {
    return this.password;
  }
}
const newPerson = new PersonExtended("12345", "PouryaSoleimani");

console.info(newPerson.getPassword);

interface UserInterface {
  infos: { name: string; age: number };
  age: number;
  skills: string[];
  logger(text: string): boolean;
}

export const newUser2: UserInterface = {
  infos: { name: "MAMAD", age: 32 },
  age: 32,
  skills: ["JS", "TS"],
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
  materials: ["material1", "material2"],
  grams: [{ id: 2, title: "gram" }],
  title: "Api RESPONSE",
};

class CarClass {
  constructor(public name: string) { }
  drive() {
    console.info("RUN");
  }
}
export const newCar = new CarClass("BMW");

class CarClassExtended extends CarClass {
  static count: 0;
  constructor(
    name: string,
    public power: number,
    private color: string
  ) {
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
const newCarExtended = new CarClassExtended("BMW M5", 567, "BLACK");
newCarExtended.drive();
newCarExtended.ColorSetter("MATTE BLACK");
newCarExtended.ColorGetter();

CarClassExtended.count;

interface UserResponseInterface {
  userInfo: { id: number; name: string; age: number };
  userSkills: string[];
  userRate: number;
}

export const newApiUser: UserResponseInterface = {
  userSkills: ["ts", "react"],
  userInfo: { id: 3, name: "USER", age: 32 },
  userRate: 3,
};

newApiUser.userSkills.push("JS");

newApiUser.userInfo.name = "MAMADREZA NAGHIPOUR";

//INTEFACES ____________________________________________________________________________===
interface SimpleCarInterface {
  company: string;
  model: string;
  type: string;
  color: string;
  passengers: number;
}
interface CarInterface {
  basicInfo: {
    model: string;
    color: string;
    brand: string;
    vehicleType: "SUV" | "SEDAN" | "SPORT";
  };
  powerInfos: {
    hp: number;
    type: "RWD" | "FWD" | "AWD";
    cylinderCount: 4 | 6 | 8;
  };
  optionsInfos: { isCoupe: boolean; isConvertible: boolean; doorsCount: 2 | 4 };
}

export const newCar2: CarInterface = {
  basicInfo: {
    model: "M3",
    brand: "BMW",
    color: "BLACK",
    vehicleType: "SEDAN",
  },
  optionsInfos: { isCoupe: false, isConvertible: false, doorsCount: 4 },
  powerInfos: { hp: 675, type: "AWD", cylinderCount: 6 },
};

interface KeyboardInterface {
  basicInfos: {
    name: string;
    size: "MINI" | "MEDIUM" | "FULL-SIZE";
    color: "BLACK" | "WHITE";
  };
  additionalOptions: {
    hasRGB: boolean;
    isMechanical: boolean;
    switchColor: "RED" | "BLUE" | "BROWN";
  };
}
export const newKeyboard: KeyboardInterface = {
  basicInfos: { name: "RAZER", color: "BLACK", size: "MINI" },
  additionalOptions: { hasRGB: true, isMechanical: true, switchColor: "RED" },
};

//^ INTERFACE vs TYPE ____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________=
//? MODIFY
//? EXTENDS
//? MERGE
//* INTERFACES ARE BEST FOR PROPS IN REACT

// INTERFACES --> IMPLEMENTS ____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________=
class CarClass2 implements SimpleCarInterface {
  constructor(
    public company: string,
    public model: string,
    public type: string,
    public color: string,
    public passengers: number
  ) { }
}

export const newSimpleCar = new CarClass2("BENZ", "C350", "SEDAN", "BLACK", 4);

//^ INTERSECTION TYPE ( & ) ____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________=
type Admin = { name: string; course: string };
type Teacher = { startDate: string; age: number };

const firstTeacher: Admin & Teacher = {
  name: "ali",
  course: "math",
  startDate: "today",
  age: 32,
};

type firstResponseType = { id: number; title: string };
type secondResponseType = { price: number; isAvailable: boolean };
const response: firstResponseType & secondResponseType = {
  id: 1,
  title: "TITLE",
  price: 20,
  isAvailable: true,
};
console.info(response);

//^ INDEX TYPES ____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________=
type FormValidationType = { [input: string]: string };
type IndexType2 = { [key: string]: string | number };
const _result: IndexType2 = {
  title: "title",
  price: 21,
  name: "NAME",
  count: 24,
};
console.info(_result);

const FormInfos: FormValidationType = {
  name: "ALI",
  age: "32",
  email: "ali@gmail.com",
  job: "developer",
};
console.info(FormInfos);

//^ NAMESPACES  ____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________=
export namespace Saipa {
  car: "PRIDE";
  address: "TEHRAN";
}
export namespace IranKhodro {
  car: "SAMAND";
  address: "KARAJ";
}

///^ TRIPLE SLASH DIRECTIVES  ____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________=
/// <refrence path="app.js"   />

//^ GENERICS ________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________===
function echo<T>(param: T): T {
  return param;
}
echo("STRING");
echo(13123);

function LoggerFunction<T>(params: T): T {
  return params;
}
const logResult = LoggerFunction([1, 2, 3, 4]);
console.info("LOG RESULT =>", logResult);

function objectMerge<T extends object, U extends object>(
  obj1: T,
  obj2: U
): T & U {
  return { ...obj1, ...obj2 };
}

const object1 = { name: "pourya" };
const object2 = { job: "developer" };
const mergedOBJ = objectMerge(object1, object2);

function objectMerger2<T extends Object, U extends Object>(
  object1: T,
  object2: U
): T & U {
  return { ...object1, ...object2 };
}

const _resultObject = objectMerger2({ id: 1 }, { name: " PORI" });
console.info(_resultObject);

function ArrayMaker<T, U>(param1: T, param2: U) {
  return [param1, param2];
}
export const myArray = ArrayMaker("param1", "PArAM2");

//^ EXTENDS ____________________________________________________________________________________________________________________=
function StringConcater<T extends string, U extends string>(
  str1: T,
  str2: U
): string {
  return str1.concat(str2);
}

const _resultStringConcat = StringConcater("PO", "RI");
console.info(_resultStringConcat);

export const concated = StringConcater("I LOVE", " DEMON");

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

export const describeResult = describe("HELLO");

// GENERICS IN INTERFACES ____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________=
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
  const res: T = await req.json();
  return res;
}

export const fetchResult: UserData = await fetchData<UserData>(
  "https://jsonplaceholder.typicode.com/users/1"
);

//^ USEFUL EXAMPLES OF GENERICS ____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
interface SingleUserInterface {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default async function fetchUsersV2<T>(url: string) {
  try {
    const req = await fetch(url);
    const res = (await req.json()) as T;
    return res;
  } catch (error) {
    throw new Error(" ⚠️ FETCH FAILED IS CLIENT SIDE ");
  }
}

const resultUsers = await fetchUsersV2<SingleUserInterface[]>(
  "https://jsonplaceholder.typicode.com/users/1"
);

console.info("USERS RESULT ===> ", resultUsers ?? resultUsers);

//^ GENERICS vs UNION TYPES ____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________=
class List<T extends number | string> {
  public Items: T[] = [];
  constructor(
    public name: string,
    public age: number
  ) { }
  setItems(newItem: T) {
    this.Items.push(newItem);
  }
  showItems() {
    return this.Items;
  }
}

const ListExample = new List("hello", 32);

export const listResult = ListExample.showItems();

ListExample.setItems("32");
ListExample.setItems("HELLO");

// TYPE MAPPING ____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________=
interface UserMapInterface {
  username: string;
  email: string;
}

const UserExample: UserMapInterface = {
  username: "MAMAD",
  email: "mamad@gmail.com",
};
console.info(UserExample);

type OptionaUserInterface<T> = { [key in keyof T]?: T[key] };

//? UTILITY TYPES ________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________===
type UserType = { name: string; age: number, job: string };
type combined2 = string | number | boolean | undefined | null
type NullableType = string | number | boolean | null;

// PARTIAL
type UserPartial = Partial<UserType>;
const Partialed: UserPartial = { name: " mamad", age: 32 }
console.info(Partialed)

// REQUIRED
type UserRequired = Required<UserType>;
const RequiredObject: UserRequired = { name: 'POURYA SOLEIMANI', age: 32, job: 'SENIOR FRONT-END DEVELOPER' }
console.info(RequiredObject)

// READONLY 
type UserReadonly = Readonly<UserType>;
const ReadOnlyObject: UserReadonly = { name: "POURYA", age: 32, job: "SENIOR FRONT-END DEVELOPER" }
console.info(ReadOnlyObject)

// NON NULLABLE
type NotNullableType = NonNullable<NullableType>;
const notNull: NotNullableType = 'HELLO'
console.info(notNull)

// PICK
type UserPick = Pick<UserType, "name"> & Pick<UserType, "age">;
const Picked: UserPick = { age: 23, name: "navid" }
console.info('PICKED', Picked)

// EXCLUDE 
type UserExcluded = Exclude<combined2, null>
const ExcludedVariable: UserExcluded = 'hello'
console.info(ExcludedVariable)

// EXTRACT 
type UserExtracted = Extract<combined2, string>
const ExtractedVariable: UserExtracted = 'mamad'
console.info(ExtractedVariable)

// OMIT
type UserOmitted = Omit<UserType, "job">
const OmittedVariable: UserOmitted = { age: 24, name: "MAMAD" }
console.info(OmittedVariable)





// DECORATORS ________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________`