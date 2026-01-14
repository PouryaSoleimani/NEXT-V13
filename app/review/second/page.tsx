'use client'
import useCapitilize from "@/app/react-hook-form-2/v9/_hooks/useCapitilize";
import { Button } from "@/components/ui/button";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import {
  Menubar,
  MenubarSubContent,
  MenubarSub,
  MenubarSeparator,
  MenubarShortcut,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarSubTrigger,
  MenubarCheckboxItem,
  MenubarRadioItem,
  MenubarRadioGroup,
} from "@/components/ui/menubar";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  ArrowRight,
  Code,
  Code2Icon,
  Copy,
  Home,
  Info,
  Menu,
  PlusCircle,
  Save,
  X,
  EditIcon,
  Trash2Icon,
  MoreHorizontal,
  FileIcon,
  Eye,
  User,
  PlusCircleIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

const SecondPageReview = () => {
  const [username, setUsername] = useState<"benoit" | "andy" | "Luis">("benoit");
  return (
    <section className='section relative insert-0'>
      {/* HEADER + DRAWER */}
      <div
        id='HEADER'
        className='w-full absolute top-0 max-w-[92%] px-2 mx-auto py-3'>
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
                className='w-full h-16'
                onClick={() => {
                  toast.success("Form Submitted", { position: "top-center", style: { fontSize: "19px" } });
                }}>
                SUBMIT
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>

      {/* CONTEXT MENU */}
      <ContextMenu>
        <ContextMenuTrigger className='border border-dashed border-stone-600 p-30 rounded-xl'>
          Right Click Here
        </ContextMenuTrigger>
        <ContextMenuContent className='p-1 bg-white border-black border-4 text-stone-900'>
          <ContextMenuItem className='hover:text-white'>
            <ArrowLeft />
            Back
          </ContextMenuItem>
          <ContextMenuItem className='hover:text-white'>
            <ArrowRight />
            Forward
          </ContextMenuItem>
          <ContextMenuItem className='hover:text-white'>
            <Copy />
            Copy
          </ContextMenuItem>
          <ContextMenuItem className='hover:text-white'>
            <Code />
            Developer Tools
          </ContextMenuItem>
          <ContextMenuSeparator className='bg-stone-800' />
          <ContextMenuSub>
            <ContextMenuSubTrigger className='gap-2 hover:bg-stone-800 hover:text-white'>
              <MoreHorizontal />
              More Tools
            </ContextMenuSubTrigger>
            <ContextMenuSubContent className='w-44 bg-white *:hover:text-white translate-x-4'>
              <ContextMenuItem>
                <Save />
                Save Page...
              </ContextMenuItem>
              <ContextMenuItem>
                <PlusCircle />
                Create Shortcut...
              </ContextMenuItem>
              <ContextMenuItem>
                <EditIcon />
                Name Window...
              </ContextMenuItem>
              <ContextMenuSeparator className='bg-stone-800' />
              <ContextMenuItem>
                <Code2Icon />
                Developer Tools
              </ContextMenuItem>
              <ContextMenuSeparator className='bg-stone-800' />
              <ContextMenuItem
                variant='destructive'
                className=' hover:bg-red-900'>
                <Trash2Icon />
                Delete
              </ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
        </ContextMenuContent>
      </ContextMenu>

      <Menubar className="my-2 bg-stone-900">
        <MenubarMenu>
          <MenubarTrigger className='flex items-center gap-1 hover:bg-stone-800 transition-all duration-300'>
            <FileIcon className='size-4' />
            File
          </MenubarTrigger>
          <MenubarContent className='bg-black'>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              New Window <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>New Incognito Window</MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Share</MenubarSubTrigger>
              <MenubarSubContent className='bg-black'>
                <MenubarItem>Email link</MenubarItem>
                <MenubarItem>Messages</MenubarItem>
                <MenubarItem>Notes</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>
              Print... <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <Separator
          orientation='vertical'
          className='bg-stone-600 my-1 h-3/4'
        />
        <MenubarMenu>
          <MenubarTrigger className='flex items-center gap-1 hover:bg-stone-800 transition-all duration-300'>
            <Eye className='size-4' />
            View
          </MenubarTrigger>

          <MenubarContent className='bg-black'>
            <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
            <MenubarCheckboxItem checked>Always Show Full URLs</MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarItem inset>
              Reload <MenubarShortcut>⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarItem
              disabled
              inset>
              Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Toggle Fullscreen</MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Hide Sidebar</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <Separator
          orientation='vertical'
          className='bg-stone-600 my-1 h-3/4'
        />
        <MenubarMenu>
          <MenubarTrigger className='flex items-center gap-1 hover:bg-stone-800 transition-all duration-300'>
            <User className='size-4' />
            Profiles : <span className='text-sky-600'> {useCapitilize(username)}</span>
          </MenubarTrigger>
          <MenubarContent className='bg-black'>
            <MenubarRadioGroup value={username}>
              <MenubarRadioItem
                className='hover:bg-stone-900 my-1'
                onSelect={() => setUsername("andy")}
                value='andy'>
                Andy
              </MenubarRadioItem>
              <MenubarRadioItem
                className='hover:bg-stone-900 my-1'
                onSelect={() => setUsername("benoit")}
                value='benoit'>
                Benoit
              </MenubarRadioItem>
              <MenubarRadioItem
                className='hover:bg-stone-900 my-1'
                onSelect={() => setUsername("Luis")}
                value='Luis'>
                Luis
              </MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarItem className='hover:bg-stone-900 my-1'>
              <EditIcon />
              Edit...
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem className='hover:bg-stone-900 my-1'>
              <PlusCircleIcon />
              Add Profile...
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </section>
  );
}

export default SecondPageReview;