import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card } from '@/components/ui/card';
import { LoaderCircle } from 'lucide-react';
import { BiError } from 'react-icons/bi';
import useFetchUsers from './_hooks/useFetchUsers';

const ReactQuery = () => {
  const { isLoading, error, data } = useFetchUsers();

  if (isLoading)
    return (
      <div className="w-screen h-screen flex flex-col text-xl font-mono gap-2 justify-center items-center">
        <LoaderCircle className="size-12 animate-spin stroke-orange-500" />
        Loading ...
      </div>
    );

  if (error)
    return (
      <div className="w-screen h-screen flex flex-col text-xl font-mono gap-2 justify-center items-center">
        <BiError className="size-12 text-red-500" />
        Error : {error.message}
      </div>
    );

  return (
    <>
      <section className="h-screen  bg-black">
        <h2 className="text-orange-500 text-4xl text-center font-black relative top-10 left-0 right-0">
          REACT___QUERY
        </h2>
        <div className="flex mt-16 px-10 gap-3">
          {data.map((item: any) => (
            <Card key={item.id} className="p-5 text-xl font-mono *:rounded-lg w-36">
              <h1>{item.name}</h1>
              <p>{item.age}</p>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default ReactQuery;
