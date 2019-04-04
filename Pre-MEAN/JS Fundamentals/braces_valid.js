function bracesValid(str){
    var curlO = 0;
    var brackO = 0;
    var parenO = 0;
    var curlC = 0;
    var brackC = 0;
    var parenC = 0;
    var isValid = true;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == "{") curlO++;
        else if (str.charAt(i) == "[") brackO++;
        else if (str.charAt(i) == "(") parenO++;
        else if (str.charAt(i) == ")") parenC++;
        else if (str.charAt(i) == "]") brackC++;
        else if (str.charAt(i) == "}") curlC++;

        if (curlO < curlC || curlO <= brackC || curlO <= parenC) isValid = false;
        if (brackO <= curlC || brackO < brackC || brackO <= parenC) isValid = false;
        if (parenO <= curlC || parenO <= brackC || parenO < parenC) isValid = false;
    }
    return isValid;
}

x = "{[}]";

bracesValid(x);
