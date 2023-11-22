var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let max = 0;
  let left = 0;

  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      max = Math.max(set.size, max);

      set.delete(s[left]);
      left++;
      i--;
    } else set.add(s[i]);
  }

  return max < set.size ? set.size : max;
};

lengthOfLongestSubstring("pwwkew");
lengthOfLongestSubstring("anviaj");
lengthOfLongestSubstring("dvdf");
lengthOfLongestSubstring("abcabcbb");
lengthOfLongestSubstring(" ");
