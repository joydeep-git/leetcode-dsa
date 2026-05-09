function topKFrequent(nums: number[], k: number): number[] {

    const map = new Map<number, number>();

    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    const entries = [...map.entries()];

    const values = [...new Map(entries.sort((a,b) => b[1] - a[1])).keys()];

    return values.slice(0, k);

};