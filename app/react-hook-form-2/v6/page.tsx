'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { Resolver, useForm } from "react-hook-form";
import z from "zod";

export const FORMSCHEMA = z.object({
   skills: z
      .array(
         z.object({
            title: z.string().min(1, "Title is Required"),
            level: z.coerce
               .number()
               .min(1, "level Must be >= 1")
               .max(5, "Level Must Be between 1 to 5")
               .int(),
            experiences: z
               .array(
                  z.object({
                     company: z.string().min(1, "Company is Required"),
                     years: z.coerce.number().min(1, "Years is Required").int(),
                  })
               )
               .min(1, "At least 1 Experience is Required"),
         })
      )
      .min(1, "At least 1 Skill is Required"),
});

type FormTypes = z.infer<typeof FORMSCHEMA>;

const ReactHookFormV6 = () => {
   const { control } = useForm<FormTypes>({
      resolver: zodResolver(FORMSCHEMA) as Resolver<FormTypes>,
      defaultValues: {
         skills: [{ title: "", level: 1, experiences: [{ company: "", years: 1 }] }],
      },
   });
   return <div>ReactHookFormV6</div>;
};

export default ReactHookFormV6;