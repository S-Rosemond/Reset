class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        numSet = set(nums)
        seen = set()
        count = None
        length = 0

        for num in nums:
            if num - 1 in numSet:
                pass
            count = 0
            temp = num
            current = num

            while(current):
                if current in seen: break
                count+= 1
                current+= 1
            
            seen.add(temp)
            length = max(length, count)
        return length;



