'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import z from "zod";
//^ FORM SCHEMA
const FORMSCHEMA = z.object({
   skills: z
      .array(
         z.object({
            title: z.string().min(1),
            level: z.number().min(1).max(5),
            experiences: z.array(
                  z.object({
                     company: z.string().min(1),
                     years: z.number().min(1),
                  })
               )
               .min(1),
         })
   )
      .min(1),
});

type FormTypes = z.infer<typeof FORMSCHEMA>

const NestedFilledArray = () => {
   const { control } = useForm<FormTypes>({
      resolver: zodResolver(FORMSCHEMA),
      defaultValues: {
         skills : [
            { title: '', level: 1, experiences: [{ company: '', years: 1 }] }
         ]
      }
   })

   const { fields: skillFields, append: addSkill, remove: removeSkill } = useFieldArray({
   control : control,
      name: 'skills'
})


   return (
      <div className="section bg-neutral-950">
         <form>FORM</form>
      </div>
   );
};

export default NestedFilledArray;
