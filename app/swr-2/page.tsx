"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { HiUserAdd } from "react-icons/hi";
import useSWR, { mutate } from "swr";

type SingleUserType = {
  id: number;
  name: string;
  username?: string;
  email?: string;
  address?: { street: string; suite: string; city: string };
  phone?: string;
  website?: string;
  company?: { name: string; catchPhrase: string; bs: string };
};

const fetcher = () => axios.get("https://jsonplaceholder.typicode.com/users").then((res) => res.data);

function Swr2Page() {
  const {
    data: users,
    isLoading,
    error,
  } = useSWR("https://jsonplaceholder.typicode.com/users", fetcher, {
    // SWR OPTIONS :
    revalidateOnFocus: true,
    revalidateOnMount: true,
    revalidateOnReconnect: true,
    refreshInterval: 10000,
  });

  if (isLoading) {
    return <div>IS LOADING</div>;
  }
  if (error) {
    return <div>ERROR</div>;
  }

  async function addNewUser() {
    const newUser = { id: Date.now(), name: "POURYA", phone: "09321831231" };

    //^ UPDATING UI WITHOUT REQUEST TO API ____ FAKE UPDATE
    // mutate('https://jsonplaceholder.typicode.com/users', [...users, newUser], false)

    //^ OPTIMISTIC UI FEATURE
    await mutate(
      "https://jsonplaceholder.typicode.com/users",
      async () => {
        const optimistic = [...users, newUser];
        await axios.post("https://jsonplaceholder.typicode.com/users", newUser);
        return optimistic;
      },
      { optimisticData: [...users, newUser], rollbackOnError: true, revalidate: true }
    );
  }

  return (
    <>
      <div className='grid grid-cols-4 gap-6 p-10'>
        {users.length > 0 &&
          users?.map((user: SingleUserType) => <p className='bg-zinc-300 p-6 rounded-lg text-black'>{user.name}</p>)}
      </div>
      <div className='grid place-items-center border-t-4 border-zinc-600 pt-9'>
        <Button
          onClick={addNewUser}
          className='mx-auto'>
          <HiUserAdd />
          ADD NEW USER
        </Button>
      </div>
    </>
  );
}

export default Swr2Page;
