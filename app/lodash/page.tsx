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

// COMPONENT ===============================================================================================================================================================================================================
function LodashPage() {
  const sortedArray = _.sortBy(array).reverse();
  // console.info('sortedArray', sortedArray);

  const sortedUsers = _.sortBy(users, 'age');
  // console.info('sortedUsers', sortedUsers);

  const groupedUsers = _.groupBy(users, 'age');
  console.info('groupedUsers', groupedUsers);

  const chunkedUsers = _.chunk(users, 2);
  console.info('chunkedUsers', chunkedUsers);

  return <div>LodashPage</div>;
}

export default LodashPage;
