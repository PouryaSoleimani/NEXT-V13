'use client'
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from "@/components/ui/input";
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, User } from 'lucide-react';
import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import z from 'zod';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

enum GENDER {
   male = "MALE",
   female = "FEMALE",
}

const FormSchema = z
   .object({
      email: z.email("Email Invalid").min(1, "Email can't be Empty"),
      username: z.string("Username cant be empty").min(1, "Username Can't be Empty"),
      phonenumber: z
         .string("phonenumber cant be empty")
         .regex(/^\d+$/, "Phonenumber must be only Digits")
         .min(7, "phonenumber must be at least 7 letters"),

      hasAccept: z.boolean(),
      gender: z.enum([GENDER.male, GENDER.female], "Please Select a Gender "),
   })
   .refine((data) => {
      if (!data.hasAccept) {
         toast.error("Please Accept the terms to Continue", { position: "top-center" });
         return false;
      } else {
         return true;
      }
   });

const ReactHookForm3 = () => {
   type FormSchemaType = z.infer<typeof FormSchema>;

   const { control, handleSubmit, formState, reset, watch } = useForm<FormSchemaType>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
         email: "",
         phonenumber: "",
         username: "",
         hasAccept: false,
         
      },
   });

   function submitHandler(data: FormSchemaType) {
      console.info("DATA =>", data);
      toast.loading("SUBMITTING FORM ...", { position: "top-center" });
      setTimeout(() => {
         toast.dismiss();
         toast.success("FORM SUBMITTED SUCCESFULLY ... ", { position: "top-center" });
      }, 1000);
      reset();
   }


   return (
      <section className="w-screen h-screen bg-black center ">
         <form
            className={cn(
               "border-4 border-blue-950 w-80 bg-neutral-900 p-5 rounded-lg flex flex-col gap-5",
               Object.keys(formState.errors).length !== 0 && "border-red-950"
            )}
            onSubmit={handleSubmit(submitHandler)}>
            <h2 className="text-center border-b-2 border-blue-900 pb-2">LOGIN</h2>

            <div id="EMAIL" className="flex flex-col gap-2">
               <Label>
                  <Mail className="size-4 text-neutral-300" />
                  Email
               </Label>
               <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                     <Input
                        type="email"
                        placeholder="Email ..."
                        value={field.value}
                        onChange={field.onChange}
                     />
                  )}
               />
               {formState.errors.email && (
                  <p className="text-xs bg-red-400/30 text-red-100 font-semibold p-1 rounded-sm">
                     {formState.errors.email.message}
                  </p>
               )}
            </div>

            <div id="USER__NAME" className="flex flex-col gap-2">
               <Label>
                  <User className="size-4 text-neutral-300" />
                  Username
               </Label>
               <Controller
                  name="username"
                  control={control}
                  render={({ field }) => (
                     <Input
                        type="text"
                        value={field.value}
                        onChange={field.onChange}
                        placeholder="Username ..."
                     />
                  )}
               />
               {formState.errors.username && (
                  <p className="text-xs bg-red-400/30 text-red-100 font-semibold p-1 rounded-sm">
                     {formState.errors.username.message}
                  </p>
               )}
            </div>

            <div id="PHONE___NUMBER" className="flex flex-col gap-2">
               <Label>
                  <Phone className="size-4 text-neutral-300" />
                  PhoneNumber
               </Label>
               <Controller
                  name="phonenumber"
                  control={control}
                  render={({ field }) => (
                     <Input
                        type="text"
                        value={field.value}
                        onChange={field.onChange}
                        placeholder="PhoneNumber"
                     />
                  )}
               />
               {formState.errors.phonenumber && (
                  <p className="text-xs bg-red-400/30 text-red-100 font-semibold p-1 rounded-sm">
                     {formState.errors.phonenumber.message}
                  </p>
               )}
            </div>

            <div id="GENDER" className="flex flex-col gap-2">
               <Label>Gender</Label>
               <Controller
                  control={control}
                  name="gender"
                  render={({ field }) => (
                     <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger className="w-full bg-black">
                           <SelectValue placeholder="Select Gender" />
                        </SelectTrigger>
                        <SelectContent className="bg-black">
                           <SelectGroup>
                              <SelectItem
                                 className="hover:bg-neutral-700 transition-all duration-250"
                                 value="MALE">
                                 Male
                              </SelectItem>
                              <SelectItem
                                 className="hover:bg-neutral-700 transition-all duration-250"
                                 value="FEMALE">
                                 Female
                              </SelectItem>
                           </SelectGroup>
                        </SelectContent>
                     </Select>
                  )}
               />
               {formState.errors.gender && (
                  <p className=" bg-red-800/20 text-xs text-neutral-300 p-1.5 rounded-sm">
                     {formState.errors.gender.message}
                  </p>
               )}
            </div>

            <div id="HAS__ACCEPT" className="flex flex-col  gap-2">
               <div className="flex items-center gap-2">
                  <Controller
                     control={control}
                     name="hasAccept"
                     render={({ field }) => (
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                     )}
                  />
                  <Label className="font-thin font-sans whitespace-nowrap">
                     I Accept the terms and Privacy Conditions
                  </Label>
               </div>
               {formState.errors.hasAccept && (
                  <p className="text-xs bg-red-400/30 text-red-100 font-semibold p-1 rounded-sm">
                     {formState.errors.hasAccept.message}
                  </p>
               )}
            </div>

            <div id="SUBMIT___BUTTON" className="w-full border-t-2 border-neutral-700 pt-4">
               <Button
                  disabled={Object.keys(formState.errors).length !== 0 || watch("hasAccept") == false}
                  className="w-full bg-blue-950 hover:bg-blue-900 transition-all duration-300">
                  Submit
               </Button>
            </div>
         </form>
      </section>
   );
}

export default ReactHookForm3;