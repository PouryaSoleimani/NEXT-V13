'use client'
import { Button } from '@/components/ui/button'
import { useNumbersFilterStoreType } from '@/types/types'
import { useNumbersFilterStore } from '@/zustand/useNumberFiltersStore'
import { ArrowLeft, SearchIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { ReactElement, useRef } from 'react'
import toast from 'react-hot-toast'

const SearchInputComponent = (): ReactElement => {
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement | null>(null)
  const store = useNumbersFilterStore() as useNumbersFilterStoreType;
  const numbers = store.numbers;
  const numbersConverted = numbers.map((item) => item.toString())
  
  function searchParamsHandler() {
    const val = inputRef.current?.value.trim()
    if (!val)return
    if (numbersConverted.find((item)=> item === val)){
      toast.success(`جستجو مورد نظر یافت شد  = ${val}` , { style : {fontFamily : 'Vazir' }} )
      router.push(`/css-training?q=${val}`)
    } else{
      toast.error(`جستجو مورد نظر یافت شد ${val}` , { style : {fontFamily : 'Vazir'}})
      router.refresh()
      return
    }
  }
  return (
    <div className='grid place-items-center col-span-full  min-w-5xl m-auto place-self-center'>
      <div className='border w-full border-stone-700 my-3 focus-within:border-stone-500 grid grid-cols-12 caret-pink-500 bg-stone-900 shadow shadow-stone-500/50 caret group rounded-full pr-3 place-items-center  min-h-16 h-0' dir='rtl'>
        <SearchIcon className='col-span-1' />
        <input
          ref={inputRef}
          placeholder='اینجا جستجو کنید'
          onKeyDown={(e: any) => {
            e?.key === 'Enter' && searchParamsHandler()
          }} className='col-span-10 placeholder:font-["Vazir"] w-full h-full border-0  ring-0 outline-0' />
        <Button onClick={searchParamsHandler} variant={'lime'} className='col-span-1 border-0 h-full w-full rounded-l-full'>
          <ArrowLeft />
        </Button>
      </div>
    </div>
  )
}

export default SearchInputComponent