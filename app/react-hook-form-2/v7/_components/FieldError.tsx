import { get, Path, useFormState } from 'react-hook-form'
import { FormTypesv7 } from '../page'

const FieldError = ({ name }: { name: Path<FormTypesv7> }) => {
  const { errors } = useFormState()
  const error = get(errors, name)
  
  if (!error) return null;
  return (
    <p className='text-xxs text-rose-900 pl-0.5 underline'>{error.message}</p>
  )
}

export default FieldError