'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { Resolver, useFieldArray, useForm } from "react-hook-form";
import z from "zod";
import SkillItemV2 from "./_components/SkillItem";

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

export type FormTypesV6 = z.infer<typeof FORMSCHEMA>;

const ReactHookFormV6 = () => {
   const {
      control,
      register,
      formState: { errors },
   } = useForm<FormTypesV6>({
      resolver: zodResolver(FORMSCHEMA) as Resolver<FormTypesV6>,
      defaultValues: {
         skills: [{ title: "", level: 1, experiences: [{ company: "", years: 1 }] }],
      },
   });
   const {
      fields: skillFields,
      append: skillAppend,
      remove: skillRemove,
   } = useFieldArray({
      control: control,
      name: "skills",
   });
   return (
      <div>
         <form>
            {skillFields.map((skill, index) => (
               <SkillItemV2
                  control={control}
                  register={register}
                  key={skill.id}
                  title={skill.title}
                  level={skill.level}
                  experiences={skill.experiences}
                  fields={skillFields}
                  append={skillAppend}
                  remove={skillRemove}
                  errors={errors}
                  index={index}
               />
            ))}
         </form>
      </div>
   );
};

export default ReactHookFormV6;