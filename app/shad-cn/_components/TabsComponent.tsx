import React from "react";
import toast from "react-hot-toast";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

function TabsComponent() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue="account">
        <TabsList className="border w-full border-zinc-900 rounded-md flex gap-2 px-1">
          <TabsTrigger className="rounded-sm" value="account">
            Account
          </TabsTrigger>
          <TabsTrigger className="rounded-sm" value="password">
            Password
          </TabsTrigger>
          <TabsTrigger className="rounded-sm" value="image">
            Image
          </TabsTrigger>
        </TabsList>

        <TabsContent value="account" className="h-[150px]">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you&apos;re done.
              </CardDescription>
            </CardHeader>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                toast.success("Username Changed");
              }}
              className="flex flex-col gap-4"
            >
              <CardContent className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-name">Name</Label>
                  <Input id="tabs-demo-name" defaultValue="Pedro Duarte" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-username">Username</Label>
                  <Input id="tabs-demo-username" defaultValue="@peduarte" />
                </div>
              </CardContent>
              <CardFooter>
                <Button variant={"black"} className="w-full" type="submit">
                  Save changes
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        <TabsContent value="password" className="h-[150px]">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you&apos;ll be logged out.
              </CardDescription>
            </CardHeader>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                toast.success("Password Changed");
              }}
              className="flex flex-col gap-4"
            >
              <CardContent className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-current">Current password</Label>
                  <Input id="tabs-demo-current" type="password" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-new">New password</Label>
                  <Input id="tabs-demo-new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button variant={"black"} className="w-full" type="submit">
                  Save password
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        <TabsContent value="image" className="h-[150px]">
          <Card>
            <CardHeader>
              <CardTitle>Image</CardTitle>
              <CardDescription>Here is the image of user</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <Image
                placeholder="empty"
                blurDataURL="/images/cartoonNature.jpg"
                loading="eager"
                width={300}
                height={290}
                alt="profile__image"
                src={"/images/cartoonNature.avif"}
                className="rounded-lg shadow-lg shadow-black"
              />
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                variant={"success"}
                onClick={() => {
                  toast.success("Image Confirmed");
                }}
              >
                Confirm
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default TabsComponent;
