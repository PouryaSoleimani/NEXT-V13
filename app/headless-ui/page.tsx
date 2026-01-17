"use client";
import React from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Description,
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
  Select,
  Textarea,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { ChevronDownIcon } from "lucide-react";

import Logger from "@/hooks/Logger";

function HeadlessUi() {
  function showSettingsDialog() {
    alert("Open settings dialog!");
  }
  const name = "POURYA";
  Logger("NAME", "warning", name);

  return (
    <div className='flex flex-col gap-3 items-center justify-center-safe h-screen'>
      {/* MENU */}
      <Menu>
        <MenuButton>
          <span>MENU</span>
        </MenuButton>
        <MenuItems
          anchor='bottom'
          className='border border-stone-500 bg-black p-4 grid  grid-cols-4 gap-2.5 mt-2 rounded-xl'>
          <MenuItem>
            <Button
              variant={"success"}
              onClick={showSettingsDialog}
              className='block w-full text-left'>
              Settings
            </Button>
          </MenuItem>

          <MenuItem>
            <Button
              variant={"success"}
              className='block'>
              Support
            </Button>
          </MenuItem>

          <MenuItem>
            <Button
              className='block'
              variant={"success"}>
              License
            </Button>
          </MenuItem>

          <form
            action='/logout'
            method='post'>
            <MenuItem>
              <Button
                type='submit'
                variant={"success"}
                className='block w-full text-left'>
                Sign out
              </Button>
            </MenuItem>
          </form>
        </MenuItems>
      </Menu>
      {/* FORM */}
      <div className='w-full max-w-lg px-4'>
        <Fieldset className='space-y-6 rounded-xl bg-white/5 p-6 sm:p-10'>
          <Legend className='text-base/7 font-semibold text-white'>
            Shipping details
          </Legend>
          <Field>
            <Label className='text-sm/6 font-medium text-white'>
              Street address
            </Label>
            <Input
              className={clsx(
                "mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white",
                "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25"
              )}
            />
          </Field>

          <Field>
            <Label className='text-sm/6 font-medium text-white'>Country</Label>
            <Description className='text-sm/6 text-white/50'>
              We currently only ship to North America.
            </Description>
            <div className='relative'>
              <Select
                className={clsx(
                  "mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white",
                  "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25",
                  // Make the text of each option black on Windows
                  "*:text-black"
                )}>
                <option>Canada</option>
                <option>Mexico</option>
                <option>United States</option>
              </Select>
              <ChevronDownIcon
                className='group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60'
                aria-hidden='true'
              />
            </div>
          </Field>

          <Field>
            <Label className='text-sm/6 font-medium text-white'>
              Delivery notes
            </Label>
            <Description className='text-sm/6 text-white/50'>
              If you have a tiger, we'd like to know about it.
            </Description>
            <Textarea
              className={clsx(
                "mt-3 block w-full resize-none rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white",
                "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25"
              )}
              rows={3}
            />
          </Field>
        </Fieldset>
      </div>
      {/* TABS */}
      <TabGroup>
        <TabList className='flex bg-zinc-800 w-64 justify-around px-3 py-1.5 rounded-lg'>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </TabList>
        <TabPanels className='bg-zinc-800 mt-1 px-3 py-1.5 rounded-lg h-64'>
          <TabPanel>Content 1</TabPanel>
          <TabPanel>Content 2</TabPanel>
          <TabPanel>Content 3</TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}

export default HeadlessUi;
