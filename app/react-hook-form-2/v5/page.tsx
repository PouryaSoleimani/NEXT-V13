'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import z from "zod";
import SkillItem from "./_components/SkillItem";
import toast from "react-hot-toast";
import { PlusCircle, TriangleAlert } from "lucide-react";

const FORMSCHEMA = z.object({
   skills: z.array(
      z.object({
         title: z.string().min(1, 'Title is Required'),
         level: z.number().min(1, 'Years Is Required').nullable(),
         experiences: z.array(
            z.object({
               company: z.string().min(1, 'Company is Required'),
               years: z.number().nullable(),
            })
         ),
      })
   ),
});

type FormTypes = z.infer<typeof FORMSCHEMA>;

const ReactHookFormV5 = () => {
   // USE FORM
   const { control, register, handleSubmit, formState, reset } = useForm<FormTypes>({
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

   const { fields: SkillFields, append: SkillAppend, remove: SkillRemove, } = useFieldArray({
      control: control,
      name: "skills",
   });

   function SubmitHandler(data: FormTypes) {
      console.info("DATA => ", data);
      toast.success('FORM SUBMITTED', { position: 'top-center' })
      reset({
         skills: [
            { title: "", level: null, experiences: [{ company: "", years: null }], },
         ],
      })
   }
   return (
      <div className="section bg-black">
         <form onSubmit={handleSubmit(SubmitHandler)}>
            {SkillFields.length === 0 && (
               <div className="flex flex-col items-center gap-3 bg-zinc-800 p-3 rounded-lg shadow-inner shadow-white/30 text-rose-900">
                  <TriangleAlert />
                  <h3>NO SKILLS TO SHOW</h3>
                  <button type="button" onClick={() => SkillAppend({ title: '', level: 1, experiences: [{ company: '', years: 0 }] })} className="btn flex items-center-safe gap-3">
                     <PlusCircle className="size-4" />
                     ADD SKILL
                  </button>
               </div>
            )}
            {SkillFields.map((skill, index) => (
               <SkillItem
                  key={skill.id}
                  control={control}
                  register={register}
                  index={index}
                  removeSkill={SkillRemove}
                  formState={formState}
               />
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