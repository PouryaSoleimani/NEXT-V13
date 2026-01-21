//? TEST__COMPONENT ______________________________________________________________
import { CheckSquare2Icon } from 'lucide-react'

const TestComponent = async () => {
  const _result = await testPromiseHandler('reza')

  if (!_result) {
    <div>VAL IS NOT CORRECT</div>
  }

  return (
    <span className="flex bg-emerald-600 gap-3 p-3 rounded-lg border-4 border-emerald-600">
      <CheckSquare2Icon />
      CORRECT
    </span>
  )
}

export default TestComponent

async function testPromiseHandler(val: string) {
  return new Promise((resolve, reject) => {
    if (val.trim().toLowerCase() === 'reza') {
      setTimeout(() => {
        resolve(val)
      }, 5000);
    } else {
      reject('TEST COMPONENT ERROR ...  ')
    }
  })
}