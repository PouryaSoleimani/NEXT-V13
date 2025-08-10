import React from 'react';
import * as _ from 'remeda';
import { products, users } from '../lodash/db';
import { indexOf } from 'lodash';

function Remeda() {
  const sorted = _.sort(products, (item) => item.price).reverse();
  // console.info(sorted);

  const partitioned = _.partition(products, (item) => item.category == 'accessories');
  // console.info(partitioned);

  const chuncked = _.chunk(products, 3);
  // console.info(chuncked)

  const concated = _.concat(products, users);
  // console.info(concated)

  const filtered = _.filter(products, (item) => item.category == 'shoes');
  // console.info(filtered)

  const grouped = _.groupBy(products, (item) => item.category);
  // console.info(grouped);

  const mapped = _.map(products, (item) => item.title);
  // console.info(mapped);

  const reduced = _.reduce(products, (sum, item) => sum + item.price, 0);
  // console.info(reduced);

  const foundIndex = _.findIndex(products, (item) => item.id == 2);
  // console.info(foundIndex);

  const first = _.first(products);
  // console.info(first)

  const randomString = _.randomString(10);
  console.info(randomString);

  return (
    <div>
      <h2 className="text-lime-400 w-fit mx-auto mt-5 bg-zinc-800 px-5 py-2.5 text-2xl font-black font-sans rounded-xl border-4 border-zinc-300">
        REMEDA
      </h2>
      <h2 className="w-fit mx-auto mt-10 bg-zinc-800 border-4 border-lime-400 p-5">
        PASSWORD: <span className="ml-4 bg-black p-2">{randomString}</span>
      </h2>
    </div>
  );
}

export default Remeda;
