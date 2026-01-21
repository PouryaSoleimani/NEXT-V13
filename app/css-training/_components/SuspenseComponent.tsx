import { Skeleton } from '@/components/ui/skeleton'
import { Loader2 } from 'lucide-react'
import Image from 'next/image'

const SuspenseComponent = async () => {
  const _result = await getDoctor("DOCTOR NAME")
  console.info('SUSPENSE RESULT => ', _result)
  return (
    <div className='w-[90%] h-fit p-2.5 bg-black mx-auto flex flex-col items-end gap-3 justify-center-safe text-center rounded-lg'>
      <Image className='rounded-full size-20' src={'/images/cartoonNature.avif'} alt='profile_pic' width={50} height={50} />
      <p className='pl-3'>{_result}</p>
    </div>
  )
}

export default SuspenseComponent

//^ ASYNC FUNCTION WITH A PROMISE ______________________________________________________________________________________________________________________
async function getDoctor(id: string): Promise<any> {
  return new Promise((resolve, reject) => {
    if (2 == 2) { // FAKE CONDITION
      setTimeout(() => {
        const result = id
        resolve(result)
      }, 3000);
    } else {
      reject('PROMISE REJECT ! ')
    }
  })
}

export function LoadingDoctorSmall() {
  return (
    <div className='flex flex-col items-end gap-3 bg-transparent rounded-lg w-full mx-auto p-3'>
      <Skeleton className='bg-stone-900/50 size-20 rounded-full' />
      <Skeleton className='bg-stone-900/50 w-full h-20 rounded-lg' />
    </div>
  )
}