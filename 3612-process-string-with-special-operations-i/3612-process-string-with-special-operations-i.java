class Solution {
    public String processStr(String s) {

        StringBuilder str = new StringBuilder();

        for (char c : s.toCharArray()) {

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