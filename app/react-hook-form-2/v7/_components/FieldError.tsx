import { get, Path, useFormState } from "react-hook-form"
import { FormTypesv7 } from "../page"

const FieldError = ({ name }: { name: Path<FormTypesv7> }) => {
   const { errors } = useFormState()
   const error = get(errors , name)
   if (!error) return null;

  return (
    <div className="text-xxs pl-0.5 text-rose-900 underline font-semibold font-sans">{error.message}</div>
  )
}

export default FieldError