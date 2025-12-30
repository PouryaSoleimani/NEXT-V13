
import { Trash } from "lucide-react";
import { useEffect } from "react";
import { FieldErrors, useFieldArray, UseFieldArrayRemove, useFormContext, useWatch } from "react-hook-form";
import toast from "react-hot-toast";
interface SkillItemV6Props {
  index: number;
  skillRemove: UseFieldArrayRemove;
  errors: FieldErrors<{
    skills: {
      title: string;
      level: number | null;
      experiences: { company: string; years: number | null }[];
    }[];
    submitHandler: (data: any) => void;
  }>;
  [key: string]: any;
}

const SkillItemV6 = (props: SkillItemV6Props) => {
   // USE FORM CONTEXT
   const { control, register } = useFormContext();

   const _experiences = useWatch({
      control: control,
      name: `skills.${props.index}.experiences`,
   });

   // console.info("EXP LENGTH", _experiences.length);

   useEffect(() => {
      if (_experiences.length >= 3) {
         toast.error("NO MORE EXP ALLOWED", {
            position: "top-center",
            style: { fontWeight: "bold" },
         });
      }
   }, [_experiences.length]);

 const {
   fields: expFields,
   append: appendExp,
   remove: removeExp,
 } = useFieldArray({
   control: control,
   name: `skills.${props.index}.experiences` as const,
 });

   return (
     <div className='grid gap-3 border border-zinc-700 shadow-inner shadow-zinc-300/20 p-6 rounded-lg'>
       <div className='flex flex-col gap-1'>
         <label>Title</label>
         <input
           className='input relative inset-0'
           type='text'
           {...register(`skills.${props.index}.title`)}
           placeholder='title'
         />
         {props.errors?.skills?.[props.index]?.title && (
           <p className='form-error'>
             {props?.errors?.skills?.[props.index]?.title?.message}
           </p>
         )}
       </div>

       <div className='flex flex-col gap-1'>
         <label>Level</label>
         <input
           className='input'
           type='text'
           {...register(`skills.${props.index}.level`)}
           placeholder='level'
         />
         {props.errors?.skills?.[props.index]?.level && (
           <p className='form-error'>
             {props?.errors?.skills?.[props.index]?.level?.message}
           </p>
         )}
       </div>

       {/* EXPERIENCES */}
       {expFields.map((exp, index) => (
         <div
           key={exp.id}
           className='flex flex-col gap-3'>
           <div className='flex flex-col gap-1'>
             <label>Company</label>
             <input
               className='input'
               type='text'
               {...register(
                 `skills.${props.index}.experiences.${index}.company`
               )}
               placeholder='Company'
             />
             {props.errors?.skills?.[props.index]?.experiences?.[index]
               ?.company && (
               <p className='form-error'>
                 {
                   props?.errors?.skills?.[props.index]?.experiences?.[index]
                     ?.company?.message
                 }
               </p>
             )}
           </div>

           <div className='flex flex-col gap-1'>
             <label>Years</label>
             <input
               className='input'
               type='text'
               {...register(
                 `skills.${props.index}.experiences.${index}.years`,
                 { valueAsNumber: true }
               )}
               placeholder='Years'
             />
             {props.errors?.skills?.[props.index]?.experiences?.[index]
               ?.years && (
               <p className='form-error'>
                 {
                   props?.errors?.skills?.[props.index]?.experiences?.[index]
                     ?.years?.message
                 }
               </p>
             )}
           </div>

           <div className='center gap-2 w-full'>
             <button
               onClick={() => appendExp(index)}
               type='button'
               className='btn bg-sky-900'
               disabled={_experiences.length >= 3}>
               + Add Exp
             </button>
             <button
               onClick={() => removeExp(index)}
               type='button'
               disabled={expFields.length <= 1}
               className='btn bg-red-900 flex items-start justify-center gap-1'>
               <Trash size={12} />
               Remove Exp
             </button>
             <button
               onClick={() => props.skillRemove(props.index)}
               type='button'
               className='btn bg-red-900 flex items-start justify-center gap-1'>
               <Trash size={12} /> Remove Skill
             </button>
           </div>
         </div>
       ))}
     </div>
   );
};

export default SkillItemV6;
