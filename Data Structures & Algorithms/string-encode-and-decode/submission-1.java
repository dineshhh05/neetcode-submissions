class Solution {

    public String encode(List<String> strs) {

        // INPUT: ["ab" "a" "abc" "d"]

        // encoded msg: "2\1\3\1#abaabcd"

        // OUTPUT: "abaabcd"

        if(strs.size() == 0){
            return "";
        }

        String seceretMsg = "";

        for(String str : strs){
            seceretMsg = seceretMsg.concat(str.length() + "/");
        }

        seceretMsg = seceretMsg.concat("#");

        String encodedString = seceretMsg.concat(String.join("", strs));

        return encodedString;
        // "2/1/3/1#"
    }

    public List<String> decode(String str) {
        
        // INPUT: "2\1\3\1#abaabcd"

        // split the string after the first #
        //      = "abaabcd" = "combined str"

        if(str == ""){
            
            List<String> decodedStrs = new ArrayList<>();

            return decodedStrs;

        }

        String seceretMsg = "";
        int breakIndex = 0;

        for(int i=0; i<str.length(); i++){
            if(str.charAt(i) == '#'){
                breakIndex = i;
                break;
            }
        }

        String combinedStr = str.substring(breakIndex+1); // "abaabcd"

        String seceretMsg2 = str.substring(0, breakIndex);   // "2/1/3/1"

        String[] strLengths = seceretMsg2.split("/");// ["2", "1", "3", "1"]
        List<String> decodedStrs = new ArrayList<>();


        // split the combined str at 2\1\3\1 intervals
        //      2, "abaabcd" => "ab"
        //      1, "aabcd"  => "a"
        //      3, "abcd"   => "abc"
        //      1, "d"      => "d"

        for(int i=0; i<strLengths.length; i++){

            decodedStrs.add(combinedStr.substring(0, Integer.parseInt(strLengths[i])));

            combinedStr = combinedStr.substring(Integer.parseInt(strLengths[i]));
        }

        return decodedStrs;


        // make a list and add all these split ones append.

        // OUTPUT: ["ab" "a" "abc" "d"]
    }
}
