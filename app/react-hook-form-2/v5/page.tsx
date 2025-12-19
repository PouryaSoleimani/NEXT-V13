import z from "zod";
//^ FORM SCHEMA
const FORMSCHEMA = z.object({
   skills: z
      .array(
         z.object({
            title: z.string().min(1),
            level: z.number().min(1).max(5),
            experiences: z.array(
                  z.object({
                     company: z.string().min(1),
                     years: z.number().min(1),
                  })
               )
               .min(1),
         })
      )
      .min(1),
});

const NestedFilledArray = () => {
   return (
      <div className="section bg-neutral-950">
         <form>FORM</form>
      </div>
   );
};

export default NestedFilledArray;
