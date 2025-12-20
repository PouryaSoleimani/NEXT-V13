import z from "zod";

const FORMSCHEMA = z.object({
   skills: z
      .array(
         z.object({
            title: z.string(),
            level: z.coerce
               .number({ error: "Level Must be a number" })
               .min(1, "Minimun 1")
               .max(5, "Maximum 5")
               .int(),
            experiences: z
               .array(
                  z.object({
                     company: z.string().min(1, "Company Name is Required"),
                     years: z.coerce
                        .number({ error: "Years Must Be a number" })
                        .min(1, "Minimun 1")
                        .max(5, "Maximum 5")
                        .int()
                        .nullable(),
                  })
               )
               .min(1, "At least 1 Company is Required"),
         })
      )
      .min(1, "At least 1 Skill is Required"),
});

const ReactHookFormV6 = () => {
   return <div>ReactHookFormV6</div>;
};

export default ReactHookFormV6;
