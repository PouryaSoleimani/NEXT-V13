"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Trash2Icon, TrashIcon } from "lucide-react";
import { useFieldArray, useForm } from "react-hook-form";
import z from "zod";

const FORMSCHEMA = z.object({
   items: z
      .array(
         z.object({
            title: z.string().min(1, "Title must be at least 1 character"),
            level: z.number().min(1, "Level (percentage) must be > 0"),
         })
      )
      .min(1, "Skills must have at least 1 items"),
});

type FormTypes = z.infer<typeof FORMSCHEMA>;

const TestPage = () => {
   // USE FORM
   const { control, register, handleSubmit, formState, reset } = useForm<FormTypes>({
      resolver: zodResolver(FORMSCHEMA),
      defaultValues: {
         items: [{ title: "", level: 0 }],
      },
   });

   const { fields, append, remove } = useFieldArray({
      control: control,
      name: "items",
   });

   function submitHandler(data: FormTypes) {
      console.info(submitHandler);
   }

   return (
      <div className="bg-black section">
         {fields.length === 0 && <h2 className="py-3">Start Adding Fields ...</h2>}
         <form
            onSubmit={handleSubmit(submitHandler)}
            className="p-6 border border-neutral-700 flex flex-col gap-y-2 rounded-lg">
            {fields.map((field, index) => (
               <div key={field.id} className="flex gap-3 pb-3">
                  <input
                     className="border border-neutral-800 bg-neutral-900 uppercase shadow rounded-md p-2"
                     type="text"
                     {...register(`items.${index}.title`)}
                     placeholder="title"
                  />
                  <input
                     className="border border-neutral-800 bg-neutral-900 uppercase shadow rounded-md p-2"
                     type="text"
                     {...register(`items.${index}.level`)}
                     placeholder="level"
                  />
                  <button
                     onClick={() => remove(index)}
                     type="button"
                     className="flex cursor-pointer bg-red-900/50 w-10 justify-center items-center border p-1 border-neutral-800 rounded-sm">
                     <TrashIcon className="size-5" />
                  </button>
               </div>
            ))}
            <div className="flex items-center border-t-2 border-neutral-800 justify-center gap-3 p-5">
               <button
                  type="button"
                  disabled={fields.length >= 5}
                  onClick={() => append({ title: "", level: 1 })}
                  className="btn">
                  ADD FIELD
               </button>
               <button type="submit" className="btn">
                  SUBMIT FORM
               </button>
            </div>
         </form>
      </div>
   );
};

export default TestPage;
