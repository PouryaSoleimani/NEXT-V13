"use client";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Trash } from "lucide-react";
import { useFieldArray, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import z from "zod";

const FormSchema = z.object({
   items: z
      .array(
         z.object({
            title: z.string().min(1, "Title is Required"),
            price: z.number().min(1, "Title Must be > 0"),
         })
      )
      .min(1, "At Least One Item is Required"),
});
type FormTypes = z.infer<typeof FormSchema>;

const ReactHookFormV4 = () => {
   const { control, register, handleSubmit, formState, reset } = useForm<FormTypes>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
         items: [{ title: "", price: 0 }],
      },
   });

   //^ USEFIELD ARRAY
   const { fields, append, remove } = useFieldArray({
      control: control,
      name: "items",
   });

   function submitHandler(data: FormTypes) {
      console.log("DATA => ", data);
      reset();
      toast.success("FORM SUBMITTED", { position: "top-center" });
   }

   console.log(formState.errors);

   return (
      <section className="w-screen h-screen bg-black center flex-col gap-3">
         <h2 className="border-b-2 pb-1 border-sky-900">LENGTH : {fields.length} Items </h2>
         <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-2">
            {fields.map((field, index) => (
               <div
                  key={field.id}
                  className="flex items-center border border-zinc-800 bg-zinc-900 p-3 rounded-lg">
                  <input
                     {...register(`items.${index}.title`)}
                     type="text"
                     placeholder="title"
                     className="border bg-black p-2.5 border-zinc-800 rounded-lg m-2 "
                  />
                  <input
                     type="number"
                     placeholder="price"
                     {...register(`items.${index}.price`, { valueAsNumber: true })}
                     className="border bg-black p-2.5 border-zinc-800 rounded-lg m-1 ml-0 mr-2 "
                  />
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
                  onClick={() => append({ title: "NEW", price: 20 })}>
                  ADD
               </Button>
               <Button variant={"success"} type="submit" className="w-50 text-white">
                  Submit
               </Button>
            </div>
         </form>
      </section>
   );
};

export default ReactHookFormV4;
