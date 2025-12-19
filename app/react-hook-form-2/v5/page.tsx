
import z from 'zod';

const FORMSCHEMA = z.object({
   skills: z.array(
      z.object({
         title: z.string(),
         level: z.number(),
         experiences: z.array(
            z.object({
               company: z.string(),
               years: z.number(),
            })
         ),
      })
   ),
});
const ReactHookFormV5 = () => {
   return <div className="section"></div>;
};

export default ReactHookFormV5;