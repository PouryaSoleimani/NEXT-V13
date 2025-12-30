import { get, Path, useFormState } from 'react-hook-form'
import { FormTypesV8 } from '../page'

const ErrorFieldV8 = ({name} : {name : Path<FormTypesV8>}) => {
  const { errors } = useFormState()
  const error = get(errors, name)

  if (!error) return null;

  return (
    <div className='text-rose-900 text-xxs font-bold pl-0.5'>{error.message}</div>
  )
}

export default ErrorFieldV8;

