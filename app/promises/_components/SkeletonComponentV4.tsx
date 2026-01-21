import { Skeleton } from '@/components/ui/skeleton'

function SkeletonComponentV4() {
  return (
    <div className='center'>
      <div id="WRAPPER" className='flex flex-col bg-black p-4 rounded-lg border border-stone-900 gap-3 w-100'>
        <div className='flex items-center justify-between gap-3'>
          <Skeleton className="size-24 rounded-full bg-stone-400 animate-pulse" />
          <div className='flex flex-col w-3/4 gap-2.5 '>
            <Skeleton className=" h-3 rounded-full bg-stone-400 animate-pulse" />
            <Skeleton className=" h-3 rounded-full bg-stone-400 animate-pulse" />
          </div>
        </div>

        <div className='flex flex-col gap-3 w-full'>
          <Skeleton className="w-full h-4 rounded-md bg-stone-400 animate-pulse" />
          <Skeleton className="w-full h-4 rounded-md bg-stone-400 animate-pulse" />
          <Skeleton className="w-full h-4 rounded-md bg-stone-400 animate-pulse" />
        </div>
      </div>
    </div>
  )
}

export default SkeletonComponentV4