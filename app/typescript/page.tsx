"use client";
import React, { JSX } from "react";
import TodoComponent from "./_components/Todo";
import UserComponent from "./_components/User";
import Reducer from "./_components/Reducer";
import Translate from "./_components/translate/Translate";
import Father from "./_components/Father";
import Theme from "./context/Theme";

// const TypeScriptPage = (): JSX.Element => { // TYPE OF COMPONENT
// const TypeScriptPage = (): React.ReactNode => { // TYPE OF COMPONENT
const TypeScriptPage: React.FC = (): JSX.Element => {
  // TYPE OF COMPONENT
  TypeScriptPage.displayName = "TS";
  return (
    <>
      <div className="text-3xl font-bold p-6 text-center bg-blue-700 text-white my-6">
        TypeScriptPage
      </div>
      <TodoComponent props={TodosList} />
      <UserComponent props={UsersList} />
      <Reducer />
      <Translate toTranslate="error_tr" />
      <Father />
      <Theme />
    </>
  );
};
export default TypeScriptPage;

const TodosList = [
  { id: 1, title: "Todo 1", isCompleted: true },
  { id: 2, title: "Todo 2", isCompleted: false },
  { id: 3, title: "Todo 3", isCompleted: true },
  { id: 4, title: "Todo 4", isCompleted: false },
];

const UsersList = [
  { id: "1", name: "User 1", age: 25 },
  { id: "2", name: "User 2", age: 30 },
  { id: "3", name: "User 3", age: 35 },
  { id: "4", name: "User 4", age: 40 },
];
