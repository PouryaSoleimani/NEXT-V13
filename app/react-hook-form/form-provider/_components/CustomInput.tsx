import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

export default function CustomInput() {
  const { register } = useFormContext();
  return <Input {...register("age")} placeholder="age" />;
}
