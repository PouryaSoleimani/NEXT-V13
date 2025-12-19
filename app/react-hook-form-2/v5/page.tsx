'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const FORMSCHEMA = z.object({
   skills: z.array(
      z.object({
         title: z.string(),
         level: z.number(),
         experiences: z.array(
            z.object({
               company: z.string(),
               years: z.number(),
            })
         ),
      })
   ),
});

type FormTypes = z.infer<typeof FORMSCHEMA>;

const ReactHookFormV5 = () => {
   const { control, register, handleSubmit } = useForm<FormTypes>({
      resolver: zodResolver(FORMSCHEMA),
      defaultValues: {
         skills: [{ title: "", level: 1, experiences: [{ company: "", years: 0 }] }],
      },
   });
   return (
      <div className="section bg-black">
         <form></form>
      </div>
   );
};

export default ReactHookFormV5;