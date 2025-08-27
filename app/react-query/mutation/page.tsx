"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { SquareCheckBig } from "lucide-react";
import React from "react";

const Mutation = () => {
  const newTodo = { title: "LEARN NEST___JS", isDone: false };

  function getAllTodos() {
    return axios.get("http://localhost:5000/todos").then((res) => res.data);
  }

  const client = useQueryClient();

  const { data } = useQuery({ queryKey: ["todos"], queryFn: getAllTodos });

  const mutation = useMutation({
    mutationKey: ["todos"],
    mutationFn: () => {
      return axios.post("http://localhost:5000/todos", newTodo);
    },
    onSuccess: () => {
      client.invalidateQueries();
    }, // mutation
  });

  return (
    <div>
      {mutation.isPending ? (
        "Adding todo..."
      ) : (
        <div className="center py-5">
          <Button
            variant={"blue"}
            onClick={() => {
              mutation.mutate();
            }}
          >
            {" "}
            Create Todo{" "}
          </Button>
        </div>
      )}
      <div className="center">
        {data?.length == 0 ? (
          <div className="screen center">
            <div className="flex gap-2 text-green-500 bg-black p-3 text-4xl rounded-lg">
              <SquareCheckBig size={34} />
              All Tasks Done
            </div>
          </div>
        ) : (
          <Card className="w-[90%] grid grid-cols-6 m-3 px-2">
            {data?.map((item: any) => (
              <h2
                key={item.id}
                className="center mx-auto bg-black place-items-stretch gap-5 px-4 py-2 rounded-lg "
              >
                {item.title} {item.isDone == true ? "✅" : "❌"}
              </h2>
            ))}
          </Card>
        )}
      </div>
    </div>
  );
};

export default Mutation;
