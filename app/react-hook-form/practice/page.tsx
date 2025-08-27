"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm, UseControllerProps } from "react-hook-form";
import toast from "react-hot-toast";
import z from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

const toastStyles = {
  backgroundColor: "black",
  color: "white",
  border: "4px solid white",
  fontWeight: "900",
};

const Schema = z.object({
  name: z.string().min(3, { error: "MIN LENGTH IS 3" }).nonempty({ error: "CANT BE EMPTY" }),
  password: z.string().min(3, { error: "MIN LENGTH IS 3" }),
});

function ReactHookFormPractice(props: UseControllerProps<typeof Schema>) {
  const [isEdit, setIsEdit] = useState(false);

  const form = useForm<z.infer<typeof Schema>>({
    resolver: zodResolver(Schema),
    defaultValues: async () => {
      const req = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data = await req.json();
      return {
        name: isEdit ? data.name : "",
        password: isEdit ? data.email : "",
      };
    },
  });

  function submitHandler(values: z.infer<typeof Schema>) {
    console.info("%c VALUES ==>", "color:yellow", values);
    form.reset();
    toast.success("REGISTERED", { style: toastStyles });
  }

  return (
    <div className="w-screen h-screen overflow-hidden grid place-items-center-safe">
      <Card className="bg-black shadow-xxs shadow-zinc-400">
        <CardHeader className="border-b-2"> LOGIN </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(submitHandler)} className="flex flex-col gap-y-3">
              <FormField
                control={form?.control}
                name="name"
                render={({ field, fieldState }: { field: any; fieldState: any }) => {
                  const showSkeleton = !field.value && isEdit;
                  return (
                    <FormItem>
                      <FormLabel className="font-semibold font-mono m-0 pl-1">Username</FormLabel>
                      <FormControl>
                        {showSkeleton ? (
                          <Skeleton className="h-9 w-[11.6rem] border rounded-md" />
                        ) : (
                          <Input
                            type="text"
                            placeholder="Username"
                            {...field}
                            value={field.value || ""}
                          />
                        )}
                      </FormControl>
                      <FormMessage className="text-xxs text-red-900 pl-1 -translate-y-1" />
                    </FormItem>
                  );
                }}
              />

              <FormField
                control={form?.control}
                name="password"
                render={({ field, fieldState }: { field: any; fieldState: any }) => (
                  <FormItem>
                    <FormLabel className="font-semibold font-mono m-0 pl-1">Password</FormLabel>
                    <FormControl>
                      {!field.value && isEdit ? (
                        <Skeleton className="h-9 w-[11.6rem] border rounded-md" />
                      ) : (
                        <Input
                          type="text"
                          placeholder="Password"
                          {...field}
                          value={field.value || ""}
                        />
                      )}
                    </FormControl>
                    <FormMessage className="text-xxs text-red-900 pl-1 -translate-y-1" />
                  </FormItem>
                )}
              />

              <Button className="mt-3" type="submit">
                SUBMIT
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

export default ReactHookFormPractice;
