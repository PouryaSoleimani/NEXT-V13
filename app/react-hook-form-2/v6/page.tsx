"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, Resolver, useFieldArray, useForm, useWatch } from "react-hook-form";
import z from "zod";
import SkillItemV6 from "./_components/SkillItem";
import toast from "react-hot-toast";
import { RefreshCcw, RefreshCcwDot } from "lucide-react";

export const FORMSCHEMAV6 = z.object({
   skills: z
      .array(
         z.object({
            title: z.string().min(1, "Title is Required"),
            level: z.coerce
               .number("Level must be a Number")
               .min(1, "Level Must be Between 1 to 5")
               .max(5, "Level Must be between 1 to 5")
               .int()
               .nullable(),

            experiences: z
               .array(
                  z.object({
                     company: z.string().min(1, "Company is Required"),
                     years: z.coerce.number("Years must be a Number").min(0).nullable(),
                  })
               )
               .min(1, "At least 1 experience is Required"),
         })
      )
      .min(1, "At least 1 Skill is Required"),
});

export type FormTypesV6 = z.infer<typeof FORMSCHEMAV6>;

const ReactHookFormV6 = () => {
   const methods = useForm<FormTypesV6>({
      resolver: zodResolver(FORMSCHEMAV6) as Resolver<FormTypesV6>,
      defaultValues: {
         skills: [
            { title: "", level: null, experiences: [{ company: "", years: null }] },
         ],
      },
   });

   const {
      control,
      formState: { errors },
      handleSubmit,
      reset,
   } = methods;

   const {
      fields: skillFields,
      append: skillAppend,
      remove: skillRemove,
   } = useFieldArray({
      control: control,
      name: "skills",
   });

   function submitHandler(data: FormTypesV6) {
      console.info("FORM DATA =>", data);
      toast.success("FORM SUBMITTED SUCCESSFULLY", { position: "top-center" });
      reset();
   }

   const _skills = useWatch({
      control: control,
      name: `skills`,
   });

   console.log("LENGTH =>", _skills.length);

   return (
      <div className="section bg-black">
         <FormProvider {...methods}>
            <form onSubmit={handleSubmit(submitHandler)} className="grid gap-3">
               {/* FALLBACK */}
               {!skillFields.length && (
                  <div className="flex items-center-safe justify-center bg-zinc-800 p-10 rounded-lg">
                     No Skills ...
                  </div>
               )}
               <div className="grid grid-cols-4 gap-3">
                  {skillFields.map((skill, index) => (
                     <SkillItemV6
                        key={skill.id}
                        {...methods}
                        index={index}
                        skillRemove={skillRemove}
                        errors={errors}
                        submitHandler={submitHandler}
                     />
                  ))}
               </div>
               {/* BUTTONS */}
               <div className="flex items-center gap-3 justify-center w-full  py-5">
                  <button
                     onClick={() =>
                        skillAppend({
                           title: "",
                           level: null,
                           experiences: [{ company: "", years: null }],
                        })
                     }
                     disabled={_skills.length >= 4}
                     type="button"
                     className="btn rounded-full! bg-emerald-900!">
                     + ADD SKILL
                  </button>
                  <button type="submit" className="btn rounded-full! bg-blue-900!">
                     ✔ SUBMIT
                  </button>
                  <button
                     type="button"
                     onClick={() => reset()}
                     className="btn flex items-center gap-1 rounded-full! bg-yellow-400 text-black! font-['JetBrains Mono']">
                     <RefreshCcw size={12} /> RESET FORM
                  </button>
               </div>
            </form>
         </FormProvider>
      </div>
   );
};

export default ReactHookFormV6;
