"use client";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye } from "lucide-react";
import React, { useRef, useState } from "react";
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

   function onSubmit(data: FormValuesType, e: any) {
      console.log("DATAS => ", data);
      alert(`FORM VALUES => EMAIL : ${data.email}`);
      setError("email", { message: "" });
      reset();
   }
   const passwordRef = useRef<any>(null);

   function switchShowPassword() {
      if (type == "password") {
         setType("text");
      } else {
         setType("password");
      }
   }
   return (
      <form
         className="bg-zinc-700 w-fit p-6 rounded-xl mx-auto my-32 flex flex-col gap-2"
         onSubmit={handleSubmit(onSubmit)}>
         <input
            type="email"
            placeholder="Email ..."
            {...register("email", { required: "Email is Required" })}
            className="p-2 border border-black rounded-lg font-thin"
         />
         {formState.isDirty && formState.errors.email && (
            <p className="text-sm text-red-700 font-sans">{formState.errors.email.message}</p>
         )}
         <input
            type="text"
            placeholder="Name ..."
            className="p-2 border border-black rounded-lg font-thin"
            {...register("name", { required: "Name is Required" })}
         />
         {formState.errors.name && (
            <p className="text-xs text-red-700 font-sans pt-1">{formState.errors.name.message}</p>
         )}
         <div className="relative inset-0">
            <input
               type={type == "password" ? "password" : "text"}
               placeholder="Password ..."
               {...register("password", { required: "Password is Required" })}
               className="p-2 border w-full border-black rounded-lg font-thin"
            />
            <Eye onClick={switchShowPassword} className="absolute bottom-2 right-3 text-zinc-300" />
         </div>
         {formState.errors.password && (
            <p className="text-xs text-red-700 font-sans pt-1 max-w-sm">{formState.errors.password.message}</p>
         )}

         <Button type="submit">SUBMIT</Button>
      </form>
   );
};

export default ReactHookFormPage;
