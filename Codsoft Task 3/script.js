function insert(num) {
    document.getElementById('textview').value = document.getElementById('textview').value+num;
}
function clean() {
    document.getElementById('textview').value = "";
}
function back() {
    var exp = document.getElementById('textview').value;
    document.getElementById('textview').value = exp.substring(0, exp.length-1);
}
function equal() {
    var exp = document.getElementById('textview').value;
    if(exp) {
        document.getElementById('textview').value = eval(exp);
    }
}