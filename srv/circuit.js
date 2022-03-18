class Circuit{

    constructor() {
        let mouseDown = false;

        this.onLoad = () => {
            initializeTable(20, 20)
        }

        const initializeTable = (width, height) => {
            let table = document.querySelector("table");
            for (let i = 0; i < height; i++) {
                let row = table.insertRow();
                for (let j = 0; j < width; j++) {
                    let cell = row.insertCell();
                    cell.innerText = ` `;
                    cell.onmousedown = function () {
                        mouseDown = true;
                    }
                    cell.onmouseup = function () {
                        mouseDown = false;
                    }
                    cell.onmouseover = function () {
                        console.log(`hovering over ${i}, ${j}, mousedown = ${mouseDown}`)
                        if(mouseDown){
                            cell.classList.add("wire");
                        }
                    }
                    cell.innerText = 'X';
                }
            }
        }
    }
}

$('document').ready(() =>{
    const circuit = new Circuit();
    circuit.onLoad();
})