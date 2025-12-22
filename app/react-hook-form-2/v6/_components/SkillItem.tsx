import { useFieldArray, UseFieldArrayRemove, useFormContext } from "react-hook-form";
interface SkillItemV6Props {
   index: number;
   skillRemove: UseFieldArrayRemove;
   [key: string]: any;
}
const SkillItemV6 = (props: SkillItemV6Props) => {
   console.info("PROPS", props);
   const { control, reset, register } = useFormContext();
      const {
         fields: expFields,
         append: appendExp,
         remove: removeExp,
      } = useFieldArray({
         control: control,
         name: `skills.${props.index}.experiences` as const,
      });
   return (
      <div>
         <input
            className="input"
            type="text"
            {...register(`skills.${props.index}.title`)}
            placeholder="title"
         />
      </div>
   );
};

export default SkillItemV6;
