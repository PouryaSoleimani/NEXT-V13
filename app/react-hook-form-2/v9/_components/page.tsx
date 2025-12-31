import { get, Path, useFormState } from "react-hook-form";
import { FormTypesV9 } from "../page";

const ErrorFieldV9 = ({ name }: { name: Path<FormTypesV9> }) => {
  const { errors } = useFormState();
  const error = get(errors, name);
  if (!error) return null;
  return (
    <div className='text-rose-800 text-xxs font-semibold tracking-tight'>
      {error.message}
    </div>
  );
};

export default ErrorFieldV9;