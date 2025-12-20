"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Resolver, useForm } from "react-hook-form";
import z from "zod";

export const FORMSCHEMAS = z.object({
   skills: z
      .array(
         z.object({
            title: z.string(),
            level: z.coerce
               .number({ error: "Level Must be a number" })
               .min(1, "Minimun 1")
               .max(5, "Maximum 5"),
            experiences: z
               .array(
                  z.object({
                     company: z.string().min(1, "Company Name is Required"),
                     years: z.coerce
                        .number({ error: "Years Must Be a number" })
                        .min(1, "Minimun 1")
                        .max(5, "Maximum 5")
                        .nullable(),
                  })
               )
               .min(1, "At least 1 Company is Required"),
         })
      )
      .min(1, "At least 1 Skill is Required"),
});
type FormTypes = z.infer<typeof FORMSCHEMAS>;

const ReactHookFormV6 = () => {
   const { control } = useForm<FormTypes>({
      resolver: zodResolver(FORMSCHEMAS) as Resolver<FormTypes>,
      defaultValues: {
         skills: [{ title: "", level: 0, experiences: [{ company: "", years: 0 }] }],
      },
      mode: "onBlur",
   });
   return <div className="section bg-black"></div>;
};

export default ReactHookFormV6;
