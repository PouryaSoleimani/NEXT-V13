"use client";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const FormSchema = z.object({
   email: z.email("Email is Invalid").min(1, "Email is Required"),
});

type FormValuesType = z.infer<typeof FormSchema>;

const ReactHookFormPage = () => {
   const { register, handleSubmit, formState, reset, setError } = useForm<FormValuesType>({
      resolver: zodResolver(FormSchema),
   });

   function onSubmit(data: FormValuesType, e: any) {
      console.log("DATAS => ", data);
      alert(`FORM VALUES => EMAIL : ${data.email}`);
      setError("email", { message: "" });
      reset();
   }

   return (
      <form className="bg-zinc-700 w-fit p-6 rounded-xl mx-auto my-32 flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
         <input type="email" placeholder="EMAIL ..." {...register("email", { required: "Email is Required" })} className="p-2 border border-black rounded-lg font-thin" />
         {formState.isDirty && formState.errors.email && <p className="text-sm text-red-700 font-sans">{formState.errors.email.message}</p>}
         <Button type="submit">SUBMIT</Button>
      </form>
   );
};

export default ReactHookFormPage;
