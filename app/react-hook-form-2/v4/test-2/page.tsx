"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { TrashIcon } from "lucide-react";
import { useFieldArray, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import z from "zod";

const FORMSCHEMA = z.object({
   items: z
      .array(
         z.object({
            title: z.string("Title is Required").min(1, "Title must be at least 1 character"),
            level: z.number().min(1, "Level Must Be > 0").max(5, "Level Can't be > 5"),
         })
      )
      .min(1, "Skills must have at least 1 items"),
});

type FormTypes = z.infer<typeof FORMSCHEMA>;

const Test2Page = () => {
   const { control, register, formState, reset, handleSubmit } = useForm<FormTypes>({
      resolver: zodResolver(FORMSCHEMA),
      defaultValues: {
         items: [{ title: "", level: 1 }],
      },
   });

   const { fields, remove, append } = useFieldArray({
      control: control,
      name: "items",
   });

   function submitHandler(data: FormTypes) {
      console.info("FORM DATAS ==>", data?.items);
      toast.success("Form Submitted", { position: "top-center" });
      reset({ items: [{ title: "", level: 1 }] });
   }

   return (
      <div className="section bg-black border border-neutral-700 ">
         <h3>TEST 2 PAGE</h3>
         <form onSubmit={handleSubmit(submitHandler)} className="p-8  pb-5 flex flex-col gap-y-2 rounded-lg">
            {fields.map((field, index) => (
               <div key={field.id} className="flex gap-2">
                  <div className="flex flex-col gap-1">
                     <input
                        className="border border-neutral-800 bg-neutral-900 uppercase shadow rounded-md p-2"
                        type="text"
                        {...register(`items.${index}.title`)}
                        placeholder="Title"
                     />
                     {formState.errors.items?.[index]?.title && (
                        <p className="text-xxs px-1 text-rose-900">
                           {formState.errors.items[index].title.message}
                        </p>
                     )}
                  </div>
                  <div className="flex flex-col gap-1">
                     <input
                        className="border border-neutral-800 bg-neutral-900 uppercase shadow rounded-md p-2"
                        type="text"
                        {...register(`items.${index}.level`, { valueAsNumber: true })}
                        placeholder="Level"
                     />
                     {formState?.errors?.items?.[index]?.level && (
                        <p className="text-xxs px-1 text-rose-900">
                           {formState.errors.items[index].level?.message}
                        </p>
                     )}
                  </div>
                  <div>
                     <button
                        onClick={() => remove(index)}
                        type="button"
                        className="flex cursor-pointer bg-red-900/50 size-10 justify-center items-center border p-1 border-neutral-800 rounded-sm">
                        <TrashIcon className="size-5" />
                     </button>
                  </div>
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

export default Test2Page;
