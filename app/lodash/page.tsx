import React from 'react';
import * as _ from 'lodash';
import { StarIcon } from 'lucide-react';

const array = [10, 20, 50, 60, 30, 70, 90, 100];
const array2 = [110, 120];

const users = [
  { id: 1, name: 'ali', age: 25 },
  { id: 2, name: 'reza', age: 22 },
  { id: 3, name: 'pourya', age: 32 },
  { id: 4, name: 'mamad', age: 25 },
  { id: 5, name: 'zahra', age: 21 },
  { id: 6, name: 'ashkan', age: 21 },
];

const products = [
  { id: 1, title: 'BAG', category: 'accessories', price: 100 },
  { id: 2, title: 'CAPS', category: 'accessories', price: 50 },
  { id: 3, title: 'SHIRT', category: 'clothes', price: 200 },
  { id: 4, title: 'PANTS', category: 'clothes', price: 150 },
  { id: 5, title: 'JACKET', category: 'clothes', price: 300 },
  { id: 6, title: 'SNEAKERS', category: 'shoes', price: 250 },
  { id: 7, title: 'BOOTS', category: 'shoes', price: 350 },
];

const falsyIncludedArray = [1, 20, false, '', 0, null, undefined, NaN, 30, 'pourya'];

// COMPONENT ===============================================================================================================================================================================================================
function LodashPage() {
  const sortedArray = _.sortBy(array).reverse();
  // console.info('sortedArray', sortedArray);

  const sortedUsers = _.sortBy(users, 'age');
  // console.info('sortedUsers', sortedUsers);

  const sortedProducts = _.sortBy(products, 'price');
  // console.info('sortedProducts', sortedProducts);

  const groupedUsers = _.groupBy(users, 'age');
  // console.info('groupedUsers', groupedUsers);

  const groupProducts = _.groupBy(products, 'category');
  // console.info('groupProducts', groupProducts);

  const chunkedUsers = _.chunk(users, 2);
  // console.info('chunkedUsers', chunkedUsers);

  const chunkedNumbers = _.chunk(array, 2);
  // console.info('chunkedNumbers', chunkedNumbers);

  const shuffledNumbers = _.shuffle(array);
  // console.info('shuffledNumbers', shuffledNumbers);

  const shuffledUsers = _.shuffle(users);
  // console.info('shuffledUsers', shuffledUsers);

  const findUser = _.find(users, { id: 1 });
  // console.info('findUser', findUser);

  const findProduct = _.find(products, { title: 'SHIRT' });
  // console.info('findProduct', findProduct);

  const findProduct2 = _.find(products, { title: 'BOOTS' });
  // console.info('findProduct2', findProduct2);

  const compactedArray = _.compact(falsyIncludedArray);
  // console.info('compactedArray', compactedArray);

  const concatedArray = _.concat(array, array2);
  // console.info('concatedArray', concatedArray);

  const difference = _.difference([1, 2, 3], [1, 2]);
  // console.info('difference', difference);

  const differenceBy = _.differenceBy([1, 2, 3], [1, 2]);
  // console.info('differenceBy', differenceBy);

  const droppedArray = _.drop(array, 2);
  // console.info('droppedArray', droppedArray);

  const filledArray = _.fill([0, 0, 0, 0], '*');
  // console.info('filledArray', filledArray);

  const findedIndex = _.findIndex(users, { name: 'zahra' });
  // console.info('findedIndex', findedIndex);

  const headItem = _.head(products);
  // console.info('headItem', headItem);

  const getIndex = _.indexOf(users, { id: 3, name: 'pourya', age: 32 });
  console.info('getIndex', getIndex);

  
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <p className="p-4 bg-stone-800 text-xl rounded-lg text-white flex gap-1 border-4 border-stone-300">
        {filledArray.map((item, index) => (
          <StarIcon key={index} className="fill-yellow-500 text-yellow-500" />
        ))}
        {Array.from({ length: 5 - filledArray.length }, (_, index) => (
          <StarIcon key={index} className="fill-gray-500 text-gray-500" />
        ))}
      </p>
    </div>
  );
}

export default LodashPage;
