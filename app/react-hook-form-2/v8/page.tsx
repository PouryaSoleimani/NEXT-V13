'use client'
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, FormProvider, Resolver, useFieldArray, useForm } from "react-hook-form"
import z from "zod"
import ErrorFieldV8 from "./_components/ErrorFieldV8"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Eye } from "lucide-react"
import { cn } from "@/lib/utils"
 
 const StepSchema1 = z.object({
   email: z.email("Email is Not Valid"),
   password: z
     .string("Password is Required")
     .min(4, "Password Must be at Least 4 letters")
     .max(10, "Password Must be Maximum 10 letters"),
 });
 const StepSchema2 = z.object({
   skills: z
     .array(z.string("Skill name is Required").min(1, "Skill name is Required"))
     .min(1, "At least 1 skill is Required"),
 });
 const StepSchema3 = z.object({ acceptTerms: z.literal(true) });

 const schemaByStep = {
   1: StepSchema1,
   2: StepSchema2,
   3: StepSchema3,
 };
 
 export type FormTypesV8 = z.infer<typeof StepSchema1>;

 const ReactHookFormV8 = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [inputType, setInputType] = useState<"password" | "text">("password");
  const methods = useForm<any>({
    mode : 'onChange',
    resolver: zodResolver(schemaByStep[step]),
    defaultValues: { title: "", password: "", skills: ["HTML"], acceptTerms: false },
  });

  const { isValid, isSubmitting } = methods.formState;

  function sumbitHandler(data: FormTypesV8) {
    console.log("DATA => ", data);
  }

  const { fields, append, remove } = useFieldArray({
    control: methods.control,
    name: "skills",
  });

  console.info("FIELDS =>", fields);

  async function onNextHandler(){
    const isValid = await methods.trigger()
    if(isValid){
      setStep((s) => (s + 1) as any);
    }
  }
  return (
    <div className='bg-slate-950 screen center'>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(sumbitHandler)}
          className='border border-slate-800 rounded-lg p-4 bg-black flex flex-col gap-4'>
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
                      className={cn(
                        "absolute right-1 top-1/2",
                        methods.formState.errors.password && "top-7"
                      )}
                      onClick={() =>
                        inputType == "password"
                          ? setInputType("text")
                          : setInputType("password")
                      }>
                      <Eye className='text-zinc-600 size-5' />
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
          {step == 2 && (
            <div>
              {fields?.map((item, index) => (
                <Controller
                  key={item.id}
                  name={`skills.${index}`}
                  control={methods.control}
                  render={({ field }) => (
                    <div>
                      <Input
                        value={field.value}
                        onChange={field.onChange}
                        placeholder='Skill Name'
                      />
                      <ErrorFieldV8 name={"skills[index]" as any} />
                    </div>
                  )}
                />
              ))}
            </div>
          )}
          {step == 3 && (
            <>
              STEP 3
              <Button
                disabled={!isValid || isSubmitting}
                aria-disabled={!isValid || isSubmitting}
                type='submit'
                className='mx-auto my-3 w-full bg-emerald-950 hover:bg-emerald-800'>
                SUBMIT
              </Button>
            </>
          )}
        </form>
      </FormProvider>
    </div>
  );
}

export default ReactHookFormV8