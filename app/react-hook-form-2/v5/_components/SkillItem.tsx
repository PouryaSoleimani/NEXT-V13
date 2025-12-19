import React from 'react'
import { useFieldArray } from 'react-hook-form';
interface SkillItemPropsType {
   control: any;
   register: any;
   index: number | string;
   removeSkill: any;
}
const SkillItem = (props: SkillItemPropsType) => {
   const {
      fields: expFields,
      append,
      remove,
   } = useFieldArray({
      control: props.control,
      name: `skills.${props.index}.experiences`,
   });
   return (
      <div className="border p-3">
         <div className="flex gap-3">
            <input
               className="border-2 bg-zinc-900 border-zinc-800 p-2 rounded-md"
               placeholder="Skill"
               type="text"
               {...props.register(`skills.${props.index}.title`)}
            />
            <input
               placeholder="Level"
               className="border-2 bg-zinc-900 border-zinc-800 p-2 rounded-md"
               type="number"
               {...props.register(`skills.${props.index}.level`, { valueAsNumber: true })}
            />
         </div>
         {expFields.map((exp, expIndex) => (
            <div key={exp.id} className="flex py-3 items-center-safe justify-center gap-3">
               <input
                  placeholder="Company"
                  className="border-2 bg-zinc-900 border-zinc-800 p-2 rounded-md"
                  {...props.register(`skills.${props.index}.experiences.${expIndex}.company`)}
               />
               <input
                  placeholder="Years"
                  className="border-2 bg-zinc-900 border-zinc-800 p-2 rounded-md"
                  type="number"
                  {...props.register(`skills.${props.index}.experiences.${expIndex}.years`, { valueAsNumber: true })}
               />
               <button className="btn" type="button" onClick={() => remove(expIndex)}>
                  Remove Exp
               </button>
            </div>
         ))}
         <div className="flex items-center justify-center-safe py-3 gap-3">
            <button className="btn" type="button" onClick={() => append({ company: "", years: 1 })}>
               Add Experience
            </button>

            <button className="btn" type="button" onClick={() => props.removeSkill(props.index)}>
               Remove Skill
            </button>
         </div>
      </div>
   );
};

export default SkillItem;