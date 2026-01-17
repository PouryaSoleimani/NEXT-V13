"use client";
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, LoaderCircle } from "lucide-react";
import { BiError } from "react-icons/bi";
import toast from "react-hot-toast";

import useFetchUsers from "./_hooks/useFetchUsers";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination";
import { Badge } from "@/components/ui/badge";

const ReactQuery = () => {
  const [page, setPage] = useState(1);
  const { isLoading, error, data, refetch } = useFetchUsers(page);

  useEffect(() => {
    if (page == 5 || page <= 1) {
      toast("No More Data", { style: { fontWeight: 900 } });
    }
    page;
  }, [page]);

  if (isLoading) {
    return (
      <div className='w-screen h-screen bg-black flex flex-col text-xl font-mono gap-2 justify-center i ems-center'>
        <LoaderCircle className='size-12 animate-spin stroke-orange-500' />
        Loading ...
      </div>
    );
  }

  if (error) {
    return (
      <div className='w-screen h-screen bg-black flex flex-col text-xl font-mono gap-2 justify-center items-center'>
        <BiError className='size-12 text-red-500' />
        Error : {error.message}
      </div>
    );
  }

  return (
    <>
      <section className='h-screen  bg-black'>
        <h2 className='text-orange-500 text-4xl text-center font-black relative top-10 left-0 right-0 bg-neutral-900 w-fit mx-auto p-2.5 rounded-xl'>
          REACT___QUERY
        </h2>
        <div className='flex flex-col justify-center-safe  mt-16 px-10 gap-6'>
          <div className='flex items-center-safe justify-center-safe gap-3'>
            {data?.map((item: any) => (
              <Card
                key={item.id}
                className='p-3 text-xl gap-y-3 font-mono *:rounded-lg w-36'>
                <Badge
                  variant={"outline"}
                  className='rounded-[2px] text-md font-black'>
                  #{item.id}
                </Badge>
                <h1>{item.name}</h1>
                <p className='bg-neutral-950/50 px-1 py-1.5'>{item.age}</p>
              </Card>
            ))}
          </div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <Button
                  disabled={page <= 1}
                  variant={"default"}
                  className='disabled:bg-neutral-900/50'
                  onClick={() => setPage((prev) => prev - 1)}>
                  <ChevronLeft /> Previous
                </Button>
              </PaginationItem>
              <PaginationItem>
                <Button onClick={() => setPage(1)}>1</Button>
              </PaginationItem>
              <PaginationItem>
                <Button onClick={() => setPage(2)}>2</Button>
              </PaginationItem>
              <PaginationItem>
                <Button onClick={() => setPage(3)}>3</Button>
              </PaginationItem>
              <PaginationItem>
                <Button onClick={() => setPage(4)}>4</Button>
              </PaginationItem>
              <PaginationItem>
                <Button onClick={() => setPage(5)}>5</Button>
              </PaginationItem>
              <PaginationItem>
                <Button
                  disabled={page > +data?.length + 1}
                  variant={"default"}
                  className='disabled:bg-neutral-900/50'
                  onClick={() => setPage((prev) => prev + 1)}>
                  Next <ChevronRight />
                </Button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
        <div className='flex items-center justify-center-safe'>
          <Button
            variant={"outline"}
            onClick={() => refetch()}
            className='m-5'>
            REFETCH
          </Button>
          <Badge
            variant={"outline"}
            className='text-lg px-4 font-black'>
            {page}
          </Badge>
        </div>
      </section>
    </>
  );
};

export default ReactQuery;
