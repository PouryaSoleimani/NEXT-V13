import React from 'react';
import * as _ from 'lodash';

const array = [10, 20, 50, 60, 30, 70, 90];
const users = [
  { id: 1, name: 'ali', age: 25 },
  { id: 2, name: 'reza', age: 22 },
  { id: 3, name: 'pourya', age: 22 },
  { id: 3, name: 'mamad', age: 25 },
  { id: 3, name: 'zahra', age: 21 },
  { id: 3, name: 'ashkan', age: 21 },
];

const products = [
  { id: 1, title: 'BAG', category: 'accessories' },
  { id: 2, title: 'CAPS', category: 'accessories' },
  { id: 3, title: 'SHIRT', category: 'clothes' },
  { id: 4, title: 'PANTS', category: 'clothes' },
  { id: 5, title: 'JACKET', category: 'clothes' },
  { id: 6, title: 'SNEAKERS', category: 'shoes' },
  { id: 7, title: 'BOOTS', category: 'shoes' },
];

// COMPONENT ===============================================================================================================================================================================================================
function LodashPage() {
  const sortedArray = _.sortBy(array).reverse();
  // console.info('sortedArray', sortedArray);

  const sortedUsers = _.sortBy(users, 'age');
  // console.info('sortedUsers', sortedUsers);

  const groupedUsers = _.groupBy(users, 'age');
  // console.info('groupedUsers', groupedUsers);

  const groupProducts = _.groupBy(products, 'category');
  console.info('groupProducts', groupProducts);

  const chunkedUsers = _.chunk(users, 2);
  console.info('chunkedUsers', chunkedUsers);

  return <div>LodashPage</div>;
}

export default LodashPage;
