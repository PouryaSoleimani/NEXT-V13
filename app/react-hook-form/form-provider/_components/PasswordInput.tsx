import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import React from "react";
import { useFormContext } from "react-hook-form";

export default function PasswordInput() {
  const { register, formState, watch } = useFormContext();
  const passValue = watch("password");
  return (
    <>
      <Input
        type="password"
        {...register("password")}
        placeholder="password"
        className={cn(formState.isValid ? "border-2 border-green-500" : "border-2 border-red-600")}
      />
      {formState.errors.password && (
        <p className="text-red-800 text-xs pl-1 m-0">{formState.errors?.password.message as any}</p>
      )}
      {<p className="text-xs pl-1">{formState.isValid ? "TRUE" : "FALSE"}</p>}
    </>
  );
}
