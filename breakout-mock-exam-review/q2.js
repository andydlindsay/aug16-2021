/* Question 2
 *
 *  Implement the functions defined below
 *
 */

// Meant to be used by median. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */

// 6,2,3,4,9,7 = 6
// 0 1 2 3 4 5

// 6 / 2 = 3 - 1 = 2

// 5 / 2 = 2.5 = 2


const median = function(arr) {
  // sort the array
  arr.sort();

  const middleIndex = Math.floor(arr.length / 2);

  // is the array even-length or odd-length
  if (arr.length % 2 === 0) {
    // if even, return the average of the middle elements
    const otherIndex = middleIndex - 1;
    const elementOne = arr[middleIndex];
    const elementTwo = arr[otherIndex];
    const average = (elementOne + elementTwo) / 2; // BEDMAS BEMDAS PEMDAS PEDMAS
    return round(average);
  }

  // if odd, return the middle element 
  const answer = arr[middleIndex];
  return answer;
};

// Don't change below:
module.exports = { median };
