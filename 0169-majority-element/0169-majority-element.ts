function majorityElement(nums: number[]): number {

    let num = 0, count = 0;

    for (let i = 0; i < nums.length; i++ ) {

        if( count === 0 ) num = nums[i];

        nums[i] === num ? count++ : count--;

    }

    return num;
    
};