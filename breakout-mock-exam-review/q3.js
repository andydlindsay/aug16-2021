/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
const mode = function(arr) {
  // create the piles
  // create an object to hold the piles
  const piles = {};

  // iterate through the array
  for (const element of arr) {
    // have we seen this element before?
    if (piles[element]) {
      // if yes, then we increment the number we have seen
      // piles[element] += 1;
      piles[element]++;
    } else {
      // if no, then we need to create a new pile
      piles[element] = 1;
    }

    // if (!piles[element]) {
    //   piles[element] = 0;
    // }
    // piles[element]++;
  }

  // console.log(piles);

  // find out which pile is the highest / the most frequently occurring
  // set up variables to hold the current highest value and the current highest key
  let currentHighest = 0;
  let currentHighestKey = null;

  // iterate through our piles object
  for (const key in piles) {
    const value = piles[key];
    // if value is greater than current highest
    if (value > currentHighest) {
      // update current highest AND current highest key
      currentHighest = value;
      currentHighestKey = key;
    }
  }

  // return the current highest key
  return currentHighestKey;
};

// Don't change below:
module.exports = { mode };
