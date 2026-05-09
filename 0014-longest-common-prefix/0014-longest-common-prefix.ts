function longestCommonPrefix(strs: string[]): string {

    if (strs.length === 0) return "";

    let word = strs.reduce((a, b) => (a.length < b.length ? a : b));

    for (let i = 0; i < strs.length; i++) {
        
        while (!strs[i].startsWith(word)) {
            
            word = word.substring(0, word.length - 1);
            
            if (word === "") return "";
        }
    }
    
    return word;
};