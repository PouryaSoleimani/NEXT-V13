"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import axios from "axios";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import { mutate } from "swr";
function Users() {
  const _fetcher = () => axios.get("http://localhost:5000/jojos/all").then((res) => res.data);

  const router = useRouter();

  const { data, isLoading, error } = useSWR("http://localhost:5000/jojos/all/", _fetcher);

  const deleter = (id: number) =>
    axios.delete(`http://localhost:5000/jojos/${id}`).then((res) => res.data);

  const { mutate } = useSWR("http://localhost:5000/jojos/all/", deleter);

  const handelDelete = async (id: number) => {
    await deleter(id);
    await mutate();
  };

  console.info("DATA ->", data);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div className="w-screen h-auto grid place-items-center-safe">
      <Card className="p-7 my-1 grid grid-cols-4 mt-10">
        {data?.length &&
          data?.map((item: any) => (
            <div
              key={item.id}
              className="bg-black p-3 rounded-xl size-44  text-center hover:scale-105 duration-500"
            >
              <CardHeader className="border-b-2 pb-2">{item.firstName.toUpperCase()}</CardHeader>
              <CardContent className="flex flex-col justify-center items-center gap-y-5 mt-6">
                <p
                  className={cn(
                    "text-white px-3 py-1.5 rounded-md w-32",
                    item.role == "front-end" ? "bg-red-800" : "bg-blue-800"
                  )}
                >
                  {item.age.toString().toUpperCase()}
                </p>
                <div className="flex gap-1">
                  <Button variant={"red"} onClick={() => handelDelete(item.id)}>
                    DELETE
                  </Button>
                  <Button
                    variant={"secondary"}
                    onClick={() => router.push(`/nest/form/${item.id}`)}
                  >
                    EDIT
                  </Button>
                </div>
              </CardContent>
            </div>
          ))}
      </Card>
    </div>
  );
}

export default Users;
