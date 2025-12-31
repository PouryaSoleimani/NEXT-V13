"use client";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Controller,
  FormProvider,
  useFieldArray,
  useForm,
  useWatch,
} from "react-hook-form";
import z from "zod";
import ErrorFieldV8 from "./_components/ErrorFieldV8";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Eye,
  Info,
  PlusCircle,
  Trash2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Checkbox } from "@/components/ui/checkbox";
import toast from "react-hot-toast";

const StepSchema1 = z.object({
  email: z.email("Email is Not Valid"),
  password: z
    .string("Password is Required")
    .min(4, "Password Must be at Least 4 letters")
    .max(10, "Password Must be Maximum 10 letters"),
});
const StepSchema2 = z.object({
  skills: z
    .array(
      z
        .string("Skill title is Required")
        .min(1, "Skill title is Required")
    )
    .min(1, "At least 1 skill is Required"),
});
const StepSchema3 = z.object({
  acceptTerms: z.literal(true),
});

const schemaByStep = {
  1: StepSchema1,
  2: StepSchema2,
  3: StepSchema3,
};

export type FormTypesV8 =
  | z.infer<typeof StepSchema1>
  | z.infer<typeof StepSchema2>
  | z.infer<typeof StepSchema3>;

const ReactHookFormV8 = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [inputType, setInputType] = useState< "password" | "text" >("password");

  const methods = useForm<any>({
    mode: "onChange",
    resolver: zodResolver(schemaByStep[step]),
    defaultValues: { email: "", password: "", skills: [], acceptTerms: false },
  });

  const { isValid, isSubmitting } = methods.formState;

  function sumbitHandler() {
    const DTO = methods.getValues();
    console.log("DATA => ", DTO);
    toast.success("FORM SUBMITTED", {
      position: "top-center",
      style: { borderBottom: "8px solid orange" },
    });
    methods.reset();
    setStep(1);
  }

  const { fields, append, remove } = useFieldArray<any>({
    control: methods.control,
    name: "skills" as "skills",
  });

  async function onNextHandler() {
    const isValid = await methods.trigger();
    if (isValid) {
      setStep((s) => (s + 1) as any);
    }
  }

  const hasAccepted = useWatch({
    control: methods.control,
    name: "acceptTerms",
  });

  return (
    <div className='bg-slate-950 screen center'>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(sumbitHandler)}
          className='border border-slate-800 rounded-lg p-4 bg-black flex flex-col gap-4'>
          {/* STEP 1 */}
          {step == 1 && (
            <>
              <h2 className='border-b-2 border-stone-700'>STEP 1</h2>
              <Controller
                control={methods.control}
                name='email'
                render={({ field }) => (
                  <div className='flex flex-col gap-1'>
                    <Label className='mb-0.5'>{field.name.toUpperCase()}</Label>
                    <Input
                      value={field.value}
                      onChange={field.onChange}
                      aria-invalid={!!methods.formState.errors.email}
                      placeholder={field.name.toUpperCase()}
                    />
                    <ErrorFieldV8 name={field.name} />
                  </div>
                )}
              />
              <Controller
                control={methods.control}
                name='password'
                render={({ field }) => (
                  <div className='flex flex-col gap-1 relative inset-0'>
                    <Label className='mb-0.5'>{field.name.toUpperCase()}</Label>
                    <Input
                      type={inputType}
                      value={field.value}
                      onChange={field.onChange}
                      aria-invalid={!!methods.formState.errors.password}
                      placeholder={field.name.toUpperCase()}
                    />
                    <button
                      type='button'
                      className={cn(
                        "absolute cursor-pointer group right-1.5 top-1/2",
                        methods.formState.errors.password && "top-7"
                      )}
                      onClick={() =>
                        inputType == "password"
                          ? setInputType("text")
                          : setInputType("password")
                      }>
                      <Eye className='text-zinc-600 group-hover:text-zinc-400 transition duration-200 size-5' />
                    </button>
                    <ErrorFieldV8 name={field.name} />
                  </div>
                )}
              />
              <Button
                disabled={!isValid || isSubmitting}
                onClick={onNextHandler}>
                Next Step →
              </Button>
            </>
          )}
          {/* STEP 2 */}
          {step == 2 && (
            <div>
              <h2 className='border-b-2 border-stone-700'>STEP 2</h2>
              {fields.length == 0 && (
                <p className='text-stone-500 flex flex-col border-b-2 pb-4 border-stone-700 items-center-safe gap-3 my-3 text-sm'>
                  <PlusCircle className='size-5' />
                  No Skills , Try Add Skills Now{" "}
                  <span className='animate-bounce text-xl'>↓</span>
                </p>
              )}
              {fields?.map((item, index) => (
                <Controller
                  key={item.id}
                  name={`skills.${index}`}
                  control={methods.control}
                  render={({ field }) => (
                    <div className='flex items-start justify-between gap-2 my-2'>
                      <div>
                        <Input
                          onChange={field.onChange}
                          placeholder='Skill Name'
                        />
                        <ErrorFieldV8 name={`skills[${index}]` as any} />
                      </div>
                      <div className='flex items-center gap-1 pt-0.5'>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              onClick={() => remove(index)}
                              className='size-8.5'
                              variant={"destructive"}>
                              <Trash2 />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent className='bg-stone-950 -translate-y-2 border border-stone-800'>
                            Remove Skill
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </div>
                  )}
                />
              ))}
              <div className='flex grow gap-2 items-center justify-center mt-3'>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={() => append({}, { shouldFocus: true })}
                      className='size-8 w-1/2'
                      variant={"blue"}>
                      +
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent
                    side='bottom'
                    className='bg-stone-950 border border-stone-800 shaadow shadow-white/50 translate-y-2'>
                    Add skill
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={onNextHandler}
                      className='size-8 w-1/2 text-white'
                      variant={"success"}>
                      →
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent
                    side='bottom'
                    className='bg-stone-950 border text-white border-stone-800 shaadow shadow-white/50 translate-y-2'>
                    Next Step
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          )}
          {/* STEP 3 */}
          {step == 3 && (
            <>
              <h2 className='border-b-2 border-stone-700'>STEP 3</h2>
              <Controller
                name='acceptTerms'
                control={methods.control}
                render={({ field }) => (
                  <div className='flex flex-col gap-1'>
                    <div className='flex flex-row-reverse gap-2'>
                      <Label>Accept Terms And Privacy and Policy Rules</Label>
                      <Checkbox
                        onCheckedChange={field.onChange}
                        className='accent-cyan-500'
                        value={field.value}
                      />
                    </div>
                    {!hasAccepted && (
                      <p className='text-xxs flex gap-1 mt-3 bg-stone-900 p-1 rounded-sm place-items-center-safe text-orange-500 font-semibold'>
                        <Info className='size-4' />
                        Please Accept the Terms to continue
                      </p>
                    )}
                    <ErrorFieldV8 name={field.name as any} />
                  </div>
                )}
              />
              <Button
                disabled={!isValid || isSubmitting || hasAccepted == false}
                aria-disabled={!isValid || isSubmitting || hasAccepted == false}
                type='submit'
                className='mx-auto w-full bg-emerald-950 hover:bg-emerald-800'>
                SUBMIT
              </Button>
            </>
          )}
        </form>
      </FormProvider>
    </div>
  );
};

export default ReactHookFormV8;
