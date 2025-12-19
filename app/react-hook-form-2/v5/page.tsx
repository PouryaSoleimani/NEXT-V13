
"use client";
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import z from 'zod';

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

type FormTypes = z.infer<typeof FORMSCHEMA>
// COMPONENT ________________________________________________________________________________
const ReactHookFormV5 = () => {
   const { control, register } = useForm<FormTypes>({
      resolver: zodResolver(FORMSCHEMA),
      defaultValues: {
         skills: [{ title: "", level: 1, experiences: [{ company: "", years: 0 }] }],
      },
   });
   const {
      fields: skillFields,
      append: skillAppend,
      remove: removeSkill,
   } = useFieldArray({
      control: control,
      name: "skills",
   });

   return (
      <div className="section">
         {skillFields?.map((skill, skillIndex) => {
            const {
               fields: expFields,
               append: addExp,
               remove: removeExp,
            } = useFieldArray({
               control,
               name: `skills.${skillIndex}.experiences`,
            });

            return (
               <div key={skill.id} className="border bg-zinc-800 p-5 rounded-lg">
                  <input
                     className="border border-zinc-800 p-2 rounded-lg bg-zinc-900"
                     {...register(`skills.${skillIndex}.title`)}
                     placeholder="title"
                  />
                  <input
                     className="border border-zinc-800 p-2 rounded-lg bg-zinc-900"
                     type="number"
                     {...register(`skills.${skillIndex}.level`, { valueAsNumber: true })}
                     placeholder="level"
                  />

                  {expFields.map((exp, expIndex) => (
                     <div key={exp.id} className="rounded-lg my-2">
                        <input
                           className="border border-zinc-800 p-2 rounded-lg bg-zinc-900"
                           {...register(`skills.${skillIndex}.experiences.${expIndex}.company`)}
                        />
                        <input
                           className="border border-zinc-800 p-2 rounded-lg bg-zinc-900"
                           type="number"
                           {...register(`skills.${skillIndex}.experiences.${expIndex}.years`, { valueAsNumber: true })}
                        />
                        <button className="btn" type="button" onClick={() => removeExp(expIndex)}>
                           Remove Experience
                        </button>
                     </div>
                  ))}

                  <button className="btn" type="button" onClick={() => addExp({ company: "", years: 1 })}>
                     Add Experience
                  </button>
                  <button className="btn" type="button" onClick={() => removeSkill(skillIndex)}>
                     Remove Skill
                  </button>
               </div>
            );
         })}
      </div>
   );
};

export default ReactHookFormV5;