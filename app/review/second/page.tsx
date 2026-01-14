import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTrigger } from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { Menu } from "lucide-react";

const SecondPageReview = () => {
  return (
    <section className='section'>
      <Drawer direction='right'>
        <DrawerTrigger>
          <Button variant={"lime"}>
            <Menu />
          </Button>
        </DrawerTrigger>
        <DrawerContent className='bg-black border-l-lime-500'>
          <DrawerHeader className='text-center'>Menu</DrawerHeader>
          <Separator
            orientation='horizontal'
            className='bg-stone-300'
          />
          <DrawerDescription className='p-3 font-bold'>Drawer Description</DrawerDescription>
          <div className='w-11/12 mx-auto border text-stone-500 border-dashed border-stone-700 rounded-lg p-3 h-44 my-4'>
            CONTENT HERE ...
          </div>
          <Separator
            orientation='horizontal'
            className='bg-stone-300'
          />
          <DrawerFooter>
            <Button
              variant={"lime"}
              className='w-full h-16'>
              SUBMIT
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </section>
  );
}

export default SecondPageReview;