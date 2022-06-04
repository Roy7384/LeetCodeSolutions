/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
  let tailIndex = nums.length - 1;
  let headIndex = 0;
  const middleIndex = (head, tail) => {
    return Math.floor((tail + head) / 2);
  };

  while (headIndex <= tailIndex) {

    const midIndex = middleIndex(headIndex, tailIndex);
    const midNum = nums[midIndex];

    if (target < midNum) {
      tailIndex = midIndex - 1;
    } else if (target > midNum) {
      headIndex = midIndex + 1;
    } else if (target === midNum) {
      return midIndex;
    }
  }

  return -1;
};