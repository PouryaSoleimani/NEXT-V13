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
         items: [{ title: "", level: 1 }],
      },
   });

   const { fields, append, remove } = useFieldArray({
      control: control,
      name: "items",
   });

   function submitHandler(data: FormTypes) {
      console.info("FORM DATAS ==>", data?.items);
      toast.success("Form Submitted", { position: "top-center" });
      reset({ items: [{ title: "", level: 1 }] });
   }

   return (
      <div className="bg-black section">
         {fields.length === 0 && <h2 className="py-3">Start Adding Fields ...</h2>}
         <form
            onSubmit={handleSubmit(submitHandler)}
            className="p-8 pb-2 border-neutral-700 flex flex-col gap-y-2 rounded-lg">
            {fields.map((field, index) => (
               <div key={field.id} className="flex gap-3 pb-3">
                  <div className="flex flex-col gap-1">
                     <input
                        className="border border-neutral-800 bg-neutral-900 uppercase shadow rounded-md p-2"
                        type="text"
                        {...register(`items.${index}.title`)}
                        placeholder="title"
                     />
                     {formState?.errors?.items?.[index]?.title && (
                        <p className="text-xs text-red-900">{formState.errors.items[index].title.message}</p>
                     )}
                  </div>
                  <div className="flex flex-col gap-1">
                     <input
                        className="border border-neutral-800 bg-neutral-900 uppercase shadow rounded-md p-2"
                        type="text"
                        {...register(`items.${index}.level`, { valueAsNumber: true })}
                        placeholder="level"
                     />
                     {formState?.errors?.items?.[index]?.level && (
                        <p className="text-xs text-red-900">{formState.errors.items[index].level.message}</p>
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

export default TestPage;
