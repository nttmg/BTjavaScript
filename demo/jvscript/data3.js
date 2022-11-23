window.onload = function(){
    init();
    alert("Hello");
}
function init(){
    //DOM
    //getElementById(): lay ten Tag theo ID
    document.getElementById('magic').onmouseover = function(){
        this.className = "highlight";
    }
    document.getElementById('magic').onmouseout = function(){
        this.className = "";
    }
}