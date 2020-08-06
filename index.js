let playerTurn = false;
let chance = "O";
let allCells = ["TL", "TM", "TR",
                "L", "M", "R",
                "BL", "BM", "BR"]
let AI = {
    "---------": "TL",
    "X--------": "M",
    "-X-------": "M", 
    "--X------": "M", 
    "-----X---": "M", 
    "--------X": "M", 
    "-------X-": "M", 
    "------X--": "M", 
    "---X-----": "M", 
    "----X----": "BL", 
    "OX-------": "BL", 
    "O--X-----": "TR", 
    "O---X----": "BR", 
    "O----X---": "BL", 
    "O-------X": "BL", 
    "O------X-": "TR", 
    "O-----X--": "BR", 
    "O-X------": "BR", 
    "OX-X--O--": "BR", 
    "OX--X-O--": "L", 
    "OXX---O--": "L", 
    "OX---XO--": "L", 
    "OX----O-X": "L", 
    "OX----OX-": "L", 
    "OX-XX-O-O": "BM", 
    "OX-X--OXO": "M", 
    "OX-X-XO-O": "M", 
    "OXXX--O-O": "M", 
    "O-XX----O": "M",
    "O-X-X---O": "BL",
    "O-X--X--O": "M", 
    "O-X---X-O": "M", 
    "O-X----XO": "M", 
    "OXX-----O": "M",
    "O-XXX-O-O": "BM", 
    "O-X-X-OXO": "L", 
    "OXX-X-O-O": "BM", 
    "O-X-XXO-O": "L", 
    "OXOX-----": "BR", 
    "O-OXX----": "TM", 
    "O-OX-X---": "TM", 
    "O-OX--X--": "TM", 
    "O-OX---X-": "TM", 
    "O-OX----X": "TM", 
    "OXOXX---O": "R",
    "OXOX-X--O": "M",
    "OXOX--X-O": "M", 
    "OXOX---XO": "M", 
    "O---X-X-O": "TR",
    "OXO-X-X-O": "R", 
    "O-O-XXX-O": "TM", 
    "O-OXX-X-O": "R", 
    "O-O-X-XXO": "TM", 
    "O---XX--O": "L", 
    "OX--X---O": "BM", 
    "O--XX---O": "R", 
    "O---X--XO": "TM", 
    "O--OXXX-O": "TR", 
    "O--OXX-XO": "BL", 
    "OX-OXX--O": "BL", 
    "O-XOXX--O": "BL", 
    "OXOOXXX-O": "BM", 
    "O-OOXXXXO": "TM", 
    "OX--X-XOO": "TR", 
    "OXX-X--OO": "BL", 
    "OX-XX--OO": "BL", 
    "OX--XX-OO": "BL", 
    "O-XXXO--O": "BL", 
    "OX-XXO--O": "TR", 
    "O--XXOX-O": "TR", 
    "O--XXO-XO": "TR",
    "OOX-X--XO": "BL", 
    "OO--XX-XO": "TR",
    "OOXXX-OXO": "R", 
    "OOX-XXOXO": "L", 
    "OO-XX--XO": "TR", 
    "OO--X-XXO": "TR", 
    "O--X-XO--": "M", 
    "O-XXOXO--": "BR", 
    "O--XOXO-X": "TR", 
    "O--XOXOX-": "BR", 
    "OX-XOXO--": "BR", 
    "O-X--XO--": "L", 
    "O---XXO--": "L", 
    "O----XOX-": "L", 
    "O----XO-X": "L", 
    "OXO----X-": "M", 
    "OXO-O-XX-": "BR", 
    "OXOXO--X-": "BL", 
    "OXO-OX-X-": "BL", 
    "OXO-O--XX": "BL", 
    "O-O-X--X-": "TM", 
    "O-O--X-X-": "TM", 
    "O-O---XX-": "TM", 
    "O-O----XX": "TM", 
    "O--X--O-X": "TR", 
    "O---X-O-X": "L",
    "OXOX--O-X": "M", 
    "O-OXX-O-X": "TM", 
    "O-OX-XO-X": "TM", 
    "O-OX--OXX": "TM",
    "O-X---O-X": "L", 
    "O-----OXX": "L", 
    "XX--O----": "TR", 
    "XXOXO----": "BL", 
    "XXO-OX---": "BL", 
    "XXO-O-X--": "L", 
    "XXO-O--X-": "BL", 
    "XXO-O---X": "BL",  
    "X-X-O----": "TM", 
    "XOXXO----": "BM", 
    "XOX-OX---": "BM", 
    "XOX-O-X--": "BM", 
    "XOX-O--X-": "L", 
    "XOX-O---X": "BM", 
    "XOXOOX-X-": "BR", 
    "XOXOO-XX-": "R", 
    "XOXOO--XX": "R",
    "-XX-O----": "TL", 
    "-X-XO----": "TL", 
    "OXXXO----": "BR", 
    "OX-XOX---": "BR", 
    "OX-XO-X--": "BR", 
    "OX-XO--X-": "BR", 
    "OX-XO---X": "TR", 
    "OXOXOX--X": "BL", 
    "OXOXO-X-X": "BM", 
    "OXOXO--XX": "BL", 
    "OXX-O---X": "R", 
    "-X--OX---": "TR", 
    "-XOXOX---": "BL", 
    "-XO-OXX--": "TL", 
    "OXOXOXX--": "BR", 
    "OXO-OXXX-": "BR", 
    "OXO-OXX-X": "BM", 
    "OXX-OX---": "BR", 
    "OXX-O-X--": "BR", 
    "OXX-O--X-": "BR", 
    "OXXXOO--X": "BM", 
    "--XXO----": "TL", 
    "--X-OX---": "BR", 
    "--X-O-X--": "R", 
    "--X-O--X-": "BR", 
    "--X-O---X": "R", 
    "X--XO----": "BL", 
    "X---OX---": "TR", 
    "X---O-X--": "L", 
    "X---O--X-": "BL", 
    "X---O---X": "L", 
    "XXOOOXX--": "BM", 
    "X-XXO-O--": "TM", 
    "XX-XO-O--": "TR", 
    "X--XOXO--": "TR", 
    "X--XO-OX-": "TR", 
    "X--XO-O-X": "TR", 
    "XOXXO-OX-": "R", 
    "XOXXOXO--": "BM", 
    "XOXXO-O-X": "BM", 
    "X-OXOX---": "BL", 
    "X-O-OX-X-": "BL", 
    "X-O-OX--X": "BL", 
    "X-O-OXX--": "L", 
    "X-OOOXXX-": "BR", 
    "X-OOOXX-X": "BM", 
    "XX-OO-X--": "R", 
    "X-XOO-X--": "R", 
    "X--OO-XX-": "R", 
    "X--OO-X-X": "R", 
    "X--OOXX--": "BM", 
    "XO-OOXXX-": "BR", 
    "XOXOOXX--": "BM", 
    "XO-OOXX-X": "BM", 
    "XX-OOXXO-": "TR", 
    "XX--O-OX-": "TR", 
    "X---OXOX-": "TR", 
    "X---O-OXX": "TR", 
    "X-X-O-OX-": "TM", 
    "XOX-O-OXX": "R", 
    "XOX-OXOX-": "L", 
    "X--OOX--X": "TR", 
    "X-XOO---X": "R", 
    "XX-OO---X": "R", 
    "X--OO--XX": "R", 
    "X-OOOX-XX": "BL", 
    "XXOOOX--X": "BL",
    "-X--O-X--": "TL", 
    "-X--O--X-": "TL", 
    "-X--O---X": "TR", 
    "XXOOO-XX-": "R", 
    "XXOOO-X-X": "R", 
    "OXX-OOX-X": "L", 
    "OXX-OO-XX": "L", 
    "-XO-OX-X-": "BL", 
    "-XO-OX--X": "BL", 
    "OX--OXX--": "BR", 
    "OX--O-XX-": "BR", 
    "OX--O-X-X": "BM", 
    "OX-XO-XOX": "R", 
    "OXX-O-XOX": "R", 
    "OX--OXXOX": "TR", 
    "OX--OX-X-": "BR", 
    "OX--O--XX": "BL", 
    "OX-XO-OXX": "TR", 
    "OX--OXOXX": "L", 
    "OXX-O-OXX": "L", 
    "-XOXO---X": "BL", 
    "-XO-O--XX": "BL", 
    "-XO-O-X-X": "BM", 
    "XXO-O-XOX": "L", 
    "-XO-OXXOX": "L",  
    "-XOXO-XOX": "TL", 
    "O-XXOX---": "BR", 
    "O-XXO--X-": "BR", 
    "O-XXO-X--": "BR", 
    "O-XXO---X": "R",  
    "O-XXOO-XX": "BL", 
    "O-XXOOX-X": "BM", 
    "X-X-OX--O": "TM", 
    "XOXXOX--O": "BM", 
    "XOX-OXX-O": "BM", 
    "XOX-OX-XO": "L", 
    "-XX-OX--O": "TL", 
    "--X-OX-XO": "TL", 
    "--X-OXX-O": "TL", 
    "--XXOX--O": "TL", 
    "--X-OXX-O": "TL", 
    "--XXOX--O": "TL", 
    "X-X-OOX--": "L", 
    "-XX-OOX--": "L", 
    "--X-OOXX-": "L", 
    "--X-OOX-X": "L", 
    "--XXOOX--": "TL", 
    "OXXXOOX--": "BR", 
    "O-XXOOXX-": "BR", 
    "X-X-OX--O": "TM", 
    "XOXXOX--O": "BM", 
    "XOX-OXX-O": "BM", 
    "XOX-OX-XO": "L", 
    "-XX-OX--O": "TL", 
    "--X-OX-XO": "TL", 
    "--X-OXX-O": "TL", 
    "--XXOX--O": "TL", 
    "X-X-OOX--": "L", 
    "-XX-OOX--": "L", 
    "--X-OOXX-": "L", 
    "--X-OOX-X": "L", 
    "--XXOOX--": "TL", 
    "OXXXOOX--": "BR", 
    "O-XXOOXX-": "BR", 
    "-XX-O--XO": "TL", 
    "--XXO--XO": "TL", 
    "--X-O-XXO": "TL", 
    "X-X-O--XO": "TM", 
    "XOXXO--XO": "BL", 
    "XOX-O-XXO": "L", 
    "X-X-OO--X": "L", 
    "-XX-OO--X": "L", 
    "--X-OO-XX": "L", 
    "--XXOO--X": "TM", 
    "XOXXOO--X": "BM", 
    "-OXXOOX-X": "BM", 
    "-OXXOO-XX": "BL", 
    "---XOX---": "TL", 
    "O--XOX-X-": "BR", 
    "O--XOXX--": "BR", 
    "O--XOX--X": "TR", 
    "O-OXOX-XX": "BL", 
    "O-OXOXX-X": "TM", 
    "---XO-X--": "TL", 
    "O--XO-XX-": "BR", 
    "O--XO-X-X": "BM", 
    "O-XXO-XOX": "TM", 
    "O--XOXXOX": "TM", 
    "---XO--X-": "BL", 
    "-X-XO-OX-": "TR", 
    "---XOXOX-": "TR", 
    "---XO-OXX": "TR", 
    "--XXO-OX-": "TL", 
    "OXXXO-OX-": "BR", 
    "O-XXOXOX-": "BR", 
    "O-XXO-OXX": "R", 
    "---XO---X": "BL", 
    "-X-XO-O-X": "TR", 
    "---XOXO-X": "TR", 
    "--XXO-O-X": "R", 
    "--XXOOOXX": "TM", 
    "-XXXOOO-X": "TL", 
    "X-XXOOO-X": "TM", 
    "X---X-O--": "BR", 
    "-X--X-O--": "BM", 
    "--X-X-O--": "BR", 
    "---XX-O--": "R", 
    "----XXO--": "L", 
    "----X-OX-": "TM", 
    "----X-O-X": "TL", 
    "XX--X-O-O": "BM", 
    "X-X-X-O-O": "BM", 
    "X--XX-O-O": "BM", 
    "X---XXO-O": "BM", 
    "X---X-OXO": "TM", 
    "XO--XXOXO": "L", 
    "XOX-X-OXO": "L", 
    "XO-XX-OXO": "R", 
    "-X--X-OOX": "TL", 
    "XX--X-OO-": "BR", 
    "-XX-X-OO-": "BR", 
    "-X-XX-OO-": "BR", 
    "-X--XXOO-": "BR", 
    "OXX-X-OOX": "L", 
    "OX--XXOOX": "L", 
    "OX-XX-OOX": "R", 
    "-XX-X-O-O": "BM", 
    "--XXX-O-O": "BM", 
    "--X-XXO-O": "BM", 
    "--X-X-OXO": "TM", 
    "-OXXX-OXO": "R", 
    "-OX-XXOXO": "L", 
    "-X-XXOO--": "BM", 
    "X--XXOO--": "BR", 
    "---XXOOX-": "TM", 
    "XX-XXOO-O": "BM", 
    "X-XXXOO-O": "BM", 
    "X--XXOOXO": "TM", 
    "XX-XXOOO-": "BR", 
    "-XXXXOOO-": "BR", 
    "-X-XXOOOX": "TL", 
    "XO-XXOOX-": "BR", 
    "-OXXXOOX-": "BR", 
    "-O-XXOOXX": "TL", 
    "---XXOO-X": "TL", 
    "OX-XXOO-X": "BM", 
    "O--XXOOXX": "TM", 
    "O-XXXOO-X": "BM", 
    "--XXXOO--": "BM", 
    "X-XXXOOO-": "BR", 
    "--XXXOOOX": "TL", 
    "X--OXXO--": "BR", 
    "-X-OXXO--": "TL", 
    "--XOXXO--": "TL", 
    "---OXXOX-": "TL", 
    "---OXXO-X": "TL", 
    "XX-OXXO-O": "BM", 
    "X-XOXXO-O": "BM", 
    "X--OXXOXO": "TM", 
    "XO--X-OX-": "BR", 
    "-OX-X-OX-": "L", 
    "-OXOXXOX-": "TL", 
    "-OXOX-OXX": "TL", 
    "XOXOX-OX-": "BR", 
    "-O-XX-OX-": "R", 
    "-O--XXOX-": "L", 
    "XO-OXXOX-": "BR", 
    "-O-OXXOXX": "TL", 
    "OOX-X-OXX": "L", 
    "OO--XXOXX": "L", 
    "OO-XX-OXX": "TR", 
    "OX--X-O-X": "L", 
    "O---XXO-X": "L", 
    "OX--X-O-X": "L", 
    "O-X-X-O-X": "L", 
    "O---XXO-X": "L", 
    "O---X-OXX": "L", 
    "O--XX-O-X": "R", 
    "O--XX-O-X": "R", 
    "X--OOXXOX": "TM", 
    "X-XOOXXO-": "TM", 
    "----OXX--": "BR", 
    "X---OXX-O": "L", 
    "-X--OXX-O": "TL", 
    "---XOXX-O": "TL", 
    "----OXXXO": "TL", 
    "XX-OOXX-O": "TR", 
    "X--OOXXXO": "TM", 
    "----O-XX-": "BR", 
    "---XO-XXO": "TL", 
    "-X--O-XXO": "TL", 
    "X---O-XXO": "L", 
    "XX-OO-XXO": "R", 
    "X-XOO-XXO": "R", 
    "----O-X-X": "BM", 
    "X---O-XOX": "TM", 
    "---XO-XOX": "TM", 
    "----OXXOX": "TM", 
    "--X-O-XOX": "TM", 
    "-X--O-XOX": "L", 
    "XX-OO-XOX": "R", 
    "-XXOO-XOX": "R", 
    "-X-OOXXOX": "TR", 
    "----OX--X": "TR", 
    "--O-OX-XX": "BL", 
    "--OXOX--X": "BL", 
    "--O-OXX-X": "BM",  
    "----OX-X-": "BR", 
    "---XOX-XO": "TL", 
    "-X--OX-XO": "TL", 
    "X---OX-XO": "TR", 
    "X-O-OXXXO": "L", 
    "X-OXOX-XO": "BL", 
    "XXO-OX-XO": "BL",   
}
let draw = false
let win = false

function change(){
    if(chance == "X"){
        chance = "O";
        playerTurn = false;
    }else{
        chance = "X";
        playerTurn = true;
    }
}

function cellClicked(cellName){
    if(getCellState(cellName) == "-" && playerTurn){
        setCellState(cellName, chance)
    }
    if(!(playerTurn)){
        setCellState(AI[generateStateId()], "O")
    }   
}

function getCellState(cellName){
    return document.getElementById(cellName).innerHTML
}

function setCellState(cellName, state){
    document.getElementById(cellName).innerHTML = state;
    document.getElementById(cellName).title = state;
    change()
    check()
}

function resetGame(){
    allCells.forEach(cell => setCellState(cell, "-"))
    document.getElementById("head").innerHTML = ""
    if(!(playerTurn)){
        setCellState(AI[generateStateId()], "O")
    }
}

function check(){
    draw = true
    for(i = 0; i < 9; i++){
        if(getCellState(allCells[i]) == "-"){
            draw = false
        }
    }
    if(draw){
        document.getElementById("head").innerHTML = "It's a Draw"
    }
    if(getCellState("TL") == getCellState("TM") && getCellState("TM") == getCellState("TR") && getCellState("TL") != "-"){
        document.getElementById("head").innerHTML = "The AI wins"
    }
    if(getCellState("L") == getCellState("M") && getCellState("M") == getCellState("R") && getCellState("L") != "-"){
        document.getElementById("head").innerHTML = "The AI wins"
    }
    if(getCellState("BL") == getCellState("BM") && getCellState("BM") == getCellState("BR") && getCellState("BL") != "-"){
        document.getElementById("head").innerHTML = "The AI wins"
    }
    if(getCellState("TL") == getCellState("L") && getCellState("BL") == getCellState("L") && getCellState("L") != "-"){
        document.getElementById("head").innerHTML = "The AI wins"
    }
    if(getCellState("TM") == getCellState("M") && getCellState("BM") == getCellState("M") && getCellState("M") != "-"){
        document.getElementById("head").innerHTML = "The AI wins"
    }
    if(getCellState("TR") == getCellState("R") && getCellState("BR") == getCellState("R") && getCellState("R") != "-"){
        document.getElementById("head").innerHTML = "The AI wins"
    }
    if(getCellState("TL") == getCellState("M") && getCellState("BR") == getCellState("M") && getCellState("M") != "-"){
        document.getElementById("head").innerHTML = "The AI wins"
    }
    if(getCellState("TR") == getCellState("M") && getCellState("BL") == getCellState("M") && getCellState("M") != "-"){
        document.getElementById("head").innerHTML = "The AI wins"
    }
}

function configurClick(){
    document.getElementById("TL").onclick = function(){cellClicked("TL")}
    document.getElementById("TM").onclick = function(){cellClicked("TM")}
    document.getElementById("TR").onclick = function(){cellClicked("TR")}
    document.getElementById("L").onclick = function(){cellClicked("L")}
    document.getElementById("M").onclick = function(){cellClicked("M")}
    document.getElementById("R").onclick = function(){cellClicked("R")}
    document.getElementById("BL").onclick = function(){cellClicked("BL")}
    document.getElementById("BM").onclick = function(){cellClicked("BM")}
    document.getElementById("BR").onclick = function(){cellClicked("BR")}
    document.getElementById("reset").onclick = function(){resetGame()}
}

function generateStateId(){
    stateId = ""
    for(i = 0; i < 9; i++){
        stateId += getCellState(allCells[i])
    }
    return stateId
}

configurClick()

