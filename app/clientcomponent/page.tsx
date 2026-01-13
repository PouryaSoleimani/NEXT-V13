//^ CLIENT COMPONENT
"use client"; // THIS LINE OF CODE MAKES OUR COMPONENT A CLIENT COMPONENT , AND WITHOUT THIS OUR COMPONENT IS ALWAYS A SERVER COMPONENT

type dataType = { id: number; name: string; age: number };

//COMPONENT
const ClientComponent = () => {
  const datas: dataType[] = [
    { id: 1, name: "pourya", age: 30 },
    { id: 2, name: "alireza", age: 25 },
    { id: 3, name: "mohammad", age: 27 },
    { id: 4, name: "reza", age: 21 },
    { id: 5, name: "ashkan", age: 22 },
  ];

  function clickHandler() {
    console.log("CLICK CLICK");
  }

  // RETURN
  return (
    <>
      <div>
        <h1 className='bg-slate-800/70 backdrop-blur-3xl text-slate-100 text-4xl mb-4 text-center font-bold p-7'>
          CLIENT COMPONENT
        </h1>
      </div>

      <div className='w-1/2 h-fit bg-zinc-700/40 mx-auto text-2xl p-4 flex space-x-32'>
        <ul className='flex flex-col space-y-6'>
          {datas.map((user: dataType) => (
            <li key={user.id}>
              {user.id} - {user.name.toUpperCase()} : {user.age} Years Old .
            </li>
          ))}
        </ul>
        <button
          onClick={clickHandler}
          className='bg-violet-500 h-[5rem] my-auto px-4 rounded-lg text-black font-bold'>
          CLICK ME
        </button>
      </div>
    </>
  );
};
export default ClientComponent;

// ^  WE USE CLIENT COMPONENTS WHEN :
// 1 - WE HAVE EVENTS LIKE (( ONCLICK )) OR (( ONCHANGE ))
// 2 - WE MUST USE REACT HOOKS LIKE : (( USEEFFECT )) OR (( USESTATE )) AND ...
// 3 - WE USE BROWSER APIs LIKE (( COOKIES )) AND (( LOCAL STORAGE ))
// ? ALWAYS USE CLIENT COMPONENTS FOR : EVENTS , HOOKS , BROWSER APIs
