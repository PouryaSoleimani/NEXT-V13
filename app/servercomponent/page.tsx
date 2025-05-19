//^ SERVER COMPONENT
import React from 'react';
import Form from './form/page';

type FormProps = { id: number; name: string; username: string };

const ServerComponent = async () => {
  //FETCHING DATA FROM SERVER - SSG / SSR / ISR
  const request = await fetch('https://jsonplaceholder.typicode.com/users', {
    // cache: 'force-cache' //! SSG ---> DEFAULT
    // cache: 'no-store' //^ SSR
    next: { revalidate: 3600 }, //* ISR
  });

  const response = await request.json();

  //RETURN
  return (
    <>
      <div>
        <h1 className="bg-lime-700 text-4xl font-bold p-4 text-center">ServerComponent</h1>
      </div>
      <h2 className="w-fit bg-yellow-400 text-black p-2 text-2xl font-bold my-2 ml-2">USERS :</h2>

      <div>
        {response.map((user: FormProps) => (
          <Form {...user} />
        ))}
      </div>
    </>
  );
};

export default ServerComponent;

//^ WE ALWAYS USE SERVERCOMPONENTS WHEN :
// 1 - WE HAVE DATA FETCHING FROM SERVER , LIKE fetch OR axios
// 2 - WE WANT TO ACCESS BACKEND RESOURCES DIRECTLY
// 3 - WE HAVE SENSITIVE INFORMATIONS LIKE TOKENS AND COOKIES
// 4 - WE HAVE TO IMPORT LARGE DEPENDENCIES IN OUR COMPONENT
//? AWLAYS USE SERVER COMPONENTS FOR : DATA FETCHING , AND BACKEND INTERACTIVITY , WHENEVER WE WANT TO FETCH DATA FROM BACKEND
