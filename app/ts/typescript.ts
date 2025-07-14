// TUPLE TYPE 
type TupleType = [string, number, boolean]
const TupleArray: TupleType = ["STRING", 123, true]

// FUNCTION PARAMATER TYPE
type FuncType = (a: number, b: number) => number
const func: FuncType = (a, b) => { return a + b }
export const result = func(10, 20)

function LoginFunction(username: string, password: string) {
  if (password = '12345') {
    return true
  } else {
    return false
  }
}