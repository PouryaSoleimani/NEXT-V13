"use client";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Trash } from "lucide-react";
import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import z from "zod";

//^ FORM SCHEMA
const FormSchema = z.object({
   items: z
      .array(
         z.object({
            title: z.string().min(1, "Title Can't Be Empty"),
            level: z.number().min(1, "Level Must be between 1 and 5").max(5, "Level Must be between 1 and 5"),
         })
      )
      .min(1, "At Least One Item is Required"),
});
type FormTypes = z.infer<typeof FormSchema>;

// COMPONENT ______________________________________________________________________________________________________________________________________
const ReactHookFormV4 = () => {
   // ^ USE FORM
   const { control, register, handleSubmit, formState, reset } = useForm<FormTypes>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
         items: [{ title: "", level: 0 }],
      },
   });

   //^ USEFIELD ARRAY
   const { fields, append, remove } = useFieldArray({
      control: control,
      name: "items",
   });

   //^ SUBMIT HANDLER
   function submitHandler(data: FormTypes) {
      console.log("DATA => ", data);
      reset();
      toast.success("FORM SUBMITTED", { position: "top-center" });
   }  

   useEffect(() => {
      if (fields.length == 5) {
         toast.error('Skills List Can"t be more than 5 items !');
      }
   }, [fields.length]);
   

   console.log(formState.errors);

   //^ RETURN ___________________________________________________________________________________________________________
   return (
      <section className="w-screen h-screen bg-black center flex-col gap-3">
         <h2 className="border-b-2 pb-1 border-sky-900 mb-4">SKILLS LENGTH : {fields.length} Items </h2>
         <form
            onSubmit={handleSubmit(submitHandler)}
            className="flex flex-col gap-2 border p-5 rounded-lg border-zinc-700 shado">
            <h3 className="p-1">Please Add Your Skills here : </h3>
            {fields.map((field, index) => (
               <div
                  key={field.id}
                  className="flex items-center border border-zinc-800 bg-zinc-900 p-3 rounded-lg">
                  <input
                     {...register(`items.${index}.title`)}
                     type="text"
                     placeholder="Skill Title"
                     className="border bg-black p-2.5 border-zinc-800 rounded-lg m-2 "
                  />
                  {formState.errors.items?.[index]?.title && (
                     <p className="text-red-900 text-xs py-0.5">
                        {formState.errors.items[index]?.title?.message}
                     </p>
                  )}
                  <input
                     type="number"
                     placeholder="Skill Level ( 1 to 5 )"
                     {...register(`items.${index}.level`, { valueAsNumber: true })}
                     className="border bg-black p-2.5 border-zinc-800 rounded-lg m-1 ml-0 mr-2 "
                  />
                  {formState.errors?.items?.[index]?.level && (
                     <p>{formState?.errors.items[index]?.level?.message}</p>
                  )}
                  <Button variant={"destructive"} className="size-10.5" onClick={() => remove(index)}>
                     <Trash className="size-5" />
                  </Button>
               </div>
            ))}
            <div className="flex items-center1 justify-center gap-5 p-5 border-t-2 mt-5 border-zinc-800">
               <Button
                  type="button"
                  variant={"blue"}
                  className="w-50"
                  disabled={fields.length >= 5}
                  onClick={() => append({ title: "", level: 0 })}>
                  ADD FIELD
               </Button>
               <Button
                  disabled={fields.length >= 5}
                  variant={"success"}
                  type="submit"
                  className="w-50 text-white">
                  SUBMIT FORM
               </Button>
            </div>
         </form>
      </section>
   );
};

export default ReactHookFormV4;
