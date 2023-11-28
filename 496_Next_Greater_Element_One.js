var nextGreaterElement = function (nums1, nums2) {
  const hash = generateElementMap(nums1);
  const stack = [];
  const result = [];
  let current = null;

  for (let i = 0; i < nums2.length; i++) {
    current = nums2[i];
    if (hash.has(nums2[i])) {
      stack.push(nums2[i]);
    }

    while (stack.length && current > stack[stack.length - 1]) {
      let el = stack.pop();
      hash.set(el, current);
    }
  }
  for (let el of nums1) {
    result.push(hash.get(el));
  }

  return result;
};

var generateElementMap = function (nums) {
  const hash = new Map();
  for (let el of nums) {
    hash.set(el, -1);
  }
  return hash;
};

const nums1 = [4, 1, 2];
const nums2 = [1, 3, 4, 2];
nextGreaterElement([4, 7, 2, 6], [4, 3, 5, 7, 1, 2, 6, 8]);
nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]);
nextGreaterElement(nums1, nums2);
