
import { Trash } from "lucide-react";
import { FieldErrors, useFieldArray, UseFieldArrayRemove, useFormContext } from "react-hook-form";
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

   const { control, register } = useFormContext();


   const {
      fields: expFields,
      append: appendExp,
      remove: removeExp,
   } = useFieldArray({
      control: control,
      name: `skills.${props.index}.experiences` as const,
   });

   console.info(props.errors);

   return (
      <div className="grid gap-3 border border-zinc-700 shadow-inner shadow-zinc-300/20 p-6 rounded-lg">
         <div>
            <input
               className="input relative inset-0"
               type="text"
               {...register(`skills.${props.index}.title`)}
               placeholder="title"
            />
            {props.errors?.skills?.[props.index]?.title && (
               <p className="form-error">
                  {props?.errors?.skills?.[props.index]?.title?.message}
               </p>
            )}
         </div>

         <div>
            <input
               className="input"
               type="text"
               {...register(`skills.${props.index}.level`)}
               placeholder="level"
            />
            {props.errors?.skills?.[props.index]?.level && (
               <p className="form-error">
                  {props?.errors?.skills?.[props.index]?.level?.message}
               </p>
            )}
         </div>

         {/* EXPERIENCES */}
         {expFields.map((exp, index) => (
            <div key={exp.id} className="flex flex-col gap-3">
               <div>
                  <input
                     className="input"
                     type="text"
                     {...register(`skills.${props.index}.experiences.${index}.company`)}
                     placeholder="Company"
                  />
                  {props.errors?.skills?.[props.index]?.experiences?.[index]?.company && (
                     <p className="form-error">
                        {
                           props?.errors?.skills?.[props.index]?.experiences?.[index]
                              ?.company?.message
                        }
                     </p>
                  )}
               </div>

               <div>
                  <input
                     className="input"
                     type="text"
                     {...register(`skills.${props.index}.experiences.${index}.years`, {
                        valueAsNumber: true,
                     })}
                     placeholder="Years"
                  />
                  {props.errors?.skills?.[props.index]?.experiences?.[index]?.years && (
                     <p className="form-error">
                        {
                           props?.errors?.skills?.[props.index]?.experiences?.[index]
                              ?.years?.message
                        }
                     </p>
                  )}
               </div>

               <div className="center gap-2 w-full">
                  <button
                     onClick={() => appendExp(index)}
                     type="button"
                     className="btn bg-sky-900">
                     + Add Exp
                  </button>
                  <button
                     onClick={() => removeExp(index)}
                     type="button"
                     disabled={expFields.length <= 1}
                     className="btn bg-red-900 flex items-start justify-center gap-1">
                     <Trash size={12} />
                     Remove Exp
                  </button>
                  <button
                     onClick={() => props.skillRemove(props.index)}
                     type="button"
                     className="btn bg-red-900 flex items-start justify-center gap-1">
                     <Trash size={12} /> Remove Skill
                  </button>
               </div>
            </div>
         ))}
     
      </div>
   );
};

export default SkillItemV6;
