"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, Resolver, useFieldArray, useForm } from "react-hook-form";
import z from "zod";
import SkillItemV6 from "./_components/SkillItem";

export const FORMSCHEMAV6 = z.object({
   skills: z
      .array(
         z.object({
            title: z.string().min(1, "Title is Required"),
            level: z.coerce
               .number()
               .min(1, "Level Must be Between 1 to 5")
               .max(5, "Level Must be between 1 to 5")
               .int()
               .nullable(),

            experiences: z
               .array(
                  z.object({
                     company: z.string().min(1, "Company is Required"),
                     years: z.coerce.number().min(0).nullable(),
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
      register,
   } = methods;

   const {
      fields: skillFields,
      append: skillAppend,
      remove: skillRemove,
   } = useFieldArray({
      control: control,
      name: "skills",
   });
function submitHandler(data:FormTypesV6) {
   console.info("FORM DATA =>", data);
}
   return (
      <div className="section bg-black">
         <FormProvider {...methods}>
            <form onSubmit={handleSubmit(submitHandler)}>
               {skillFields.map((skill, index) => (
                  <SkillItemV6 key={skill.id} {...methods} />
               ))}
            </form>
         </FormProvider>
      </div>
   );
};

export default ReactHookFormV6;
