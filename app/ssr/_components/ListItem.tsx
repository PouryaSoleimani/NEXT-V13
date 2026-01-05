"use client";

import useClientSideFetcher from "../_hooks/useClientSideFetcher";

const ListItem = ({ data }: { data: { id: string | number; name: string | number } }) => {
  if (!data) {
    return null;
  }

  const { data: clientData } = useClientSideFetcher("https://jsonplaceholder.typicode.com/users/2");

  if (clientData) {
    console.info("CLIENT DATA => ", clientData.name);
  }

  return (
    <div className='border-b border-stone-800 py-1'>
      {data.id} - {data.name}
    </div>
  );
};

export default ListItem;
