const codes = ["empty", "wire", "resistor", "vsource", "csource", "capacitor", "button", "led"];
class game{

    constructor() {
        let mouseDown = false;
        const board = [];
        const pairs = [];

        function test(array, i, j, value, elem, out, side){
            if ((array[i] && array[i][j] === 1 ) || ( i === elem[0] && j === elem[1])) {
                array[i][j] = -1;
                test(array, i -1, j, value, elem, out, 1);
                test(array, i + 1, j, value, elem, out, 2);
                test(array, i, j - 1, value, elem, out, 3);
                test(array, i, j + 1, value, elem, out, 4);
            } else if (array[i] && array[i][j] > 1){
                array[i][j] = -1
                out.push(`${elem[0]},${elem[1]}|${i},${j}|${side}`)
            }
        }

        function populatePairs(str) {
            let temp = [];
            let poi = [];
            for (let i = 0; i < 20; i++) {
                let arr = []
                for (let j = 0; j < 20; j++) {
                    arr.push(parseInt(str.charAt(i * board.length + j)))
                    if(arr[j] > 1){
                        poi.push([i, j])
                    }
                }
                temp.push(arr)
            }

            for (let ind = 0; ind < poi.length; ind++) {
                let elem = poi[ind];
                test(temp, elem[0], elem[1], temp[elem[0]][elem[1]], elem, pairs, 0);
                temp = [];
                for (let i = 0; i < 20; i++) {
                    let arr = []
                    for (let j = 0; j < 20; j++) {
                        arr.push(parseInt(str.charAt(i * board.length + j)))
                    }
                    temp.push(arr)
                }

            }

        }

        function getPairs() {
            let temp = [];
            let poi = [];
            let out = [];
            for (let i = 0; i < 20; i++) {
                let arr = []
                for (let j = 0; j < 20; j++) {
                    arr.push(board[i][j])
                    if(arr[j] > 1){
                        poi.push([i, j])
                    }
                }
                temp.push(arr)
            }


            for (let ind = 0; ind < poi.length; ind++) {
                let elem = poi[ind];
                test(temp, elem[0], elem[1], temp[elem[0]][elem[1]], elem, out);
                temp = [];
                for (let i = 0; i < 20; i++) {
                    let arr = []
                    for (let j = 0; j < 20; j++) {
                        arr.push(board[i][j])
                    }
                    temp.push(arr)
                }

            }
            return out;
        }

        function checkWin(){
            let currentPairs = getPairs();
            let win = currentPairs.length === pairs.length;
            for (let i = 0; i < currentPairs.length; i++) {
                win = win && pairs.includes(currentPairs[i]);
            }
            if(win){
                alert("You Win")
            }
        }

        this.onLoad = () => {
            $("#wire").prop("checked", true);
            document.onmousedown = function () {
                mouseDown = true;
            }
            document.onmouseup = function () {
                mouseDown = false;
            }

            initializeTable(20, 20)
            let level = window.location.href.substring(window.location.href.indexOf("=") + 1) - 1;
            decodeBoard(LEVELS[level].code);
            populatePairs(LEVELS[level].code);

            $("#instructions").text(LEVELS[level].instructions);
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
                    let next = parseInt(str.charAt(i*board.length + j));
                    if(next > 1){
                        board[i][j] = next;
                    } else{
                        board[i][j] = 0;
                    }
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
                    cell.onmousedown = function (){
                        if (cell.className === 'empty' || cell.className === 'wire') {
                            cell.className = "";
                            cell.classList.add(getCurrClass());
                            board[i][j] = getCurrClassCode();
                            checkWin();
                        }
                    }
                    cell.onmouseover = function () {
                        if (mouseDown && (cell.className === 'empty' || cell.className === 'wire')) {
                            cell.className = "";
                            cell.classList.add(getCurrClass());
                            board[i][j] = getCurrClassCode();
                            checkWin();
                        }
                    }
                    cell.onclick = function () {
                        if (cell.className === 'empty' || cell.className === 'wire') {
                            cell.className = "";
                            cell.classList.add(getCurrClass());
                            board[i][j] = getCurrClassCode();
                            checkWin();
                        }
                    }
                    cell.innerText = '☐';
                }
                board.push(arr)
            }
        }
    }
}

$('document').ready(() =>{
    const circuit = new game();
    circuit.onLoad();
})