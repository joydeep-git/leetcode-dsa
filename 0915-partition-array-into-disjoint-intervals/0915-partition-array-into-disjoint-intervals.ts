function partitionDisjoint(nums: number[]): number {

    let index = 0, maxNum = nums[0], left = nums[0];

    for ( let i = 1; i < nums.length; i++ ) {

        if( nums[i] > maxNum ) maxNum = nums[i];

        if( nums[i] < left ) {
            left = maxNum
            index = i;
        }

    }

    return index + 1;

};