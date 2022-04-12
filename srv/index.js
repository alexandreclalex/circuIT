function init(){
    $("#instructions").click(function (){
        window.location.href='instructions.html'
    })

    for (let i = 1; i <= 19; i++) {
        $(`#${i}`).click(function (){
            window.location.href=`game?level=${i}`
        })
    }
}

$('document').ready(() =>{
    init();
})