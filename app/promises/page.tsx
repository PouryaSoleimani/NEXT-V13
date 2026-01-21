//^ PROMISES PAGE _________________________________________________________________________
import { Suspense } from "react"
import TestComponent from "./_components/TestComponent"
import SkeletonComponentV4 from "./_components/SkeletonComponentV4"

async function Page(props: PageProps<'/promises'>) {
  console.info('PROPS => ', props)
  const _result = await promiseHandler4('mamad')

  if (!_result) {
    return <div className="section bg-rose-800/30 p-3 center">NOT CORRECT</div>
  }

  return (
    <div className="section center">
      <Suspense fallback={<SkeletonComponentV4 />}>
        <TestComponent />
      </Suspense>
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

async function promiseHandler4(val: string) {
  return new Promise((resolve, reject) => {
    if (val.trim().toLowerCase() == 'mamad') {
      setTimeout(() => {
        resolve(val)
      }, 1500);
    } else {
      reject('VAL IS NOT CORRECT AGAIN')
    }
  })

}