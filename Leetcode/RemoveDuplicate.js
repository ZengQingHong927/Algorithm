function removeDuplicates (nums = []) {
        if(nums == null || nums.length == 0) return 0;
        let p = 0;
        let q = 1;
        while (q < nums.length){
                if (nums[q] != nums[p]) {
                        nums[p+1] = nums[q]
                        p++;
                }
                q++;
        }
        return p + 1;
}
    