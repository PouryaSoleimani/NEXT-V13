"use client";
import { Control, FieldArrayWithId, FieldErrors, UseFieldArrayAppend, UseFieldArrayRemove, UseFormRegister } from "react-hook-form";
import { FormTypesV6 } from "../page";

// TYPES
type SingleExperienceType = { company: string; years: number };

type SingleSkillType = {
   title: string;
   level: number;
   experiences: Array<SingleExperienceType>;
};

interface SkillItemV2Props {
   title: string;
   level: number;
   control: Control<FormTypesV6>;
   experiences: Array<SingleExperienceType>;
   fields: FieldArrayWithId<{ skills: Array<SingleSkillType> }, "skills", "id">[];
   append: UseFieldArrayAppend<
      {
         skills: {
            title: string;
            level: number;
            experiences: { company: string; years: number }[];
         }[];
      },
      "skills"
   >;
   remove: UseFieldArrayRemove;
   register: UseFormRegister<FormTypesV6>;
   errors: FieldErrors<FormTypesV6>;
   index: number;
}

// COMPONENT __________________________________________________________________________________________________________________________________________
const SkillItemV2 = (props: SkillItemV2Props) => {
   console.info("PROPS FROM SKILL ITEM V2", props);
   return <div>SkillItem</div>;
};

export default SkillItemV2;
