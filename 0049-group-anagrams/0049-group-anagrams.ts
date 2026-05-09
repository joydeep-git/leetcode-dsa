function groupAnagrams(strs: string[]): string[][] {

    
    const arr = new Map<string, string[]>();


    for( const str of strs ) {

        const sorted = str.split("").sort().join("");

        if(!arr.has(sorted)) {
            arr.set(sorted, []);
        }

        arr.get(sorted).push(str);

    }

    return  Array.from(arr.values());

    
};