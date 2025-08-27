import React, { useContext } from "react";

type UserType = { id: string; name: string; age: number };

type UserComponentPropsType = {
  props: UserType[];
};

const UserComponent: React.FC<UserComponentPropsType> = ({ props }) => {
  return (
    <div className="flex border gap-3 px-5 py-1 mx-10 rounded-lg border-zinc-500">
      {props.map((user) => (
        <div key={user.id} className="flex items-center grow justify-between p-4 my-2 rounded-xl  text-xl w-fit gap-6 font-bold bg-stone-800">
          <h2>{user.name}</h2>
          <p>Age: {user.age}</p>
        </div>
      ))}
    </div>
  );
};

export default UserComponent;
