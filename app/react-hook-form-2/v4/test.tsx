import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import z from "zod"

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

   return (
      <div className="">
         {fields.map((field, index) => (
            <div key={field.id}>
               <input type="text" {...register(`items.${index}.title`)} placeholder="title" />
               <input type="text" {...register(`items.${index}.level`)} placeholder="level" />
            </div>
         ))}
      </div>
   );
};

export default TestPage