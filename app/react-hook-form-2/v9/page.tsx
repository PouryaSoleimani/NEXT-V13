"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Controller, FormProvider, useForm, useWatch } from "react-hook-form";
import z from "zod";
import useCapitilize from "./_hooks/useCapitilize";
import ErrorFieldV9 from "./_components/ErrorFieldV9";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { ArrowRight, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import toast from "react-hot-toast";
import axios from "axios";

const FormSchema1 = z.object({
  username: z
    .string("Username is Required")
    .min(1, "Username can't be Empty")
    .max(10, "Username must be Maximum 10 letters"),
  email: z.email("Email is Invalid"),
});

const FormSchema2 = z
  .object({
    password: z.string("password is Required").min(4, "Password must be at least 4 letters"),
    confirmPassword: z
      .string("ConfirmPassword is Required")
      .min(4, "Confirm password must be at least 4 letters "),
  })
  .refine(
    (data) => {
      if (data.password !== data.confirmPassword) {
        return false;
      }
      return true;
    },
    { error: "Passwords Dont Match", path: ["confirmPassword"] }
  );

const FormSchema3 = z.object({
  acceptTerms: z.literal(true, "Please Accept the Privacy and Policy Terms To Continue"),
});

const schemaByStep = { 1: FormSchema1, 2: FormSchema2, 3: FormSchema3 };

export type FormTypesV9 =
  | z.infer<typeof FormSchema1>
  | z.infer<typeof FormSchema2>
  | z.infer<typeof FormSchema3>;

// COMPONENT __________________________________________________________________________________________________
const ReactHookFormV9 = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [inputType, setInputType] = useState<"password" | "text">("password");
  const [inputType2, setInputType2] = useState<"password" | "text">("password");

  const methods = useForm<FormTypesV9>({
    mode: "onChange",
    resolver: zodResolver(schemaByStep[step] as keyof FormTypesV9),
    defaultValues: { username: "", email: "", password: "", confirmPassword: "", acceptTerms: undefined },
  });

  function submitHandler() {
    toast.loading("SUBMITTING FORM", { position: "top-center", id: "SUBMIT__TOAST" });
    axios
      .get("https://jsonplaceholder.typicode.com/todos/2", { timeout: 5000 })
      .then((res) => {
        console.info("RES => ", res);
        const _dto = methods.getValues();
        toast.dismiss();
        toast.success("FORM SUBMITTED", {
          position: "top-center",
          style: { borderBottom: "6px solid limegreen" },
        });
        console.clear();
        console.info("DTO ==>", _dto);
        methods.reset();
        setStep(1);
      })
      .catch((err) => {
        toast.dismiss();
        toast.error(`${err.message}`, {
          position: "top-center",
          id: "SUBMIT__TOAST",
          style: { fontSize: "10px", borderBottom: "6px solid darkred" },
        });
        methods.setError("acceptTerms", { message: `${err.message}`, type: "validate" });
        console.info("%c Error :", "color: darkred , font-weight: bold", err.message);
        methods.reset({ acceptTerms: undefined }, { keepErrors: true });
      });
  }

  async function onNextHandler() {
    const isValid = await methods.trigger(undefined, { shouldFocus: true });
    if (isValid) {
      setStep((s) => (s + 1) as any);
    }
  }

  function toggleInputType() {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  }

  function toggleInputType2() {
    if (inputType2 === "password") {
      setInputType2("text");
    } else {
      setInputType2("password");
    }
  }

  const hasAccepted = useWatch({ control: methods.control, name: "acceptTerms" });

  return (
    <div className='section center'>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(submitHandler)}
          className='border p-5 rounded-xl border-stone-700 bg-neutral-800'>
          {step === 1 && (
            <div className='flex flex-col gap-3'>
              <Controller
                control={methods.control}
                name='username'
                render={({ field }) => (
                  <div className='flex flex-col gap-2'>
                    <Label className='capitalize'>{useCapitilize(field.name.toString())}</Label>
                    <Input
                      type='text'
                      placeholder={field.name.toUpperCase()}
                      value={field.value}
                      onChange={field.onChange}
                      aria-invalid={
                        !!methods.formState.errors[field.name as keyof typeof methods.formState.errors]
                      }
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
                    <Label className='capitalize'>{useCapitilize(field.name.toString())}</Label>
                    <Input
                      type='text'
                      placeholder={field.name.toUpperCase()}
                      value={field.value}
                      onChange={field.onChange}
                      aria-invalid={
                        !!methods.formState.errors[field.name as keyof typeof methods.formState.errors]
                      }
                    />
                    <ErrorFieldV9 name={field.name} />
                  </div>
                )}
              />
              <Button
                variant={"blue"}
                onClick={onNextHandler}
                type='button'
                disabled={!methods.formState.isValid || methods.formState.isSubmitting}
                aria-disabled={!methods.formState.isValid || methods.formState.isSubmitting}
                className='flex items-start'>
                NEXT STEP <ArrowRight />
              </Button>
            </div>
          )}
          {step === 2 && (
            <div className='flex  flex-col gap-3'>
              <div>
                <Controller
                  control={methods.control}
                  name='password'
                  render={({ field }) => (
                    <div className='flex flex-col gap-1.5 relative inset-0'>
                      <Label>{field.name.toUpperCase()}</Label>
                      <Input
                        value={field.value}
                        onChange={field.onChange}
                        type={inputType}
                        aria-invalid={
                          !!methods.formState.errors[field.name as keyof typeof methods.formState.errors]
                        }
                      />
                      <button
                        type='button'
                        onClick={toggleInputType}>
                        <Eye className={cn("absolute right-2 top-7 size-5")} />
                      </button>
                      <ErrorFieldV9 name={field.name} />
                    </div>
                  )}
                />
              </div>
              <div>
                <Controller
                  control={methods.control}
                  name='confirmPassword'
                  render={({ field }) => (
                    <div className='flex flex-col gap-1.5 relative inset-0'>
                      <Label>{field.name.toUpperCase()}</Label>
                      <Input
                        value={field.value}
                        onChange={field.onChange}
                        type={inputType2}
                        aria-invalid={
                          !!methods.formState.errors[field.name as keyof typeof methods.formState.errors]
                        }
                      />
                      <button
                        type='button'
                        onClick={toggleInputType2}>
                        <Eye className={cn("absolute right-2 top-7 size-5")} />
                      </button>
                      <ErrorFieldV9 name={field.name} />
                    </div>
                  )}
                />
              </div>
              <Button
                variant={"blue"}
                onClick={onNextHandler}
                type='button'
                disabled={!methods.formState.isValid || methods.formState.isSubmitting}
                aria-disabled={!methods.formState.isValid || methods.formState.isSubmitting}
                className='flex items-start'>
                NEXT STEP <ArrowRight />
              </Button>
            </div>
          )}
          {step == 3 && (
            <div>
              <Controller
                control={methods.control}
                name='acceptTerms'
                render={({ field }) => (
                  <div className='flex flex-col gap-3 items-center-safe tracking-tight border-b-2 pb-3 border-b-stone-800'>
                    <div className='flex flex-row-reverse gap-3 items-center'>
                      <Label>Accept Privacy and Policy Terms</Label>
                      <Checkbox
                        checked={!!field.value}
                        onCheckedChange={field.onChange}
                        className={cn("size-5", hasAccepted && "bg-emerald-800 border-emerald-900")}
                      />
                    </div>
                    <ErrorFieldV9 name={field.name} />
                  </div>
                )}
              />
              <Button
                disabled={!methods.formState.isValid || methods.formState.isSubmitting}
                aria-disabled={!methods.formState.isValid || methods.formState.isSubmitting}
                type='submit'
                variant={"success"}
                className='w-full mt-0'>
                SUBMIT
              </Button>
            </div>
          )}
        </form>
      </FormProvider>
    </div>
  );
};

export default ReactHookFormV9;
