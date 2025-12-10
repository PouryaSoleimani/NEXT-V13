"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const FormSchema = z.object({
   email: z.email("Email is Invalid").min(1, "Email is Required"),
   name: z.string().min(2, "Name Must be at least 2 Characters"),
   password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormValuesType = z.infer<typeof FormSchema>;

const ReactHookFormPage = () => {
   const [type, setType] = useState<"password" | "text">("password");

   const { register, handleSubmit, formState, reset, setError } = useForm<FormValuesType>({
      resolver: zodResolver(FormSchema),
   });

   function onSubmit(data: FormValuesType) {
      console.info("DATAS => ", data);
      alert(`FORM VALUES => EMAIL : ${data.email}`);
      reset();
   }

   function switchShowPassword() {
      if (type == "password") {
         setType("text");
      } else {
         setType("password");
      }
   }

   return (
      <form
         className="bg-zinc-700/50 backdrop-blur-2xl border shadow-sm shadow-zinc-500 border-zinc-500 w-100  p-6 rounded-xl mx-auto my-32 flex flex-col gap-2"
         onSubmit={handleSubmit(onSubmit)}>
         <Label>Email</Label>
         <input
            type="email"
            placeholder="Email ..."
            {...register("email")}
            className="p-2 border border-black rounded-lg font-thin"
         />
         {formState.errors.email && (
            <p className="text-xs tracking-wide text-red-300 font-sans">{formState.errors.email.message}</p>
         )}
         <Label className="mt-2">Name</Label>
         <input
            type="text"
            placeholder="Name ..."
            className="p-2 border border-black rounded-lg font-thin"
            {...register("name")}
         />
         {formState.errors.name && (
            <p className="text-xs tracking-wide text-red-300 font-sans pt-1">{formState.errors.name.message}</p>
         )}
         <div className="relative inset-0 mt-2">
            <Label className="pb-2">Password</Label>
            <input
               type={type == "password" ? "password" : "text"}
               placeholder="Password ..."
               {...register("password")}
               className="p-2 border w-full border-black rounded-lg font-thin"
            />
            <Eye onClick={switchShowPassword} className="absolute bottom-2 right-3 text-zinc-300" />
         </div>
         {formState.errors.password && (
            <p className="text-xs tracking-wide text-red-300 font-sans pt-1 max-w-sm">
               {formState.errors.password.message}
            </p>
         )}

         <Button type="submit" variant={"success"} className="mt-3 font-thin">
            SUBMIT
         </Button>
      </form>
   );
};

export default ReactHookFormPage;
