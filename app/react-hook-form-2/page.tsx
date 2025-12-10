import { Button } from "@/components/ui/button";
import React from "react";
import { useForm } from "react-hook-form";

type FormValuesType = {
   email: string;
};

const ReactHookFormPage = () => {
   const { register, handleSubmit, watch, formState, reset, getValues } = useForm<FormValuesType>();

   function onSubmit(data: FormValuesType, e: any) {
      console.log("DATAS => ", data);
      alert(`FORM VALUES => EMAIL : ${data.email}`);
      reset();
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <input type="email" placeholder="EMAIL ..." {...register("email")} className="p-1 border border-black rounded-lg" />
         {formState.errors.email && <p>{formState.errors.email.message}</p>}
         <Button type="submit">SUBMIT</Button>
      </form>
   );
};

export default ReactHookFormPage;
