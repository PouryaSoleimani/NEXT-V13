import React from 'react';
import * as _ from 'lodash';
import { StarIcon } from 'lucide-react';
import { array, users, products, falsyIncludedArray, array2, unpulledArray } from './db';
import { take } from 'lodash';

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

  const filledArray = _.fill(Array(4), '*');
  // console.info('filledArray', filledArray);

  const findedIndex = _.findIndex(users, { name: 'zahra' });
  // console.info('findedIndex', findedIndex);

  const headItem = _.head(products);
  // console.info('headItem', headItem);

  const getIndex = _.indexOf(users, { id: 3, name: 'pourya', age: 32 });
  // console.info('getIndex', getIndex);

  const intersectionArray = _.intersection(array, array2);
  // console.info('intersectionArray', intersectionArray);

  const joinedArray = _.join(array, ' | ');
  // console.info('joinedArray', joinedArray);

  const lastItem = _.last(products);
  // console.info('lastItem', lastItem);

  const nth = _.nth(products, 0);
  // console.info('nth', nth);

  const stringArray = products.map((item) => item.title);
  const pulledArray = _.pull(stringArray, 'BAG');
  // console.info(pulledArray);

  const withoutArray = _.without(stringArray, 'BAG');
  // console.info(withoutArray);

  // const removedArray = _.remove(products, (item) => item.id === 1);
  // console.info(removedArray);

  const takenArray = _.take(array, 5);
  // console.info(takenArray);

  const takenArrayRight = _.takeRight(array, 5);
  // console.info(takenArrayRight);

  const unionArray = _.union(array, array2);
  // console.info(unionArray);

  const filteredArray = _.filter(products, item => item.price > 250)
  // console.info(filteredArray)

  const mappedArray = _.map(users, item => item.name)
  // console.info(mappedArray)

  const everyArray = _.every(products, 'category')
  // console.info(everyArray)

  const finded = _.find(products, item => item.category == 'accessories')
  // console.info(finded)

  const forEachedArray = [1, 2, 3, 4, 5]
  // _.forEach(forEachedArray , item => console.info(item))

  const grouped = _.groupBy(products, 'category')
  // console.info(grouped)


  return (
    <div className="w-screen h-screen flex flex-col gap-5 items-center justify-center">
      <p className="p-4 bg-stone-800 text-xl rounded-lg text-white flex gap-1 border-4 border-stone-300">
        {filledArray.map((item, index) => (
          <StarIcon key={index} className="fill-yellow-500 text-yellow-500" />
        ))}
        {Array.from({ length: 5 - filledArray.length }, (_, index) => (
          <StarIcon key={index} className="fill-gray-500 text-gray-500" />
        ))}
      </p>
      <div className='flex items-center gap-5 bg-black p-3 rounded-lg'>
        {filteredArray.map(item => (
          <p key={item.id} className='text-2xl font-mono font-black '>{item.title}</p>
        ))}
      </div>
    </div>
  );
}

export default LodashPage;
