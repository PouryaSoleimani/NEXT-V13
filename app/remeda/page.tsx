import React from "react";
import * as __ from "remeda";
import { indexOf } from "lodash";

import { products, users } from "../lodash/db";

function Remeda() {
  const sorted = __.sort(products, (item) => item.price).reverse();
  // console.info(sorted);

  const partitioned = __.partition(products, (item) => item.category == "accessories");
  // console.info(partitioned);

  const chuncked = __.chunk(products, 3);
  // console.info(chuncked)

  const concated = __.concat(products, users);
  // console.info(concated)

  const filtered = __.filter(products, (item) => item.category == "shoes");
  // console.info(filtered)

  const grouped = __.groupBy(products, (item) => item.category);
  // console.info(grouped);

  const mapped = __.map(products, (item) => item.title);
  // console.info(mapped);

  const reduced = __.reduce(products, (sum, item) => sum + item.price, 0);
  // console.info(reduced);

  const foundIndex = __.findIndex(products, (item) => item.id == 2);
  // console.info(foundIndex);

  const first = __.first(products);
  // console.info(first)

  const randomString = __.randomString(10);
  console.info(randomString);

  return (
    <div>
      <h2 className="text-lime-400 w-fit mx-auto mt-5 bg-zinc-800 px-5 py-2.5 text-2xl font-black font-sans rounded-xl border-4 border-lime-900">
        REMEDA
      </h2>
      <h2 className="w-fit mx-auto mt-10 bg-zinc-800 border-8 rounded-xl border-lime-400 p-5">
        PASSWORD: <span className="ml-4 bg-black p-2">{randomString}</span>
      </h2>
    </div>
  );
}

export default Remeda;
