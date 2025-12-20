//^ IMAGE COMPONENT

import Image from "next/image";

export default function ImageComponent() {
   return (
      <>
         <div className="p-8 text-3xl text-center border-b-8 border-lime-500 bg-lime-500 text-black font-black">
            <h1>IMAGE TAG IN NEXT JS</h1>
         </div>

         <div className="flex items-center justify-center h-fit py-10">
            <Image
               src="/images/cartoonNature.avif"
               width={1500}
               height={1000}
               className="w-[50rem] h-[20rem] rounded-xl"
               alt="Cartoon Nature Image"
            />
         </div>
      </>
   );
}
