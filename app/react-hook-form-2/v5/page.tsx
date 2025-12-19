import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";


const FORMSCHEMA = z.object({
   skills: z.array(
      z.object({
         title: z.string().min(1, "Skill title required"),
         level: z.number().min(1).max(5),
         experience: z
            .array(
               z.object({
                  company: z.string().min(1, "Company is Required"),
                  years: z.number().min(1, "Years is Required"),
               })
            )
            .min(1, "At least 1 Company is Required"),
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
