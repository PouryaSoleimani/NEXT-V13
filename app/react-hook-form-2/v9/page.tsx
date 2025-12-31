"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Controller, FormProvider, useForm } from "react-hook-form";
import z from "zod";
import useCapitilize from "./_hooks/useCapitilize";
import ErrorFieldV9 from "./_components/page";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const FormSchema1 = z.object({
  username: z
    .string("Username is Required")
    .min(1, "Username can't be Empty")
    .max(5, "Username must be Maximum 5 letters"),
  email: z.email("Email is Invalid"),
});

const schemaByStep = { 1: FormSchema1 };

export type FormTypesV9 = z.infer<typeof FormSchema1>;

// COMPONENT __________________________________________________________________________________________________
const ReactHookFormV9 = () => {
  const [step] = useState<1>(1);

  const methods = useForm<FormTypesV9>({
    mode: "onChange",
    resolver: zodResolver(schemaByStep[step]),
    defaultValues: { username: "", email: "" },
  });

  function submitHandler(dto: FormTypesV9) {
    console.info("DTO =>", dto);
  }

  return (
    <div className='section center'>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(submitHandler)}
          className='border p-5 rounded-xl border-stone-700'>
          {step === 1 && (
            <div className='flex flex-col gap-3'>
              <Controller
                control={methods.control}
                name='username'
                render={({ field }) => (
                  <div className='flex flex-col gap-2'>
                    <Label className='capitalize'>
                      {useCapitilize(field.name.toString())}
                    </Label>
                    <Input
                      type='text'
                      placeholder={field.name.toUpperCase()}
                      value={field.value}
                      onChange={field.onChange}
                    />
                    <ErrorFieldV9 name={field.name} />
                  </div>
                )}
              />
              <Controller
                control={methods.control}
                name='email'
                render={({ field }) => (
                  <div className='flex flex-col gap-1.5'>
                    <Label className='capitalize'>
                      {useCapitilize(field.name.toString())}
                    </Label>
                    <Input
                      type='text'
                      placeholder={field.name.toUpperCase()}
                      value={field.value}
                      onChange={field.onChange}
                    />
                    <ErrorFieldV9 name={field.name} />
                  </div>
                )}
              />
            </div>
          )}
          <Button
            disabled={
              !methods.formState.isValid || methods.formState.isSubmitting
            }
            type='submit'
            variant={"success"}
            className='w-full mt-3'>
            SUBMIT
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default ReactHookFormV9;
