'use client';
import React from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Button } from '@/components/ui/button';

function HeadlessUi() {
  function showSettingsDialog() {
    alert('Open settings dialog!');
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <Menu>
        <MenuButton>
          <Button variant={'blue'}>MENU</Button>
        </MenuButton>
        <MenuItems anchor="bottom" className="border p-10 grid grid-cols-2 gap-4 mt-2 rounded-xl bg-zinc-900">
          <MenuItem>
            <Button variant={'success'} onClick={showSettingsDialog} className="block w-full text-left">
              Settings
            </Button>
          </MenuItem>
          <MenuItem>
            <Button variant={'success'} className="block">
              Support
            </Button>
          </MenuItem>
          <MenuItem>
            <Button className="block" variant={'success'}>
              License
            </Button>
          </MenuItem>
          <form action="/logout" method="post">
            <MenuItem>
              <Button type="submit" variant={'success'} className="block w-full text-left">
                Sign out
              </Button>
            </MenuItem>
          </form>
        </MenuItems>
      </Menu>
    </div>
  );
}

export default HeadlessUi;
