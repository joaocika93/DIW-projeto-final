function openStep(stepName, buttonName) {
    var i;
    var x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(stepName).style.display = "block";

    var y = document.getElementsByClassName("tab-button")
    for (i=0; i < y.length; i++){
        y[i].style.backgroundColor = "white"
        y[i].style.color = "darkred"
    }
    document.getElementById(buttonName).style.backgroundColor = "darkred"
    document.getElementById(buttonName).style.color = "white"

}