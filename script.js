// generate password
function generate() {

    // password values
    var slider = document.getElementById("slider").value;
    var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()_+"
    var password = "";

    for (var i = 0; i <= slider; i++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //add password to display
    document.getElementById("display").value = password;
}

//slider position
document.getElementById("length").innerHTML = "Length: 64";

document.getElementById("slider").oninput = function () {
    var slider = document.getElementById("slider").value;
    if (slider > 0) {
        document.getElementById("length").innerHTML = "Length: " + slider;
    }
    else {
        document.getElementById("length").innerHTML = "Length: 1";
    }
}

