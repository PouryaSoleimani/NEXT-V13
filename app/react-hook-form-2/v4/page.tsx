"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const FormSchema = z.object({
   items: z
      .array(
         z.object({
            title: z.string().min(1, "Title is Required"),
            price: z.string().min(1, "Title Must be > 0"),
         })
      )
      .min(1, "At Least One Item is Required"),
});
type FormTypes = z.infer<typeof FormSchema>;

const ReactHookFormV4 = () => {
   const { control } = useForm<FormTypes>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
         items: [],
      },
   });
   return <section className="w-screen h-screen bg-black center"></section>;
};

export default ReactHookFormV4;
