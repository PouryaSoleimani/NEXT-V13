import { get, Path, useFormState } from "react-hook-form";
import { FormTypesV9 } from "../page";
import { AlertTriangle } from "lucide-react";

const ErrorFieldV9 = ({ name }: { name: Path<FormTypesV9> }) => {
  const { errors } = useFormState();
  const error = get(errors, name);
  if (!error) return null;
  return (
    <div className='text-rose-800 flex items-start gap-1 pl-0.5 font-sans  w-full text-xxs font-bold underline'>
      <AlertTriangle className='size-4' />
      {error.message}
    </div>
  );
};

export default ErrorFieldV9;
