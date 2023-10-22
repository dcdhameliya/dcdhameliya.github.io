function reverse(str) {
    var reversed = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    console.log(reversed)
    return reversed;
}

function palindrome(str) {
    var reversed = reverse(str);
    return reversed === str;
}

function totalBill(bill,tip) {
    return bill + tip*bill/100;
}