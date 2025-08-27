import { Input } from "@/components/ui/input";
import React from "react";
import { useFormContext } from "react-hook-form";

export default function EmailInput() {
  const { register, formState } = useFormContext();
  return (
    <>
      <Input {...register("email")} placeholder="email" />
      {formState.errors.email && (
        <p className="text-red-800 text-xs pl-1 -translate-y-1">
          {formState.errors?.email.message as any}
        </p>
      )}
    </>
  );
}
