import { CheckSquare2Icon } from "lucide-react"

async function Page(props: PageProps<'/promises'>) {
  console.info('PROPS => ', props)
  const _result = await promiseHandler2('POURYA')

  if (!_result) {
    return <div className="section bg-rose-800/30 p-3 center">NOT CORRECT</div>
  }
  return (
    <div className="section center">
      <span className="flex bg-emerald-600 gap-3 p-3 rounded-lg border-4 border-emerald-600">
        <CheckSquare2Icon />
        CORRECT
      </span>
    </div>
  )
}
export default Page

async function promiseHandler(num: number) {
  return new Promise((resolve, reject) => {
    if (num == 2) {
      setTimeout(() => {
        resolve(num)
      }, 2000);
    } else {
      reject('NUM IS NOT CORRECT')
    }
  })
}

async function promiseHandler2(val: string) {
  return new Promise((resolve, reject) => {
    if (val.trim().toLowerCase() == 'pourya') {
      setTimeout(() => {
        resolve(val)
      }, 3000);
    } else {
      reject('VAL IS NOT CORRECT')
    }
  })
}

async function promiseHandler3(bool: boolean) {
  return new Promise((resolve, reject) => {
    if (bool === true) {
      setTimeout(() => {
        resolve(bool)
      }, 3000);
    } else {
      reject('BOOL IS NOT CORRECT')
    }
  })
}