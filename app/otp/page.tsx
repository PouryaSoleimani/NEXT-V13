"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Logger from "@/hooks/Logger";
import { InfoIcon } from "lucide-react";

const FormSchema = z.object({
  pin: z
    .string()
    .min(6, { message: "Your one-time password must be 6 characters." }),
});

export default function InputOTPForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    mode: "onSubmit",
    resolver: zodResolver(FormSchema),
    defaultValues: { pin: "" },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    Logger("OTP", "log", data);
    form.reset();
    toast(`CODE : ${data.pin}`, {
      style: { fontWeight: 900, fontSize: "15px" },
    });
  }

  return (
    <div className='screen center'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='bg-neutral-800 border-2 p-10 rounded-xl w-fit space-y-6 center-col'>
          <FormField
            control={form.control}
            name='pin'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-center w-full flex items-center justify-center my-4 text-2xl'>
                  One-Time Password
                </FormLabel>
                <FormControl>
                  <InputOTP
                    maxLength={6}
                    {...field}>
                    <InputOTPGroup className='flex gap-3 *:rounded-lg *:size-12 *:border-4 *:shadow-md *:shadow-black mx-auto'>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormDescription className='w-full flex tracking-tighter items-center-safe justify-center text-center my-4'>
                  <InfoIcon className='size-5 text-blue-500 mx-2' />
                  Please enter the one-time password sent to your phone.
                </FormDescription>
                <FormMessage className='bg-rose-900 rounded-lg p-2 tracking-tight' />
              </FormItem>
            )}
          />

          <Button
            size={"lg"}
            variant={"success"}
            className='text-xl w-full'
            type='submit'>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
