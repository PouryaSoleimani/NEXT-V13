'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, FormProvider, Resolver, useForm, useWatch } from "react-hook-form";
import z from "zod";
import FieldError from "./_components/FieldError";
import toast from "react-hot-toast";
import { useEffect } from "react";
import axios from "axios";
import { AlertTriangle } from "lucide-react";

const FORMSCHEMAV7 = z.object({
   title: z
      .string()
      .min(1, "Title is Required")
      .max(5, "Maximum 5 Characters are allowed"),
   price: z
      .string("Price is Required")
      .min(1, 'Price is Required')
      .regex(/^\d+$/, "Price must be only digits")
      .min(1, 'Price Must be >= 1')
});

export type FormTypesv7 = z.infer<typeof FORMSCHEMAV7>;
 
const ReactHookFormV7 = () => { 
   
   const methods = useForm<FormTypesv7>({
      resolver: zodResolver(FORMSCHEMAV7) as Resolver<FormTypesv7>,
      mode: 'onChange',
      defaultValues: {
         title: "",
         price: ""
      },
   });
   
   // FOR VALIDATING SUBMIT BUTTON
   const { isValid, isSubmitting } = methods.formState 

   function submitApi() {
      axios.get('https://jsonplaceholder.typicode.com/todos/2')
         .then(res => res.data)
         .catch(err => {
            console.info('ERROR => ', err.message);
            methods.setError('root', {
               type: 'deps',
               message: "Network Problem"
            })
         })
   }

   useEffect(() => {
      submitApi()
   }, [])

   function submitHandler(data: FormTypesv7) { 
      submitApi();
      console.info("V7 DATA =>", data);
      toast.success(`FORM SUBMITTED  =>  Title :${data.title} Price:$${data.price}`, { position: "top-center", style: { width: "500px" } });
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

   console.info(Array(methods.formState.errors))

   return (
      <div className="section bg-zinc-900">
         <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(submitHandler)} className="flex flex-col gap-2">
               {methods.formState.errors.root && (
                  <p className="text-rose-900 underline underline-offset-2 p-1 text-xxs rounded-sm flex items-center gap-3">
                     <AlertTriangle className="size-4" />
                     {methods.formState.errors.root.message}
                  </p>
               )}
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
                  render={({ field }) => (
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
                  disabled={!isValid || isSubmitting}
                  aria-disabled={!isValid || isSubmitting}
                  type="submit"
                  className="my-1 bg-emerald-900 hover:bg-emerald-800 w-full disabled:opacity-50 disabled:bg-zinc-500 disabled:pointer-events-none">
                  Submit
               </Button>
            </form>
         </FormProvider>
      </div>
   );
};

export default ReactHookFormV7;
