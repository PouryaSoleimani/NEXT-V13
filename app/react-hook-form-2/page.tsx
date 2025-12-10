"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const ReactHookForm = () => {
   const [email, setEmail] = useState("");
   const [error, setError] = useState("");

   function handleSubmit(e: any) {
      e.preventDefault();
      if (!email) {
         setError("EMAIL IS REQUIRED");
         return;
      }
      if (!error) {
         setEmail("");
         alert(`EMAIL SUBMITTED : ${email}`);
      }
   }
   return (
      <form className="bg-zinc-700 w-fit p-6 rounded-xl mx-auto my-32 flex flex-col gap-2" onSubmit={handleSubmit}>
         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="EMAIL ..." className="border border-black p-1 rounded-lg" />
         {error && <p className="text-sm text-red-700 font-sans">{error}</p>}
         <Button>SUBMIT</Button>
      </form>
   );
};

export default ReactHookForm;
