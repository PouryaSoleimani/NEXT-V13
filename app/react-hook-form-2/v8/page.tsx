'use client'
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, FormProvider, useForm } from "react-hook-form"
import z from "zod"
import ErrorFieldV8 from "./_components/ErrorFieldV8"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
export const FORMSCHEMAV8 = z.object({
  title: z.string().min(1, 'Title is Required')
})

export type FormTypesV8 = z.infer<typeof FORMSCHEMAV8>

const ReactHookFormV8 = () => {
  const methods = useForm<FormTypesV8>({
    resolver: zodResolver(FORMSCHEMAV8)
  })

  function sumbitHandler(data: FormTypesV8) {
    console.log('DATA => ', data)
  }

  return (
    <div className="bg-slate-950 screen center">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(sumbitHandler)} className="border border-slate-800 rounded-lg p-4 bg-black">
          <Controller
            control={methods.control}
            name="title"
            render={({ field }) => (
              <div className="flex flex-col gap-2">
                <Label>{field.name.toUpperCase()}</Label>
              <Input
                value={field.value}
                onChange={field.onChange}
                aria-invalid={!!methods.formState.errors.title}
                placeholder={field.name.toUpperCase()}
                />
                <ErrorFieldV8 name={field.name} />
              </div>
            )}
          />
          <Button type="submit" className="mx-auto my-3 w-full bg-emerald-950 hover:bg-emerald-800">SUBMIT</Button>
        </form>
      </FormProvider>
    </div>
  )
}

export default ReactHookFormV8