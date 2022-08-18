function dele() {
    document.getElementById("input").value = "";
}

function show(value) {
    document.getElementById("input").value += value;
}

function calc() {
    var p = document.getElementById("input").value;
    var q = eval(p);
    document.getElementById("input").value = q;
}