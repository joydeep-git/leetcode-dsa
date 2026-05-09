function rob(nums: number[]): number {

    if (nums.length === 1) return nums[0];

    if (nums.length === 2) return Math.max(nums[0], nums[1]);

    return Math.max(getMaxAmount(nums.slice(1, nums.length)), getMaxAmount(nums.slice(0, nums.length - 1)));

};


const getMaxAmount = (nums: number[]): number => {

    const arr = new Array(nums.length - 1);

    arr[0] = nums[0];

    arr[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {

        arr[i] = Math.max(arr[i - 2] + nums[i], arr[i - 1]);

    }

    return arr[arr.length - 1];

}