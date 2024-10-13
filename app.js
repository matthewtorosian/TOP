
function gameBoard () {

    // set up gameboard
    // might change to DOM div squares
    const rows = 3;
    const columns = 3;
    const board = [];
    //const container = document.querySelector("#container");
    const marker = Mark();
    //function setGameBoard()
    //{
        //let counter = 0;
        for (let i = 0; i < rows; i++){
            board[i] = []; 
            for (let j = 0; j < columns; j++)
            {
                board[i].push(marker.getValue());
                /*
                const div = document.createElement("div");
                div.classList.add("spaces");
                div.id = counter;
                counter++;
                //div.setAttribute("style", "border: 1px solid black;")
                if (i == 1)
                {
                    div.setAttribute("style", "border-top: 1px solid black; border-bottom: 1px solid black;")
                }
    
                if (j == 1)
                {
                    div.setAttribute("style", "border-right: 1px solid black; border-left: 1px solid black;")
                }
    
                if (i ==1 && j == 1)
                {
                    div.setAttribute("style", "border: 1px solid black;")
                }
    
                container.appendChild(div);
                */
            }
        }
    //}

    /*
    function setMarkerChanger () {
        const markerChanger = document.createElement("button");
        markerChanger.setAttribute("style", "width: 100px; height: 50px;")
        markerChanger.innerHTML = "Change Marker";
        markerChanger.id = "changer";
        container.appendChild(markerChanger);        
    }

    function markerChanger(one, two) 
    {
        document.querySelector("#changer").addEventListener("click", () => {
            if(one.marker == "X")
            {
                one.marker == "O";
                two.marker == "X";
            }
            else{
                one.marker == "X";
                two.marker == "O";
            }
    })
    }
*/
    //console.log(board);
    const getBoard = () => board;

    //console.log(Mark.getValue());
    return board;
        //, setMarkerChanger, markerChanger, };

};
//console.log(gameBoard());
//gameBoard().setGameBoard();
//gameBoard().changeMarker();


function Mark()
{
    let value = 0;

    const addToken = (player) => {
       value = player;
    };

    const getValue = () => value;
   // const getValue = () => value;

    return {getValue, addToken};
    //{addToken, getValue};
}

//console.log(Mark.getValue());
function gameController() {
    const player = () => {
        this.name = name;
        this.marker = marker;
        this.score = score;
    }
    //create player object function
    function createrPlayer (name) {
        const marker = "m";
        const score = 0;

        const getScore = () => score;
        const incrementScore = () => score++;

        return {name, marker, score, getScore, incrementScore};
    }

    const playerOne = createrPlayer("Player One");
    const playerTwo = createrPlayer("Player Two");
    playerOne.name = "Player 1";
    playerTwo.name = "Player 2";
    playerOne.marker = "X";
    playerTwo.marker = "O";

    //setMarkerChanger();
    //const boardFunction = gameBoard()
    //const board = boardFunction.getBoard();
    const board = gameBoard();
    //console.log(board);
    //const markerButton = setMarkerChanger();
    //boardFunction.setGameBoard();
    //console.log(board);
    //boardFunction.setMarkerChanger();
    //boardFunction.markerChanger(playerOne, playerTwo);

    // cases to check for game 
    // take turns for game
    // 1 if marker is in space can not put marker
    // 2 if all spaces filled and no winner then tie
    // 3 if same markers are 3 in a row verical horizontal or diagonal winner

    //iniates player and changes player per round
    let activePlayer = playerOne;
    getActivePlayer = () => {
        if (activePlayer == playerOne)
        {
            activePlayer = playerTwo;
        }
        else{
            activePlayer = playerOne;
        }
        return activePlayer;
    }

    // choosespace might remove later for DOM
    /*
    function chooseSpace()
    {
        //const spaces = document.querySelectorAll(".spaces");
        let column = prompt("please choose column (1-3): ");
        let row = prompt("please choose row (1-3): ");
        return {column, row};
        /*
        for (let i = 0; i < 9; i++){
            //console.log(document.getElementById(String(i)));
            spaces[i].addEventListener("mouseover", () => {
                if(spaces[i].innerHTML == ""){
                    spaces[i].innerText = activePlayer.marker;
                    spaces[i].addEventListener("mouseout", () => {
                        spaces[i].innerText = "";
                    })
                    spaces[i].addEventListener("click", () => {
                        checkAvailablility();
                        return;
                    })
                    return;
                }
                return;
            })

        }
            */

        //board
    //}


    // checks if space is empty
    function checkAvailablility(row, column)
    {  
        //console.log(board);
        //chooseSpace();
        
        //let spaces = chooseSpace();
        //let row = spaces["row"];
        //let column = spaces["column"];
        console.log(board[row][column] == 0);
        if (board[row][column] == 0){
            board[row][column] = activePlayer.marker; 
            return board;
        }
        else{
            //alert("not available, pick again");
            //return board;
            checkAvailablility(row, column);
        }
        return board;
        
        //console.log(document.querySelectorAll(".spaces"));
        //console.log(document.querySelector(".spaces").innerHTML);
        //console.log(document.getElementById("1"));
        //const spaces = document.querySelectorAll(".spaces");
        //console.log(spaces[1]);
        //let row;
        //let col;
        /*
        for (let i = 0; i < 9; i++){
            //console.log(document.getElementById(String(i)));
            spaces[i].addEventListener("mouseover", () => {
                if(spaces[i].innerHTML == ""){
                    spaces[i].innerText = activePlayer.marker;
                }
                spaces[i].addEventListener("mouseout", () => {
                    spaces[i].innerText = "";
                })
            })
        }

            
        for (let i = 0; i < 9; i++){
            spaces[i].addEventListener("click", () => {
                if(spaces[i].innerHTML == ""){
                    spaces[i].innerHTML = activePlayer.marker;
                    return;
                }
                //else{
                //    chooseSpace();
                //}
            return;
            })
            return;
            
            row, col = spaces[i].id;
            if (row < 3)
            {
                row = 0;
            }
            else if (row < 6)
            {
                row = 1;
            }
            else{
                row = 2;
            }
            if (col % 3 == 0)
            {
                col = 0;
            }
            else if (col % 2 == 0)
            {
                col = 2;
            }
            else
            {
                col = 1;
            } 
            board[row][col] = activePlayer.marker;
            
        }
        return;
        */
    }

    // checks if all spaces are filled
    
    function tieCondition(){
        let tie = false;
        for (let i = 0; i < board[length].length; i++)
        {
            for (let j = 0; j < board[i].length; j++)
            {
                //console.log(board[i][j] == 0);
                if (board[i][j] == 0)
                    {
                        //console.log(board[i][j]);
                        console.log(board[i][j] != 'X' || board[i][j] != 'O');
                        tie = true;
                        return tie;
                    }
                /*
                if (board[i][j] != 'X' || board[i][j] != 'O')
                {
                    console.log(board[i][j]);
                    console.log(board[i][j] != 'X' || board[i][j] != 'O');
                    tie = true;
                    return tie;
                }
                    */
            }
        }
        return tie;
    }

    // winning condition function
    
    function checkWinner(){
        /*
        let row1arr = [];
        let row2arr = [];
        let row3arr = [];
        let col1arr = [];
        let col2arr = [];
        let col3arr = [];
        let dia1arr = [];
        let dia2arr = [];
        let si;
*/
        for (let i = 0; i < board[length].length; i++){
            //console.log(board[i]);
            if(board[i].every(checkMarker)){
                return activePlayer;
            }
        }
            /*
           si = i;
           row1; i, i, i
           row2; i+3, i+3, i+3
           row3; i+6, i+6, i+6
           col1; i, i+2, i+4
           col2; i+1, i+3, i+5
           col3; i+2, i+4, i+6
           dia1; i, i+3, i+6
           dia2; i+2, i+3, i+4

           row1arr.push(document.getElementById(String(i)).innerText);
           row2arr.push(document.getElementById(String(i+3)).innerText);
           row3arr.push(document.getElementById(String(i+6)).innerText);
           console.log(row3arr);

        }*/
        let winner = false;
        let arr = [];
        let arr1 = [];
        for (let j = 0; j < board[length].length; j++){
            for (let i = 0; i < board[length].length; i++)
            {
                arr.push(board[i][j]);
                if (arr.length == 3 && arr.every(checkMarker)){
                    winner = true;
                }
            }
            arr = [];
        }

        //diagonal check
        for (let i = 0; i < board[length].length; i++){
            for (let j = 0; j < board[i].length; j++)
            {
                arr.push(board[j][j]);
                arr1.push(board[j][board[length].length-j-1])
                if (arr.length == 3 && arr.every(checkMarker)){
                    winner = true;
                }
                if (arr1.length == 3 && arr1.every(checkMarker))
                {
                    winner = true;
                }
            }
            arr = [];
            arr1 = [];

        }
        
        function checkMarker(marker){
            return marker == activePlayer.marker;
        }
        
        return winner;
    }

    
   
    // play round function
    function playRound(row, column){
        checkAvailablility(row, column);
        if (checkWinner() == false)
        {
            console.log(board);
            if (tieCondition()){
                getActivePlayer();
                playRound(row, column);
            }
            else {
                console.log("DRAW!");
                
                playAgain()            
            }
                
               //playRound(row, column);
        }
        else {
            //console.log(board);
            console.log("Winner is " + activePlayer.name)
            playAgain()            
        }
        //return;
    }
    
    function playAgain(){
        for (let i = 0; i < board[length].length; i++){
            for (let j = 0; j < board[i].length; j++){
                board[i][j] = 0;
            }
        }
        //document.querySelector("#container").innerHTML = "";
        //boardFunction.setGameBoard();
        activePlayer = playerOne;
        playRound();
    }

    //playRound();

    return {playerOne, playerTwo, checkAvailablility, checkWinner, tieCondition, playRound, activePlayer};
    
        //chooseSpace, , checkWinner, tieCondition, playRound};
};

function screenController(){
    const game = gameController();
    
    const playerTurnDiv = document.querySelector(".turn");
    const boardDiv = document.querySelector(".board");
    //console.log(boardDiv);
    const updateScreen = () => {
        boardDiv.textContent = "";

        const board = gameBoard();
        const activePlayer = game.activePlayer;
        console.log(activePlayer);
        //console.log(board);
        const marker = Mark();
        playerTurnDiv.textContent = activePlayer.name+"'s turn...";
        let rowSelector = 0;
        board.forEach(row => {
            row.forEach((cell,  index) => {
                //console.log(row.forEach((element) => console.log(element)))
                const cellButton = document.createElement("button");
                cellButton.classList.add("cell");
                // Create a data attribute to identify the column
                // This makes it easier to pass into our `playRound` function 
                cellButton.dataset.column = index;
                cellButton.dataset.row = rowSelector;
                
                cellButton.textContent = board[rowSelector][index];
                //if (cellButton.textContent == 0){
                //    cellButton.textContent = "";
                //}
                boardDiv.appendChild(cellButton);
            })
            rowSelector++;
        })
    }
    
    function clickHandlerBoard(e) {
        const selectedColumn = e.target.dataset.column;
        const selectedRow = e.target.dataset.row;
        //console.log(selectedColumn);
        // Make sure I've clicked a column and not the gaps in between
        if (!selectedColumn) return;
        game.playRound(selectedRow,selectedColumn);
        updateScreen();
      }
      boardDiv.addEventListener("click", clickHandlerBoard);

    updateScreen();
}
screenController();

//console.log(gameBoard());
//gameController();


// add prompt for DRAW or WINNER
// FIX UI TO SHOW MARKERS