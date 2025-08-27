"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash } from "lucide-react";
import React from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import toast from "react-hot-toast";
const toastStyles: React.CSSProperties = { fontWeight: "bold", border: "6px solid #fabb14" };

function UseFieldArrayPage() {
  const { control, register, handleSubmit, reset } = useForm();
  const { fields, append, prepend, remove } = useFieldArray({
    name: "user",
    control,
    rules: { required: { value: true, message: "IT IS REQUIRED" } },
  });
  function submitHandler(data: any) {
    console.info("data =>", data);
    toast.success(`${data?.user[0]?.firstName} ${data?.user[0]?.lastName}`, { style: toastStyles });
    setTimeout(() => {
      reset();
    }, 350);
  }
  return (
    <div>
      <form onSubmit={handleSubmit((data) => submitHandler(data))} className="bg-zinc-800 w-1/2 flex flex-col mx-auto my-20">
        <ul>
          {fields.map((item, index) => (
            <li key={item.id} className="flex gap-2 p-2 m-1.5 rounded-md bg-black">
              <Input {...register(`user.${index}.firstName`)} className="w-1/2" placeholder="firstname" />
              <Controller
                render={({ field }) => <Input {...field} className="w-1/2" placeholder="lastname" />}
                name={`user.${index}.lastName`}
                control={control}
              />
              <Button variant={"red"} type="button" onClick={() => remove(index)} className="w-16">
                <Trash />
              </Button>
            </li>
          ))}
        </ul>
        <div className="flex justify-center py-5 gap-3">
          <Button type="submit" variant={"success"} className="w-32">
            SUBMIT
          </Button>
          <Button type="button" variant={"blue"} onClick={() => append({ firstName: "", lastName: "" })} className="w-32">
            {" "}
            append{" "}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default UseFieldArrayPage;
