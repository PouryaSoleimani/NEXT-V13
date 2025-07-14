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
  if (password === '123456') {
    return true;
  } else {
    return false;
  }
}

// UNION TYPES
type CombineType = string | number;
const name: CombineType = 'HELLO';

type CombineArrayType = (string | number | boolean)[];
const combinedArray: CombineArrayType = [2, 'ali', false];

// LITERAL TYPES
type ProductDeliverValue = 'PENDING' | 'SENT' | 'CANCELED' | 'DELIVERED';
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
