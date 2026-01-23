'use client'
import { useState } from "react"
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { Button } from "@/components/ui/button"
import CustomInput from "../_components/CustomInput"
import ErrorFieldPrisma from "../_components/ErrorFieldPrisma"
import { cn } from "@/lib/utils"
import Link from "next/link"

// COMPONENT _______________________________________________________________________________________________________________
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

  const [isVisible, setisVisible] = useState<boolean>(false)
  const [isVisible2, setisVisible2] = useState<boolean>(false)

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
    toast.success('فرم با موفقیت ثبت شد', { style: { fontFamily: 'Vazir' } })
    methods.reset()
  }

  return (
    <div className="center font-vazir" dir="rtl">
      <form onSubmit={methods.handleSubmit(submitHandler)} className="w-[95%] min-[460px]:w-2/3 sm:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 flex flex-col gap-3 bg-black p-5 rounded-lg ">
        <h2 className="text-3xl text-center py-3 underline decoration-4 underline-offset-4 decoration-yellow-500">ثبت نام</h2>
        <Controller
          control={methods?.control}
          name="username"
          render={({ field }) => (
            <div className="relative inset-0">
              <CustomInput
                prefixIcon={'Edit2Icon'}
                suffixIcon={'Users'}
                value={field.value}
                onChange={field.onChange}
                placeholder="نام : مثلا محمدرضا"
                className={cn(methods.getFieldState('username')?.isDirty && !methods.formState.errors.username && 'border-emerald-800', methods.getFieldState(field.name).invalid && 'border-red-900',)}
                aria-invalid={!!methods.formState.errors.username}
              />
              <ErrorFieldPrisma name={field.name} control={methods.control} />
            </div>
          )}
        />
        <Controller
          control={methods?.control}
          name="password"
          render={({ field }) => (
            <div className="relative inset-0">
              <CustomInput
                autoComplete="new-password"
                type={isVisible ? 'text' : 'password'}
                prefixIcon={'KeyIcon'}
                suffixIcon={'Eye'}
                value={field.value}
                onChange={field.onChange}
                placeholder="رمز عبور"
                className={cn(methods.getFieldState('password')?.isDirty && !methods.formState.errors.password && 'border-emerald-800', methods.getFieldState(field.name).invalid && 'border-red-900')}
                suffixHandler={() => { setisVisible(!isVisible) }}
                aria-invalid={!!methods.formState.errors.username}
              />
              <ErrorFieldPrisma name={field.name} control={methods.control} />
            </div>
          )}
        />
        <Controller
          control={methods?.control}
          name="confirmPassword"
          render={({ field }) => (
            <div className="relative inset-0">
              <CustomInput
                autoComplete="new-password"
                type={isVisible2 ? 'text' : 'password'}
                prefixIcon={'KeyIcon'}
                suffixIcon={'Eye'}
                value={field.value}
                onChange={field.onChange}
                placeholder="تکرار رمز عبور"
                className={cn(methods.getFieldState('confirmPassword')?.isDirty && !methods.formState.errors.confirmPassword && 'border-emerald-800', methods.getFieldState(field.name).invalid && 'border-red-900')}
                suffixHandler={() => { setisVisible2(!isVisible2); console.info('HGELL') }}
                aria-invalid={!!methods.formState.errors.username}
              />
              <ErrorFieldPrisma name={field.name} control={methods.control} />
            </div>
          )}
        />
        <Button
          disabled={methods.formState.isSubmitting || !methods.formState.isValid}
          aria-disabled={methods.formState.isSubmitting || !methods.formState.isValid}
          className="w-full font-vazir disabled:cursor-not-allowed" variant={'success'}>
          ثبت و ادامه
        </Button>
        <div className="w-full center text-xxs">
          <p>ثبت&zwnj;نام کرده&zwnj;اید ؟ </p>
          <Link href={'/prisma-auth/login'} className="underline text-blue-800 hover:text-blue-700 smooth">وارد شوید</Link>
        </div>
      </form>
    </div>
  )
}

export default Page