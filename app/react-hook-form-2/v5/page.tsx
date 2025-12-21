"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import z from "zod";
import SkillItem from "./_components/SkillItem";
import toast from "react-hot-toast";
import { PlusCircle, TriangleAlert } from "lucide-react";
import { cn } from "@/lib/utils";

export const FORMSCHEMA = z.object({
   skills: z
      .array(
         z.object({
            title: z.string().min(1, "Title is Required"),
            level: z.number().min(1, "Years Is Required").nullable(),
            experiences: z
               .array(
                  z.object({
                     company: z.string().min(1, "Company is Required"),
                     years: z.number().min(0, "Year Must be at least 0").nullable(),
                  })
               )
               .min(1, "At Least 1 Experience Field is Required"),
         })
      )
      .min(1, "At least one skill required"),
});

export type FormTypes = z.infer<typeof FORMSCHEMA>;

const ReactHookFormV5 = () => {
   // USE FORM
   const {
      control,
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm<FormTypes>({
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
      fields: skillFields,
      append: appendSkill,
      remove: removeSkill,
   } = useFieldArray({
      control: control,
      name: "skills",
   });

   function SubmitHandler(data: FormTypes) {
      console.info("DATA => ", data);
      toast.success("FORM SUBMITTED", { position: "top-center" });
      reset();
   }

   return (
      <div className="section bg-black min-h-screen p-8">
         <form onSubmit={handleSubmit(SubmitHandler)} className="max-w-4xl mx-auto">
            {skillFields.length === 0 && (
               <div className="flex flex-col items-center gap-3 bg-zinc-800 p-3 rounded-lg shadow-inner shadow-white/30 text-rose-400 w-86">
                  <TriangleAlert />
                  <h3>NO SKILLS TO SHOW</h3>
                  <button
                     type="button"
                     onClick={() =>
                        appendSkill({
                           title: "",
                           level: null,
                           experiences: [{ company: "", years: null }],
                        })
                     }
                     className="btn flex items-center-safe gap-3">
                     <PlusCircle className="size-4" />
                     ADD FIRST SKILL
                  </button>
               </div>
            )}

            {skillFields.map((skill, index) => (
               <SkillItem
                  key={skill.id}
                  control={control}
                  register={register}
                  errors={errors}
                  index={index}
                  removeSkill={removeSkill}
               />
            ))}

            <div
               id="BUTTONS__CONTAINER"
               className={cn(
                  "flex gap-3 w-[50%] mx-auto  py-5",
                  skillFields.length === 0 && "w-full"
               )}>
               <button className=" basis-1/2 text-sm p-3 rounded-lg border border-emerald-950 shadow-inner shadow-white/10  mx-auto bg-emerald-900 hover:bg-emerald-800 transition-all duration-300 ">
                  SUBMIT FORM
               </button>
               <button
                  onClick={() =>
                     appendSkill({
                        title: "",
                        level: 1,
                        experiences: [{ company: "", years: null }],
                     })
                  }
                  type="button"
                  className="basis-1/2 text-sm p-3 rounded-lg border border-sky-950 shadow-inner shadow-white/10  mx-auto bg-sky-900 hover:bg-sky-800 transition-all duration-300 ">
                  ADD SKILL
               </button>
            </div>

         </form>
      </div>
   );
};

export default ReactHookFormV5;
