class Solution {
    public String processStr(String s) {

        StringBuilder str = new StringBuilder();

        for ( int i = 0; i < s.length(); i++ ) {

            char c = s.charAt(i);

            if (c == '#') {

                str.append(str.toString());

            } else if (c == '%') {

                str.reverse();

            } else if (c == '*') {

                if( !str.isEmpty() ) str.deleteCharAt(str.length() - 1);

            } else {

                str.append(c);

            }

        }

        return str.toString();

    }
}