'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import z from "zod";
import SkillItem from "./_components/SkillItem";

const FORMSCHEMA = z.object({
   skills: z.array(
      z.object({
         title: z.string(),
         level: z.number().nullable(),
         experiences: z.array(
            z.object({
               company: z.string(),
               years: z.number().nullable(),
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
         skills: [
            {
               title: "",
               level: null,
               experiences: [{ company: "", years: null }],
            },
         ],
      },
   });
   const {
      fields: SkillFields,
      append: SkillAppend,
      remove: SkillRemove,
   } = useFieldArray({
      control: control,
      name: "skills",
   });
   function SubmitHandler(data :FormTypes) {
      console.info("DATA => ", data);
   }
   return (
      <div className="section bg-black">
         <form onSubmit={handleSubmit(SubmitHandler)}>
            {SkillFields.map((skill, index) => (
               <SkillItem key={skill.id} control={control} register={register} index={index} removeSkill={SkillRemove} />
            ))}
            <div className="flex items-center-safe justify-center py-5">
               <button className=" p-3 rounded-lg border border-emerald-950 shadow-inner shadow-white/10  mx-auto bg-emerald-900 hover:bg-emerald-800 transition-all duration-300 ">
                  SUBMIT FORM
               </button>
            </div>
         </form>
      </div>
   );
};

export default ReactHookFormV5;