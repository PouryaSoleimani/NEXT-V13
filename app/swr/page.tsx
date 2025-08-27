"use client";
import React from "react";
import useFetchUsers, { SingleUserType } from "./_hooks/useFetchUsers";
import { LoaderCircle, Lock, Mail, Phone, User } from "lucide-react";
function SwrPage() {
  const { data: users, error, isLoading } = useFetchUsers();

  if (isLoading)
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <LoaderCircle className="size-12 animate-spin" />
      </div>
    );
  if (error) return <div>Error loading data</div>;

  return (
    <div className="bg-black p-4 rounded-md my-6 w-[90%] mx-auto shadow">
      <h1 className="w-full px-4 text-start bg-orange-600/50 text-2xl font-bold border-b-4 border-white  py-4 rounded-md">USERS :</h1>
      <div className="grid grid-cols-4 p-3">
        {users?.slice(0, 5)?.map((user: SingleUserType) => (
          <div
            key={user.id}
            className="p-2 font-mono font-semibold text-lg border-b-4 border-r-4 border-t-4 border-zinc-600 first:border-l-4 last:border-l-4 last:border-t-0 "
          >
            <h3 className="flex items-center gap-3 uppercase">
              <User className="size-5" />
              {user.name.firstname} {user.name.lastname}
            </h3>
            <p className="text-blue-700 flex items-center gap-3">
              <Mail className="size-5" />
              {user.email}
            </p>
            <p className="text-green-800 flex items-center gap-3">
              <Phone className="size-5" />
              {user.phone}
            </p>
            <p className="text-red-700/50 hover:text-red-700 flex items-center gap-3">
              <Lock className="size-5" />
              {user.password}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SwrPage;
