import { useFormContext } from "react-hook-form";

import { Input } from "@/components/ui/input";

export default function CustomInput() {
  const { register } = useFormContext();
  return <Input {...register("age")} placeholder="age" />;
}
