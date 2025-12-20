import { Plus, PlusCircle, Trash2Icon } from 'lucide-react';
import React from 'react'
import { useFieldArray } from 'react-hook-form';
interface SkillItemPropsType {
   control: any;
   register: any;
   index: number | string;
   removeSkill: any;
   formState: any
}

const SkillItem = (props: SkillItemPropsType) => {
   // USE FIELD ARRAY
   const { fields: expFields, append, remove, } = useFieldArray({
      control: props.control,
      name: `skills.${props.index}.experiences`,
   });

   // RETURN
   return (
      <div className="border my-3 border-zinc-800 rounded-lg shadow-inner shadow-white/30  p-3">
         <div className="flex gap-3">
            <div>
               <input
                  className="border-2 bg-zinc-900 border-zinc-800 p-2 rounded-md relative inset-0"
                  placeholder="Skill"
                  type="text"
                  {...props.register(`skills.${props.index}.title`)}
               />
               {props?.formState?.errors?.skills?.[props.index]?.title && (
                  <p className='text-xs p-1 text-rose-900 bg-black absolute -translate-y-8 mx-2  rounded-sm'>{props.formState.errors.skills[props.index].title.message}</p>
               )}
            </div>
            <div>
               <input
                  placeholder="Level"
                  className="border-2 bg-zinc-900 border-zinc-800 p-2 rounded-md relative inset-0"
                  type="number"
                  {...props.register(`skills.${props.index}.level`, { valueAsNumber: true })}
               />
               {props?.formState?.errors?.skills?.[props.index]?.level && (
                  <p>{props?.formState?.errros?.skills?.[props.index]?.level?.message}</p>
               )}
            </div>
         </div>
         {expFields.map((exp, expIndex) => (
            <div key={exp.id} className="flex py-3 items-center-safe justify-center gap-3">
               <div className='flex flex-col'>
                  <input
                     placeholder="Company"
                     className="border-2 bg-zinc-900 border-zinc-800 p-2 rounded-md relative inset-0"
                     {...props.register(`skills.${props.index}.experiences.${expIndex}.company`)}
                  />
                  {props?.formState?.errors?.skills?.[props.index]?.experiences?.[expIndex]?.company && (
                     <p className='p-1 text-xs text-rose-900 bg-black translate-y-2.5 mx-2 rounded-sm absolute'>{props?.formState?.errors?.skills?.[props.index]?.experiences?.[expIndex]?.company?.message}</p>
                  )}
               </div>
               <input
                  placeholder="Years"
                  className="border-2 bg-zinc-900 border-zinc-800 p-2 rounded-md"
                  type="number"
                  {...props.register(`skills.${props.index}.experiences.${expIndex}.years`, { valueAsNumber: true })}
               />
               <button className="btn flex items-center gap-2 bg-rose-900!" type="button" onClick={() => remove(expIndex)}>
                  <Trash2Icon className='size-4' /> Remove Exp
               </button>
            </div>
         ))}
         <div className="flex items-center justify-center-safe py-3 gap-3">
            <button className="btn bg-blue-900! flex items-center-safe justify-center gap-2" type="button" onClick={() => append({ company: "", years: 1 })}>
               <PlusCircle className='size-4' />   Add Experience
            </button>

            <button className="btn flex items-center gap-2 bg-rose-900!" type="button" onClick={() => props.removeSkill(props.index)}>
               <Trash2Icon className='size-4' /> Remove SKILL
            </button>
         </div>
      </div>
   );
};

export default SkillItem;