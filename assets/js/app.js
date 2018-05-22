window.onload = function() {

    var btn = document.getElementById("button-change"); 
    var btn2 = document.getElementById("magic");
    var txtDos = document.getElementById("text");



    btn.addEventListener("click", function() {
        var txt = document.getElementById("paragraph");
        txt.innerHTML = "<h2> Git & Github TE AMAMOS</h2>";  // al texto con el id paragraph le vamos a escribir 
    })

    btnDos.addEventListener("click", function() {
        // txtDos.innerHTML = " ";
        txtDos.classList.add("disappear");

    })

}