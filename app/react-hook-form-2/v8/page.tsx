'use client'
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, FormProvider, Resolver, useForm } from "react-hook-form"
import z from "zod"
import ErrorFieldV8 from "./_components/ErrorFieldV8"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useState } from "react"
 
const StepSchema1 = z.object({ email: z.email("Email is Not Valid") });
 const StepSchema2 = z.object({
   skills: z
     .array(z.string("Skill name is Required").min(1, "Skill name is Required"))
     .min(1, "At least 1 skill is Required"),
 });
 const StepSchema3 = z.object({ acceptTerms: z.literal(true) });

 const schemaByStep = { 1: StepSchema1, 2: StepSchema2, 3: StepSchema3 };
 
 export type FormTypesV8 = z.infer<typeof StepSchema1>;

 const ReactHookFormV8 = () => {
  const [step] = useState<1 | 2 | 3>(1);
  const methods = useForm<any>({ resolver: zodResolver(schemaByStep[step]) });

  const { isValid, isSubmitting } = methods.formState;

  function sumbitHandler(data: FormTypesV8) {
    console.log("DATA => ", data);
  }

  return (
    <div className="bg-slate-950 screen center">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(sumbitHandler)}
          className="border border-slate-800 rounded-lg p-4 bg-black">
          <Controller
            control={methods.control}
            name="email"
            render={({ field }) => (
              <div className="flex flex-col gap-1">
                <Label className="mb-0.5">{field.name.toUpperCase()}</Label>
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
          <Button
            disabled={!isValid || isSubmitting}
            aria-disabled={!isValid || isSubmitting}
            type="submit"
            className="mx-auto my-3 w-full bg-emerald-950 hover:bg-emerald-800">
            SUBMIT
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}

export default ReactHookFormV8