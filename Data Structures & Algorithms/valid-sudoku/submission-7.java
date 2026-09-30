class Solution {
    public boolean isValidSudoku(char[][] board) {
        
        // checks each induvidual row
        for(int i=0; i<board.length; i++){
            
            HashSet<Character> rowSet = new HashSet<>();

            for(int j=0; j<board[i].length; j++){
                
                if(board[i][j] == '.'){
                    continue;
                } else if (rowSet.contains(board[i][j])) {
                    return false;
                } else {
                    rowSet.add(board[i][j]);
                }
            }
        }

        // checks each induvidual column
        for(int j=0; j<board.length;j++){

            HashSet<Character> colSet = new HashSet<>();

            for(int i=0; i<board.length; i++){

                if(board[i][j] == '.'){
                    continue;
                } else if(colSet.contains(board[i][j])){
                    return false;
                } else {
                    colSet.add(board[i][j]);
                }
            }   
        }

        // check for within each 3x3 box
        // (row / 3) * 3 + (col / 3)

        for(int box = 0; box < 9; box++) {

            HashSet<Character> boxSet = new HashSet<>();

            int boxRow = (box / 3) * 3;
            int boxCol = (box % 3) * 3;

            for(int i = boxRow; i < boxRow + 3; i++) {
                for(int j = boxCol; j < boxCol + 3; j++) {

                    if(board[i][j] == '.') {
                        continue;
                    }

                    if(boxSet.contains(board[i][j])) {
                        return false;
                    }
                    
                    boxSet.add(board[i][j]);
                }
            }
        }

        return true;







    }
}