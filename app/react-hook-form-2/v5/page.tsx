import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";


const FORMSCHEMA = z.object({
   skills: z.array(
      z.object({
         title: z.string(),
         level: z.number(),
         experience: z.array(z.object({ company: z.string(), years: z.number() })),
      })
   ),
});
type FormTypes = z.infer<typeof FORMSCHEMA>;



const NestedFieldArray = () => {
   const { control, register, handleSubmit } = useForm<FormTypes>({
      resolver: zodResolver(FORMSCHEMA),
      defaultValues: {
         skills: [{ title: "", level: 1, experience: [{ company: "", years: 1 }] }],
      },
   });

   return <div>NestedFieldArray</div>;
};

export default NestedFieldArray;
