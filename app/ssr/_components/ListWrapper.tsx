import ListItem from "./ListItem";

type SingleItem = { id: string | number; name: string; [key: string]: string | number };
interface Props {
  list: SingleItem[];
}
// COMPONENT _____________________________________________________________________________
const ListWrapper = (props: Props) => {
  if (!props.list.length) {
    return <div>NO LIST</div>;
  }

  return (
    <div className='bg-black w-fit mx-auto p-5 rounded-xl my-32 border border-stone-800'>
      {props.list.map((item) => (
        <ListItem
          data={item}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default ListWrapper;
