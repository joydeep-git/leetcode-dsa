class Solution {
    public int lengthOfLastWord(String s) {


       s = s.trim();

        int len = s.length() - 1;

        int wordLen = 0;

        for ( int i = len; i >= 0; i-- ) {
            if( s.charAt(i) != ' ' ) {
                wordLen++;
            } else {
                break;
            }
        }


        return  wordLen;

        
    }
}