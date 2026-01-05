"use client";
const ListItem = ({ data }: { data: { id: string | number; name: string | number } }) => {
  if (!data) {
    return null;
  }
  return (
    <div className='border-b border-stone-800 py-1'>
      {data.id} - {data.name}
    </div>
  );
};

export default ListItem;
