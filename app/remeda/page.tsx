import React from 'react';
import * as R from 'remeda';
import { products, users } from '../lodash/db';

function Remeda() {
  const sorted = R.sort(products, (item) => item.price).reverse();
  // console.info(sorted);

  const partitioned = R.partition(products, (item) => item.category == 'accessories');
  // console.info(partitioned);

  const chuncked = R.chunk(products, 3);
  // console.info(chuncked)

  const concated = R.concat(products, users);
  // console.info(concated)

  const filtered = R.filter(products, (item) => item.category == 'shoes');
  // console.info(filtered)


  return (
    <div>
      <h2 className="text-lime-400 w-fit mx-auto mt-5 bg-zinc-800 px-5 py-2.5 text-2xl font-black font-sans rounded-xl border-4 border-zinc-300">
        REMEDA
      </h2>
    </div>
  );
}

export default Remeda;
