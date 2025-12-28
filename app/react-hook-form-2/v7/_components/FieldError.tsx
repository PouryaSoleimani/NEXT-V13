import { get, Path, useFormState } from "react-hook-form";
import { FormTypesv7 } from "../page";

const FieldError = ({ name }: { name: Path<FormTypesv7> }) => {
   const { errors } = useFormState();
   const error = get(errors, name);
   if (!error) return null;

   return <div className="text-red-800 text-xxs  font-semibold pl-0.5">{error.message}</div>;
};

export default FieldError;