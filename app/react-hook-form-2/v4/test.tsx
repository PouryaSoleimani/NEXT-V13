import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form';
import z from 'zod';

const FormSchema = z.object({
   items: z.array(z.object({ title: z.string(), price: z.number() })),
});


type FormTypes = z.infer<typeof FormSchema>;

const TestPage = () => {
  const { control, register } = useForm<FormTypes>({
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
              <button onClick={() => remove(index)}>DELETE</button>
           </div>
        ))}
        <button onClick={() => append({ title: "", price: 0 })}>ADD</button>
     </div>
  );
}

export default TestPage;