"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye } from "lucide-react";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import toast from "react-hot-toast";

enum GENDER {
   male = "MALE",
   female = "FEMALE",
   other = "OTHER",
}

const FormSchema = z
   .object({
      username: z.string().min(1, "username can't be empty").max(20, "username must have maximum 20 letters"),
      email: z.email("Email is Invalid"),
      password: z.string().min(8, "Password must be atleast 8 letters"),
      confirmPassword: z.string().min(8, "Password must be atleast 8 letters"),
      hasPhone: z.boolean(),
      phoneNumber: z.string().regex(/^\d+$/, "Phonenumber must be only Digits").min(7, "phonenumber must be at least 7 letters").optional(),
      gender: z.enum([GENDER.female, GENDER.male, GENDER.other], "Please Select a Gender "),
   })
   .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't Match ...",
      path: ["confirmPassword"],
   })
   .refine(
      (data) => {
         if (data.hasPhone) {
            return !!data.phoneNumber;
         } else {
            return true;
         }
      },
      {
         message: "Phone Number is Required",
         path: ["phoneNumber"],
      }
   );

// ^ COMPONENT ==================================================================================================================================================================
const ReactHookFormV2 = () => {
   const [type, setType] = useState<"password" | "text">("password");
   const [type2, setType2] = useState<"password" | "text">("password");

   function switchShowPassword() {
      if (type == "password") {
         setType("text");
      } else {
         setType("password");
      }
   }

   function switchShowPassword2() {
      if (type2 == "password") {
         setType2("text");
      } else {
         setType2("password");
      }
   }

   type FormTypes = z.infer<typeof FormSchema>;

   const { register, formState, handleSubmit, watch, control, reset } = useForm<FormTypes>({
      resolver: zodResolver(FormSchema),
   });

   function submitHandler(data: FormTypes) {
      console.info(data);
      toast.loading("SUBMITTING FORM");
      setTimeout(() => {
         toast.dismiss();
         toast.success("FORM SUBMITTED SUCCESFULLY", { position: "top-center" });
         reset();
      }, 1500);
   }

   return (
      <div className="w-screen h-screen center bg-black">
         <form onSubmit={handleSubmit(submitHandler)} className="bg-neutral-800 border p-4 rounded-lg w-100  flex flex-col gap-5 border-neutral-500">
            <div id="USER__NAME" className="flex flex-col gap-2">
               <Label>Username</Label>
               <input
                  {...register("username")}
                  placeholder="username"
                  type="text"
                  className="border-neutral-700 px-2 py-1.5 rounded-lg ring-neutral-700 bg-neutral-400 text-black"
               />
               {formState.errors.username && (
                  <p className=" bg-red-800/20 text-xs text-neutral-300 p-1.5 rounded-sm">{formState.errors.username.message}</p>
               )}
            </div>

            <div id="EMAIL" className="flex flex-col gap-2">
               <Label>Email</Label>
               <input
                  {...register("email")}
                  placeholder="email"
                  type="email"
                  className="border-neutral-700 px-2 py-1.5 rounded-lg ring-neutral-700 bg-neutral-400 text-black"
               />
               {formState.errors.email && (
                  <p className=" bg-red-800/20 text-xs text-neutral-300 p-1.5 rounded-sm">{formState.errors.email.message}</p>
               )}
            </div>

            <div id="PASSWORD" className="flex flex-col gap-2 relative inset-0">
               <Label>Password</Label>
               <input
                  {...register("password")}
                  placeholder="password"
                  type={type == "password" ? "password" : "text"}
                  className="border-neutral-700 px-2 py-1.5 rounded-lg ring-neutral-700 bg-neutral-400 text-black"
               />
               {formState.errors.password && (
                  <p className=" bg-red-800/20 text-xs text-neutral-300 p-1.5 rounded-sm">{formState.errors.password.message}</p>
               )}
               <Eye className="absolute top-7.5 right-2 size-5 text-neutral-800" onClick={switchShowPassword} />
            </div>

            <div id="CONFIRM__PASSWORD" className="flex flex-col gap-2 relative inset-0">
               <Label>Confirm Password</Label>
               <input
                  {...register("confirmPassword")}
                  placeholder="Confirm Password"
                  type={type2 == "password" ? "password" : "text"}
                  className="border-neutral-700 px-2 py-1.5 rounded-lg ring-neutral-700 bg-neutral-400 text-black"
               />
               {formState.errors.confirmPassword && (
                  <p className=" bg-red-800/20 text-xs text-neutral-300 p-1.5 rounded-sm">{formState.errors.confirmPassword.message}</p>
               )}
               <Eye className="absolute top-7.5 right-2 size-5 text-neutral-800" onClick={switchShowPassword2} />
            </div>

            <div id="HAS__PHONE__NUMBER" className="flex items-center-safe gap-2">
               <input type="checkbox" {...register("hasPhone")} />
               <Label>Has Phonenumber</Label>
            </div>

            {watch("hasPhone") && (
               <div id="PHONE____NUMBER" className="flex flex-col gap-2 relative inset-0">
                  <Label>Phonenumber</Label>
                  <input
                     {...register("phoneNumber")}
                     placeholder="Phonenumber"
                     type="text"
                     className="border-neutral-700 px-2 py-1.5 rounded-lg ring-neutral-700 bg-neutral-400 text-black"
                  />
                  {formState.errors.phoneNumber && (
                     <p className=" bg-red-800/20 text-xs text-neutral-300 p-1.5 rounded-sm">{formState.errors.phoneNumber.message}</p>
                  )}
               </div>
            )}

            <div id="GENDER">
               <Controller
                  name="gender"
                  control={control}
                  render={({ field }) => (
                     <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger className="w-full bg-black">
                           <SelectValue placeholder="Select Gender" />
                        </SelectTrigger>
                        <SelectContent className="bg-black">
                           <SelectGroup>
                              <SelectItem className="hover:bg-neutral-700 transition-all duration-250" value="MALE">
                                 Male
                              </SelectItem>
                              <SelectItem className="hover:bg-neutral-700 transition-all duration-250" value="FEMALE">
                                 Female
                              </SelectItem>
                              <SelectItem className="hover:bg-neutral-700 transition-all duration-250" value="OTHER">
                                 Other
                              </SelectItem>
                           </SelectGroup>
                        </SelectContent>
                     </Select>
                  )}
               />
               {formState.errors.gender && (
                  <p className=" bg-red-800/20 text-xs text-neutral-300 p-1.5 rounded-sm">{formState.errors.gender.message}</p>
               )}
            </div>

            <div className="border-t-2 border-neutral-700 pt-2 mt-2">
               <Button type="submit" className="w-full">
                  Submit
               </Button>
            </div>
         </form>
      </div>
   );
};

export default ReactHookFormV2;
