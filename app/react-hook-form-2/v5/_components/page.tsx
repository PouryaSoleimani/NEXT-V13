import z from "zod";

const FORMSCHEMA = z.object({
   skills: z.array(
      z.object({
         title: z.string().min(1, "Title is Required"),
         level: z.coerce
            .number({ error: "Level Must be a Number" })
            .min(1, "Minimun 1")
            .max(10, "Maximum 10")
            .int(),
         experiences: z.array(
            z.object({
               company: z.string().min(1, "Company is Required"),
               years: z.coerce
                  .number()
                  .min(0, "Minimum 0")
                  .max(50, "Maximum 50")
                  .int()
                  .nullable(),
            })
         ),
      })
   ),
});

const ReactHookFormV6 = () => {
   return <div>ReactHookFormV6</div>;
};

export default ReactHookFormV6;