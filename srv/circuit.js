const codes = ["empty", "wire", "resistor", "vsource", "csource", "capacitor", "button", "led"];
class Circuit{

    constructor() {
        let mouseDown = false;
        const board = [];

        this.onLoad = () => {
            $("#delete").prop("checked", true);
            document.onmousedown = function () {
                mouseDown = true;
            }
            document.onmouseup = function () {
                mouseDown = false;
            }
            $('#export').get(0).onclick = function () {
                encodeBoard();
            }
            $('#import').get(0).onclick = function () {
                decodeBoard($("#export_out").val());
            }
            initializeTable(20, 20)
        }

        const encodeBoard = () => {
            //let str = `[${board.length},${board[0].length}]`
            let str = ""
            for (let i = 0; i < board.length; i++) {
                for (let j = 0; j < board[0].length; j++) {
                    str = str.concat(String(board[i][j]))
                }
            }
            $("#export_out").val(str);
        }

        const decodeBoard = (str) => {
            for (let i = 0; i < board.length; i++) {
                for (let j = 0; j < board.length; j++) {
                    board[i][j] = str.charAt(i*board.length + j)
                    let query = `#${i}x${j}`;
                    $(query).get(0).classList = [];
                    $(query).get(0).classList.add(codes[board[i][j]]);
                }
            }
        }

        let getCurrClass = () => {
            let radio = $("input[type=radio][name=element_selector]").filter(":checked")[0]
            if(radio){
                return radio.value;
            } else{
                return 'empty';
            }
        }

        let getCurrClassCode = () => {
            let radio = $("input[type=radio][name=element_selector]").filter(":checked")[0]
            if(radio){
                return codes.indexOf(radio.value);
            } else{
                return 0;
            }
        }



        const initializeTable = (width, height) => {
            let table = document.querySelector("table");
            for (let i = 0; i < height; i++) {
                let row = table.insertRow();
                let arr = [];
                for (let j = 0; j < width; j++) {
                    arr.push(0)
                    let cell = row.insertCell();
                    cell.id = `${i}x${j}`
                    cell.innerText = ` `;
                    cell.onmouseover = function () {
                        if (mouseDown) {
                            cell.className = "";
                            cell.classList.add(getCurrClass());
                            board[i][j] = getCurrClassCode();
                        }
                    }
                    cell.onclick = function () {
                        cell.className = "";
                        cell.classList.add(getCurrClass());
                        board[i][j] = getCurrClassCode();
                    }
                    cell.innerText = 'X';
                }
                board.push(arr)
            }
        }
        console.log(board)
    }
}

$('document').ready(() =>{
    const circuit = new Circuit();
    circuit.onLoad();
})