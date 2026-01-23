import { FieldError, get, Path, useFormState } from 'react-hook-form'
import { FormType } from '../register/page'
import { InfoIcon } from 'lucide-react'

const ErrorFieldPrisma = ({ name, control }: { name: Path<FormType>, control: any }) => {
  const { errors } = useFormState({ control: control })
  const error = get(errors, name) as FieldError

  if (!error) return null;

  return (
    <div className='absolute top-1.5 flex items-center gap-1 text-red-900 left-7 font-vazir mt-1  text-xxs font-bold pr-1 trakcing-tight'>
      {error.message}
    </div>
  )
}

export default ErrorFieldPrisma