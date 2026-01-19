import { Loader2 } from 'lucide-react'

const SuspenseComponent = async () => {
  const _result = await getDoctor("DOCTOR")
  console.info('SUSPENSE RESULT => ', _result)
  return (
    <div className='bg-stone-800 flex items-center-safe justify-center-safe text-center rounded-lg'>{_result}</div>
  )
}

export default SuspenseComponent

async function getDoctor(id: string): Promise<any> {
  return new Promise((resolve, reject) => {
    if (2 == 2) { // FAKE CONDITION
      setTimeout(() => {
        const result = id
        resolve(result)
      }, 11000);
    } else {
      reject('PROMISE REJECT ! ')
    }
  })
}

export function LoadingDoctorSmall() {
  return (
    <div className='center bg-transparent rounded-lg w-16 mx-auto p-3'>
      <Loader2 className='animate-spin text-pink-500' />
    </div>
  )
}