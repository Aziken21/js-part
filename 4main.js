const age = prompt("Сколько вам лет?")

function is0ldEnough(age) {
    if(age >= 18) {
        return true;
    }
        
    return false;
}

const message = is0ldEnough(age) ? "Welcome" : "Bye";
alert(message);