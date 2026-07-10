function isValid(s: string): boolean {

    const obj = {
        "}": "{",
        ")": "(",
        "]": "[",
    }

    const stack = [];

    for (const c of s) {

        if (stack.length > 0) {

            if (stack[stack.length - 1] === obj[c]) {
                stack.pop();
            } else {
                stack.push(c);
            }

        } else {

            if (c === "}" || c === ")" || c === "]") {
                return false;
            } else {
                stack.push(c);
            }

        }

    }

    return stack.length === 0;

};