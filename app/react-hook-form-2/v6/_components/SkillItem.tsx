"use client";
import { FieldArrayWithId, UseFieldArrayAppend, UseFieldArrayRemove } from "react-hook-form";

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
}

// COMPONENT __________________________________________________________________________________________________________________________________________
const SkillItemV2 = (props: SkillItemV2Props) => {
   console.info("PROPS FROM SKILL ITEM V2", props);
   return <div>SkillItem</div>;
};

export default SkillItemV2;
