let penColor = "black";
let penDown = true;

function createBoard(size){
    let board = document.querySelector('.board');
    let square = board.querySelectorAll("div");
    square.forEach((div)=> div.remove());
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    
    let amount = size*size;
    for(let i=0; i<amount; i++){
        let square = document.createElement('div');
        square.addEventListener("mouseover", colorSquare);
        square.style.backgroundColor = "white";
        board.insertAdjacentElement('beforeend', square);
    }
}

createBoard(16);

function changeSize(input){
    if(input>=2 || input<=100){
        createBoard(input);
    }
    else{
        console.log("Please input a valid number");
    }
}

function colorSquare(){
if(penDown){
    if(penColor==="random"){
        color1 = `hsl(${Math.random()*360}, 100%, 50%)`;
        this.style.backgroundColor = color1;
        document.querySelector(".randomButton").style.backgroundColor = color1;
    }
    else {
        this.style.backgroundColor = penColor;
    }
}
}

function changePenColor(color){
    penColor = color;
}

function resetBoard(){
    let board = document.querySelector('.board');
    let square = board.querySelectorAll("div");
    square.forEach((div)=> div.style.backgroundColor = "white");
}

document.querySelector("body").addEventListener("click", (e)=>{
    if(e.target.tagName != "BUTTON"){
        penDown = !penDown;
        if(penDown){
            document.querySelector(".mode").textContent = "Pen is down";
        }
        else{
            document.querySelector(".mode").textContent = "Pen is up";
        }
    }
})