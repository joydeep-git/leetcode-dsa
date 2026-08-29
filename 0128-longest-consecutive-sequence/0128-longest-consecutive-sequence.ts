function longestConsecutive(nums: number[]): number {

    if (nums.length === 0) return 0;

    nums = nums.sort((a, b) => a - b);

    let len: number = 1;

    const arr: number[] = [];

    for (let i = 0; i < nums.length - 1; i++) {

        if (nums[i] + 1 === nums[i + 1]) {

            len++;

        } else if (nums[i] === nums[i + 1]) {

            continue;

        } else {

            arr.push(len);

            len = 1;

        }

    }

    arr.push(len);

    return Math.max(...arr);

};