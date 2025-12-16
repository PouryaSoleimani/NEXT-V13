import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from "react";
import { useFieldArray, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import z from 'zod';



const FormSchema = z.object({
   items: z
      .array(
         z.object({
            title: z.string().min(1),
            level: z.number().min(1).max(100),
         })
      )
      .min(1),
});

type FormTypes = z.infer<typeof FormSchema>;

const TestPage = () => {
   const { control, register, handleSubmit, formState } = useForm<FormTypes>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
         items: [{ title: "", level: 0 }],
      },
   });

   const { fields, append, remove } = useFieldArray({
      control: control,
      name: "items",
   });

   useEffect(() => {
      if (fields.length >= 5) {
         toast.error("حداکثر آیتم مجاز 5 عدد می باشد ");
      }
   }, [fields]);

   return (
      <div>
         {fields.map((field, index) => (
            <div key={field.id}>
               <input type="text" {...register(`items.${index}.title`)} placeholder="title" />
               <input type="text" {...register(`items.${index}.level`)} />
               <button onClick={() => remove(index)}>REMOVE</button>
            </div>
         ))}
         <button disabled={fields.length >= 5} onClick={() => append({ title: "", level: 0 })}>
            ADD
         </button>
      </div>
   );
};

export default TestPage;