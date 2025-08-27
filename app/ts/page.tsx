"use client";
import React from "react";
import Link from "next/link";

import { LoginFunction, _ApiResponse } from "./typescript";

const TsTrainingPage = () => {
  // console.info('RESULT =>', listResult)
  class PersonExtended {
    static Log() {
      console.info("log from class");
    }
    constructor(
      private password: string,
      readonly username: string
    ) {}
    get getPassword() {
      return this.password;
    }
    set setPassword(newPassword: string) {
      this.password = newPassword;
    }
  }

  const newPerson = new PersonExtended("12345", "PouryaSoleimani");

  // console.info('%c PASSWORD ---->', 'color:cyan', newPerson.getPassword);
  // console.info('%c READ ONLY -->', 'color:cyan', newPerson.username);
  newPerson.setPassword = "NEW PASSWORD";
  // Logger(newPerson)

  // PersonExtended.Log()

  const _Result = LoginFunction("Ali", "123456");
  // console.info('RESULT ==> ', _Result)

  // ReturnProductStatus('PENDING')
  // Logger(_ApiResponse)
  // Logger(newCar2)
  // Logger(newKeyboard)
  // Logger(newSimpleCar)

  function LoggerDecorator(constructor: any) {
    console.info("LOG LOG ====> ", constructor.initCount);
    const result = constructor.initCount + 10;
    console.info("LOG ==> ", result);
    console.info("LOG ==> ", constructor.logHello());
  }
  @LoggerDecorator
  class Car3 {
    static initCount = 0;
    constructor(
      public make: string,
      public model: string
    ) {}
    static logHello() {
      console.info("HELLO FROM INSIDE THE CLASS");
    }
  }

  function DecoratorFactory(param: number) {
    return function (constructor: any) {
      console.info("DECORATOR FACTORY ====> ", constructor);
      constructor.prototype.id = param;
      console.info("DECORATOR FACTORY ====> ", constructor.prototype.id);
    };
  }
  @DecoratorFactory(29)
  class DecoratorFactoryClass {
    constructor(
      public name: string,
      public age: string
    ) {}
  }

  // EXAMPLE
  function insertToDom(value: string) {
    return function (target: any) {
      const elem = document.querySelector("#LINK")!;
      if (elem) {
        elem.innerHTML = value;
      } else {
        console.info("ELEM NOT FOUND");
      }
    };
  }
  function LowerCase(target: any, methodName: string, descriptor: PropertyDescriptor) {
    console.info("LOG FROM LOWERCASE", target, methodName, descriptor);
    methodName = "SPEAKING";
    console.info(descriptor.value);
  }
  @insertToDom("<p>HELLO</p>")
  class InsertToDomClass {
    constructor(public name: string) {}
    @LowerCase
    speak() {
      console.info("SPEAKING");
    }
  }

  //* RETURN
  return (
    <div id="LINK">
      <h1 className="text-4xl font-bold bg-blue-700 py-5 text-center w-fit px-4 rounded-lg mx-auto my-5 border-b-4 border-white">
        TypeScript Training
      </h1>
      <Link href="/about"></Link>
    </div>
  );
};

export default TsTrainingPage;
