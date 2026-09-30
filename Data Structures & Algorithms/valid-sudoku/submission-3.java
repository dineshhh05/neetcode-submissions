class Solution {
    public boolean isValidSudoku(char[][] board) {
        
        for(int i=0; i<board.length(); i++){
            HashSet<char> rowSet = new HashSet<>();

            // checks every induvidual row
            for(int j=0; j< board[i].length(); j++){
                
                if(rowSet.contains(board[i][j])){
                    return false;
                } else if (board[i][j] == '.') {
                    continue;
                } else {
                    rowSet.add(board[i][j]);
                }

            }


        }
    }
}
