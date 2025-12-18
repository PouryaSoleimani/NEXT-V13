import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import z from "zod"

const FORMSCHEMA = z.object({
   items: z
      .array(
         z.object({
            title: z.string().min(1, "Title must be at least 1 character"),
            level: z.number().min(1, "level (percentage) must be > 0"),
         })
      )
      .min(1, "Skills must have at least 1 items"),
}); 
type FormTypes = z.infer<typeof FORMSCHEMA>;


const TestPage = () => {

   const { control, register, handleSubmit } = useForm<FormTypes>({
      resolver: zodResolver(FORMSCHEMA),
      defaultValues: {
         items: [{ title: "", level: 0 }],
      },
   });

   const { fields, append, remove } = useFieldArray({
      control: control,
      name: "items",
   });


  return <div className=""></div>;
}

export default TestPage