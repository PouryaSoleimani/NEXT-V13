//* FORM PAGE IN SERVER COMPONENT
import React from "react";

const Form = (response: any) => {
  return (
    <div className="text-xl p-2 font-semibold ">
      <h1>
        {response.id} - {response.name} - {response.username}
      </h1>
    </div>
  );
};

export default Form;
