"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const ReactHookForm = () => {
   const [email, setEmail] = useState("");
   const [error, setError] = useState("");
   function handleSubmit(e: any) {
      
   }
   return (
      <form>
         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="EMAIL ..." disabled={!!error.length} />
         <Button>SUBMIT</Button>
      </form>
   );
};

export default ReactHookForm;
