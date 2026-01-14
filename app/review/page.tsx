"use client";
import { NextPage } from "next";
import React, { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2Icon,
  Code2Icon,
  EditIcon,
  Eye,
  FileIcon,
  Pencil,
  PlusCircle,
  RefreshCcw,
  Save,
  Trash2Icon,
  User,
  Users2Icon,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { Minus, Plus } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer } from "recharts";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BookmarkIcon, HeartIcon, StarIcon } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

// TYPES ========================================================================================================================================================================================================================
interface PropsType {
  data?: any;
}

// COMPONENT ========================================================================================================================================================================================================================
const ReviewPage: NextPage<PropsType> = () => {
  // STATES
  const [isShowAlert, setIsShowAlert] = useState(false);
  const [isShowCard, setIsShowCard] = useState(false);
  const [date, setDate] = React.useState<Date | undefined>(new Date(2025, 5, 12));
  const [goal, setGoal] = React.useState(350);

  // FUNCTIONS
  function alertShowHandler() {
    setIsShowAlert(true);
    setTimeout(() => {
      setIsShowAlert(false);
    }, 1500);
  }

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  // RETURN
  return (
    <section className='w-screen py-6 bg-[#141414] center flex-col gap-6 relative'>
      {/* ACCORDION */}
      <Accordion
        type='single'
        collapsible
        className='border-2 border-stone-800 rounded-xl px-4 min-w-86 gap-y-2 transition-all duration-300'>
        <AccordionItem value='item-1'>
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>Can I use Shad_Cn ? </AccordionTrigger>
          <AccordionContent>YES ! OF COURSE !</AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* ALERT DIALOG */}
      <AlertDialog>
        <AlertDialogTrigger className='border-2 border-stone-800 px-6 py-3 rounded-xl hover:bg-stone-200 hover:text-stone-800 hover:border-stone-400 transition-all duration-300 bg-black cursor-pointer'>
          Open
        </AlertDialogTrigger>
        <AlertDialogContent className='bg-stone-900 border-stone-700'>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account and remove your data
              from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className='bg-red-900 border-red-950 cursor-pointer'>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={alertShowHandler}
              className='bg-stone-200 border-stone-400 text-stone-900 hover:text-white hover:bg-emerald-900 cursor-pointer'>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* ALERT */}
      {isShowAlert && (
        <Alert className='absolute z-999 right-10 bottom-30  w-fit bg-emerald-900/30 border-emerald-900 text-stone-200 leading-8'>
          <CheckCircle2Icon className='size-7! -translate-x-2 translate-y-3.5!' />
          <AlertTitle>Success! Your changes have been saved</AlertTitle>
          <AlertDescription>This is an alert with icon, title and description.</AlertDescription>
        </Alert>
      )}

      {/* ASPECT RATIO */}
      <div className='w-48 h-32'>
        <AspectRatio
          ratio={16 / 9}
          className='w-fit h-fit'>
          <Image
            src='/ScreenShot-Tool-20250808130504.png'
            alt='Image'
            className='rounded-md'
            width={200}
            height={200}
          />
        </AspectRatio>
      </div>

      {/* BREADCRUMB */}
      <Breadcrumb className='p-4 border-b-2 border-stone-800'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href='/'>Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <DropdownMenu>
              <DropdownMenuTrigger className='flex items-center gap-1'>
                <BreadcrumbEllipsis className='size-4' />
                <span className='sr-only'>Toggle menu</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align='start'
                className='bg-black'>
                <DropdownMenuItem className='hover:bg-stone-800'>Documentation</DropdownMenuItem>
                <DropdownMenuItem className='hover:bg-stone-800'>Themes</DropdownMenuItem>
                <DropdownMenuItem className='hover:bg-stone-800'>GitHub</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href='/docs/components'>Components</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* CALENDAR */}
      <Calendar
        mode='single'
        defaultMonth={date}
        selected={date}
        onSelect={setDate}
        className='rounded-lg border shadow-sm bg-black'
      />

      {/* CARD */}
      <Button
        variant={"black"}
        className='my-3 border border-stone-700 hover:bg-stone-800 transition-all duration-200'
        onClick={() => setIsShowCard((p) => !p)}>
        TOGGLE CARD
      </Button>

      {isShowCard && (
        <Card className='w-full max-w-sm my-10 bg-black'>
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>Enter your email below to login to your account</CardDescription>
            <CardAction>
              <Button variant='blue'>Sign Up</Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <form>
              <div className='flex flex-col gap-6'>
                <div className='grid gap-2'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    id='email'
                    type='email'
                    placeholder='m@example.com'
                    required
                  />
                </div>
                <div className='grid gap-2'>
                  <div className='flex items-center'>
                    <Label htmlFor='password'>Password</Label>
                    <a
                      href='#'
                      className='ml-auto inline-block text-sm underline-offset-4 hover:underline'>
                      Forgot your password?
                    </a>
                  </div>
                  <Input
                    id='password'
                    type='password'
                    required
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className='flex-col gap-2'>
            <Button
              type='submit'
              className='w-full'
              variant={"blue"}>
              Login
            </Button>
            <Button
              variant='outline'
              className='w-full'>
              Login with Google
            </Button>
          </CardFooter>
        </Card>
      )}

      {/* CONTEXT MENU */}
      <ContextMenu>
        <ContextMenuTrigger className='flex h-37.5 w-75 items-center justify-center rounded-md border border-dashed text-sm'>
          Right click here
        </ContextMenuTrigger>
        <ContextMenuContent className='w-52 bg-black mb-10'>
          <ContextMenuItem>
            <ArrowLeft /> Back
            <ContextMenuShortcut>⌘[</ContextMenuShortcut>
          </ContextMenuItem>

          <ContextMenuItem disabled>
            <ArrowRight />
            Forward
            <ContextMenuShortcut>⌘]</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <RefreshCcw />
            Reload
            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>

          <ContextMenuSub>
            <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
            <ContextMenuSubContent className='w-44 bg-black translate-x-4'>
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
              <ContextMenuItem variant='destructive'>
                <Trash2Icon />
                Delete
              </ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>

          <ContextMenuSeparator className='bg-stone-800' />
          <ContextMenuCheckboxItem checked>Show Bookmarks</ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem checked>Show Full URLs</ContextMenuCheckboxItem>
          <ContextMenuSeparator className='bg-stone-800' />
          <ContextMenuRadioGroup value='colm'>
            <ContextMenuLabel className='flex items-center gap-2 font-bold'>
              <Users2Icon className='size-4' />
              People
            </ContextMenuLabel>
            <ContextMenuRadioItem value='pedro'>Pedro Duarte</ContextMenuRadioItem>
            <ContextMenuRadioItem value='colm'>Colm Tuite</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>

      {/* DRAWER */}
      <Drawer direction='bottom'>
        <DrawerTrigger asChild>
          <Button
            variant='outline'
            className='bg-black cursor-pointer hover:bg-stone-900 transition-all duration-300'>
            Open Drawer
          </Button>
        </DrawerTrigger>
        <DrawerContent className='bg-black'>
          <div className='mx-auto font-bold w-full max-w-sm '>
            <DrawerHeader>
              <DrawerTitle>Move Goal</DrawerTitle>
              <DrawerDescription>Set your daily activity goal.</DrawerDescription>
            </DrawerHeader>
            <div className='p-4 pb-0'>
              <div className='flex items-center justify-center space-x-2'>
                <Button
                  variant='outline'
                  size='icon'
                  className='h-8 w-8 shrink-0 rounded-full hover:bg-red-900/50'
                  onClick={() => onClick(-10)}
                  disabled={goal <= 200}>
                  <Minus />
                  <span className='sr-only'>Decrease</span>
                </Button>
                <div className='flex-1 text-center'>
                  <div className='text-7xl font-bold tracking-tighter'>{goal}</div>
                  <div className='text-muted-foreground text-[0.70rem] uppercase'>Calories/day</div>
                </div>
                <Button
                  variant='outline'
                  size='icon'
                  className='h-8 w-8 shrink-0 rounded-full hover:bg-emerald-900/50'
                  onClick={() => onClick(10)}
                  disabled={goal >= 400}>
                  <Plus />
                  <span className='sr-only'>Increase</span>
                </Button>
              </div>
              <div className='mt-3 h-30'>
                <ResponsiveContainer
                  className={"border bg-zinc-900 border-zinc-900 rounded-xl"}
                  width='100%'
                  height='100%'>
                  <BarChart data={data}>
                    <Bar
                      dataKey='goal'
                      style={{ fill: "#fabb14", opacity: 0.9 } as React.CSSProperties}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <DrawerFooter>
              <Button variant={"success"}>Submit</Button>
              <DrawerClose asChild>
                <Button variant='outline'>Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>

      {/* FIELD */}
      <div className='w-full max-w-md border-2 border-stone-600 p-6 my-6 shadow-sm rounded-xl bg-black'>
        <form>
          <FieldGroup>
            <FieldSet>
              <FieldLegend>Payment Method</FieldLegend>
              <FieldDescription>All transactions are secure and encrypted</FieldDescription>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor='checkout-7j9-card-name-43j'>Name on Card</FieldLabel>
                  <Input
                    id='checkout-7j9-card-name-43j'
                    placeholder='Evil Rabbit'
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor='checkout-7j9-card-number-uw1'>Card Number</FieldLabel>
                  <Input
                    id='checkout-7j9-card-number-uw1'
                    placeholder='1234 5678 9012 3456'
                    required
                  />
                  <FieldDescription>Enter your 16-digit card number</FieldDescription>
                </Field>
                <div className='grid grid-cols-3 gap-4'>
                  <Field>
                    <FieldLabel htmlFor='checkout-exp-month-ts6'>Month</FieldLabel>
                    <Select defaultValue=''>
                      <SelectTrigger id='checkout-exp-month-ts6'>
                        <SelectValue placeholder='MM' />
                      </SelectTrigger>
                      <SelectContent className='bg-black'>
                        <SelectItem value='01'>01</SelectItem>
                        <SelectItem value='02'>02</SelectItem>
                        <SelectItem value='03'>03</SelectItem>
                        <SelectItem value='04'>04</SelectItem>
                        <SelectItem value='05'>05</SelectItem>
                        <SelectItem value='06'>06</SelectItem>
                        <SelectItem value='07'>07</SelectItem>
                        <SelectItem value='08'>08</SelectItem>
                        <SelectItem value='09'>09</SelectItem>
                        <SelectItem value='10'>10</SelectItem>
                        <SelectItem value='11'>11</SelectItem>
                        <SelectItem value='12'>12</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor='checkout-7j9-exp-year-f59'>Year</FieldLabel>
                    <Select defaultValue=''>
                      <SelectTrigger id='checkout-7j9-exp-year-f59'>
                        <SelectValue placeholder='YYYY' />
                      </SelectTrigger>
                      <SelectContent className='bg-black'>
                        <SelectItem value='2024'>2024</SelectItem>
                        <SelectItem value='2025'>2025</SelectItem>
                        <SelectItem value='2026'>2026</SelectItem>
                        <SelectItem value='2027'>2027</SelectItem>
                        <SelectItem value='2028'>2028</SelectItem>
                        <SelectItem value='2029'>2029</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor='checkout-7j9-cvv'>CVV</FieldLabel>
                    <Input
                      id='checkout-7j9-cvv'
                      placeholder='123'
                      required
                    />
                  </Field>
                </div>
              </FieldGroup>
            </FieldSet>
            <FieldSeparator className='bg-stone-800 h-1' />
            <FieldSet>
              <FieldLegend>Billing Address</FieldLegend>
              <FieldDescription>The billing address associated with your payment method</FieldDescription>
              <FieldGroup>
                <Field orientation='horizontal'>
                  <Checkbox
                    id='checkout-7j9-same-as-shipping-wgm'
                    defaultChecked
                  />
                  <FieldLabel
                    htmlFor='checkout-7j9-same-as-shipping-wgm'
                    className='font-normal'>
                    Same as shipping address
                  </FieldLabel>
                </Field>
              </FieldGroup>
            </FieldSet>

            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor='checkout-7j9-optional-comments'>Comments</FieldLabel>
                  <Textarea
                    id='checkout-7j9-optional-comments'
                    placeholder='Add any additional comments'
                    className='resize-none'
                  />
                </Field>
              </FieldGroup>
            </FieldSet>

            <Field orientation='horizontal'>
              <Button
                type='submit'
                variant={"success"}>
                Submit
              </Button>
              <Button
                variant='destructive'
                type='button'>
                Cancel
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </div>

      {/* MENU BAR */}
      <Menubar className='shadow-md shadow-stone-600'>
        <MenubarMenu>
          <MenubarTrigger className='flex items-center gap-1 hover:bg-stone-800 transition-all duration-300'>
            <FileIcon className='size-4' />
            File
          </MenubarTrigger>
          <Separator
            orientation='vertical'
            className='bg-stone-600 my-1 h-3/4'
          />
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
      
        <MenubarMenu>
          <MenubarTrigger className='flex items-center gap-1 hover:bg-stone-800 transition-all duration-300'>
            <Pencil className='size-4' />
            Edit
          </MenubarTrigger>
          <Separator
            orientation='vertical'
            className='bg-stone-600 my-1 h-3/4'
          />
          <MenubarContent className='bg-black'>
            <MenubarItem>
              Undo <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Find</MenubarSubTrigger>
              <MenubarSubContent className='bg-black'>
                <MenubarItem>Search the web</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Find...</MenubarItem>
                <MenubarItem>Find Next</MenubarItem>
                <MenubarItem>Find Previous</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>Cut</MenubarItem>
            <MenubarItem>Copy</MenubarItem>
            <MenubarItem>Paste</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className='flex items-center gap-1 hover:bg-stone-800 transition-all duration-300'>
            <Eye className='size-4' />
            View
          </MenubarTrigger>
          <Separator
            orientation='vertical'
            className='bg-stone-600 my-1 h-3/4'
          />
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
        <MenubarMenu>
          <MenubarTrigger className='flex items-center gap-1 hover:bg-stone-800 transition-all duration-300'>
            <User className='size-4' />
            Profiles
          </MenubarTrigger>
          <MenubarContent className='bg-black'>
            <MenubarRadioGroup value='benoit'>
              <MenubarRadioItem value='andy'>Andy</MenubarRadioItem>
              <MenubarRadioItem value='benoit'>Benoit</MenubarRadioItem>
              <MenubarRadioItem value='Luis'>Luis</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarItem inset>Edit...</MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Add Profile...</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      {/* SHEET */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant='outline'
            className='my-6'>
            Open
          </Button>
        </SheetTrigger>
        <SheetContent side={"right"}>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you&apos;re done.
            </SheetDescription>
          </SheetHeader>
          <div className='grid flex-1 auto-rows-min gap-6 px-4'>
            <div className='grid gap-3'>
              <Label htmlFor='sheet-demo-name'>Name</Label>
              <Input
                id='sheet-demo-name'
                defaultValue='Pedro Duarte'
              />
            </div>
            <div className='grid gap-3'>
              <Label htmlFor='sheet-demo-username'>Username</Label>
              <Input
                id='sheet-demo-username'
                defaultValue='@peduarte'
              />
            </div>
          </div>
          <SheetFooter className='mt-6'>
            <Button type='submit'>Save changes</Button>
            <SheetClose asChild>
              <Button variant='outline'>Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      {/* TOGGLE GROUP */}
      <ToggleGroup
        type='multiple'
        variant='outline'
        spacing={2}
        size='sm'
        className='my-6 bg-stone-900 p-6 rounded-xl border-2'>
        <ToggleGroupItem
          value='star'
          aria-label='Toggle star'
          className='data-[state=on]:bg-bg-black bg-black data-[state=on]:*:[svg]:fill-yellow-500 data-[state=on]:*:[svg]:stroke-yellow-500'>
          <StarIcon />
          Star
        </ToggleGroupItem>
        <ToggleGroupItem
          value='heart'
          aria-label='Toggle heart'
          className='data-[state=on]:bg-black bg-black  data-[state=on]:*:[svg]:fill-red-500 data-[state=on]:*:[svg]:stroke-red-500'>
          <HeartIcon />
          Heart
        </ToggleGroupItem>
        <ToggleGroupItem
          value='bookmark'
          aria-label='Toggle bookmark'
          className='data-[state=on]:bg-black bg-black  data-[state=on]:*:[svg]:fill-blue-500 data-[state=on]:*:[svg]:stroke-blue-500'>
          <BookmarkIcon />
          Bookmark
        </ToggleGroupItem>
      </ToggleGroup>
    </section>
  );
};

export default ReviewPage;

// FAKE DATAS
const data = [
  { goal: 400 },
  { goal: 300 },
  { goal: 200 },
  { goal: 300 },
  { goal: 200 },
  { goal: 278 },
  { goal: 189 },
  { goal: 239 },
  { goal: 300 },
  { goal: 200 },
  { goal: 278 },
  { goal: 189 },
  { goal: 349 },
];
