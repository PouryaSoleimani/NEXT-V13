import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { Code, Home, Info, Menu, X } from "lucide-react";
import Link from "next/link";

const SecondPageReview = () => {
  return (
    <section className='section relative insert-0'>
      <div
        id='HEADER'
        className='w-full absolute top-0 max-w-[1980px] px-1 mx-auto py-3'>
        <Drawer direction='right'>
          <DrawerTrigger>
            <Button variant={"lime"}>
              <Menu />
            </Button>
          </DrawerTrigger>
          <DrawerContent className='bg-black border-l-lime-500'>
            <DrawerHeader className='text-center flex flex-row w-full items-center justify-between'>
              Menu
              <DrawerClose asChild>
                <X />
              </DrawerClose>
            </DrawerHeader>
            <Separator
              orientation='horizontal'
              className='bg-stone-300'
            />
            <DrawerDescription className='p-3 font-bold'>Drawer Description</DrawerDescription>
            <div className='w-11/12 mx-auto border text-stone-500 border-dashed border-stone-700 rounded-lg p-3 h-44 my-4'>
              <DrawerTitle> CONTENT HERE ...</DrawerTitle>
            </div>
            <Separator
              orientation='horizontal'
              className='bg-stone-300'
            />
            <ul className='flex flex-col gap-3 p-3'>
              <Link
                href={"/"}
                className='flex items-center-safe gap-3 hover:bg-lime-800 px-2 py-3 rounded-lg'>
                <Home size={18} />
                Home
              </Link>
              <Link
                href={"/"}
                className='flex items-center-safe gap-3 hover:bg-lime-800 px-2 py-3 rounded-lg'>
                <Info size={18} />
                Info
              </Link>
              <Link
                href={"/"}
                className='flex items-center-safe gap-3 hover:bg-lime-800 px-2 py-3 rounded-lg'>
                <Code size={18} />
                Developer Tools
              </Link>
            </ul>
            <DrawerFooter>
              <Button
                variant={"lime"}
                className='w-full h-16'>
                SUBMIT
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </section>
  );
}

export default SecondPageReview;