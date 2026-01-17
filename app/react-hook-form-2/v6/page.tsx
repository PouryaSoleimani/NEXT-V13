"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormProvider,
  Resolver,
  useFieldArray,
  useForm,
  useWatch,
} from "react-hook-form";
import z from "zod";
import SkillItemV6 from "./_components/SkillItem";
import toast from "react-hot-toast";
import { RefreshCcw } from "lucide-react";
import { useEffect } from "react";
import FieldError from "./_components/FieldError";

export const FORMSCHEMAV6 = z
  .object({
    skills: z
      .array(
        z.object({
          title: z.string().min(1, "Title is Required"),
          level: z.coerce
            .number("Level must be a Number")
            .min(1, "Level Must be Between 1 to 5")
            .max(5, "Level Must be between 1 to 5")
            .int()
            .nullable(),

          experiences: z
            .array(
              z.object({
                company: z.string().min(1, "Company is Required"),
                years: z.coerce
                  .number("Years must be a Number")
                  .min(0)
                  .nullable(),
              })
            )
            .min(1, "At least 1 experience is Required"),
        })
      )
      .min(1, "At least 1 Skill is Required"),
  })
  .refine(
    (data) => {
      return data.skills.some((s) => s.level && s.level >= 3);
    },
    {
      error: "At least one Skill must have level 3 or higher",
      path: ["skills"],
    }
  )
  .superRefine((data, ctx) => {
    data.skills.forEach((skill) => {
      if (skill.level != null && skill.level >= 4) {
        const total = skill.experiences.reduce(
          (sum, exp) => sum + (exp.years ?? 0),
          0
        );
        if (total <= 2) {
          ctx.addIssue({
            code: "custom",
            message: "MORE EXPERIENCE IS NEEDED",
            path: ["skills"],
          });
        }
      }
    });
  })
  .superRefine((data, ctx) => {
    data.skills.forEach((skill, index) => {
      if (skill.level && skill.level >= 4 && skill.experiences.length === 0) {
        ctx.addIssue({
          code: "custom",
          message: "This skill needs Experience",
          path: ["skills", index, "experiences"],
        });
      }
    });
  })
  .superRefine((data, ctx) => {
    data.skills.forEach((skill, index) => {
      const totalYears = skill.experiences.reduce(
        (sum, exp) => sum + (exp.years ?? 0),
        0
      );
      if (totalYears < 6) {
        ctx.addIssue({
          code: "custom",
          message: "NOT ENOUGH EXPERIENCE",
          path: ["skills", index, "experiences"],
        });
      }
    });
  })
  .superRefine((data, ctx) => {
    data.skills.forEach((skill) => {
      const totalYears = skill.experiences.reduce(
        (sum, exp) => sum + (exp.years ?? 0),
        0
      );
      if (totalYears >= 30) {
        ctx.addIssue({
          code: "custom",
          message: "THE SUM OF ALL EXPERIENCES IS MORE THAN 30 YEARS",
          path: ["skills"],
        });
      }
    });
  });

export type FormTypesV6 = z.infer<typeof FORMSCHEMAV6>;

const ReactHookFormV6 = () => {
  const methods = useForm<FormTypesV6>({
    resolver: zodResolver(FORMSCHEMAV6) as Resolver<FormTypesV6>,
    defaultValues: {
      skills: [
        { title: "", level: null, experiences: [{ company: "", years: 0 }] },
      ],
    },
  });

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = methods;

  const {
    fields: skillFields,
    append: skillAppend,
    remove: skillRemove,
  } = useFieldArray({ control: control, name: "skills" });

  const result = skillFields
    .map((item) => item.experiences)
    .flat()
    .reduce((a: any, b: any) => a?.years + b?.years);

  console.info("result =>", result);

  function submitHandler(data: FormTypesV6) {
    console.info("FORM DATA =>", data);
    toast.success("FORM SUBMITTED SUCCESSFULLY", { position: "top-center" });
    reset();
  }

  const _skills = useWatch({ control: control, name: `skills` });

  console.info(errors?.skills?.[0]?.experiences?.root?.message);

  const array = ["mamad", "reza", "ali", "mohsen", 3, 4];

  useEffect(() => {
    array?.forEach((item: string | number) => {
      if (typeof item == "number") {
        console.info("NUMBER");
      } else {
        console.info("STRING");
      }
    });
    return;
  }, []);

  useEffect(() => {
    if (_skills.length >= 4) {
      toast.error("NO MORE SKILLS ALLOWED");
    }
  }, [_skills.length]);

  console.info("errors", errors?.skills?.root);

  return (
    <div className='section bg-black'>
      {/* FORM PROVIDER */}
      <FormProvider {...methods}>
        {errors?.skills?.root && (
          <p className='form-error text-lg font-semibold'>
            {errors.skills?.root?.message}
          </p>
        )}
        {errors?.skills?.[0]?.experiences?.root && (
          <FieldError name='skills.0.experiences' />
          // <p className="border-4 bg-red-200 text-red-900 my-4 border-red-900 p-3 rounded-full">
          //    {errors?.skills?.[0]?.experiences?.root?.message}
          // </p>
        )}

        {errors?.skills?.root && (
          <p className='border-4 bg-red-200 text-red-900 my-4 border-red-900 p-3 rounded-full'>
            {errors?.skills?.root?.message}
          </p>
        )}

        <form
          onSubmit={handleSubmit(submitHandler)}
          className='grid gap-3'>
          {/* FALLBACK */}
          {!skillFields.length && (
            <div className='flex items-center-safe justify-center bg-zinc-800 p-10 rounded-lg'>
              No Skills ...
            </div>
          )}

          <div className='grid grid-cols-4 gap-3'>
            {skillFields.map((skill, index) => (
              <SkillItemV6
                key={skill.id}
                {...methods}
                index={index}
                skillRemove={skillRemove}
                errors={errors}
                submitHandler={submitHandler}
              />
            ))}
          </div>
          {/* BUTTONS */}
          <div className='flex items-center gap-3 justify-center w-full  py-5'>
            <button
              onClick={() =>
                skillAppend({
                  title: "",
                  level: null,
                  experiences: [{ company: "", years: null }],
                })
              }
              disabled={_skills.length >= 4}
              type='button'
              className='btn rounded-full! bg-emerald-900!'>
              + ADD SKILL
            </button>
            <button
              type='submit'
              className='btn rounded-full! bg-blue-900!'>
              ✔ SUBMIT
            </button>
            <button
              type='button'
              onClick={() => reset()}
              className="btn flex items-center gap-1 rounded-full! bg-yellow-400 text-black! font-['JetBrains Mono']">
              <RefreshCcw size={12} /> RESET FORM
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default ReactHookFormV6;
