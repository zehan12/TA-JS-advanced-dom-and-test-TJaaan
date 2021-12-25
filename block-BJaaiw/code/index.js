const grid = document.querySelector('.grid');
const blockWidth = 100;
const blockHeigth = 20;
const boardWidth = 560;
let  block = document.createElement("div");

const userstart = [230,10];

let currentPosition = userstart

//! create block
class Block{
    constructor( xAxis, yAxis ){
        this.bottomLeft = [ xAxis, yAxis ];
        this.bottomRight = [ xAxis + blockWidth, yAxis ];
        this.topLeft = [ xAxis , yAxis + blockWidth ];
        this.topRight = [ xAxis + blockWidth, yAxis + blockHeigth ]; 
    }
}

//* all my block
const blocks = [
    new Block(10,270),
    new Block(120,270),
    new Block(230,270),
    new Block(340,270),
    new Block(450,270),

    new Block(10,240),
    new Block(120,240),
    new Block(230,240),
    new Block(340,240),
    new Block(450,240),

    new Block(10,210),
    new Block(120,210),
    new Block(230,210),
    new Block(340,210),
    new Block(450,210),

]

//* draw all blocks
function addBlock(){
    block.classList.add("block");
    block.style.left = "100px";
    block.style.bottom = "50px"
    grid.appendChild(block)

    for ( let i = 0 ; i < blocks.length ; i++ ){
        const block = document.createElement("div");
        block.classList.add("block");
        block.style.left = blocks[i].bottomLeft[0] + 'px';
        block.style.bottom = blocks[i].bottomLeft[1] + 'px';
        grid.appendChild(block);   
    }

}

addBlock()

//? add User 
const user = document.createElement('div');
user.classList.add('user');
drawUser();
grid.appendChild(user);


//? draw user
function drawUser(i){
    block.style.left = currentPosition[0] + 'px';
    block.style.bottom = currentPosition[1] + 'px';
}

//? move user
function moveUser(e){
    switch(e.key) {
        case "ArrowLeft":
            if( currentPosition[0] > 0 ){
                currentPosition[0] -= 10;
                drawUser();
            }
            break;
        case "ArrowRigth":
            if( currentPosition[0] < boardWidth - blockWidth ){
                currentPosition[0] += 10;
                drawUser();
            }
            
    }
}

document.addEventListener('keydown',moveUser);

//* add ball
