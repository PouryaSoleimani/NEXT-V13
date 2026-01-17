import React from "react";
import { get, Path, useFormState } from "react-hook-form";
import { FormTypes } from "../../v5/page";

const FieldError = ({ name }: { name: Path<FormTypes> }) => {
  const { errors } = useFormState();
  const error = get(errors, name);
  if (!error) return null;

  return (
    <div className='text-red-700 text-xs font-medium font-["SF MONO"]'>
      {error.message}
    </div>
  );
};

export default FieldError;
