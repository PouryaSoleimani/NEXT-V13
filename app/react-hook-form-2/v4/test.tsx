import { zodResolver } from "@hookform/resolvers/zod";
import { Trash2Icon } from "lucide-react";
import { useFieldArray, useForm } from "react-hook-form";
import z from "zod"

const FormSchema = z.object({
   items: z
      .array(
         z.object({
            title: z.string().min(1),
            price: z.number().min(1),
         })
      )
      .min(1),
}); 

type FormType = z.infer<typeof FormSchema>;


const TestPage = () => {
  const { control, register, handleSubmit, formState, reset } = useForm<FormType>({
     resolver: zodResolver(FormSchema),
     defaultValues: {
        items: [{ title: "", price: 0 }],
     },
  });

  const { fields, append, remove } = useFieldArray({
     control: control,
     name: "items",
  });

   return (
      <div>
         {fields.map((field, index) => (
            <div key={field.id}>
               <input type="text" {...register(`items.${index}.title`)} />
               <input type="text" {...register(`items.${index}.price`)} />
               <button onClick={() => remove(index)}>
                  <Trash2Icon />
               </button>
            </div>
         ))}
         <button onClick={() => append({ title: "", price: 0 })}>add</button>
      </div>
   );
};

export default TestPage;