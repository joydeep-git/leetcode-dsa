function isPalindrome(x: number): boolean {

    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let reversedHalf = 0;

    while (x > reversedHalf) {

        const lastDigit = x % 10;

        reversedHalf = (reversedHalf * 10) + lastDigit;

        x = Math.floor(x / 10);

    }

    return x === reversedHalf || x === Math.floor(reversedHalf / 10);

};