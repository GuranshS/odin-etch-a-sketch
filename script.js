function createBoard(size){
    let board = document.querySelector('.board');
    let square = document.querySelectorAll("div");
    
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    
    let amount = size*size;
    for(let i=0; i<amount; i++){
        let square = document.createElement('div');
        square.style.backgroundColor = "blue";
        board.insertAdjacentElement('beforeend', square);
    }
}

function changeSize(input){
    if(input>=2 || input<=100){
        createBoard(input);
    }
    else{
        console.log("Please input a valid number");
    }
}
