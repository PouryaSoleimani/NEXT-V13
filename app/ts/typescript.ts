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
