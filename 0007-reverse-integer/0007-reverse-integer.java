class Solution {
    public int reverse(int x) {

        if (x == Integer.MIN_VALUE) {
            return 0;
        }

        boolean isn = x < 0;

        StringBuilder str = new StringBuilder( String.valueOf(Math.abs(x)) );

        long num = Long.parseLong( str.reverse().toString() );

        long result = isn ? -num : num;

        if (result < Integer.MIN_VALUE || result > Integer.MAX_VALUE) {
            return 0;
        }

        return (int) result;
    }
}
