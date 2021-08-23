/* Question 1
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MIN - the lowest value in a list
 *
 * For example:
 *
 *    min([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    0
 */
const min = function(arr) {
  // return Math.min(...arr);

  // setup a variable to hold the current smallest value
  let smallest = arr[0];

  // iterate through the array
  for (const element of arr) {
    // if element is less than the current lowest value
    if (element < smallest) {
      // if true, we have a new lowest value
      smallest = element;
    }
  }

  // return the smallest value
  return smallest;
};


/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const max = function(arr) {
  // set up a variable to hold highest
  let highest = arr[0];

  // iterate through array
  for (const element of arr) {
    // if element is greater than current highest
    if (element > highest) {
      // replace highest
      highest = element;
    }
  }

  // return highest
  return highest;
};

/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const range = function(arr) {
  const highest = max(arr);
  const lowest = min(arr);

  return highest - lowest;
};

// Don't change below:

module.exports = { min, max, range };
