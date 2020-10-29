function calc(){
    x = document.getElementById("X").value;
    op = document.getElementById("operation").value;
    y = document.getElementById("Y").value;

    if (op == "+")
        document.getElementById("Result").innerHTML = "Result = "+ String( parseFloat(x)+parseFloat(y));
    else if (op == "-")
        document.getElementById("Result").innerHTML = "Result = "+ String( parseFloat(x)-parseFloat(y));
}
