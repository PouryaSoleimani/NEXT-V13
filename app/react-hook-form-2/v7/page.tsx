'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, FormProvider, Resolver, useForm, useWatch } from "react-hook-form";
import z from "zod";
import FieldError from "./_components/FieldError";
import toast from "react-hot-toast";
import { useEffect } from "react";

const FORMSCHEMAV7 = z.object({
   title: z
      .string()
      .min(1, "Title is Required")
      .max(5, "Maximum 5 Characters are allowed"),
   price: z.coerce.number("Price must be a Number").min(1, 'Price Must be >= 1').nullable()
});

export type FormTypesv7 = z.infer<typeof FORMSCHEMAV7>;

const ReactHookFormV7 = () => { 
   const methods = useForm<FormTypesv7>({
      resolver: zodResolver(FORMSCHEMAV7) as Resolver<FormTypesv7>,
      mode:'onBlur',
      defaultValues: {
         title: "",
         price: null
      },
   });

   function submitHandler(data: FormTypesv7) {
      console.info("V7 DATA =>", data);
      toast.success(`FORM SUBMITTED ||  ${data.title} : $${data.price}`, { position: "top-center" });
      methods.reset();
   }
  
   const titleValue = useWatch({
      name: "title",
      control: methods.control,
   });

   const priceValue = useWatch({
      control: methods.control,
      name: 'price'
   })

   useEffect(() => {
      if (titleValue !== "") {
         console.info("RERENDER");
      }
      return;
   }, [titleValue, priceValue])

   return (
      <div className="section bg-zinc-900">
         <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(submitHandler)} className="flex flex-col gap-2">
               <Controller
                  name="title"
                  control={methods.control}
                  render={({ field }) => (
                     <div className="flex flex-col gap-1">
                        <Input
                           value={field.value}
                           onChange={field.onChange}
                           placeholder="Title"
                        />
                        <FieldError name={field.name} />
                     </div>
                  )}
               />
               <Controller 
                  name="price"
                  control={methods.control}
                  render={({field}) => (
                     <div className="flex flex-col gap-1">
                        <Input 
                           value={field.value ?? ''}
                           onChange={field.onChange}
                           placeholder={'$ Price'}
                        />
                        <FieldError name={field.name} />
                     </div>
                  )}
                     />
               <hr className="text-zinc-700" />
               <Button
                  type="submit"
                  className="my-1 bg-emerald-900 hover:bg-emerald-800 w-full">
                  Submit
               </Button>
            </form>
         </FormProvider>
      </div>
   );
};

export default ReactHookFormV7;
