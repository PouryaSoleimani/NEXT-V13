"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Controller, FormProvider, useForm } from "react-hook-form";
import z from "zod";
import useCapitilize from "./_hooks/useCapitilize";
import ErrorFieldV9 from "./_components/page";

const FormSchema1 = z.object({
  username: z.string("Username is Required").min(1, "Username can't be Empty"),
  email: z.email("Email is Invalid"),
});

export type FormTypesV9 = z.infer<typeof FormSchema1>;

// COMPONENT __________________________________________________________________________________________________
const ReactHookFormV9 = () => {
  const methods = useForm<FormTypesV9>({});

  function submitHandler(dto: FormTypesV9) {
    console.info("DTO =>", dto);
  }

  return (
    <div className='section center'>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(submitHandler)}
          className='border p-5 rounded-xl border-stone-700'>
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
        </form>
      </FormProvider>
    </div>
  );
};

export default ReactHookFormV9;
