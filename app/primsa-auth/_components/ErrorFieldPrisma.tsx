import { FieldError, get, Path, useFormState } from 'react-hook-form'
import { FormType } from '../register/page'

const ErrorFieldPrisma = ({ name, control }: { name: Path<FormType>, control: any }) => {
  const { errors } = useFormState({ control: control })
  const error = get(errors, name) as FieldError

  if (!error) return null;

  return (
    <div className='text-rose-900 mt-0.5 text-xxs font-bold pl-1 trakcing-tight'>
      {error.message}
    </div>
  )
}

export default ErrorFieldPrisma