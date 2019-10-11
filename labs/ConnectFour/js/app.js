var app = new Vue({
    el: "#app",
    data: {
        gameOver: false,
        playerTurn: 1,
        grid: [
            [ 0,0,0,0,0,0,0 ],
            [ 0,0,0,0,0,0,0 ],
            [ 0,0,0,0,0,0,0 ],
            [ 0,0,0,0,0,0,0 ],
            [ 0,0,0,0,0,0,0 ],
            [ 0,0,0,0,0,0,0 ]
        ]
    },
    methods: {
        selectCell: function(row, col) {

            //get the row to place the puck at
            var moveRow = this.lowestMove(col);
            
            if(moveRow >= 0) {
                //copy grid to a temporary var
                var tempGrid = this.grid.slice(0);

                //modify the cloned version
                tempGrid[moveRow][col] = this.playerTurn;

                //replace
                this.grid = tempGrid;

                //swap player turn
                this.playerTurn = (this.playerTurn == 1) ? 2 : 1;

                //check for win
                this.checkWin(row, col,moveRow);
            }
            
        },
        checkWin: function(row, col, moveRow) {
            //loop through all columns to check
            
            //if (this.grid[moveRow][col].value == this.grid[moveRow][col+1].value){
                // console.log(this.grid[moveRow]);
                // if(this.grid[moveRow]==[1,1,1,1]){
                //     console.log("fd");
                // }
            //}
            console.log(moveRow);
            //console.log(row);
            console.log(col);
            console.log(this.grid[moveRow][col]);

            if( this.grid[moveRow][col] == this.grid[moveRow][col+1]==this.grid[moveRow][col+2]==this.grid[moveRow][col+3]){
                console.log("Win row");
            }

            if( this.grid[moveRow][col] == this.grid[moveRow+1][col]==this.grid[moveRow+2][col]==this.grid[moveRow][col]){
                console.log("Win col");
            }

            if( this.grid[moveRow][col] == this.grid[moveRow+1][col+1]==this.grid[moveRow+2][col+2]==this.grid[moveRow+3][col+3]){
                console.log("check");
            }
            //if win found, set over to true
        },
        lowestMove: function(col) {
            //start at the bottom of a col, loop upwards
            for(var row = 5; row >= 0; row--) {
                //check to see if current row is free
                if(this.grid[row][col]==0) {
                    //if it is free, return the row index
                    return(row);
                }
            }
        }
    }
})