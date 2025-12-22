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
   }>;
   [key: string]: any;
}
const SkillItemV6 = (props: SkillItemV6Props) => {
   console.info("PROPS", props);
   const { control, reset, register, formState, getValues } = useFormContext();

   const {
      fields: expFields,
      append: appendExp,
      remove: removeExp,
   } = useFieldArray({
      control: control,
      name: `skills.${props.index}.experiences` as const,
   });

   console.info(getValues(`skills.${props.index}.level`));

   return (
      <div>
         <div>
            <input
               className="input"
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
      </div>
   );
};

export default SkillItemV6;
