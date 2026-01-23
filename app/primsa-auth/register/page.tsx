'use client'
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import z from "zod"
import ErrorFieldPrisma from "../_components/ErrorFieldPrisma"
import { Button } from "@/components/ui/button"

export const FormSchemaPrisma = z.object({
  username: z.string().min(1, 'وارد کردن نام کاربری الزامی است').max(20, "نام کاربری حداکثر 20 حرف میتواند باشد"),
  password: z.string().min(4, 'رمز عبور باید حداقل 4 حرف باشد').max(10, 'رمز عبور باید حداکثر 10 حرف باشد'),
  confirmPassword: z.string().min(4, 'رمز عبور باید حداقل 4 حرف باشد').max(10, 'رمز عبور باید حداکثر 10 حرف باشد'),
}).refine((data) => {
  return data.password === data.confirmPassword
}, {
  path: ['confirmPassword'],
  error: 'تکرار رمز عبور با رمز عبور یکسان نیست',
})

export type FormType = z.infer<typeof FormSchemaPrisma>

const Page = () => {

  const methods = useForm<FormType>({
    mode: "onChange",
    resolver: zodResolver(FormSchemaPrisma),
    defaultValues: {
      username: '',
      password: '',
      confirmPassword: ''
    }
  })

  function submitHandler(data: FormType) {
    console.info('FORM VALUES => ', data)
  }


  return (
    <div className="center" dir="rtl">
      <form onSubmit={methods.handleSubmit(submitHandler)} className="w-1/5 flex flex-col gap-3 bg-black p-5 rounded-lg ">
        <Controller
          control={methods?.control}
          name="username"
          render={({ field }) => (
            <div>
              <Input
                value={field.value}
                onChange={field.onChange}
                placeholder="نام : مثلا محمدرضا"
                disabled={methods.formState.isSubmitting || !!methods.formState.errors.username}
                aria-disabled={methods.formState.isSubmitting || !!methods.formState.errors.username}
              />
              <ErrorFieldPrisma name={field.name} control={methods.control} />
            </div>
          )}
        />
        <Controller
          control={methods?.control}
          name="password"
          render={({ field }) => (
            <div>
              <Input
                value={field.value}
                onChange={field.onChange}
                placeholder="رمز عبور"
                disabled={methods.formState.isSubmitting || !!methods.formState.errors.password}
                aria-disabled={methods.formState.isSubmitting || !!methods.formState.errors.password}
              />
              <ErrorFieldPrisma name={field.name} control={methods.control} />
            </div>
          )}
        />
        <Controller
          control={methods?.control}
          name="username"
          render={({ field }) => (
            <div>
              <Input
                value={field.value}
                onChange={field.onChange}
                placeholder="تکرار رمز عبور"
                disabled={methods.formState.isSubmitting || !!methods.formState.errors.confirmPassword}
                aria-disabled={methods.formState.isSubmitting || !!methods.formState.errors.confirmPassword}
              />
              <ErrorFieldPrisma name={field.name} control={methods.control} />
            </div>
          )}
        />
        <Button className="w-full font-vazir" variant={'success'}>
          ثبت و ادامه
        </Button>
      </form>
    </div>
  )
}

export default Page