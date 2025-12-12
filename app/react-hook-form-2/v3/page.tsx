'use client'
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Label } from '@/components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import z from 'zod';

const FormSchema = z.object({
   email: z.email("Email Invalid").min(1 , "Email can't be Empty"),
});

const ReactHookForm3 = () => {
   type FormSchemaType = z.infer<typeof FormSchema>;

   const { control, handleSubmit, formState, reset } = useForm<FormSchemaType>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
         email: "",
      },
   });

   function submitHandler(data: FormSchemaType) {
      console.info("DATA =>", data);
      toast.loading("SUBMITTING FORM ...", { position: "top-center" });
      setTimeout(() => {
        toast.dismiss()
        toast.success("FORM SUBMITTED SUCCESFULLY ... ", { position: "top-center" });
      }, 1000);
      reset();
   }
   return (
      <section className="w-screen h-screen bg-black center ">
         <form className="border-4 border-neutral-700 bg-neutral-900 p-5 rounded-lg flex flex-col gap-3" onSubmit={handleSubmit(submitHandler)}>
            <h2 className="text-center border-b-2 border-blue-900 pb-2">LOGIN</h2>
            <div id="EMAIL" className="flex flex-col gap-1">
               <Label className="text-blue-100 mb-2">Email</Label>
               <Controller
                  name="email"
                  control={control}
                  render={({ field }) => <Input placeholder="Email ..." value={field.value} onChange={field.onChange} />}
               />
               {formState.errors.email && (
                  <p className="text-xs bg-red-400/30 text-red-100 font-semibold p-1 rounded-sm">{formState.errors.email.message}</p>
               )}
            </div>

            <div id="SUBMIT___BUTTON" className="w-full border-t-2 border-neutral-700 pt-4">
               <Button className="w-full bg-blue-950 hover:bg-blue-900 transition-all duration-300">Submit</Button>
            </div>
         </form>
      </section>
   );
}

export default ReactHookForm3;