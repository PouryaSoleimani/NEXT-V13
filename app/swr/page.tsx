"use client";
import { useLayoutEffect, useState } from "react";
import { LoaderCircle, Lock, Mail, Phone, User } from "lucide-react";
import { SingleUserType } from "./_hooks/useFetchUsers";
import { Button } from "@/components/ui/button";
import useSWR, { mutate } from "swr";
import axios from "axios";
const fetcher = (url: string) => axios.get(url).then((res) => res.data);

function SwrPage() {
   // const { data: users, error, isLoading } = useFetchUsers();

   const { data: users, isLoading, error } = useSWR("https://jsonplaceholder.typicode.com/users", fetcher);

   const [usersLocal, setUsersLocal] = useState([]);

   useLayoutEffect(() => {
     if (users) {
       setUsersLocal(users);
     }
   }, [users]);

   const addUser = async () => {
      const newUser = {
        id: Date.now(), // موقت
        email: "NEW USER (Optimistic)",
        username: "NEW USER (Optimistic)",
        password: "1312312312",
        body: "LOREM IPSUM ",
        phone: "312312312",
      };

      mutate(
         "https://jsonplaceholder.typicode.com/users",
         async (usersLocal: any[] = []) => {
            const optimistic = [...usersLocal, newUser];
            await axios.post("https://jsonplaceholder.typicode.com/users", newUser);
            return optimistic;
         },
         {
            optimisticData: [...usersLocal, newUser],
            rollbackOnError: true,
            revalidate: true,
         }
      );
   };

   if (isLoading)
      return (
         <div className="w-screen h-screen flex items-center justify-center">
            <LoaderCircle className="size-12 animate-spin" />
         </div>
      );

   if (error) return <div>Error loading data</div>;

   return (
     <div className='bg-black p-4 rounded-md my-6 w-[90%] mx-auto shadow'>
       <h1 className='w-full px-4 text-start bg-orange-600/50 text-2xl font-bold border-b-4 border-white  py-4 rounded-md'>
         USERS :
       </h1>
       <div className='grid grid-cols-4 gap-3 p-3'>
         {usersLocal?.map((user: SingleUserType) => (
           <div
             key={user.id}
             className='p-2 font-mono font-semibold text-lg border-2 rounded-lg border-zinc-600'>
             <h3 className='flex items-center gap-3 uppercase'>
               <User className='size-5' />
               {user.username}
             </h3>
             <p className='text-blue-700 flex items-center gap-3'>
               <Mail className='size-5' />
               {user.email}
             </p>
             <p className='text-green-800 flex items-center gap-3'>
               <Phone className='size-5' />
               {user.phone}
             </p>
             <p className='text-red-700/50 hover:text-red-700 flex items-center gap-3'>
               <Lock className='size-5' />
               {user.password}
             </p>
           </div>
         ))}
       </div>
       <div>
         <Button onClick={addUser}>ADD NEW USER</Button>
       </div>
     </div>
   );
}

export default SwrPage;
