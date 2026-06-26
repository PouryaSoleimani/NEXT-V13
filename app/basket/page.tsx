'use client'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { PackageSearch, Trash2 } from 'lucide-react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { BiBasket } from 'react-icons/bi'

type SingleBasketItemType = { id: number, title: string, isAvailable: boolean, price: number, count: number }

const BasketPage = () => {

  const [basket, setBasket] = useState<SingleBasketItemType[]>(basketInit)
  const [shopped, setShopped] = useState<SingleBasketItemType[]>([])
  const [showModal, setShowModal] = useState(false)

  function addToCart(product: SingleBasketItemType) {
    let isInShop = shopped.find(p => p.id == product.id)
    if (isInShop) {
      isInShop.count = isInShop.count + 1
    } else {
      setShopped(prev => [...prev, product])
    }
    toast.success('Item added', { style: { backgroundColor: 'black', color: 'white', outline: '4px solid #ffffff20' } })
  }

  function removeProduct(product: SingleBasketItemType) {
    const copy = [...shopped]
    const filtered = copy.filter(i => i.id !== product.id)
    setShopped(filtered)
    toast.success('Item Removed', { style: { backgroundColor: 'black', color: 'white', outline: '4px solid #ffffff20' } })
  }

  return (
    <>

      {/* BASKET */}
      <div className='grid grid-cols-4 justify-items-center items-center w-fit m-auto gap-8 outline-2 outline-[#dfdfdf30] p-16 rounded-xl'>
        {basket.map((b) => (
          <div key={b.id} className={cn('outline-4 flex flex-col gap-4 justify-center text-center outline-[#ffffff30] p-16 rounded-xl bg-neutral-900', !b.isAvailable && 'opacity-30 pointer-events-none cursor-not-allowed', b.title == 'AEROX' && "bg-yellow-400 outline-8 font-2xl outline-blue-500 text-blue-500")}>
            <p>
              {b.title.toUpperCase()}
            </p>
            <p className={cn('bg-zinc-800 p-4 rounded-lg border-2 border-emerald-800 text-white',b.title == 'AEROX' && 'bg-blue-500 border-4 border-black')}>
              $ {b.price.toLocaleString()}
            </p>
            <p className={cn(b.isAvailable ? 'text-emerald-800' : 'text-red-800', b.title == 'AEROX' && 'text-blue-500')}>
              {b.isAvailable ? 'AVAILABLE' : "NOT AVAILABLE"}
            </p>
            <Button variant={'default'} size={'lg'} onClick={() => addToCart(b)} className={cn(b.title == 'AEROX' ? 'bg-blue-600' : "bg-white text-black")}>ADD TO CART</Button>
          </div>
        ))}
      </div>

      {/* BASKET AND CART COUNT */}
      <div className='absolute left-8 top-20 flex items-center-safe gap-2'>
        <Button onClick={() => setShowModal(true)} variant={'blue'} className=' outline-4 outline-[#ffffff30]'>
          <BiBasket className='size-6' />
        </Button>
        <Badge variant={'secondary'} className='rounded-full w-8 h-8 font-bold'>{shopped.length}</Badge>
      </div>

      {/* MODAL */}
      <div id='MODAL__OVERLAY' className={cn('absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center-safe', !showModal ? 'hidden' : '')}>
        <div id='MODAL___CONTENT' className='w-2/3 h-2/3 pb-2 flex flex-col justify-center border-2 border-gray-600 m-auto rounded-xl bg-neutral-900'>
          <div className='grid grid-cols-6 gap-6 grid-rows-2 h-11/12 p-8'>
            {!shopped.length ? (
              <div className='w-full h-full col-span-12 row-span-12 flex flex-col gap-3 text-neutral-500 items-center justify-center'>
                <PackageSearch />
                <p>
                  NO ITEMS IN BASKET
                </p>
              </div>
            ) : shopped.map(item => (
              <Card key={item.id} className={cn('flex p-3 bg-zinc-800 gap-3 drop-shadow-2xl shadow-white/50 border-none h-fit outline-4 outline-white/30 hover:scale-105 transition-all duration-500 flex-col justify-center items-center', item.title == 'AEROX' && "bg-yellow-400 outline-8 outline-blue-600 ")}>
                <p>
                  {item.title.toUpperCase()}
                </p>
                <p>{item.price.toLocaleString()}</p>
                <p className='text-white'>{item.count.toLocaleString() ?? 1}</p>
                <Button onClick={() => removeProduct(item)} variant={'red'} size={'default'} className='w-full'>
                  <Trash2 />
                </Button>
              </Card>
            ))}
          </div>
          <Button onClick={() => setShowModal(false)} variant={'red'} className='w-64 m-auto'>CLOSE</Button>
        </div>
      </div>

    </>
  )
}

export default BasketPage



const basketInit = [
  { id: 1, title: 'macbook', isAvailable: true, price: 200_000_000, count: 1 },
  { id: 2, title: 'iphone', isAvailable: true, price: 200_000_000, count: 1 },
  { id: 3, title: 'airpod', isAvailable: true, price: 50_000_000, count: 1 },
  { id: 4, title: 'iwatch', isAvailable: true, price: 50_000_000, count: 1 },
  { id: 5, title: 'macmini', isAvailable: true, price: 100_000_000, count: 1 },
  { id: 6, title: 'AEROX', isAvailable: true, price: 350_000_000, count: 1 },

]